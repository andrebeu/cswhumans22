// load psiturk
var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);

var intro1 = {
  type: 'instructions',
  pages: ['** After reading this sentence, press spacebar. ** ']
  }
var intro2 = {
  type: 'instructions',
  pages: ['In this experiment you will read stories and answer questions.']
  } 
var intro3 = {
  type: 'instructions',
  pages: ['The stories will be presented a sentence at a time.']
  }
var intro4 = {
  type: 'instructions',
  pages: ['While reading, you will be periodically interrupted and asked to predict what happens next in the story.']
  } 
var intro5 = {
  type: 'instructions',
  pages: ['The questions will ask you to predict which one of two given options is more likely to happen next.']
  } 
var intro6 = {
  type: 'instructions',
  pages: ['When a question comes up, select an option with the right or left arrow keys on your keyboard.']
  } 
var intro7 = {
  type: 'instructions',
  pages: [' ** once ready, press spacebar to begin the first story ** ']
  } 

// CODE BODY START

	var s_1 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_2 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_3 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_4 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_5 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_6 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_7 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_8 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_9 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_10 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_11 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_12 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_13 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_14 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_15 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_16 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_17 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_18 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_19 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_20 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_21 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_22 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_23 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_24 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_25 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_26 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_27 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_28 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_29 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_30 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_31 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_32 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_33 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_34 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_35 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_36 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Olivia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_37 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_38 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_39 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_40 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_41 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_42 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_43 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_44 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_45 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_46 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_47 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_48 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_49 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_50 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_51 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_52 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_53 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_54 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_55 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_56 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_57 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_58 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_59 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_60 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_61 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_62 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_63 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_64 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_65 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_66 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_67 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_68 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_69 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_70 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_71 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_72 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_73 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_74 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_75 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_76 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_77 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_78 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_79 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_80 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_81 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_82 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_83 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_84 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_85 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_86 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_87 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_88 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_89 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_90 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_91 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_92 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_93 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_94 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_95 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_96 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_97 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_98 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_99 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_100 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_101 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_102 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_103 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_104 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_105 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_106 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_107 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_108 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_109 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_110 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_111 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_112 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_113 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_114 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_115 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_116 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_117 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_118 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_119 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_120 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_121 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_122 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_123 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_124 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_125 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_126 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_127 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_128 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_129 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_130 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stepped back in front of Silvia.", "Bill stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_131 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_132 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_133 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Olivia's eyes.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_134 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_135 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_136 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_137 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_138 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_139 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_140 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_141 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_142 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_143 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "Bill stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_144 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_145 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_146 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_147 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_148 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_149 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_150 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_151 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_152 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_153 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_154 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_155 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_156 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_157 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_158 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_159 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_160 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_161 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_162 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_163 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_164 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_165 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_166 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_167 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_168 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_169 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_170 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_171 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_172 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_173 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_174 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_175 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_176 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_177 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_178 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_179 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_180 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_181 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_182 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_183 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_184 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_185 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_186 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_187 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_188 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_189 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_190 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_191 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_192 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_193 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_194 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_195 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_196 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_197 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_198 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_199 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_200 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_201 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_202 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_203 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_204 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_205 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_206 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_207 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_208 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_209 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_210 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_211 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_212 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_213 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_214 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_215 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_216 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_217 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_218 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_219 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_220 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_221 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_222 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_223 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_224 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_225 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_226 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_227 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_228 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_229 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_230 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_231 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_232 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_233 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_234 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_235 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_236 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_237 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_238 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_239 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_240 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_241 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_242 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_243 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_244 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_245 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_246 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_247 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_248 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_249 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_250 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_251 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_252 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_253 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_254 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_255 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_256 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_257 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_258 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_259 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_260 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_261 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_262 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_263 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_264 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_265 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_266 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_267 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_268 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_269 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_270 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_271 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_272 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_273 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_274 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_275 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_276 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_277 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_278 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_279 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_280 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "Bill stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_281 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_282 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_283 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_284 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_285 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_286 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Olivia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_287 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_288 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_289 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_290 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_291 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_292 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_293 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_294 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_295 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_296 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_297 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_298 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_299 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_300 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_301 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_302 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_303 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_304 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_305 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_306 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_307 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_308 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_309 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_310 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_311 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_312 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_313 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_314 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_315 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_316 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_317 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_318 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_319 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_320 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_321 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_322 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_323 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_324 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_325 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_326 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_327 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_328 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_329 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_330 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_331 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_332 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_333 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_334 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_335 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_336 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_337 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_338 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_339 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_340 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_341 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_342 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_343 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_344 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_345 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_346 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_347 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_348 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_349 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Olivia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_350 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_351 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_352 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_353 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_354 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_355 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_356 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
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
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_358 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
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
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_360 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_361 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_362 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_363 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_364 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_365 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_366 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_367 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_368 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_369 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_370 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_371 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_372 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_373 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_374 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_375 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_376 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_377 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_378 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_379 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_380 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_381 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_382 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_383 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
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
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_385 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
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
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_387 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_388 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_389 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_390 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_391 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_392 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_393 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_394 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_395 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_396 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_397 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_398 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_399 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_400 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_401 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_402 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_403 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_404 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_405 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_406 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_407 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_408 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_409 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_410 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_411 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_412 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_413 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_414 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_415 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_416 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_417 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_418 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_419 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_420 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_421 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_422 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Olivia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_423 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_424 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_425 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_426 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_427 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_428 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_429 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_430 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_431 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_432 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_433 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_434 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_435 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_436 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_437 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_438 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_439 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_440 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_441 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_442 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_443 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_444 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_445 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_446 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_447 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_448 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_449 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_450 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_451 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_452 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_453 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_454 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_455 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_456 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_457 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_458 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_459 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_460 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_461 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_462 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_463 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_464 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_465 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_466 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_467 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_468 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_469 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_470 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_471 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_472 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_473 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_474 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_475 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_476 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_477 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_478 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_479 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_480 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_481 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_482 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_483 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_484 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_485 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_486 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_487 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_488 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_489 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_490 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_491 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_492 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_493 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_494 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_495 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_496 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_497 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_498 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_499 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_500 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_501 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_502 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_503 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_504 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_505 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_506 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_507 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_508 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_509 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_510 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_511 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_512 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_513 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_514 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_515 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_516 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_517 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_518 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_519 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_520 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_521 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_522 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_523 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_524 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_525 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_526 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_527 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_528 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_529 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_530 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_531 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_532 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Olivia's eyes.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_533 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_534 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_535 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_536 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_537 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_538 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_539 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_540 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_541 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_542 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_543 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_544 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_545 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_546 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_547 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_548 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_549 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_550 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_551 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_552 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_553 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_554 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_555 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_556 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_557 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_558 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_559 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_560 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_561 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_562 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_563 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_564 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_565 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_566 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_567 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_568 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_569 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_570 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_571 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_572 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_573 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_574 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_575 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_576 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_577 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_578 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_579 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_580 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_581 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_582 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_583 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_584 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_585 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_586 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_587 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_588 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_589 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_590 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_591 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_592 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_593 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Olivia's eyes.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_594 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_595 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_596 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_597 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_598 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_599 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_600 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_601 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_602 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_603 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_604 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_605 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_606 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_607 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_608 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_609 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_610 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_611 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_612 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_613 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_614 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_615 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_616 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_617 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_618 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_619 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_620 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_621 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_622 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_623 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_624 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_625 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_626 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_627 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_628 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_629 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_630 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_631 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_632 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_633 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_634 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_635 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_636 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_637 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_638 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_639 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_640 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_641 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_642 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_643 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_644 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_645 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_646 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "Bill stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_647 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_648 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_649 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_650 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_651 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_652 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_653 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_654 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_655 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_656 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_657 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_658 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_659 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_660 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_661 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_662 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_663 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_664 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_665 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_666 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_667 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_668 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_669 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_670 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_671 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_672 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_673 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_674 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Olivia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_675 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_676 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_677 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_678 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_679 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_680 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_681 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_682 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_683 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_684 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_685 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_686 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_687 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_688 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_689 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_690 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_691 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_692 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_693 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "Bill stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_694 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_695 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_696 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_697 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_698 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_699 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_700 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_701 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_702 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_703 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_704 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_705 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_706 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Olivia's eyes.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_707 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_708 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_709 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_710 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_711 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_712 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_713 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_714 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_715 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_716 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_717 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_718 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_719 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "Bill stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_720 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_721 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_722 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_723 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_724 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_725 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_726 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_727 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_728 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_729 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_730 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_731 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_732 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_733 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_734 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_735 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_736 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_737 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_738 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_739 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_740 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_741 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_742 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_743 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_744 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_745 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_746 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_747 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Olivia's eyes.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_748 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_749 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_750 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_751 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_752 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_753 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_754 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_755 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_756 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_757 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_758 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_759 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_760 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_761 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_762 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_763 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_764 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_765 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_766 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_767 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_768 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_769 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_770 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_771 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_772 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_773 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_774 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_775 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_776 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_777 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_778 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_779 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_780 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_781 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_782 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_783 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_784 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_785 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_786 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_787 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_788 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_789 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_790 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_791 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_792 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_793 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_794 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_795 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_796 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_797 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_798 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_799 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_800 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_801 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_802 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_803 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_804 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_805 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_806 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_807 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_808 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_809 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_810 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_811 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_812 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_813 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_814 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_815 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_816 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_817 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_818 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_819 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_820 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_821 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_822 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_823 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_824 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_825 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_826 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_827 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_828 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_829 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_830 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_831 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_832 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_833 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stepped back in front of Olivia.", "Bill stepped back in front of Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_834 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_835 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_836 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_837 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_838 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_839 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_840 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_841 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_842 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_843 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_844 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_845 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_846 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stepped back in front of Olivia.", "Bill stepped back in front of Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_847 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_848 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_849 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_850 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_851 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_852 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_853 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_854 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_855 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_856 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_857 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_858 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_859 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_860 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_861 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_862 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_863 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_864 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_865 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_866 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_867 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_868 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_869 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_870 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_871 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_872 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_873 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_874 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_875 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_876 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_877 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_878 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_879 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_880 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_881 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_882 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_883 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_884 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_885 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_886 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_887 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_888 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_889 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_890 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_891 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_892 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_893 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_894 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_895 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_896 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_897 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_898 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_899 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_900 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_901 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_902 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_903 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_904 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_905 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_906 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_907 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_908 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_909 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_910 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_911 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_912 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_913 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_914 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_915 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_916 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_917 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_918 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_919 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_920 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_921 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_922 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_923 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_924 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_925 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_926 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_927 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_928 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_929 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_930 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_931 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_932 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_933 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_934 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_935 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_936 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_937 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_938 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_939 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_940 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_941 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_942 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_943 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_944 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_945 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_946 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_947 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_948 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_949 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_950 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_951 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_952 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "Bill stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_953 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_954 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_955 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_956 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_957 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_958 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_959 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_960 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_961 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_962 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_963 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_964 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_965 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_966 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_967 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_968 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_969 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_970 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_971 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_972 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_973 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_974 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_975 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_976 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_977 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_978 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_979 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_980 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_981 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_982 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_983 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_984 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_985 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_986 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_987 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_988 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_989 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_990 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_991 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_992 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_993 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_994 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_995 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_996 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_997 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_998 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_999 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1000 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1001 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1002 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1003 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1004 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1005 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1006 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1007 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1008 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1009 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1010 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1011 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1012 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1013 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1014 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1015 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1016 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1017 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1018 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1019 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1020 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1021 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1022 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1023 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1024 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1025 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1026 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1027 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1028 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1029 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1030 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1031 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1032 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1033 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1034 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1035 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1036 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1037 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1038 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1039 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1040 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1041 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1042 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1043 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1044 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1045 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1046 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1047 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1048 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1049 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1050 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1051 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1052 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1053 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1054 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1055 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1056 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1057 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1058 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1059 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1060 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1061 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1062 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1063 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1064 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1065 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1066 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1067 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1068 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1069 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1070 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1071 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1072 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1073 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1074 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1075 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1076 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1077 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1078 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1079 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1080 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1081 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1082 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1083 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1084 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1085 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1086 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1087 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1088 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1089 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1090 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1091 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1092 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1093 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1094 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1095 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1096 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1097 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1098 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1099 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1100 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1101 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1102 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1103 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1104 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1105 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1106 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1107 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1108 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1109 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1110 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1111 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1112 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1113 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1114 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1115 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1116 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1117 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1118 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1119 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1120 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1121 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1122 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1123 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1124 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1125 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1126 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1127 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1128 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1129 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1130 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1131 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1132 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1133 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1134 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1135 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1136 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1137 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1138 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1139 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1140 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1141 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1142 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1143 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1144 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1145 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1146 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1147 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1148 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1149 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1150 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1151 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1152 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1153 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1154 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1155 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1156 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1157 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1158 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1159 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1160 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1161 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1162 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1163 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1164 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1165 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1166 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1167 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1168 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1169 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1170 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1171 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1172 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1173 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1174 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1175 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1176 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1177 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1178 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1179 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1180 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1181 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1182 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1183 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1184 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1185 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1186 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1187 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1188 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1189 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1190 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1191 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1192 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1193 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1194 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1195 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1196 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1197 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1198 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1199 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1200 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1201 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1202 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1203 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1204 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1205 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1206 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1207 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1208 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1209 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1210 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1211 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1212 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1213 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1214 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1215 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1216 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1217 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1218 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1219 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1220 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1221 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1222 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1223 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1224 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1225 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1226 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1227 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1228 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1229 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1230 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1231 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1232 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1233 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1234 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1235 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1236 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1237 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1238 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1239 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1240 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1241 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1242 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1243 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1244 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1245 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1246 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1247 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1248 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1249 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1250 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1251 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Olivia's eyes.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1252 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1253 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1254 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1255 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1256 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1257 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
// CODE BODY END

jsPsych.init({
  display_element: 'jspsych-target',
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_1,s_2,s_3,q_4,s_5,s_6,s_7,q_8,s_9,q_10,s_11,s_12,s_13,q_14,s_15,s_16,q_17,s_18,s_19,s_20,q_21,s_22,s_23,s_24,s_25,q_26,s_27,s_28,s_29,q_30,s_31,q_32,s_33,q_34,s_35,q_36,s_37,s_38,s_39,s_40,s_41,q_42,s_43,s_44,q_45,s_46,s_47,q_48,s_49,s_50,s_51,s_52,s_53,q_54,s_55,s_56,q_57,s_58,q_59,s_60,s_61,s_62,s_63,s_64,s_65,q_66,s_67,q_68,s_69,q_70,s_71,q_72,s_73,q_74,s_75,s_76,s_77,q_78,s_79,s_80,s_81,s_82,s_83,q_84,s_85,q_86,s_87,s_88,s_89,s_90,s_91,q_92,s_93,q_94,s_95,s_96,q_97,s_98,q_99,s_100,s_101,s_102,q_103,s_104,s_105,q_106,s_107,q_108,s_109,s_110,q_111,s_112,q_113,s_114,s_115,s_116,s_117,s_118,q_119,s_120,s_121,q_122,s_123,s_124,q_125,s_126,s_127,s_128,s_129,q_130,s_131,s_132,q_133,s_134,s_135,s_136,s_137,s_138,s_139,s_140,s_141,s_142,q_143,s_144,q_145,s_146,s_147,q_148,s_149,s_150,s_151,s_152,s_153,q_154,s_155,q_156,s_157,s_158,s_159,s_160,s_161,s_162,q_163,s_164,s_165,q_166,s_167,s_168,s_169,s_170,q_171,s_172,s_173,s_174,s_175,s_176,s_177,s_178,q_179,s_180,s_181,q_182,s_183,s_184,s_185,q_186,s_187,s_188,q_189,s_190,s_191,q_192,s_193,q_194,s_195,q_196,s_197,s_198,s_199,q_200,s_201,s_202,s_203,q_204,s_205,s_206,q_207,s_208,q_209,s_210,s_211,s_212,q_213,s_214,s_215,s_216,s_217,q_218,s_219,q_220,s_221,q_222,s_223,s_224,s_225,s_226,s_227,q_228,s_229,s_230,q_231,s_232,s_233,q_234,s_235,s_236,s_237,q_238,s_239,s_240,s_241,q_242,s_243,s_244,q_245,s_246,q_247,s_248,s_249,s_250,s_251,s_252,q_253,s_254,q_255,s_256,q_257,s_258,s_259,s_260,s_261,s_262,q_263,s_264,s_265,s_266,q_267,s_268,s_269,q_270,s_271,s_272,s_273,s_274,q_275,s_276,s_277,q_278,s_279,q_280,s_281,q_282,s_283,q_284,s_285,q_286,s_287,s_288,s_289,s_290,s_291,q_292,s_293,q_294,s_295,q_296,s_297,q_298,s_299,q_300,s_301,s_302,s_303,s_304,s_305,s_306,q_307,s_308,q_309,s_310,q_311,s_312,q_313,s_314,s_315,s_316,q_317,s_318,s_319,s_320,s_321,s_322,q_323,s_324,s_325,s_326,s_327,q_328,s_329,s_330,q_331,s_332,q_333,s_334,q_335,s_336,s_337,q_338,s_339,s_340,s_341,s_342,s_343,q_344,s_345,s_346,s_347,s_348,q_349,s_350,s_351,s_352,s_353,s_354,s_355,q_356,s_357,q_358,s_359,q_360,s_361,q_362,s_363,s_364,s_365,s_366,s_367,q_368,s_369,q_370,s_371,q_372,s_373,s_374,s_375,s_376,s_377,s_378,s_379,s_380,q_381,s_382,q_383,s_384,q_385,s_386,q_387,s_388,s_389,s_390,q_391,s_392,s_393,q_394,s_395,s_396,q_397,s_398,s_399,q_400,s_401,s_402,s_403,q_404,s_405,s_406,s_407,s_408,q_409,s_410,q_411,s_412,q_413,s_414,s_415,s_416,s_417,s_418,s_419,q_420,s_421,q_422,s_423,s_424,s_425,s_426,s_427,s_428,s_429,q_430,s_431,q_432,s_433,s_434,s_435,q_436,s_437,s_438,s_439,q_440,s_441,s_442,q_443,s_444,q_445,s_446,s_447,q_448,s_449,s_450,s_451,s_452,s_453,s_454,q_455,s_456,q_457,s_458,q_459,s_460,s_461,q_462,s_463,s_464,s_465,s_466,s_467,q_468,s_469,s_470,s_471,q_472,s_473,q_474,s_475,s_476,s_477,s_478,s_479,q_480,s_481,q_482,s_483,s_484,q_485,s_486,q_487,s_488,s_489,s_490,q_491,s_492,s_493,q_494,s_495,s_496,q_497,s_498,q_499,s_500,q_501,s_502,s_503,s_504,q_505,s_506,s_507,s_508,s_509,q_510,s_511,q_512,s_513,q_514,s_515,s_516,s_517,s_518,s_519,s_520,s_521,s_522,q_523,s_524,s_525,s_526,s_527,s_528,s_529,q_530,s_531,q_532,s_533,q_534,s_535,q_536,s_537,s_538,s_539,s_540,q_541,s_542,s_543,s_544,q_545,s_546,s_547,q_548,s_549,q_550,s_551,s_552,s_553,q_554,s_555,s_556,s_557,s_558,s_559,q_560,s_561,q_562,s_563,s_564,s_565,q_566,s_567,s_568,s_569,s_570,q_571,s_572,q_573,s_574,q_575,s_576,s_577,s_578,s_579,s_580,s_581,q_582,s_583,s_584,s_585,s_586,s_587,s_588,s_589,s_590,q_591,s_592,q_593,s_594,q_595,s_596,s_597,s_598,s_599,s_600,s_601,s_602,q_603,s_604,q_605,s_606,q_607,s_608,s_609,q_610,s_611,s_612,s_613,q_614,s_615,s_616,q_617,s_618,q_619,s_620,q_621,s_622,q_623,s_624,s_625,s_626,s_627,q_628,s_629,s_630,q_631,s_632,q_633,s_634,s_635,q_636,s_637,q_638,s_639,s_640,s_641,s_642,s_643,q_644,s_645,q_646,s_647,q_648,s_649,q_650,s_651,s_652,s_653,s_654,q_655,s_656,s_657,s_658,s_659,q_660,s_661,s_662,q_663,s_664,s_665,s_666,s_667,s_668,q_669,s_670,s_671,s_672,s_673,q_674,s_675,s_676,s_677,q_678,s_679,s_680,s_681,q_682,s_683,s_684,s_685,s_686,s_687,s_688,q_689,s_690,s_691,s_692,q_693,s_694,s_695,q_696,s_697,q_698,s_699,s_700,s_701,s_702,s_703,q_704,s_705,q_706,s_707,q_708,s_709,s_710,q_711,s_712,s_713,s_714,s_715,s_716,q_717,s_718,q_719,s_720,q_721,s_722,q_723,s_724,s_725,s_726,s_727,q_728,s_729,s_730,q_731,s_732,q_733,s_734,q_735,s_736,q_737,s_738,q_739,s_740,s_741,s_742,s_743,s_744,q_745,s_746,q_747,s_748,q_749,s_750,q_751,s_752,s_753,s_754,s_755,q_756,s_757,s_758,s_759,s_760,q_761,s_762,q_763,s_764,q_765,s_766,s_767,s_768,q_769,s_770,s_771,q_772,s_773,q_774,s_775,q_776,s_777,q_778,s_779,q_780,s_781,s_782,s_783,s_784,s_785,s_786,s_787,q_788,s_789,q_790,s_791,s_792,s_793,s_794,q_795,s_796,s_797,s_798,q_799,s_800,q_801,s_802,s_803,s_804,s_805,s_806,s_807,s_808,q_809,s_810,s_811,s_812,q_813,s_814,s_815,s_816,s_817,q_818,s_819,s_820,q_821,s_822,s_823,q_824,s_825,q_826,s_827,q_828,s_829,s_830,s_831,s_832,q_833,s_834,q_835,s_836,q_837,s_838,q_839,s_840,s_841,s_842,s_843,s_844,s_845,q_846,s_847,s_848,q_849,s_850,q_851,s_852,s_853,q_854,s_855,s_856,s_857,s_858,s_859,q_860,s_861,q_862,s_863,q_864,s_865,q_866,s_867,s_868,s_869,s_870,s_871,s_872,q_873,s_874,q_875,s_876,q_877,s_878,q_879,s_880,q_881,s_882,s_883,s_884,q_885,s_886,s_887,s_888,q_889,s_890,q_891,s_892,q_893,s_894,s_895,s_896,s_897,s_898,s_899,q_900,s_901,q_902,s_903,q_904,s_905,q_906,s_907,q_908,s_909,s_910,s_911,s_912,s_913,q_914,s_915,q_916,s_917,s_918,q_919,s_920,q_921,s_922,s_923,s_924,s_925,s_926,s_927,q_928,s_929,q_930,s_931,s_932,q_933,s_934,s_935,s_936,s_937,s_938,s_939,s_940,q_941,s_942,s_943,s_944,s_945,s_946,q_947,s_948,s_949,q_950,s_951,q_952,s_953,q_954,s_955,s_956,q_957,s_958,s_959,s_960,q_961,s_962,s_963,s_964,s_965,q_966,s_967,q_968,s_969,s_970,s_971,s_972,s_973,s_974,q_975,s_976,s_977,s_978,s_979,s_980,s_981,s_982,q_983,s_984,s_985,q_986,s_987,s_988,q_989,s_990,s_991,q_992,s_993,s_994,s_995,s_996,s_997,q_998,s_999,q_1000,s_1001,s_1002,q_1003,s_1004,q_1005,s_1006,s_1007,s_1008,s_1009,s_1010,s_1011,s_1012,q_1013,s_1014,q_1015,s_1016,q_1017,s_1018,s_1019,s_1020,q_1021,s_1022,s_1023,q_1024,s_1025,q_1026,s_1027,s_1028,q_1029,s_1030,q_1031,s_1032,s_1033,s_1034,q_1035,s_1036,s_1037,q_1038,s_1039,q_1040,s_1041,q_1042,s_1043,q_1044,s_1045,s_1046,s_1047,s_1048,s_1049,s_1050,q_1051,s_1052,s_1053,s_1054,q_1055,s_1056,s_1057,s_1058,s_1059,s_1060,s_1061,q_1062,s_1063,q_1064,s_1065,q_1066,s_1067,s_1068,s_1069,s_1070,s_1071,s_1072,s_1073,q_1074,s_1075,s_1076,q_1077,s_1078,q_1079,s_1080,q_1081,s_1082,s_1083,s_1084,q_1085,s_1086,s_1087,q_1088,s_1089,q_1090,s_1091,s_1092,s_1093,s_1094,s_1095,s_1096,s_1097,s_1098,q_1099,s_1100,q_1101,s_1102,q_1103,s_1104,s_1105,s_1106,s_1107,s_1108,s_1109,s_1110,q_1111,s_1112,q_1113,s_1114,s_1115,s_1116,q_1117,s_1118,s_1119,s_1120,q_1121,s_1122,s_1123,s_1124,q_1125,s_1126,q_1127,s_1128,s_1129,q_1130,s_1131,s_1132,s_1133,s_1134,s_1135,s_1136,q_1137,s_1138,s_1139,q_1140,s_1141,q_1142,s_1143,s_1144,s_1145,s_1146,s_1147,q_1148,s_1149,s_1150,q_1151,s_1152,q_1153,s_1154,s_1155,s_1156,s_1157,q_1158,s_1159,s_1160,s_1161,q_1162,s_1163,q_1164,s_1165,q_1166,s_1167,s_1168,s_1169,s_1170,s_1171,s_1172,q_1173,s_1174,q_1175,s_1176,q_1177,s_1178,s_1179,q_1180,s_1181,s_1182,s_1183,s_1184,s_1185,q_1186,s_1187,q_1188,s_1189,q_1190,s_1191,q_1192,s_1193,q_1194,s_1195,s_1196,s_1197,s_1198,s_1199,q_1200,s_1201,s_1202,q_1203,s_1204,q_1205,s_1206,q_1207,s_1208,s_1209,s_1210,s_1211,s_1212,s_1213,s_1214,q_1215,s_1216,s_1217,q_1218,s_1219,s_1220,s_1221,s_1222,s_1223,q_1224,s_1225,s_1226,q_1227,s_1228,q_1229,s_1230,q_1231,s_1232,s_1233,s_1234,s_1235,s_1236,s_1237,s_1238,q_1239,s_1240,q_1241,s_1242,q_1243,s_1244,s_1245,s_1246,s_1247,s_1248,q_1249,s_1250,q_1251,s_1252,q_1253,s_1254,s_1255,s_1256,s_1257,],

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