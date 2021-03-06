from collections import deque
from numpy import random
import re

print('incsw2')

clean1 = lambda string: re.sub('’',"\\'", string)
clean2 = lambda string: re.sub("[‘”“]",'\\"', string)
clean = lambda string: clean1(clean2(string))

def parse_QA(story_blocks):
	# edge_list
	edge_list = []
	state_sentence_dict = dict()
	current_wnext = dict()
	current_rnext = dict()

	current_state = 'BEGIN'
	for block in story_blocks:
		block = deque(block.split('\n'))
		current_sentence = block.popleft()
		state_sentence_dict[current_state] = current_sentence
		# print(current_state)
		while len(block):
			line1 = ns_type = block.popleft()
			line2 = block.popleft()
			ns_pr, ns_key, ns_sentence = line2.split('\t')
			D = {'type':ns_type.split('_')[0],
						'key':ns_key,
						'sentence':ns_sentence,
						'pr':float(ns_pr)}
			if ns_type == 'Truth':
				# print(ns_key)
				edge_list.append([current_state,ns_key])
				next_sentence = ns_sentence
				current_rnext[current_state] = D
				current_state = ns_key
			else:
				if current_state in current_wnext:
					current_wnext[current_state].append(D)
				else:
					current_wnext[current_state] = []
					current_wnext[current_state].append(D)

	# handling last state
	if ns_key == 'END' and ns_type == 'Truth':
		state_sentence_dict['END'] = ns_sentence
	
	return edge_list,state_sentence_dict,current_wnext,current_rnext


def story_snippet(scount,edge,state_sentence_dict):
	_id = get_id('s',scount,edge)
	sentence = state_sentence_dict[edge[0]]
	code_snippet = """
			var %s = {
			type: 'instructions',
			pages: ['%s']
			} """ % (_id,clean(sentence))
	return _id,code_snippet

def get_id(q_or_s,scount,edge,altedge=None,_type=None,pr=None):
	f = lambda s: re.sub("_","",s)
	if q_or_s == 's':
		_id = "s_%s_%s" % (scount,f(edge[0]))
	elif q_or_s == 'q':
		E = "%s%s" % (f(edge[0]),f(edge[1])) # correct edge
		aE = "%s%s" % (f(altedge[0]),f(altedge[1])) # incorrect alternative
		assert pr is not None, "Missing correct probability"
		assert _type is not None, "Missing question type"
		assert altedge is not None, "Missing alternative edge"
		_id = "q_%i_%s_%s_%i_%s" % (scount,E,aE,int(pr*100),_type) # assemble id
	# print(_id)
	return _id


def question_snippet(scount,edge,current_wnext,current_rnext):	
  current_state = edge[0]
  question = "What happens next?"
  # shuffle which wrong alternative will be given
  false_next = current_wnext[current_state] # list of dicts
  random.shuffle(false_next)
  false_next = false_next[0]
  # response sentences
  fnext_sentence = false_next['sentence']
  tnext_sentence = current_rnext[current_state]['sentence']
  # normalized generative probability of correct 
  pr = current_rnext[current_state]['pr'] / (
  			current_rnext[current_state]['pr'] + false_next['pr'] )
  # shuffle left right responses
  idx = [0,1]
  random.shuffle(idx)
  l_idx,r_idx = idx
  # if 01 true left, if 10 true right
  responses = [tnext_sentence,fnext_sentence]
  resp_l,resp_r = responses[l_idx],responses[r_idx]
  
  # assemble id with question info 
  altedge = (current_state,false_next['key'])
  # if 01 true left, if 10 true right
  _type = false_next['type'] + "_" + str(l_idx)+str(r_idx)
  _id = get_id('q',scount,edge,altedge,_type,pr)

  code_snippet = """
          var %s = {
          type: 'html-slider-response',
          stimulus: '<p> %s <p>',
          labels: ['%s', '%s']
          } """ % (_id, question,
                   clean(resp_l), clean(resp_r))

  return _id, code_snippet
