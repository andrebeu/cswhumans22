// load psiturk
var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);

var intro_instructions = {
  type: 'instructions',
  pages: ['** After reading this sentence, press spacebar. ** ',
  'Thank you for helping make science happen. (please press spacebar).',
  'Please read the following instructions carefully.',
  'This task involves reading stories and answering questions about the stories.',
  'Depending on how many questions you answer correctly, you can make up to $8.',
  'You will read 100 stories, presented one sentence at a time.',
  'Eventually you will start seeing questions that ask you to predict what happens next in the story.',
  'We will give you two alternative answers. Select the best answer with the left or right key arrow on your keyboard.',
  'Again, if you catch on to the regularities in the stories, you can make up to $8.',
  'Good luck!',
  ' ** ~ WE WILL BEGIN ~ ** '],
  data: {"type":"instruction"}
  }


// CODE BODY START


	var s_1 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_2 = {
		type: 'instructions',
		pages: ["she was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_3 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_4 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_5 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_6 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_7 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_8 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_1 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_9 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_10 = {
		type: 'instructions',
		pages: ["he knew the 'matcha roots' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_11 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized all is well beyond the library's last book shelf!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_12 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_13 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_14 = {
		type: 'instructions',
		pages: ["'Our story is that which is Real and True!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_15 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_16 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_2 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_17 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_18 = {
		type: 'instructions',
		pages: ["she was told the 'silk potion' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_19 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_20 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_21 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_22 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_23 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_24 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_3 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_25 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_26 = {
		type: 'instructions',
		pages: ["he knew the 'silk potion' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_27 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_28 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_29 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_30 = {
		type: 'instructions',
		pages: ["'Our story is never to be taken lightly!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_31 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_32 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_4 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_33 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_34 = {
		type: 'instructions',
		pages: ["she was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_35 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_36 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_37 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_38 = {
		type: 'instructions',
		pages: ["'Our narrative is all we could ever know!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_39 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_40 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_5 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_41 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_42 = {
		type: 'instructions',
		pages: ["she was told the 'silk potion' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_43 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized there was a parrot waiting in line for the bathroom!", "Before ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_44 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_45 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_46 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_47 = {
		type: 'instructions',
		pages: ["'Our story is never to be taken lightly!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_48 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_49 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_6 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_50 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_51 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she was told the 'mocha hopps' was good here.", "she knew the 'mocha hopps' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_52 = {
		type: 'instructions',
		pages: ["she was told the 'mocha hopps' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_53 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized all is well beyond the library's last book shelf!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_54 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_55 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_56 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is a serious thing to behold!'", "'Our narrative is a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_57 = {
		type: 'instructions',
		pages: ["'Our story is a serious thing to behold!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_58 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Bill transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_59 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_60 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_7 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_61 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_62 = {
		type: 'instructions',
		pages: ["he knew the 'matcha roots' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_63 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_64 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_65 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_66 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Bill then remembered his parents saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_67 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_68 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is that which is Real and True!'", "'Our narrative is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_69 = {
		type: 'instructions',
		pages: ["'Our story is that which is Real and True!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_70 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Bill was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_71 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_72 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_8 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_73 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_74 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she knew the 'muddy water' was good here.", "she was told the 'muddy water' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_75 = {
		type: 'instructions',
		pages: ["she was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_76 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized all is well beyond the library's last book shelf!", "After ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_77 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_78 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_79 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_80 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Alice then remembered her parents saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_81 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_82 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is a serious thing to behold!'", "'Our narrative is a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_83 = {
		type: 'instructions',
		pages: ["'Our story is a serious thing to behold!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_84 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported.", "That's when Alice transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_85 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_86 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_9 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_87 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_88 = {
		type: 'instructions',
		pages: ["she knew the 'silk potion' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_89 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice realized all is well beyond the library's last book shelf!", "After ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_90 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized all is well beyond the library's last book shelf!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_91 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_92 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her parents saying:", "Alice then remembered her shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_93 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_94 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is that which is Real and True!'", "'Our story is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_95 = {
		type: 'instructions',
		pages: ["'Our story is that which is Real and True!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_96 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_97 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_98 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_10 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_99 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_100 = {
		type: 'instructions',
		pages: ["she was told the 'mocha hopps' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_101 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_102 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_103 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Alice then remembered her parents saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_104 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_105 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is that which is Real and True!'", "'Our story is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_106 = {
		type: 'instructions',
		pages: ["'Our story is that which is Real and True!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_107 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Bill transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_108 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_109 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_11 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_110 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_111 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she knew the 'silk potion' was good here.", "she was told the 'silk potion' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_112 = {
		type: 'instructions',
		pages: ["she knew the 'silk potion' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_113 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice realized all is well beyond the library's last book shelf!", "After ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_114 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized all is well beyond the library's last book shelf!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_115 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_116 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_117 = {
		type: 'instructions',
		pages: ["'Our narrative is never to be taken lightly!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_118 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_119 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_120 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_12 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_121 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_122 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she knew the 'muddy water' was good here.", "she was told the 'muddy water' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_123 = {
		type: 'instructions',
		pages: ["she knew the 'muddy water' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_124 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized all is well beyond the library's last book shelf!", "Before ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_125 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized all is well beyond the library's last book shelf!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_126 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_127 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_128 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is a serious thing to behold!'", "'Our narrative is a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_129 = {
		type: 'instructions',
		pages: ["'Our story is a serious thing to behold!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_130 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported.", "That's when Alice transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_131 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_132 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_13 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_133 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_134 = {
		type: 'instructions',
		pages: ["he was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_135 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized that the mirrors reflected the labyrinth of time!", "After ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_136 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_137 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_138 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_139 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_140 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is that which is Real and True!'", "'Our narrative is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_141 = {
		type: 'instructions',
		pages: ["'Our narrative is that which is Real and True!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_142 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_143 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_14 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_144 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_145 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she knew the 'mocha hopps' was good here.", "she was told the 'mocha hopps' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_146 = {
		type: 'instructions',
		pages: ["she knew the 'mocha hopps' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_147 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice realized that Bob Dylan must have been right after all!", "After ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_148 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized that Bob Dylan must have been right after all!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_149 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_150 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_151 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is that which is Real and True!'", "'Our narrative is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_152 = {
		type: 'instructions',
		pages: ["'Our narrative is all we could ever know!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_153 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_154 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_155 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_15 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_156 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_157 = {
		type: 'instructions',
		pages: ["he was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_158 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized all is well beyond the library's last book shelf!", "After ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_159 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized that Bob Dylan must have been right after all!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_160 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_161 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_162 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_163 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is a serious thing to behold!'", "'Our narrative is a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_164 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_165 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_166 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_16 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_167 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_168 = {
		type: 'instructions',
		pages: ["he knew the 'mocha hopps' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_169 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized there was a parrot waiting in line for the bathroom!", "After ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_170 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_171 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_172 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Bill then remembered his shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_173 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_174 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_175 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_176 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_17 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_177 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_178 = {
		type: 'instructions',
		pages: ["he was told the 'matcha roots' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_179 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized there was a parrot waiting in line for the bathroom!", "After ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_180 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_181 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_182 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_183 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is all we could ever know!'", "'Our story is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_184 = {
		type: 'instructions',
		pages: ["'Our narrative is all we could ever know!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_185 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported.", "That's when Bill transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_186 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_187 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_18 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_188 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_189 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he knew the 'silk potion' was good here.", "he was told the 'silk potion' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_190 = {
		type: 'instructions',
		pages: ["he was told the 'silk potion' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_191 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized all is well beyond the library's last book shelf!", "After ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_192 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_193 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_194 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_195 = {
		type: 'instructions',
		pages: ["'Our story is never to be taken lightly!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_196 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_197 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_19 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_198 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_199 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he knew the 'mocha hopps' was good here.", "he was told the 'mocha hopps' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_200 = {
		type: 'instructions',
		pages: ["he knew the 'mocha hopps' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_201 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_202 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_203 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Bill then remembered his parents saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_204 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_205 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is a serious thing to behold!'", "'Our story is a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_206 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_207 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_208 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_20 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_209 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_210 = {
		type: 'instructions',
		pages: ["he was told the 'silk potion' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_211 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized all is well beyond the library's last book shelf!", "After ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_212 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized all is well beyond the library's last book shelf!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_213 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_214 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_215 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Bill then remembered his shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_216 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_217 = {
		type: 'instructions',
		pages: ["'Our story is a serious thing to behold!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_218 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Bill was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_219 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_220 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_21 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_221 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_222 = {
		type: 'instructions',
		pages: ["he knew the 'muddy water' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_223 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_224 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_225 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his parents saying:", "Bill then remembered his shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_226 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_227 = {
		type: 'instructions',
		pages: ["'Our narrative is all we could ever know!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_228 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Bill was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_229 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_230 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_22 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_231 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_232 = {
		type: 'instructions',
		pages: ["she knew the 'mocha hopps' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_233 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice realized that the mirrors reflected the labyrinth of time!", "After ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_234 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_235 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_236 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her parents saying:", "Alice then remembered her shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_237 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_238 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is all we could ever know!'", "'Our story is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_239 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_240 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_241 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_242 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_23 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_243 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_244 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she knew the 'matcha roots' was good here.", "she was told the 'matcha roots' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_245 = {
		type: 'instructions',
		pages: ["she was told the 'matcha roots' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_246 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_247 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_248 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her parents saying:", "Bill then remembered his parents saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "PARENTS",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_249 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_250 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is a serious thing to behold!'", "'Our narrative is a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_251 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_252 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported.", "That's when Alice transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_253 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_254 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_24 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_255 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_256 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he was told the 'mocha hopps' was good here.", "he knew the 'mocha hopps' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_257 = {
		type: 'instructions',
		pages: ["he knew the 'mocha hopps' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_258 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized that Bob Dylan must have been right after all!", "After ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_259 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized that Bob Dylan must have been right after all!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_260 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_261 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_262 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_263 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is that which is Real and True!'", "'Our narrative is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_264 = {
		type: 'instructions',
		pages: ["'Our story is that which is Real and True!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_265 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Alice transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_266 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_267 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_25 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_268 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_269 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she was told the 'mocha hopps' was good here.", "she knew the 'mocha hopps' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_270 = {
		type: 'instructions',
		pages: ["she was told the 'mocha hopps' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_271 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized that the mirrors reflected the labyrinth of time!", "Before ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_272 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_273 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_274 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Alice then remembered her parents saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_275 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_276 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is a serious thing to behold!'", "'Our story is a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_277 = {
		type: 'instructions',
		pages: ["'Our story is a serious thing to behold!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_278 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_279 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_26 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_280 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_281 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he knew the 'mocha hopps' was good here.", "he was told the 'mocha hopps' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_282 = {
		type: 'instructions',
		pages: ["he knew the 'mocha hopps' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_283 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized that Bob Dylan must have been right after all!", "Before ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_284 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized that Bob Dylan must have been right after all!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_285 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_286 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Bill then remembered his parents saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_287 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_288 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_289 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported.", "That's when Bill transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_290 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_291 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_27 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_292 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_293 = {
		type: 'instructions',
		pages: ["she knew the 'mocha hopps' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_294 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_295 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_296 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_297 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is never to be taken lightly!'", "'Our story is never to be taken lightly!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_298 = {
		type: 'instructions',
		pages: ["'Our story is never to be taken lightly!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_299 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported.", "That's when Alice transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_300 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_301 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_28 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_302 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_303 = {
		type: 'instructions',
		pages: ["she knew the 'matcha roots' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_304 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized that the mirrors reflected the labyrinth of time!", "Before ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_305 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_306 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_307 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_308 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Alice then remembered her parents saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_309 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_310 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is never to be taken lightly!'", "'Our narrative is never to be taken lightly!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_311 = {
		type: 'instructions',
		pages: ["'Our story is never to be taken lightly!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_312 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Alice transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_313 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_314 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_29 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_315 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_316 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she knew the 'matcha roots' was good here.", "she was told the 'matcha roots' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_317 = {
		type: 'instructions',
		pages: ["she was told the 'matcha roots' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_318 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice realized there was a parrot waiting in line for the bathroom!", "Before ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_319 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_320 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_321 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_322 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is a serious thing to behold!'", "'Our narrative is a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_323 = {
		type: 'instructions',
		pages: ["'Our story is a serious thing to behold!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_324 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_325 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_30 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_326 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_327 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he was told the 'mocha hopps' was good here.", "he knew the 'mocha hopps' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_328 = {
		type: 'instructions',
		pages: ["he was told the 'mocha hopps' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_329 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized that the mirrors reflected the labyrinth of time!", "After ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_330 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_331 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_332 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_333 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is all we could ever know!'", "'Our story is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_334 = {
		type: 'instructions',
		pages: ["'Our narrative is all we could ever know!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_335 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported.", "That's when Bill transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_336 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_337 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_31 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_338 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_339 = {
		type: 'instructions',
		pages: ["he knew the 'matcha roots' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_340 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized that Bob Dylan must have been right after all!", "Before ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_341 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized that Bob Dylan must have been right after all!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_342 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_343 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_344 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his parents saying:", "Bill then remembered his shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_345 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_346 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is never to be taken lightly!'", "'Our narrative is never to be taken lightly!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_347 = {
		type: 'instructions',
		pages: ["'Our story is never to be taken lightly!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_348 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Bill was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_349 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_350 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_32 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_351 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_352 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he was told the 'mocha hopps' was good here.", "he knew the 'mocha hopps' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_353 = {
		type: 'instructions',
		pages: ["he was told the 'mocha hopps' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_354 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized all is well beyond the library's last book shelf!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_355 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_356 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_357 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Bill then remembered his parents saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_358 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_359 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_360 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported.", "That's when Bill transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_361 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_362 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_33 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_363 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_364 = {
		type: 'instructions',
		pages: ["she was told the 'mocha hopps' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_365 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_366 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_367 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_368 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is a serious thing to behold!'", "'Our story is a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_369 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_370 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_371 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_34 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_372 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_373 = {
		type: 'instructions',
		pages: ["she was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_374 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized all is well beyond the library's last book shelf!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_375 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_376 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_377 = {
		type: 'instructions',
		pages: ["'Our story is that which is Real and True!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_378 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_379 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_380 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_35 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_381 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_382 = {
		type: 'instructions',
		pages: ["she was told the 'silk potion' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_383 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_384 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'", "Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_385 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_386 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Alice then remembered her parents saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_387 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_388 = {
		type: 'instructions',
		pages: ["'Our narrative is that which is Real and True!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_389 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_390 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_391 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_36 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_392 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_393 = {
		type: 'instructions',
		pages: ["he was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_394 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized there was a parrot waiting in line for the bathroom!", "After ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_395 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_396 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_397 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his parents saying:", "Bill then remembered his shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_398 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_399 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is that which is Real and True!'", "'Our story is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_400 = {
		type: 'instructions',
		pages: ["'Our narrative is that which is Real and True!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_401 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_402 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_37 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_403 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_404 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he knew the 'mocha hopps' was good here.", "he was told the 'mocha hopps' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_405 = {
		type: 'instructions',
		pages: ["he was told the 'mocha hopps' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_406 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized all is well beyond the library's last book shelf!", "After ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_407 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized all is well beyond the library's last book shelf!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_408 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_409 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_410 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Bill then remembered his shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_411 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_412 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is a serious thing to behold!'", "'Our story is a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_413 = {
		type: 'instructions',
		pages: ["'Our story is a serious thing to behold!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_414 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported.", "That's when Bill transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_415 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_416 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_38 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_417 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_418 = {
		type: 'instructions',
		pages: ["he knew the 'muddy water' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_419 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized that the mirrors reflected the labyrinth of time!", "After ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_420 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_421 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_422 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_423 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_424 = {
		type: 'instructions',
		pages: ["'Our story is that which is Real and True!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_425 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_426 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_39 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_427 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_428 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he knew the 'silk potion' was good here.", "he was told the 'silk potion' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_429 = {
		type: 'instructions',
		pages: ["he was told the 'silk potion' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_430 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized that Bob Dylan must have been right after all!", "After ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_431 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized that Bob Dylan must have been right after all!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_432 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_433 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_434 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_435 = {
		type: 'instructions',
		pages: ["'Our narrative is all we could ever know!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_436 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_437 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_40 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_438 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_439 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he knew the 'mocha hopps' was good here.", "he was told the 'mocha hopps' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_440 = {
		type: 'instructions',
		pages: ["he knew the 'mocha hopps' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_441 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized that Bob Dylan must have been right after all!", "After ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_442 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized that Bob Dylan must have been right after all!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_443 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_444 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_445 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is that which is Real and True!'", "'Our story is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_446 = {
		type: 'instructions',
		pages: ["'Our story is that which is Real and True!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_447 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_448 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_41 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_449 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_450 = {
		type: 'instructions',
		pages: ["she knew the 'matcha roots' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_451 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized there was a parrot waiting in line for the bathroom!", "Before ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_452 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_453 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BEFORE",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_454 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_455 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Alice then remembered her parents saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_456 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_457 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is that which is Real and True!'", "'Our narrative is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_458 = {
		type: 'instructions',
		pages: ["'Our narrative is that which is Real and True!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_459 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_460 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_42 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_461 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_462 = {
		type: 'instructions',
		pages: ["she was told the 'silk potion' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_463 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized that the mirrors reflected the labyrinth of time!", "Before ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_464 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_465 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_466 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_467 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is a serious thing to behold!'", "'Our story is a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_468 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_469 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_470 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_43 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_471 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_472 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she was told the 'muddy water' was good here.", "she knew the 'muddy water' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_473 = {
		type: 'instructions',
		pages: ["she knew the 'muddy water' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_474 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_475 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_476 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_477 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_478 = {
		type: 'instructions',
		pages: ["'Our narrative is all we could ever know!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_479 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported.", "That's when Alice transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_480 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_481 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_44 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_482 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_483 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he knew the 'matcha roots' was good here.", "he was told the 'matcha roots' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_484 = {
		type: 'instructions',
		pages: ["he was told the 'matcha roots' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_485 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized that Bob Dylan must have been right after all!", "Before ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_486 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized that Bob Dylan must have been right after all!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_487 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_488 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his parents saying:", "Bill then remembered his shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_489 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_490 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is never to be taken lightly!'", "'Our narrative is never to be taken lightly!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_491 = {
		type: 'instructions',
		pages: ["'Our story is never to be taken lightly!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_492 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_493 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_45 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_494 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_495 = {
		type: 'instructions',
		pages: ["she was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_496 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice realized that the mirrors reflected the labyrinth of time!", "After ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_497 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_498 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_499 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_500 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_501 = {
		type: 'instructions',
		pages: ["'Our story is a serious thing to behold!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_502 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_503 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_46 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_504 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_505 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she was told the 'matcha roots' was good here.", "she knew the 'matcha roots' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_506 = {
		type: 'instructions',
		pages: ["she knew the 'matcha roots' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_507 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice realized that the mirrors reflected the labyrinth of time!", "After ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_508 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_509 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'", "Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_510 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_511 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_512 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_513 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_514 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_47 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_515 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_516 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he was told the 'muddy water' was good here.", "he knew the 'muddy water' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_517 = {
		type: 'instructions',
		pages: ["he knew the 'muddy water' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_518 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized there was a parrot waiting in line for the bathroom!", "After ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_519 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_520 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_521 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_522 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his parents saying:", "Bill then remembered his shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_523 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_524 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is that which is Real and True!'", "'Our story is never to be taken lightly!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_525 = {
		type: 'instructions',
		pages: ["'Our story is that which is Real and True!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_526 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Alice transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_527 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_528 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_48 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_529 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_530 = {
		type: 'instructions',
		pages: ["he was told the 'silk potion' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_531 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_532 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'", "Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_533 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_534 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Bill then remembered his shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_535 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_536 = {
		type: 'instructions',
		pages: ["'Our story is a serious thing to behold!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_537 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_538 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_49 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_539 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_540 = {
		type: 'instructions',
		pages: ["he was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_541 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized that Bob Dylan must have been right after all!", "Before ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_542 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized that Bob Dylan must have been right after all!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_543 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_544 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_545 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_546 = {
		type: 'instructions',
		pages: ["'Our story is never to be taken lightly!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_547 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Bill was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_548 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_549 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_50 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_550 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_551 = {
		type: 'instructions',
		pages: ["she was told the 'mocha hopps' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_552 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that Bob Dylan must have been right after all!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_553 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_554 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_555 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_556 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_557 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_558 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_51 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_559 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_560 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she knew the 'mocha hopps' was good here.", "she was told the 'mocha hopps' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_561 = {
		type: 'instructions',
		pages: ["she knew the 'mocha hopps' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_562 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized there was a parrot waiting in line for the bathroom!", "Before ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_563 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_564 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_565 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_566 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her parents saying:", "Alice then remembered her shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_567 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_568 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_569 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_570 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_52 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_571 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_572 = {
		type: 'instructions',
		pages: ["he was told the 'matcha roots' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_573 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized there was a parrot waiting in line for the bathroom!", "Before ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_574 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_575 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_576 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_577 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_578 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is never to be taken lightly!'", "'Our narrative is never to be taken lightly!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_579 = {
		type: 'instructions',
		pages: ["'Our narrative is never to be taken lightly!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_580 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_581 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_53 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_582 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_583 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she knew the 'matcha roots' was good here.", "she was told the 'matcha roots' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_584 = {
		type: 'instructions',
		pages: ["she knew the 'matcha roots' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_585 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized all is well beyond the library's last book shelf!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_586 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_587 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_588 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Alice then remembered her parents saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_589 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_590 = {
		type: 'instructions',
		pages: ["'Our story is never to be taken lightly!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_591 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_592 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_593 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_54 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_594 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_595 = {
		type: 'instructions',
		pages: ["she was told the 'mocha hopps' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_596 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_597 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_598 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Alice then remembered her parents saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_599 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_600 = {
		type: 'instructions',
		pages: ["'Our narrative is that which is Real and True!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_601 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_602 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_55 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_603 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_604 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he was told the 'matcha roots' was good here.", "he knew the 'matcha roots' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_605 = {
		type: 'instructions',
		pages: ["he knew the 'matcha roots' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_606 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_607 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_608 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_609 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his parents saying:", "Bill then remembered his shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_610 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_611 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is a serious thing to behold!'", "'Our story is a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_612 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_613 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported.", "That's when Alice was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_614 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_615 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_56 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_616 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_617 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she was told the 'silk potion' was good here.", "she knew the 'silk potion' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_618 = {
		type: 'instructions',
		pages: ["she knew the 'silk potion' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_619 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_620 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_621 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her parents saying:", "Bill then remembered his parents saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_622 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_623 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is a serious thing to behold!'", "'Our narrative is a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_624 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_625 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_626 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_57 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_627 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_628 = {
		type: 'instructions',
		pages: ["he was told the 'matcha roots' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_629 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized there was a parrot waiting in line for the bathroom!", "Before ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_630 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_631 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_632 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_633 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is a serious thing to behold!'", "'Our narrative is a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_634 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_635 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_636 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_58 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_637 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_638 = {
		type: 'instructions',
		pages: ["she was told the 'silk potion' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_639 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_640 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'", "Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_641 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_642 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_643 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is all we could ever know!'", "'Our story is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_644 = {
		type: 'instructions',
		pages: ["'Our narrative is all we could ever know!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_645 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_646 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_647 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_59 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_648 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_649 = {
		type: 'instructions',
		pages: ["he was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_650 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized that Bob Dylan must have been right after all!", "After ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_651 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized that Bob Dylan must have been right after all!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_652 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_653 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_654 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his parents saying:", "Bill then remembered his shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_655 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_656 = {
		type: 'instructions',
		pages: ["'Our narrative is all we could ever know!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_657 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Bill was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_658 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_659 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_60 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_660 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_661 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she was told the 'muddy water' was good here.", "she knew the 'muddy water' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_662 = {
		type: 'instructions',
		pages: ["she was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_663 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized there was a parrot waiting in line for the bathroom!", "Before ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_664 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_665 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_666 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_667 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is that which is Real and True!'", "'Our story is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_668 = {
		type: 'instructions',
		pages: ["'Our narrative is that which is Real and True!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_669 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_670 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_671 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_61 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_672 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_673 = {
		type: 'instructions',
		pages: ["she was told the 'mocha hopps' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_674 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice realized all is well beyond the library's last book shelf!", "After ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_675 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized all is well beyond the library's last book shelf!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_676 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_677 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_678 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Alice then remembered her shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_679 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_680 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is that which is Real and True!'", "'Our story is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_681 = {
		type: 'instructions',
		pages: ["'Our story is that which is Real and True!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_682 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_683 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_684 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_62 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_685 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_686 = {
		type: 'instructions',
		pages: ["she knew the 'muddy water' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_687 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice realized all is well beyond the library's last book shelf!", "After ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_688 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized all is well beyond the library's last book shelf!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_689 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_690 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_691 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_692 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is never to be taken lightly!'", "'Our story is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_693 = {
		type: 'instructions',
		pages: ["'Our story is never to be taken lightly!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_694 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported.", "That's when Alice transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_695 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_696 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_63 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_697 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_698 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she was told the 'muddy water' was good here.", "she knew the 'muddy water' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_699 = {
		type: 'instructions',
		pages: ["she knew the 'muddy water' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_700 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice realized all is well beyond the library's last book shelf!", "After ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_701 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized all is well beyond the library's last book shelf!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_702 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_703 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_704 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is a serious thing to behold!'", "'Our narrative is a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_705 = {
		type: 'instructions',
		pages: ["'Our story is a serious thing to behold!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_706 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported.", "That's when Alice transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_707 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_708 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_64 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_709 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_710 = {
		type: 'instructions',
		pages: ["he was told the 'silk potion' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_711 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized that Bob Dylan must have been right after all!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_712 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_713 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_714 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Bill then remembered his parents saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_715 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_716 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is all we could ever know!'", "'Our story is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_717 = {
		type: 'instructions',
		pages: ["'Our narrative is all we could ever know!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_718 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_719 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_65 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_720 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_721 = {
		type: 'instructions',
		pages: ["he knew the 'muddy water' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_722 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized that Bob Dylan must have been right after all!", "After ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_723 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized that Bob Dylan must have been right after all!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_724 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'", "Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_725 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_726 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his parents saying:", "Bill then remembered his shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_727 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_728 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is a serious thing to behold!'", "'Our story is a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_729 = {
		type: 'instructions',
		pages: ["'Our story is a serious thing to behold!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_730 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Bill was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_731 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_732 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_66 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_733 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_734 = {
		type: 'instructions',
		pages: ["he knew the 'muddy water' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_735 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized that Bob Dylan must have been right after all!", "Before ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_736 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized that Bob Dylan must have been right after all!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_737 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_738 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_739 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is a serious thing to behold!'", "'Our narrative is a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_740 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_741 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported.", "That's when Bill transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_742 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_743 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_67 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_744 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_745 = {
		type: 'instructions',
		pages: ["she knew the 'silk potion' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_746 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized there was a parrot waiting in line for the bathroom!", "Before ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_747 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_748 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_749 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Alice then remembered her parents saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_750 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_751 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is a serious thing to behold!'", "'Our narrative is a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_752 = {
		type: 'instructions',
		pages: ["'Our story is a serious thing to behold!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_753 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_754 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_68 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_755 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_756 = {
		type: 'instructions',
		pages: ["he knew the 'matcha roots' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_757 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized all is well beyond the library's last book shelf!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_758 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_759 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Bill then remembered his shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_760 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_761 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_762 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_763 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_69 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_764 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_765 = {
		type: 'instructions',
		pages: ["she was told the 'matcha roots' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_766 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized that the mirrors reflected the labyrinth of time!", "Before ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_767 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_768 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_769 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_770 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her parents saying:", "Alice then remembered her shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_771 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_772 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is that which is Real and True!'", "'Our story is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_773 = {
		type: 'instructions',
		pages: ["'Our story is that which is Real and True!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_774 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_775 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_70 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_776 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_777 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he was told the 'muddy water' was good here.", "he knew the 'muddy water' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_778 = {
		type: 'instructions',
		pages: ["he was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_779 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_780 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_781 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_782 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_783 = {
		type: 'instructions',
		pages: ["'Our narrative is all we could ever know!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_784 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Bill was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_785 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_786 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_71 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_787 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_788 = {
		type: 'instructions',
		pages: ["she knew the 'mocha hopps' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_789 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized all is well beyond the library's last book shelf!", "Before ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_790 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized all is well beyond the library's last book shelf!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_791 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_792 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_793 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Alice then remembered her parents saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_794 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_795 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is a serious thing to behold!'", "'Our narrative is a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_796 = {
		type: 'instructions',
		pages: ["'Our story is a serious thing to behold!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_797 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_798 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_799 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_72 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_800 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_801 = {
		type: 'instructions',
		pages: ["she was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_802 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice realized that Bob Dylan must have been right after all!", "After ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_803 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that Bob Dylan must have been right after all!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_804 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_805 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_806 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is all we could ever know!'", "'Our story is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_807 = {
		type: 'instructions',
		pages: ["'Our narrative is all we could ever know!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_808 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_809 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_810 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_73 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_811 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_812 = {
		type: 'instructions',
		pages: ["she was told the 'mocha hopps' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_813 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that Bob Dylan must have been right after all!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_814 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_815 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_816 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is that which is Real and True!'", "'Our narrative is a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_817 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_818 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Alice transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_819 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_820 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_74 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_821 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_822 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she knew the 'mocha hopps' was good here.", "she was told the 'mocha hopps' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_823 = {
		type: 'instructions',
		pages: ["she was told the 'mocha hopps' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_824 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_825 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_826 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_827 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_828 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_829 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_830 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_75 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_831 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_832 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he was told the 'mocha hopps' was good here.", "he knew the 'mocha hopps' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_833 = {
		type: 'instructions',
		pages: ["he was told the 'mocha hopps' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_834 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized all is well beyond the library's last book shelf!", "After ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_835 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized all is well beyond the library's last book shelf!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_836 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'", "Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_837 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_838 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Bill then remembered his parents saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_839 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_840 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is a serious thing to behold!'", "'Our story is a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_841 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_842 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_843 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_76 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_844 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_845 = {
		type: 'instructions',
		pages: ["he knew the 'silk potion' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_846 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized that Bob Dylan must have been right after all!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_847 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'", "Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BEFORE",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_848 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_849 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_850 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_851 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_852 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_77 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_853 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_854 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she knew the 'muddy water' was good here.", "she was told the 'muddy water' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_855 = {
		type: 'instructions',
		pages: ["she was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_856 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized all is well beyond the library's last book shelf!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_857 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'", "Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_858 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_859 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her parents saying:", "Alice then remembered her shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_860 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_861 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is that which is Real and True!'", "'Our story is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_862 = {
		type: 'instructions',
		pages: ["'Our narrative is that which is Real and True!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_863 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_864 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_78 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_865 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_866 = {
		type: 'instructions',
		pages: ["she knew the 'mocha hopps' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_867 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized all is well beyond the library's last book shelf!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_868 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_869 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_870 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Alice then remembered her parents saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_871 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_872 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is a serious thing to behold!'", "'Our story is a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_873 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_874 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Alice transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_875 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_876 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_79 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_877 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_878 = {
		type: 'instructions',
		pages: ["she knew the 'mocha hopps' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_879 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that Bob Dylan must have been right after all!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_880 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'", "Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_881 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_882 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_883 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is a serious thing to behold!'", "'Our story is a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_884 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_885 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_886 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_80 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_887 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_888 = {
		type: 'instructions',
		pages: ["he knew the 'muddy water' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_889 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized there was a parrot waiting in line for the bathroom!", "After ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_890 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_891 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_892 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his parents saying:", "Bill then remembered his shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_893 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_894 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is that which is Real and True!'", "'Our story is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_895 = {
		type: 'instructions',
		pages: ["'Our narrative is that which is Real and True!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_896 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported.", "That's when Bill transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_897 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_898 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_81 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_899 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_900 = {
		type: 'instructions',
		pages: ["he knew the 'muddy water' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_901 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized all is well beyond the library's last book shelf!", "Before ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_902 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized all is well beyond the library's last book shelf!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_903 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_904 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his parents saying:", "Bill then remembered his shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_905 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_906 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is all we could ever know!'", "'Our story is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_907 = {
		type: 'instructions',
		pages: ["'Our narrative is all we could ever know!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_908 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Bill was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_909 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_910 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_82 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_911 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_912 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she was told the 'mocha hopps' was good here.", "she knew the 'mocha hopps' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_913 = {
		type: 'instructions',
		pages: ["she was told the 'mocha hopps' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_914 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_915 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_916 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_917 = {
		type: 'instructions',
		pages: ["'Our narrative is all we could ever know!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_918 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported.", "That's when Alice transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_919 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_920 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_83 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_921 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_922 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he was told the 'mocha hopps' was good here.", "he knew the 'mocha hopps' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_923 = {
		type: 'instructions',
		pages: ["he was told the 'mocha hopps' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_924 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized all is well beyond the library's last book shelf!", "Before ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_925 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized all is well beyond the library's last book shelf!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_926 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_927 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_928 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_929 = {
		type: 'instructions',
		pages: ["'Our story is a serious thing to behold!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_930 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported.", "That's when Bill transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_931 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_932 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_84 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_933 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_934 = {
		type: 'instructions',
		pages: ["she was told the 'matcha roots' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_935 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_936 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_937 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_938 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_939 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_940 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_941 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_942 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_85 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_943 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_944 = {
		type: 'instructions',
		pages: ["she knew the 'muddy water' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_945 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized there was a parrot waiting in line for the bathroom!", "Before ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_946 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_947 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_948 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_949 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Alice then remembered her parents saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_950 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_951 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_952 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_953 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_954 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_86 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_955 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_956 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he knew the 'matcha roots' was good here.", "he was told the 'matcha roots' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_957 = {
		type: 'instructions',
		pages: ["he knew the 'matcha roots' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_958 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized there was a parrot waiting in line for the bathroom!", "Before ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_959 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_960 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_961 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_962 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Bill then remembered his parents saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_963 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_964 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is that which is Real and True!'", "'Our narrative is never to be taken lightly!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_965 = {
		type: 'instructions',
		pages: ["'Our narrative is never to be taken lightly!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_966 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_967 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_87 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_968 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_969 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she knew the 'muddy water' was good here.", "she was told the 'muddy water' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_970 = {
		type: 'instructions',
		pages: ["she knew the 'muddy water' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_971 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized that Bob Dylan must have been right after all!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_972 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_973 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Alice then remembered her parents saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_974 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_975 = {
		type: 'instructions',
		pages: ["'Our story is never to be taken lightly!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_976 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_977 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_88 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_978 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_979 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she knew the 'muddy water' was good here.", "she was told the 'muddy water' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_980 = {
		type: 'instructions',
		pages: ["she knew the 'muddy water' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_981 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice realized there was a parrot waiting in line for the bathroom!", "After ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_982 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_983 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BEFORE",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_984 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_985 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her parents saying:", "Alice then remembered her shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_986 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_987 = {
		type: 'instructions',
		pages: ["'Our narrative is all we could ever know!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_988 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported.", "That's when Alice transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_989 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_990 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_89 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_991 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_992 = {
		type: 'instructions',
		pages: ["she was told the 'matcha roots' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_993 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized that Bob Dylan must have been right after all!", "Before ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_994 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that Bob Dylan must have been right after all!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_995 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_996 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_997 = {
		type: 'instructions',
		pages: ["'Our story is a serious thing to behold!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_998 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_999 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_90 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1000 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1001 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she was told the 'mocha hopps' was good here.", "she knew the 'mocha hopps' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1002 = {
		type: 'instructions',
		pages: ["she was told the 'mocha hopps' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1003 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized all is well beyond the library's last book shelf!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1004 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'", "Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1005 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1006 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1007 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1008 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported.", "That's when Alice transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1009 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1010 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_91 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1011 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1012 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he was told the 'silk potion' was good here.", "he knew the 'silk potion' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1013 = {
		type: 'instructions',
		pages: ["he knew the 'silk potion' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1014 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1015 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1016 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Bill then remembered his parents saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1017 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1018 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is a serious thing to behold!'", "'Our story is a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1019 = {
		type: 'instructions',
		pages: ["'Our story is a serious thing to behold!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1020 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Bill was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1021 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1022 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_92 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1023 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1024 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he knew the 'muddy water' was good here.", "he was told the 'muddy water' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1025 = {
		type: 'instructions',
		pages: ["he was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1026 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized that the mirrors reflected the labyrinth of time!", "Before ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1027 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1028 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1029 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1030 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his parents saying:", "Bill then remembered his shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1031 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1032 = {
		type: 'instructions',
		pages: ["'Our narrative is all we could ever know!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1033 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported.", "That's when Alice was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1034 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1035 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_93 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1036 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1037 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he knew the 'silk potion' was good here.", "he was told the 'silk potion' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1038 = {
		type: 'instructions',
		pages: ["he was told the 'silk potion' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1039 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized that Bob Dylan must have been right after all!", "After ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1040 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized that Bob Dylan must have been right after all!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1041 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1042 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1043 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1044 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1045 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Bill was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1046 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1047 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_94 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1048 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1049 = {
		type: 'instructions',
		pages: ["he knew the 'silk potion' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1050 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized all is well beyond the library's last book shelf!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1051 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1052 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1053 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his parents saying:", "Bill then remembered his shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1054 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1055 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is never to be taken lightly!'", "'Our narrative is never to be taken lightly!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1056 = {
		type: 'instructions',
		pages: ["'Our story is never to be taken lightly!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1057 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported.", "That's when Bill transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1058 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1059 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_95 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1060 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1061 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she was told the 'mocha hopps' was good here.", "she knew the 'mocha hopps' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1062 = {
		type: 'instructions',
		pages: ["she knew the 'mocha hopps' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1063 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice realized that Bob Dylan must have been right after all!", "After ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1064 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized that Bob Dylan must have been right after all!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1065 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1066 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her parents saying:", "Alice then remembered her shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1067 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1068 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is that which is Real and True!'", "'Our story is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1069 = {
		type: 'instructions',
		pages: ["'Our narrative is that which is Real and True!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1070 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1071 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_96 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1072 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1073 = {
		type: 'instructions',
		pages: ["he knew the 'silk potion' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1074 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice realized that Bob Dylan must have been right after all!", "Before ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1075 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized all is well beyond the library's last book shelf!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1076 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1077 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1078 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Bill then remembered his parents saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1079 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1080 = {
		type: 'instructions',
		pages: ["'Our story is never to be taken lightly!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1081 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Bill was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1082 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1083 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_97 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1084 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1085 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he was told the 'silk potion' was good here.", "he knew the 'silk potion' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1086 = {
		type: 'instructions',
		pages: ["he was told the 'silk potion' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1087 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized all is well beyond the library's last book shelf!", "Before ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1088 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized all is well beyond the library's last book shelf!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1089 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1090 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his parents saying:", "Bill then remembered his shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1091 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1092 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is all we could ever know!'", "'Our narrative is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1093 = {
		type: 'instructions',
		pages: ["'Our narrative is all we could ever know!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1094 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1095 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_98 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1096 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1097 = {
		type: 'instructions',
		pages: ["he knew the 'mocha hopps' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1098 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1099 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1100 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1101 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her parents saying:", "Bill then remembered his parents saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1102 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1103 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1104 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1105 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_99 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1106 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1107 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he knew the 'silk potion' was good here.", "he was told the 'silk potion' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1108 = {
		type: 'instructions',
		pages: ["he knew the 'silk potion' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1109 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized that the mirrors reflected the labyrinth of time!", "Before ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1110 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1111 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1112 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1113 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1114 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is a serious thing to behold!'", "'Our narrative is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1115 = {
		type: 'instructions',
		pages: ["'Our narrative is that which is Real and True!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1116 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1117 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_100 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 


// CODE BODY END

jsPsych.init({
  timeline: [intro_instructions,s_1,s_2,s_3,s_4,s_5,s_6,s_7,s_8,betweenstory_1,s_9,s_10,s_11,s_12,s_13,s_14,s_15,s_16,betweenstory_2,s_17,s_18,s_19,s_20,s_21,s_22,s_23,s_24,betweenstory_3,s_25,s_26,s_27,s_28,s_29,s_30,s_31,s_32,betweenstory_4,s_33,s_34,s_35,s_36,s_37,s_38,s_39,s_40,betweenstory_5,s_41,s_42,q_43,s_44,s_45,s_46,s_47,s_48,s_49,betweenstory_6,s_50,q_51,s_52,s_53,s_54,s_55,q_56,s_57,q_58,s_59,s_60,betweenstory_7,s_61,s_62,s_63,q_64,s_65,q_66,s_67,q_68,s_69,q_70,s_71,s_72,betweenstory_8,s_73,q_74,s_75,q_76,s_77,q_78,s_79,q_80,s_81,q_82,s_83,q_84,s_85,s_86,betweenstory_9,s_87,s_88,q_89,s_90,s_91,q_92,s_93,q_94,s_95,q_96,s_97,s_98,betweenstory_10,s_99,s_100,s_101,s_102,q_103,s_104,q_105,s_106,q_107,s_108,s_109,betweenstory_11,s_110,q_111,s_112,q_113,s_114,s_115,s_116,s_117,q_118,s_119,s_120,betweenstory_12,s_121,q_122,s_123,q_124,s_125,s_126,s_127,q_128,s_129,q_130,s_131,s_132,betweenstory_13,s_133,s_134,q_135,s_136,q_137,s_138,s_139,q_140,s_141,s_142,s_143,betweenstory_14,s_144,q_145,s_146,q_147,s_148,s_149,s_150,q_151,s_152,q_153,s_154,s_155,betweenstory_15,s_156,s_157,q_158,s_159,q_160,s_161,s_162,q_163,s_164,s_165,s_166,betweenstory_16,s_167,s_168,q_169,s_170,s_171,q_172,s_173,s_174,s_175,s_176,betweenstory_17,s_177,s_178,q_179,s_180,s_181,s_182,q_183,s_184,q_185,s_186,s_187,betweenstory_18,s_188,q_189,s_190,q_191,s_192,s_193,s_194,s_195,s_196,s_197,betweenstory_19,s_198,q_199,s_200,s_201,s_202,q_203,s_204,q_205,s_206,s_207,s_208,betweenstory_20,s_209,s_210,q_211,s_212,q_213,s_214,q_215,s_216,s_217,q_218,s_219,s_220,betweenstory_21,s_221,s_222,s_223,s_224,q_225,s_226,s_227,q_228,s_229,s_230,betweenstory_22,s_231,s_232,q_233,s_234,s_235,q_236,s_237,q_238,s_239,q_240,s_241,s_242,betweenstory_23,s_243,q_244,s_245,s_246,s_247,q_248,s_249,q_250,s_251,q_252,s_253,s_254,betweenstory_24,s_255,q_256,s_257,q_258,s_259,q_260,s_261,s_262,q_263,s_264,q_265,s_266,s_267,betweenstory_25,s_268,q_269,s_270,q_271,s_272,s_273,q_274,s_275,q_276,s_277,s_278,s_279,betweenstory_26,s_280,q_281,s_282,q_283,s_284,s_285,q_286,s_287,s_288,q_289,s_290,s_291,betweenstory_27,s_292,s_293,s_294,s_295,s_296,q_297,s_298,q_299,s_300,s_301,betweenstory_28,s_302,s_303,q_304,s_305,q_306,s_307,q_308,s_309,q_310,s_311,q_312,s_313,s_314,betweenstory_29,s_315,q_316,s_317,q_318,s_319,s_320,s_321,q_322,s_323,s_324,s_325,betweenstory_30,s_326,q_327,s_328,q_329,s_330,s_331,s_332,q_333,s_334,q_335,s_336,s_337,betweenstory_31,s_338,s_339,q_340,s_341,q_342,s_343,q_344,s_345,q_346,s_347,q_348,s_349,s_350,betweenstory_32,s_351,q_352,s_353,s_354,q_355,s_356,q_357,s_358,s_359,q_360,s_361,s_362,betweenstory_33,s_363,s_364,s_365,s_366,s_367,q_368,s_369,s_370,s_371,betweenstory_34,s_372,s_373,s_374,s_375,s_376,s_377,q_378,s_379,s_380,betweenstory_35,s_381,s_382,s_383,q_384,s_385,q_386,s_387,s_388,q_389,s_390,s_391,betweenstory_36,s_392,s_393,q_394,s_395,s_396,q_397,s_398,q_399,s_400,s_401,s_402,betweenstory_37,s_403,q_404,s_405,q_406,s_407,q_408,s_409,q_410,s_411,q_412,s_413,q_414,s_415,s_416,betweenstory_38,s_417,s_418,q_419,s_420,q_421,s_422,s_423,s_424,s_425,s_426,betweenstory_39,s_427,q_428,s_429,q_430,s_431,q_432,s_433,s_434,s_435,s_436,s_437,betweenstory_40,s_438,q_439,s_440,q_441,s_442,s_443,s_444,q_445,s_446,s_447,s_448,betweenstory_41,s_449,s_450,q_451,s_452,q_453,s_454,q_455,s_456,q_457,s_458,s_459,s_460,betweenstory_42,s_461,s_462,q_463,s_464,s_465,s_466,q_467,s_468,s_469,s_470,betweenstory_43,s_471,q_472,s_473,s_474,q_475,s_476,s_477,s_478,q_479,s_480,s_481,betweenstory_44,s_482,q_483,s_484,q_485,s_486,s_487,q_488,s_489,q_490,s_491,s_492,s_493,betweenstory_45,s_494,s_495,q_496,s_497,q_498,s_499,s_500,s_501,s_502,s_503,betweenstory_46,s_504,q_505,s_506,q_507,s_508,q_509,s_510,s_511,s_512,s_513,s_514,betweenstory_47,s_515,q_516,s_517,q_518,s_519,q_520,s_521,q_522,s_523,q_524,s_525,q_526,s_527,s_528,betweenstory_48,s_529,s_530,s_531,q_532,s_533,q_534,s_535,s_536,s_537,s_538,betweenstory_49,s_539,s_540,q_541,s_542,q_543,s_544,s_545,s_546,q_547,s_548,s_549,betweenstory_50,s_550,s_551,s_552,q_553,s_554,s_555,s_556,s_557,s_558,betweenstory_51,s_559,q_560,s_561,q_562,s_563,q_564,s_565,q_566,s_567,s_568,s_569,s_570,betweenstory_52,s_571,s_572,q_573,s_574,q_575,s_576,s_577,q_578,s_579,s_580,s_581,betweenstory_53,s_582,q_583,s_584,s_585,q_586,s_587,q_588,s_589,s_590,q_591,s_592,s_593,betweenstory_54,s_594,s_595,s_596,s_597,q_598,s_599,s_600,s_601,s_602,betweenstory_55,s_603,q_604,s_605,s_606,q_607,s_608,q_609,s_610,q_611,s_612,q_613,s_614,s_615,betweenstory_56,s_616,q_617,s_618,s_619,s_620,q_621,s_622,q_623,s_624,s_625,s_626,betweenstory_57,s_627,s_628,q_629,s_630,s_631,s_632,q_633,s_634,s_635,s_636,betweenstory_58,s_637,s_638,s_639,q_640,s_641,s_642,q_643,s_644,q_645,s_646,s_647,betweenstory_59,s_648,s_649,q_650,s_651,q_652,s_653,q_654,s_655,s_656,q_657,s_658,s_659,betweenstory_60,s_660,q_661,s_662,q_663,s_664,s_665,s_666,q_667,s_668,q_669,s_670,s_671,betweenstory_61,s_672,s_673,q_674,s_675,q_676,s_677,q_678,s_679,q_680,s_681,q_682,s_683,s_684,betweenstory_62,s_685,s_686,q_687,s_688,q_689,s_690,s_691,q_692,s_693,q_694,s_695,s_696,betweenstory_63,s_697,q_698,s_699,q_700,s_701,s_702,s_703,q_704,s_705,q_706,s_707,s_708,betweenstory_64,s_709,s_710,s_711,q_712,s_713,q_714,s_715,q_716,s_717,s_718,s_719,betweenstory_65,s_720,s_721,q_722,s_723,q_724,s_725,q_726,s_727,q_728,s_729,q_730,s_731,s_732,betweenstory_66,s_733,s_734,q_735,s_736,s_737,s_738,q_739,s_740,q_741,s_742,s_743,betweenstory_67,s_744,s_745,q_746,s_747,s_748,q_749,s_750,q_751,s_752,s_753,s_754,betweenstory_68,s_755,s_756,s_757,s_758,q_759,s_760,s_761,s_762,s_763,betweenstory_69,s_764,s_765,q_766,s_767,q_768,s_769,q_770,s_771,q_772,s_773,s_774,s_775,betweenstory_70,s_776,q_777,s_778,s_779,q_780,s_781,s_782,s_783,q_784,s_785,s_786,betweenstory_71,s_787,s_788,q_789,s_790,q_791,s_792,q_793,s_794,q_795,s_796,q_797,s_798,s_799,betweenstory_72,s_800,s_801,q_802,s_803,s_804,s_805,q_806,s_807,q_808,s_809,s_810,betweenstory_73,s_811,s_812,s_813,s_814,s_815,q_816,s_817,q_818,s_819,s_820,betweenstory_74,s_821,q_822,s_823,s_824,s_825,s_826,s_827,q_828,s_829,s_830,betweenstory_75,s_831,q_832,s_833,q_834,s_835,q_836,s_837,q_838,s_839,q_840,s_841,s_842,s_843,betweenstory_76,s_844,s_845,s_846,q_847,s_848,s_849,s_850,s_851,s_852,betweenstory_77,s_853,q_854,s_855,s_856,q_857,s_858,q_859,s_860,q_861,s_862,s_863,s_864,betweenstory_78,s_865,s_866,s_867,q_868,s_869,q_870,s_871,q_872,s_873,q_874,s_875,s_876,betweenstory_79,s_877,s_878,s_879,q_880,s_881,s_882,q_883,s_884,s_885,s_886,betweenstory_80,s_887,s_888,q_889,s_890,s_891,q_892,s_893,q_894,s_895,q_896,s_897,s_898,betweenstory_81,s_899,s_900,q_901,s_902,s_903,q_904,s_905,q_906,s_907,q_908,s_909,s_910,betweenstory_82,s_911,q_912,s_913,s_914,s_915,s_916,s_917,q_918,s_919,s_920,betweenstory_83,s_921,q_922,s_923,q_924,s_925,q_926,s_927,s_928,s_929,q_930,s_931,s_932,betweenstory_84,s_933,s_934,s_935,q_936,s_937,s_938,s_939,q_940,s_941,s_942,betweenstory_85,s_943,s_944,q_945,s_946,q_947,s_948,q_949,s_950,s_951,q_952,s_953,s_954,betweenstory_86,s_955,q_956,s_957,q_958,s_959,q_960,s_961,q_962,s_963,q_964,s_965,s_966,s_967,betweenstory_87,s_968,q_969,s_970,s_971,s_972,q_973,s_974,s_975,s_976,s_977,betweenstory_88,s_978,q_979,s_980,q_981,s_982,q_983,s_984,q_985,s_986,s_987,q_988,s_989,s_990,betweenstory_89,s_991,s_992,q_993,s_994,s_995,s_996,s_997,s_998,s_999,betweenstory_90,s_1000,q_1001,s_1002,s_1003,q_1004,s_1005,s_1006,s_1007,q_1008,s_1009,s_1010,betweenstory_91,s_1011,q_1012,s_1013,s_1014,s_1015,q_1016,s_1017,q_1018,s_1019,q_1020,s_1021,s_1022,betweenstory_92,s_1023,q_1024,s_1025,q_1026,s_1027,q_1028,s_1029,q_1030,s_1031,s_1032,q_1033,s_1034,s_1035,betweenstory_93,s_1036,q_1037,s_1038,q_1039,s_1040,q_1041,s_1042,s_1043,s_1044,q_1045,s_1046,s_1047,betweenstory_94,s_1048,s_1049,s_1050,q_1051,s_1052,q_1053,s_1054,q_1055,s_1056,q_1057,s_1058,s_1059,betweenstory_95,s_1060,q_1061,s_1062,q_1063,s_1064,s_1065,q_1066,s_1067,q_1068,s_1069,s_1070,s_1071,betweenstory_96,s_1072,s_1073,q_1074,s_1075,q_1076,s_1077,q_1078,s_1079,s_1080,q_1081,s_1082,s_1083,betweenstory_97,s_1084,q_1085,s_1086,q_1087,s_1088,s_1089,q_1090,s_1091,q_1092,s_1093,s_1094,s_1095,betweenstory_98,s_1096,s_1097,s_1098,q_1099,s_1100,q_1101,s_1102,s_1103,s_1104,s_1105,betweenstory_99,s_1106,q_1107,s_1108,q_1109,s_1110,q_1111,s_1112,s_1113,q_1114,s_1115,s_1116,s_1117,betweenstory_100,],
  display_element: 'jspsych-target',
  on_data_update: function(data) {
      psiturk.recordTrialData(data);
  },

  on_finish: function(){
    // psiturk save
    psiturk.saveData({
      success: function(){ 
        psiturk.computeBonus(
          'compute_bonus', 
          function(){psiturk.completeHIT()}
        ); 
      }
    })
  }
})