// load psiturk
var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);

var intro1 = {
  type: 'instructions',
  pages: ['** After reading this sentence, press spacebar. ** '],
  data: {"type":"instruction"}
  }
var intro2 = {
  type: 'instructions',
  pages: ['In this experiment you will read stories and answer questions.'],
  data: {"type":"instruction"}
  } 
var intro3 = {
  type: 'instructions',
  pages: ['The stories will be presented a sentence at a time.'],
  data: {"type":"instruction"}
  }
var intro4 = {
  type: 'instructions',
  pages: ['While reading, you will be periodically interrupted and asked to predict what happens next in the story.'],
  data: {"type":"instruction"}
  } 
var intro5 = {
  type: 'instructions',
  pages: ['The questions will ask you to predict which one of two given options is more likely to happen next.'],
  data: {"type":"instruction"}
  } 
var intro6 = {
  type: 'instructions',
  pages: ['When a question comes up, select an option with the right or left arrow keys on your keyboard.'],
  data: {"type":"instruction"}
  } 
var intro7 = {
  type: 'instructions',
  pages: [' ** once ready, press spacebar to begin the first story ** '],
  data: {"type":"instruction"}
  } 

// CODE BODY START

	var s_1 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_2 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_3 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_4 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_5 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_6 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_7 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_8 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_9 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_10 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_11 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_12 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_13 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_14 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_15 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_16 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_17 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_18 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_19 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_20 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_21 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_22 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_23 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_24 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_25 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_26 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_27 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_28 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_29 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_30 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_31 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_32 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_33 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_34 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_35 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_36 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_37 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_38 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_39 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_40 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_41 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_42 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_43 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_44 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_45 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_46 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_47 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_48 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_49 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_50 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_51 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_52 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_53 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_54 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_55 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_56 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_57 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_58 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_59 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_60 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_61 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_62 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_63 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_64 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_65 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_66 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_67 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_68 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_69 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_70 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_71 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_72 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_73 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_74 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_75 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_76 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "Bill yelled, 'Hey! Relax."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_77 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_78 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_79 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_80 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_81 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_82 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_83 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_84 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_85 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_86 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_87 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia proceeded to shove Bill.", "Olivia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_88 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_89 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_90 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_91 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_92 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_93 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_94 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_95 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_96 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_97 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_98 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_99 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_100 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_101 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_102 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_103 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_104 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_105 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_106 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_107 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_108 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_109 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_110 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_111 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_112 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_113 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "Bill stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_114 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_115 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_116 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_117 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_118 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_119 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_120 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_121 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_122 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_123 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_124 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_125 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_126 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_127 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_128 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_129 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_130 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_131 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_132 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_133 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_134 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_135 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_136 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_137 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_138 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_139 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_140 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_141 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_142 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_143 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_144 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_145 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_146 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_147 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_148 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_149 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_150 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_151 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_152 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_153 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_154 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_155 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_156 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_157 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_158 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_159 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_160 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_161 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_162 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_163 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_164 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_165 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_166 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_167 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stepped back in front of Silvia.", "Bill stepped back in front of Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_168 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_169 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_170 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Olivia's eyes.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_171 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_172 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_173 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_174 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_175 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_176 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_177 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_178 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_179 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_180 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_181 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Silvia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_182 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_183 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_184 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_185 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_186 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_187 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_188 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_189 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_190 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_191 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_192 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_193 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_194 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_195 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Olivia's eyes.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_196 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_197 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_198 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_199 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_200 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_201 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_202 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_203 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_204 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_205 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_206 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_207 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_208 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Bill pushed Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_209 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_210 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_211 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_212 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_213 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_214 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_215 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_216 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_217 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_218 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_219 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_220 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_221 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_222 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_223 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_224 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_225 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_226 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_227 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_228 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_229 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_230 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_231 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_232 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Silvia.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_233 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_234 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_235 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_236 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_237 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_238 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_239 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_240 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_241 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_242 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_243 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_244 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_245 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_246 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_247 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_248 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_249 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_250 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_251 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_252 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_253 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_254 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_255 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_256 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_257 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_258 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_259 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_260 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_261 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_262 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_263 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_264 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_265 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_266 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_267 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_268 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_269 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Bill pushed Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_270 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_271 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_272 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_273 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_274 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_275 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_276 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_277 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_278 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_279 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_280 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_281 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_282 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_283 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_284 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_285 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_286 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_287 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_288 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_289 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_290 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_291 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_292 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_293 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_294 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_295 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_296 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_297 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_298 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_299 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_300 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_301 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_302 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_303 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_304 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_305 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_306 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_307 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_308 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_309 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_310 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_311 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_312 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_313 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_314 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_315 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_316 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_317 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "Bill stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_318 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_319 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_320 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_321 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Silvia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_322 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_323 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_324 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_325 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_326 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_327 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_328 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_329 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Silvia.", "Bill yelled, 'Hey! Relax."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_330 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_331 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_332 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_333 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_334 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_335 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_336 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_337 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_338 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_339 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_340 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_341 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_342 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_343 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_344 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_345 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_346 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_347 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_348 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_349 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_350 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_351 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_352 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_353 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_354 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_355 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_356 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_357 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_358 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_359 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_360 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_361 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_362 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_363 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_364 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_365 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_366 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_367 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Silvia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_368 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_369 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_370 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_371 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_372 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_373 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_374 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_375 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_376 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_377 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_378 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_379 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_380 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_381 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_382 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_383 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_384 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_385 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_386 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_387 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_388 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_389 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_390 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_391 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_392 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_393 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_394 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Silvia.", "Bill stared with rage into Silvia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_395 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_396 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_397 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_398 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_399 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_400 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_401 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_402 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_403 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_404 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_405 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_406 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_407 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Silvia's eyes.", "In retaliation, Bill pushed Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_408 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_409 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_410 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_411 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_412 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_413 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_414 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_415 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_416 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_417 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_418 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_419 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Bill pushed Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_420 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_421 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_422 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_423 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_424 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_425 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_426 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_427 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_428 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_429 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_430 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Olivia's eyes.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_431 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_432 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_433 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_434 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_435 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_436 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_437 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_438 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_439 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_440 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_441 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_442 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_443 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_444 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_445 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_446 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_447 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_448 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_449 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_450 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_451 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_452 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_453 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_454 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_455 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_456 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_457 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_458 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_459 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_460 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_461 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_462 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_463 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_464 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_465 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_466 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_467 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_468 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_469 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_470 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_471 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_472 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_473 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_474 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_475 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_476 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_477 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_478 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_479 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_480 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_481 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_482 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_483 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_484 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_485 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_486 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_487 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_488 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_489 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_490 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_491 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_492 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_493 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_494 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_495 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_496 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_497 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_498 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_499 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_500 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_501 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Silvia.", "Bill stared with rage into Silvia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_502 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_503 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_504 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_505 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_506 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_507 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_508 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_509 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_510 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_511 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia proceeded to shove Bill.", "Olivia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_512 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_513 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Silvia's eyes.", "In retaliation, Bill pushed Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_514 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_515 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_516 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_517 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_518 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_519 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_520 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_521 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_522 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_523 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_524 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_525 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_526 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_527 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_528 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_529 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_530 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_531 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_532 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_533 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_534 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_535 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_536 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_537 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_538 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_539 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_540 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_541 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_542 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_543 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_544 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_545 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_546 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_547 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_548 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_549 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_550 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_551 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia proceeded to shove Bill.", "Olivia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_552 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_553 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_554 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_555 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_556 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_557 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_558 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_559 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_560 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_561 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_562 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_563 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_564 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_565 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_566 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_567 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_568 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_569 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_570 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_571 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_572 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_573 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_574 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_575 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Bill pushed Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_576 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_577 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_578 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_579 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_580 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_581 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_582 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_583 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_584 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_585 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_586 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_587 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_588 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_589 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_590 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_591 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_592 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_593 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_594 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_595 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_596 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_597 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia proceeded to shove Bill.", "Olivia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_598 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_599 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Silvia.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_600 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_601 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_602 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_603 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_604 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_605 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_606 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_607 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_608 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_609 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_610 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_611 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_612 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_613 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Olivia's eyes.", "Bill yelled, 'Hey! Relax."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_614 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_615 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_616 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_617 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_618 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_619 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_620 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_621 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_622 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_623 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_624 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_625 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_626 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_627 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_628 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_629 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_630 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_631 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_632 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_633 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_634 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_635 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_636 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_637 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_638 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_639 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_640 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_641 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_642 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_643 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_644 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_645 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_646 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_647 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_648 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_649 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_650 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_651 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_652 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_653 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_654 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_655 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_656 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_657 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_658 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_659 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_660 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_661 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_662 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_663 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_664 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_665 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_666 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_667 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_668 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_669 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_670 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_671 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_672 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_673 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia proceeded to shove Bill.", "Olivia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_674 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_675 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Silvia's eyes.", "In retaliation, Bill pushed Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_676 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_677 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_678 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_679 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_680 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_681 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_682 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_683 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_684 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_685 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_686 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_687 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_688 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_689 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "Bill stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_690 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_691 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_692 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_693 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_694 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_695 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_696 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_697 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_698 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_699 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_700 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_701 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_702 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_703 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_704 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_705 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_706 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_707 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_708 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_709 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_710 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_711 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_712 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_713 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_714 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_715 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_716 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Silvia's eyes.", "In retaliation, Bill pushed Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_717 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_718 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_719 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_720 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_721 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_722 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_723 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_724 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_725 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_726 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_727 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_728 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_729 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_730 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_731 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_732 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_733 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_734 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_735 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_736 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_737 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_738 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_739 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Silvia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_740 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_741 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "Bill yelled, 'Hey! Relax."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_742 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_743 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_744 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_745 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_746 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_747 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_748 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_749 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_750 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_751 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_752 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_753 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_754 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Bill pushed Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_755 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_756 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_757 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_758 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_759 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_760 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_761 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_762 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_763 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_764 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_765 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_766 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_767 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_768 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_769 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_770 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_771 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_772 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_773 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_774 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_775 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_776 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_777 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_778 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_779 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_780 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_781 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_782 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_783 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_784 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_785 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_786 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_787 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_788 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_789 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_790 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_791 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_792 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia proceeded to shove Bill.", "Olivia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_793 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_794 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_795 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_796 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_797 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_798 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_799 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_800 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_801 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_802 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_803 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_804 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_805 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_806 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_807 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_808 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_809 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_810 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_811 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_812 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_813 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_814 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_815 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_816 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_817 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_818 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_819 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_820 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_821 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_822 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_823 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_824 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_825 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_826 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_827 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_828 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_829 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_830 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_831 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_832 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Silvia.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_833 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_834 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_835 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_836 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_837 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_838 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_839 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_840 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_841 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_842 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_843 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_844 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_845 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_846 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_847 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_848 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_849 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_850 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_851 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Bill.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_852 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_853 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_854 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_855 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_856 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_857 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_858 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_859 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_860 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_861 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_862 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_863 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_864 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_865 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_866 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_867 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_868 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_869 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_870 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_871 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_872 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_873 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_874 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_875 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_876 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Olivia's eyes.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_877 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_878 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_879 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_880 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_881 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_882 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_883 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_884 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_885 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_886 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_887 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_888 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_889 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_890 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_891 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_892 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_893 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_894 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_895 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_896 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_897 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_898 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_899 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_900 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_901 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_902 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_903 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_904 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_905 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_906 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_907 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_908 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_909 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_910 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_911 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "Bill stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_912 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_913 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_914 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_915 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_916 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_917 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_918 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_919 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_920 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_921 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_922 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_923 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_924 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_925 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_926 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_927 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_928 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_929 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_930 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_931 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_932 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_933 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_934 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_935 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_936 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "Bill stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_937 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_938 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_939 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_940 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_941 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_942 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_943 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_944 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_945 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_946 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_947 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_948 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Silvia.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_949 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_950 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_951 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_952 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_953 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_954 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_955 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_956 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_957 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_958 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_959 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Olivia's eyes.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_960 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_961 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Silvia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_962 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_963 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_964 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_965 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_966 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_967 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_968 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_969 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Bill.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_970 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_971 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_972 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_973 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_974 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_975 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_976 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_977 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_978 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_979 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_980 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_981 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_982 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Bill.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_983 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_984 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_985 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_986 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_987 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_988 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_989 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_990 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_991 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_992 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_993 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_994 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_995 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_996 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_997 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_998 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_999 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1000 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1001 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1002 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1003 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1004 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1005 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1006 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1007 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "Bill yelled, 'Hey! Relax."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1008 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1009 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1010 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1011 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1012 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1013 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1014 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1015 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1016 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1017 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1018 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1019 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1020 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1021 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1022 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1023 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1024 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1025 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1026 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1027 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1028 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1029 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1030 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1031 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1032 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1033 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1034 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "Bill stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1035 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1036 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1037 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1038 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1039 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1040 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1041 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1042 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1043 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1044 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1045 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1046 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stepped back in front of Olivia.", "Bill stepped back in front of Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1047 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1048 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1049 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Olivia's eyes.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1050 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1051 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1052 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1053 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1054 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1055 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1056 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1057 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1058 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1059 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1060 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1061 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Silvia.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1062 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1063 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1064 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1065 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1066 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1067 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1068 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1069 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1070 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1071 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1072 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1073 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1074 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1075 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1076 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1077 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1078 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1079 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1080 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1081 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1082 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1083 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1084 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1085 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1086 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1087 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Silvia.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1088 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1089 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1090 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1091 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1092 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1093 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1094 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1095 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1096 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1097 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "Bill stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1098 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1099 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1100 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1101 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1102 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1103 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1104 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1105 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1106 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1107 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1108 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Silvia.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1109 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1110 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1111 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1112 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1113 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1114 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1115 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1116 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1117 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1118 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1119 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1120 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1121 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1122 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1123 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1124 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1125 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1126 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1127 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1128 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1129 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1130 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1131 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1132 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1133 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Olivia's eyes.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1134 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1135 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1136 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1137 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1138 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1139 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1140 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1141 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1142 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1143 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1144 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Silvia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1145 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1146 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Olivia's eyes.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1147 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1148 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1149 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1150 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1151 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1152 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1153 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1154 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1155 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1156 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1157 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1158 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1159 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Silvia.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1160 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1161 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1162 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1163 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1164 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1165 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1166 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1167 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1168 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1169 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1170 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1171 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Silvia.", "Bill yelled, 'Hey! Relax."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1172 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1173 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1174 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1175 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1176 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1177 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1178 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1179 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1180 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1181 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1182 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1183 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1184 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1185 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1186 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1187 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1188 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1189 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1190 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1191 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1192 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Bill pushed Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1193 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1194 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1195 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1196 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1197 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1198 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1199 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1200 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1201 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1202 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1203 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1204 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1205 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1206 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1207 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1208 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1209 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1210 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1211 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1212 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1213 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1214 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1215 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1216 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1217 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1218 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1219 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
// CODE BODY END

jsPsych.init({
  display_element: 'jspsych-target',
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_1,s_2,s_3,s_4,s_5,s_6,s_7,q_8,s_9,s_10,s_11,s_12,s_13,q_14,s_15,s_16,q_17,s_18,q_19,s_20,s_21,s_22,s_23,q_24,s_25,s_26,s_27,s_28,q_29,s_30,s_31,s_32,s_33,s_34,q_35,s_36,s_37,q_38,s_39,s_40,q_41,s_42,s_43,s_44,s_45,s_46,s_47,s_48,q_49,s_50,s_51,q_52,s_53,s_54,q_55,s_56,s_57,s_58,s_59,s_60,q_61,s_62,q_63,s_64,s_65,s_66,q_67,s_68,s_69,s_70,q_71,s_72,s_73,q_74,s_75,q_76,s_77,s_78,s_79,q_80,s_81,s_82,s_83,q_84,s_85,s_86,q_87,s_88,s_89,q_90,s_91,s_92,s_93,s_94,s_95,s_96,s_97,q_98,s_99,s_100,q_101,s_102,q_103,s_104,s_105,s_106,s_107,q_108,s_109,s_110,q_111,s_112,q_113,s_114,s_115,s_116,s_117,s_118,s_119,s_120,s_121,s_122,s_123,s_124,q_125,s_126,q_127,s_128,s_129,s_130,s_131,s_132,q_133,s_134,s_135,s_136,s_137,q_138,s_139,s_140,s_141,q_142,s_143,s_144,s_145,s_146,q_147,s_148,q_149,s_150,s_151,s_152,s_153,q_154,s_155,s_156,s_157,q_158,s_159,s_160,s_161,q_162,s_163,s_164,s_165,s_166,q_167,s_168,s_169,q_170,s_171,s_172,q_173,s_174,q_175,s_176,s_177,s_178,s_179,s_180,q_181,s_182,s_183,s_184,s_185,q_186,s_187,s_188,s_189,q_190,s_191,s_192,q_193,s_194,q_195,s_196,q_197,s_198,s_199,q_200,s_201,s_202,s_203,q_204,s_205,s_206,s_207,q_208,s_209,q_210,s_211,q_212,s_213,q_214,s_215,s_216,s_217,s_218,s_219,s_220,s_221,s_222,q_223,s_224,q_225,s_226,s_227,s_228,s_229,s_230,s_231,q_232,s_233,s_234,s_235,s_236,s_237,s_238,q_239,s_240,s_241,s_242,s_243,q_244,s_245,q_246,s_247,q_248,s_249,s_250,s_251,s_252,s_253,q_254,s_255,q_256,s_257,s_258,q_259,s_260,s_261,s_262,s_263,q_264,s_265,s_266,q_267,s_268,q_269,s_270,q_271,s_272,q_273,s_274,q_275,s_276,s_277,s_278,q_279,s_280,s_281,s_282,s_283,s_284,s_285,q_286,s_287,s_288,s_289,s_290,s_291,s_292,s_293,q_294,s_295,q_296,s_297,s_298,s_299,s_300,s_301,s_302,s_303,q_304,s_305,q_306,s_307,q_308,s_309,q_310,s_311,s_312,s_313,s_314,s_315,s_316,q_317,s_318,s_319,s_320,q_321,s_322,s_323,s_324,q_325,s_326,s_327,s_328,q_329,s_330,q_331,s_332,q_333,s_334,q_335,s_336,s_337,s_338,q_339,s_340,s_341,q_342,s_343,q_344,s_345,q_346,s_347,s_348,s_349,s_350,s_351,q_352,s_353,s_354,s_355,q_356,s_357,q_358,s_359,s_360,s_361,s_362,s_363,q_364,s_365,s_366,q_367,s_368,q_369,s_370,q_371,s_372,s_373,q_374,s_375,s_376,s_377,q_378,s_379,s_380,s_381,s_382,q_383,s_384,q_385,s_386,s_387,s_388,s_389,s_390,s_391,q_392,s_393,q_394,s_395,s_396,s_397,q_398,s_399,s_400,s_401,q_402,s_403,s_404,q_405,s_406,q_407,s_408,s_409,q_410,s_411,s_412,s_413,s_414,s_415,s_416,q_417,s_418,q_419,s_420,s_421,q_422,s_423,s_424,s_425,s_426,s_427,s_428,s_429,q_430,s_431,q_432,s_433,q_434,s_435,s_436,s_437,s_438,s_439,s_440,q_441,s_442,s_443,q_444,s_445,s_446,s_447,s_448,s_449,s_450,s_451,s_452,s_453,q_454,s_455,s_456,q_457,s_458,s_459,s_460,s_461,s_462,s_463,q_464,s_465,s_466,s_467,q_468,s_469,s_470,s_471,q_472,s_473,s_474,s_475,q_476,s_477,q_478,s_479,q_480,s_481,q_482,s_483,s_484,s_485,s_486,s_487,s_488,s_489,q_490,s_491,q_492,s_493,q_494,s_495,s_496,s_497,s_498,s_499,s_500,q_501,s_502,s_503,q_504,s_505,s_506,s_507,s_508,s_509,s_510,q_511,s_512,q_513,s_514,q_515,s_516,q_517,s_518,q_519,s_520,s_521,s_522,s_523,s_524,s_525,s_526,q_527,s_528,q_529,s_530,q_531,s_532,s_533,s_534,s_535,s_536,q_537,s_538,s_539,q_540,s_541,q_542,s_543,q_544,s_545,s_546,s_547,q_548,s_549,s_550,q_551,s_552,s_553,s_554,s_555,s_556,s_557,s_558,q_559,s_560,s_561,s_562,s_563,s_564,q_565,s_566,q_567,s_568,s_569,s_570,q_571,s_572,s_573,s_574,q_575,s_576,s_577,s_578,q_579,s_580,s_581,s_582,q_583,s_584,s_585,s_586,s_587,q_588,s_589,q_590,s_591,s_592,s_593,s_594,s_595,s_596,q_597,s_598,q_599,s_600,q_601,s_602,q_603,s_604,q_605,s_606,s_607,s_608,s_609,s_610,q_611,s_612,q_613,s_614,s_615,q_616,s_617,q_618,s_619,s_620,s_621,q_622,s_623,s_624,s_625,q_626,s_627,q_628,s_629,s_630,q_631,s_632,s_633,s_634,q_635,s_636,s_637,s_638,s_639,q_640,s_641,s_642,q_643,s_644,s_645,s_646,q_647,s_648,s_649,s_650,q_651,s_652,q_653,s_654,s_655,s_656,s_657,s_658,s_659,s_660,q_661,s_662,s_663,q_664,s_665,q_666,s_667,s_668,s_669,s_670,s_671,s_672,q_673,s_674,q_675,s_676,q_677,s_678,q_679,s_680,q_681,s_682,s_683,s_684,q_685,s_686,s_687,s_688,q_689,s_690,q_691,s_692,q_693,s_694,q_695,s_696,s_697,s_698,q_699,s_700,s_701,s_702,q_703,s_704,q_705,s_706,s_707,q_708,s_709,s_710,s_711,q_712,s_713,s_714,s_715,q_716,s_717,q_718,s_719,s_720,q_721,s_722,s_723,s_724,q_725,s_726,s_727,s_728,s_729,s_730,s_731,q_732,s_733,s_734,s_735,q_736,s_737,s_738,q_739,s_740,q_741,s_742,s_743,s_744,q_745,s_746,s_747,s_748,q_749,s_750,s_751,q_752,s_753,q_754,s_755,q_756,s_757,q_758,s_759,q_760,s_761,s_762,s_763,q_764,s_765,s_766,q_767,s_768,s_769,q_770,s_771,q_772,s_773,q_774,s_775,s_776,s_777,q_778,s_779,s_780,s_781,s_782,q_783,s_784,q_785,s_786,s_787,s_788,s_789,s_790,s_791,q_792,s_793,s_794,q_795,s_796,q_797,s_798,s_799,s_800,s_801,q_802,s_803,s_804,q_805,s_806,s_807,q_808,s_809,q_810,s_811,s_812,s_813,s_814,q_815,s_816,s_817,s_818,s_819,s_820,q_821,s_822,q_823,s_824,s_825,s_826,q_827,s_828,s_829,q_830,s_831,q_832,s_833,s_834,s_835,s_836,s_837,s_838,s_839,s_840,s_841,s_842,s_843,q_844,s_845,s_846,s_847,s_848,s_849,s_850,q_851,s_852,s_853,s_854,s_855,q_856,s_857,s_858,s_859,s_860,s_861,q_862,s_863,s_864,s_865,q_866,s_867,q_868,s_869,s_870,s_871,q_872,s_873,s_874,s_875,q_876,s_877,s_878,q_879,s_880,s_881,s_882,s_883,s_884,s_885,q_886,s_887,s_888,q_889,s_890,q_891,s_892,q_893,s_894,s_895,s_896,s_897,s_898,q_899,s_900,s_901,s_902,s_903,q_904,s_905,s_906,s_907,s_908,s_909,s_910,q_911,s_912,q_913,s_914,q_915,s_916,q_917,s_918,s_919,s_920,q_921,s_922,s_923,q_924,s_925,s_926,s_927,q_928,s_929,s_930,s_931,s_932,s_933,s_934,s_935,q_936,s_937,q_938,s_939,q_940,s_941,s_942,s_943,s_944,s_945,s_946,s_947,q_948,s_949,s_950,q_951,s_952,s_953,s_954,s_955,s_956,s_957,s_958,q_959,s_960,q_961,s_962,s_963,s_964,s_965,s_966,s_967,s_968,q_969,s_970,s_971,q_972,s_973,q_974,s_975,q_976,s_977,s_978,s_979,s_980,s_981,q_982,s_983,s_984,s_985,s_986,q_987,s_988,s_989,s_990,s_991,s_992,s_993,s_994,q_995,s_996,q_997,s_998,s_999,s_1000,s_1001,q_1002,s_1003,s_1004,q_1005,s_1006,q_1007,s_1008,q_1009,s_1010,q_1011,s_1012,q_1013,s_1014,s_1015,s_1016,q_1017,s_1018,s_1019,q_1020,s_1021,s_1022,q_1023,s_1024,q_1025,s_1026,q_1027,s_1028,s_1029,s_1030,s_1031,s_1032,s_1033,q_1034,s_1035,q_1036,s_1037,q_1038,s_1039,q_1040,s_1041,s_1042,s_1043,q_1044,s_1045,q_1046,s_1047,s_1048,q_1049,s_1050,q_1051,s_1052,s_1053,s_1054,s_1055,s_1056,q_1057,s_1058,s_1059,s_1060,q_1061,s_1062,q_1063,s_1064,q_1065,s_1066,q_1067,s_1068,s_1069,s_1070,s_1071,s_1072,q_1073,s_1074,s_1075,q_1076,s_1077,q_1078,s_1079,q_1080,s_1081,s_1082,s_1083,s_1084,s_1085,s_1086,q_1087,s_1088,s_1089,s_1090,s_1091,s_1092,s_1093,s_1094,s_1095,s_1096,q_1097,s_1098,s_1099,s_1100,q_1101,s_1102,s_1103,s_1104,s_1105,s_1106,s_1107,q_1108,s_1109,q_1110,s_1111,q_1112,s_1113,q_1114,s_1115,s_1116,s_1117,q_1118,s_1119,s_1120,q_1121,s_1122,s_1123,q_1124,s_1125,s_1126,s_1127,s_1128,s_1129,s_1130,s_1131,s_1132,q_1133,s_1134,q_1135,s_1136,q_1137,s_1138,s_1139,s_1140,s_1141,s_1142,s_1143,q_1144,s_1145,q_1146,s_1147,s_1148,q_1149,s_1150,q_1151,s_1152,s_1153,s_1154,s_1155,s_1156,q_1157,s_1158,q_1159,s_1160,q_1161,s_1162,s_1163,s_1164,s_1165,s_1166,s_1167,s_1168,q_1169,s_1170,q_1171,s_1172,s_1173,q_1174,s_1175,s_1176,s_1177,s_1178,s_1179,s_1180,s_1181,s_1182,s_1183,s_1184,s_1185,s_1186,s_1187,q_1188,s_1189,s_1190,s_1191,q_1192,s_1193,q_1194,s_1195,s_1196,s_1197,s_1198,s_1199,s_1200,s_1201,s_1202,s_1203,q_1204,s_1205,q_1206,s_1207,q_1208,s_1209,s_1210,s_1211,s_1212,s_1213,s_1214,s_1215,s_1216,s_1217,s_1218,s_1219,],

  on_data_update: function(data) {
        psiturk.recordTrialData(data);
    },

  on_finish: function() {
    // psiturk save
    psiturk.saveData({
        success: function() { 
            psiturk.completeHIT(); 
        }
    });
  },
});