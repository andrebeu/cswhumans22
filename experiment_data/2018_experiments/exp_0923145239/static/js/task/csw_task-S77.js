// load psiturk
var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);

var MIN_QUESTION_ITI = 2300
var MIN_STORY_ITI = 600

var intro_instructions = {
  type: 'instructions',
  pages: [
  'Use the left- and right-arrow keys to navigate these instructions.',
  'Please read the following instructions carefully.',
  'We are interested in how people learn (probabilistic) regularities.',
  'This task involves reading stories and answering questions about the stories.',
  'Your goal is to answer as many question correctly as you can.',
  'Note that you will get many questions wrong. Do not worry! We expect that to happen.',
  'The questions will ask you to predict what happens next in the story.<br>And just like in real life, nobody can predict everything.',
  'That said, depending on how many questions you get right, <br>we will pay you an extra bonus of up to $4.',
  'Enjoy! (After this page, you cannot return to the previous page).'
  ],
  data: {"type":"instruction"},
  key_forward: 'rightarrow',
  key_backward: 'leftarrow',
  allow_backward: true 
  }

var intro_instructions2 = {
  type: 'instructions',
  pages: [
  'Press SPACEBAR.',
  'You will read stories one sentence at a time. Press SPACEBAR to read the next sentence.',
  'When a question comes up, use the RIGHT AND LEFT ARROW KEYS to respond.',
  ' ** ~ PRESS SPACEBAR TO BEGIN THE EXPERIMENT ~ **'
  ],
  data: {"type":"instruction"},
  key_forward: 'spacebar',
  allow_backward: false 
}

// CODE BODY START


	var s_1 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_2 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_2_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_3 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard someone yelling math equations", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_3_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard someone yelling math equations", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_4 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_4_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_5 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_5_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_6 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_6_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_7 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the circle dance", "This caused Bill to dance the circle dance"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_7_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the circle dance", "This caused Bill to dance the circle dance"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_8 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_8_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_9 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The police came rushing in to spectate Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_9_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The police came rushing in to spectate Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_10 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_10_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_11 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "Alice just took her apple crumble and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_11_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "Alice just took her apple crumble and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_12 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_12_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_1 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_13 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_13_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_14 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_14_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_15 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "After ordering,  Bill noticed a pirate with no sword"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_15_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "After ordering,  Bill noticed a pirate with no sword"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_16 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_16_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_17 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_17_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_18 = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he yelled in seven languages", "This caused Bill to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_18_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he yelled in seven languages", "This caused Bill to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_19 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_19_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_20 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Bill", "The barista had to intervene by throwing banana peels at Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_20_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Bill", "The barista had to intervene by throwing banana peels at Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_21 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_21_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_22 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the empty pitcher", "On her way out, Alice took the salt shaker"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_22_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the empty pitcher", "On her way out, Alice took the salt shaker"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTA",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_23 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_23_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_2 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_24 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_24_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_25 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_25_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_26 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "While sitting down, Alice overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_26_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "While sitting down, Alice overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_27 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_27_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_28 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_28_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_29 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_29_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_30 = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_30_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_31 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_31_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_32 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The barista had to intervene by dumping a bucket of water at Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_32_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The barista had to intervene by dumping a bucket of water at Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_33 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_33_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_34 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her apple crumble and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_34_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her apple crumble and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_35 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_35_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_3 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_36 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_36_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_37 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_37_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_38 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard someone yelling math equations", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_38_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard someone yelling math equations", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_39 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_39_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_40 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting really bad music"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_40_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting really bad music"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_41 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_41_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_42 = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she hid under the bar", "This caused Alice to dance the circle dance"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_42_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she hid under the bar", "This caused Alice to dance the circle dance"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_43 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_43_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_44 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_44_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_45 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_45_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_46 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["Bill just took his blueberry pie and left", "Alice just took her blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_46_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["Bill just took his blueberry pie and left", "Alice just took her blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_47 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_47_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_4 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_48 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_48_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_49 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_49_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_50 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard someone yelling math equations", "After ordering,  Alice noticed a pirate with no sword"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_50_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard someone yelling math equations", "After ordering,  Alice noticed a pirate with no sword"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_51 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_51_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_52 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_52_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_53 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_53_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_54 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_54_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_55 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_55_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_56 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Alice", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_56_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Alice", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_57 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_57_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_58 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "On his way out, Bill took the empty pitcher"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_58_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "On his way out, Bill took the empty pitcher"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_59 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_59_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_5 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_60 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_60_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_61 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_61_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_62 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_62_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_63 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_63_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_64 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That???s when the band began playing a symphony"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_64_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That???s when the band began playing a symphony"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_65 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_65_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_66 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "This caused Bill to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_66_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "This caused Bill to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_67 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_67_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_68 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_68_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_69 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_69_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_70 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_70_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_71 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_71_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_6 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_72 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_72_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_73 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_73_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_74 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "After ordering,  Bill noticed a pirate with no sword"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_74_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "After ordering,  Bill noticed a pirate with no sword"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_75 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_75_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_76 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_76_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_77 = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the samba", "Bill was so revolted he hid under the bar"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_77_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the samba", "Bill was so revolted he hid under the bar"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_78 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_78_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_79 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Bill", "The police came rushing in to spectate Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_79_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Bill", "The police came rushing in to spectate Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_80 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_80_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_81 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "On his way out, Bill took the salt shaker"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_81_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "On his way out, Bill took the salt shaker"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_82 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_82_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_7 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_83 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_83_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_84 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_84_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_85 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_85_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "NOTICE",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_86 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_86_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_87 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_87_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_88 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_88_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_89 = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he yelled in seven languages", "This caused Bill to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_89_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he yelled in seven languages", "This caused Bill to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_90 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_90_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_91 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Bill", "The barista had to intervene by dumping a bucket of water at Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_91_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Bill", "The barista had to intervene by dumping a bucket of water at Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_92 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_92_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_93 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his blueberry pie and left", "On his way out, Bill took the salt shaker"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_93_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his blueberry pie and left", "On his way out, Bill took the salt shaker"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_94 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_94_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_8 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_95 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_95_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_96 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_96_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_97 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "While sitting down, Bill overheard someone yelling math equations"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_97_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "While sitting down, Bill overheard someone yelling math equations"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_98 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_98_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_99 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That???s when the band began playing a symphony"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_99_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That???s when the band began playing a symphony"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_100 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_100_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_101 = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he yelled in seven languages", "This caused Bill to dance the circle dance"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_101_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he yelled in seven languages", "This caused Bill to dance the circle dance"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_102 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_102_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_103 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Bill", "The barista had to intervene by dumping a bucket of water at Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_103_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Bill", "The barista had to intervene by dumping a bucket of water at Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_104 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_104_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_105 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "On his way out, Bill took the empty pitcher"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_105_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "On his way out, Bill took the empty pitcher"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_106 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_106_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_9 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_107 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_107_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_108 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_108_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_109 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "While sitting down, Bill overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_109_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "While sitting down, Bill overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_110 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_110_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_111 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That???s when the band began playing a symphony"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_111_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That???s when the band began playing a symphony"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_112 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_112_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_113 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he hid under the bar", "Alice was so revolted she hid under the bar"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_113_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he hid under the bar", "Alice was so revolted she hid under the bar"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "REVOLT",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_114 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_114_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_115 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The police came rushing in to join along Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_115_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The police came rushing in to join along Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_116 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_116_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_117 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the salt shaker", "Bill just took his blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_117_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the salt shaker", "Bill just took his blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_118 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_118_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_10 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_119 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_119_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_120 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_120_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_121 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_121_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_122 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_122_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_123 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_123_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_124 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_124_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_125 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_125_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_11 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_126 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_126_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_127 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_127_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_128 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_128_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_129 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_129_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_130 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_130_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_131 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_131_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_132 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_132_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_12 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_133 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_133_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_134 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_134_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_135 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_135_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_136 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_136_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_137 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_137_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_138 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_138_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_139 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_139_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_13 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_140 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_140_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_141 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_141_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_142 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_142_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_143 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_143_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_144 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_144_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_145 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_145_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_146 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_146_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_14 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_147 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_147_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_148 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_148_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_149 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_149_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_150 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_150_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_151 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_151_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_152 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_152_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_153 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_153_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_15 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_154 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_154_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_155 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_155_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_156 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_156_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_157 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_157_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_158 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_158_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_159 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_159_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_160 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_160_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_16 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_161 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_161_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_162 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_162_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_163 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_163_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_164 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_164_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_165 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_165_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_166 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_166_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_167 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_167_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_17 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_168 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_168_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_169 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_169_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_170 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_170_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_171 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_171_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_172 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_172_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_173 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_173_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_174 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_174_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_18 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_175 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_175_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_176 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_176_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_177 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_177_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_178 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_178_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_179 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_179_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_180 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_180_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_181 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_181_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_19 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_182 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_182_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_183 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_183_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_184 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_184_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_185 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_185_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_186 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_186_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_187 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_187_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_188 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_188_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_20 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_189 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_189_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_190 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_190_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_191 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_191_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_192 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_192_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_193 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_193_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_194 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_194_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_195 = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the circle dance"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_195_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the circle dance"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_196 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_196_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_197 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_197_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_198 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_198_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_199 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her apple crumble and left", "On her way out, Alice took the empty pitcher"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_199_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her apple crumble and left", "On her way out, Alice took the empty pitcher"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_200 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_200_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_21 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_201 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_201_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_202 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_202_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_203 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard someone yelling math equations", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_203_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard someone yelling math equations", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_204 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_204_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_205 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_205_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_206 = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_206_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_207 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_207_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_208 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_208_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_209 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_209_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_210 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her apple crumble and left", "On her way out, Alice took the empty pitcher"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_210_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her apple crumble and left", "On her way out, Alice took the empty pitcher"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_211 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_211_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_22 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_212 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_212_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_213 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_213_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_214 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard a bad pickup line", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_214_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard a bad pickup line", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_215 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_215_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_216 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_216_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_217 = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she hid under the bar", "This caused Alice to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_217_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she hid under the bar", "This caused Alice to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_218 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_218_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_219 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_219_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_220 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_220_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_221 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her blueberry pie and left", "On her way out, Alice took the salt shaker"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_221_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her blueberry pie and left", "On her way out, Alice took the salt shaker"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_222 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_222_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_23 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_223 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_223_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_224 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_224_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_225 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard a bad pickup line", "After ordering,  Bill noticed a man with a face tattoo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_225_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard a bad pickup line", "After ordering,  Bill noticed a man with a face tattoo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_226 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_226_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_227 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting really bad music"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_227_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting really bad music"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_228 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_228_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_229 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he yelled in seven languages", "This caused Bill to dance the circle dance"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_229_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he yelled in seven languages", "This caused Bill to dance the circle dance"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_230 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_230_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_231 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Bill", "The police came rushing in to spectate Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_231_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Bill", "The police came rushing in to spectate Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "REVOLT",
						"true_tonode": "COPS",
						"false_tonode": "COPS",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_232 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_232_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_233 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the salt shaker", "Bill just took his blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_233_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the salt shaker", "Bill just took his blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_234 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_234_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_24 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_235 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_235_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_236 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_236_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_237 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "After ordering,  Bill noticed a pirate with no sword"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_237_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "After ordering,  Bill noticed a pirate with no sword"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_238 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_238_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_239 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting really bad music"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_239_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting really bad music"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_240 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_240_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_241 = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the samba", "Bill was so revolted he yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_241_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the samba", "Bill was so revolted he yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_242 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_242_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_243 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The police came rushing in to spectate Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_243_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The police came rushing in to spectate Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_244 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_244_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_245 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "On his way out, Bill took the empty pitcher"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_245_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "On his way out, Bill took the empty pitcher"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_246 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_246_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_25 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_247 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_247_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_248 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_248_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_249 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "After ordering,  Bill noticed a man with a face tattoo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_249_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "After ordering,  Bill noticed a man with a face tattoo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_250 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_250_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_251 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_251_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_252 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_252_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_253 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_253_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_254 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The police came rushing in to join along Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_254_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The police came rushing in to join along Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "COPS",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_255 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_255_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_256 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her blueberry pie and left", "On her way out, Alice took the salt shaker"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_256_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her blueberry pie and left", "On her way out, Alice took the salt shaker"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_257 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_257_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_26 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_258 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_258_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_259 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_259_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_260 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "After ordering,  Alice noticed a pirate with no sword"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_260_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "After ordering,  Alice noticed a pirate with no sword"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_261 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_261_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_262 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_262_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_263 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "This caused Bill to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_263_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "This caused Bill to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_264 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_264_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_265 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Alice", "The barista had to intervene by throwing banana peels at Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_265_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Alice", "The barista had to intervene by throwing banana peels at Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_266 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_266_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_267 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "On his way out, Bill took the empty pitcher"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_267_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "On his way out, Bill took the empty pitcher"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_268 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_268_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_27 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_269 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_269_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_270 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_270_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_271 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a pirate with no sword", "While sitting down, Alice overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_271_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a pirate with no sword", "While sitting down, Alice overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_272 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_272_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_273 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_273_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_274 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the samba", "This caused Alice to dance the circle dance"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_274_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the samba", "This caused Alice to dance the circle dance"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_275 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_275_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_276 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The police came rushing in to join along Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_276_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The police came rushing in to join along Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_277 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_277_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_278 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her apple crumble and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_278_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her apple crumble and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_279 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_279_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_28 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_280 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_280_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_281 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_281_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_282 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard someone yelling math equations", "While sitting down, Bill overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_282_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard someone yelling math equations", "While sitting down, Bill overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_283 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_283_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_284 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting really bad music"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_284_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting really bad music"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_285 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_285_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_286 = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_286_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_287 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_287_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_288 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The police came rushing in to spectate Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_288_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The police came rushing in to spectate Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_289 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_289_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_290 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her apple crumble and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_290_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her apple crumble and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_291 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_291_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_29 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_292 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_292_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_293 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_293_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_294 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard a bad pickup line", "While sitting down, Bill overheard someone yelling math equations"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_294_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard a bad pickup line", "While sitting down, Bill overheard someone yelling math equations"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "HEARD",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_295 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_295_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_296 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting really bad music"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_296_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting really bad music"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_297 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_297_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_298 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he yelled in seven languages", "This caused Bill to dance the circle dance"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_298_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he yelled in seven languages", "This caused Bill to dance the circle dance"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_299 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_299_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_300 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The police came rushing in to join along Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_300_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The police came rushing in to join along Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_301 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_301_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_302 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the salt shaker", "Bill just took his apple crumble and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_302_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the salt shaker", "Bill just took his apple crumble and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_303 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_303_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_30 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_304 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_304_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_305 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_305_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_306 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_306_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_307 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_307_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_308 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_308_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_309 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_309_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_310 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_310_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_31 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_311 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_311_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_312 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_312_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_313 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_313_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_314 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_314_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_315 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_315_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_316 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_316_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_317 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_317_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_32 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_318 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_318_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_319 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_319_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_320 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_320_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_321 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_321_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_322 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_322_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_323 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_323_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_324 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_324_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_33 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_325 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_325_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_326 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_326_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_327 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_327_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_328 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_328_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_329 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_329_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_330 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_330_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_331 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_331_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_34 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_332 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_332_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_333 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_333_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_334 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_334_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_335 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_335_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_336 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_336_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_337 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_337_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_338 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_338_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_35 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_339 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_339_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_340 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_340_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_341 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_341_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_342 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_342_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_343 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_343_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_344 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_344_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_345 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_345_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_36 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_346 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_346_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_347 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_347_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_348 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_348_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_349 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_349_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_350 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_350_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_351 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_351_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_352 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_352_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_37 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_353 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_353_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_354 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_354_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_355 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_355_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_356 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_356_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_357 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_357_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_358 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_358_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_359 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_359_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_38 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_360 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_360_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_361 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_361_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_362 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_362_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_363 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_363_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_364 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_364_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_365 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_365_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_366 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_366_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_39 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_367 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_367_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_368 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_368_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_369 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_369_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_370 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_370_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_371 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_371_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_372 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_372_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_373 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_373_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_40 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_374 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_374_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_375 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_375_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_376 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a pirate with no sword", "After ordering,  Bill noticed a pirate with no sword"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_376_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a pirate with no sword", "After ordering,  Bill noticed a pirate with no sword"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_377 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_377_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_378 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That???s when the band began playing a guitar solo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_378_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That???s when the band began playing a guitar solo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_379 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_379_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_380 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_380_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_381 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_381_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_382 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The police came rushing in to join along Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_382_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The police came rushing in to join along Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_383 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_383_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_384 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her apple crumble and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_384_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her apple crumble and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_385 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_385_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_41 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_386 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_386_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_387 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_387_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_388 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "While sitting down, Bill overheard someone yelling math equations"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_388_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "While sitting down, Bill overheard someone yelling math equations"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_389 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_389_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_390 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That???s when the band began playing a symphony"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_390_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That???s when the band began playing a symphony"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_391 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_391_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_392 = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he hid under the bar", "This caused Bill to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_392_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he hid under the bar", "This caused Bill to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_393 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_393_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_394 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Bill", "The barista had to intervene by throwing banana peels at Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_394_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Bill", "The barista had to intervene by throwing banana peels at Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_395 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_395_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_396 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Bill <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "On his way out, Bill took the salt shaker"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_396_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Bill <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "On his way out, Bill took the salt shaker"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTA",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_397 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_397_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_42 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_398 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_398_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_399 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_399_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_400 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "After ordering,  Bill noticed a man with a face tattoo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_400_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "After ordering,  Bill noticed a man with a face tattoo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_401 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_401_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_402 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_402_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_403 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_403_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_404 = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "This caused Bill to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_404_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "This caused Bill to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BAND",
						"true_tonode": "DANCE",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_405 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_405_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_406 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Bill", "The barista had to intervene by throwing banana peels at Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_406_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Bill", "The barista had to intervene by throwing banana peels at Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_407 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_407_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_408 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the salt shaker", "Bill just took his blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_408_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the salt shaker", "Bill just took his blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_409 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_409_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_43 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_410 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_410_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_411 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_411_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_412 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard someone yelling math equations", "After ordering,  Alice noticed a pirate with no sword"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_412_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard someone yelling math equations", "After ordering,  Alice noticed a pirate with no sword"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_413 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_413_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_414 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting really bad music"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_414_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting really bad music"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_415 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_415_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_416 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_416_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_417 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_417_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_418 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Bill", "The police came rushing in to spectate Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_418_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Bill", "The police came rushing in to spectate Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "COPS",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_419 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_419_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_420 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the empty pitcher", "On her way out, Alice took the empty pitcher"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_420_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the empty pitcher", "On her way out, Alice took the empty pitcher"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_421 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_421_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_44 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_422 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_422_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_423 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_423_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_424 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_424_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_425 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_425_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_426 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_426_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_427 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_427_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_428 = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the circle dance", "Alice was so revolted she hid under the bar"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_428_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the circle dance", "Alice was so revolted she hid under the bar"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_429 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_429_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_430 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The barista had to intervene by dumping a bucket of water at Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_430_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The barista had to intervene by dumping a bucket of water at Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_431 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_431_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_432 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her apple crumble and left", "On her way out, Alice took the salt shaker"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_432_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her apple crumble and left", "On her way out, Alice took the salt shaker"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_433 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_433_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_45 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_434 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_434_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_435 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_435_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_436 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard a bad pickup line", "After ordering,  Bill noticed a man with a face tattoo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_436_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard a bad pickup line", "After ordering,  Bill noticed a man with a face tattoo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_437 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_437_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_438 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That???s when the band began playing a guitar solo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_438_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That???s when the band began playing a guitar solo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_439 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_439_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_440 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the circle dance", "Bill was so revolted he yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_440_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the circle dance", "Bill was so revolted he yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_441 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_441_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_442 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Bill", "The police came rushing in to spectate Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_442_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Bill", "The police came rushing in to spectate Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_443 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_443_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_444 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "On his way out, Bill took the empty pitcher"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_444_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "On his way out, Bill took the empty pitcher"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_445 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_445_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_46 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_446 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_446_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_447 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_447_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_448 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_448_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_449 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_449_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_450 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_450_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_451 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_451_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_452 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_452_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_453 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The police came rushing in to spectate Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_453_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The police came rushing in to spectate Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_454 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_454_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_455 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her apple crumble and left", "On her way out, Alice took the empty pitcher"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_455_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her apple crumble and left", "On her way out, Alice took the empty pitcher"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_456 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_456_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_47 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_457 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_457_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_458 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_458_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_459 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a pirate with no sword", "After ordering,  Bill noticed a pirate with no sword"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_459_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a pirate with no sword", "After ordering,  Bill noticed a pirate with no sword"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_460 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_460_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_461 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That???s when the band began playing a symphony"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_461_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That???s when the band began playing a symphony"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_462 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_462_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_463 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the circle dance"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_463_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the circle dance"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_464 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_464_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_465 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Bill", "The police came rushing in to join along Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_465_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Bill", "The police came rushing in to join along Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "COPS",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_466 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_466_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_467 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "On his way out, Bill took the salt shaker"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_467_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "On his way out, Bill took the salt shaker"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_468 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_468_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_48 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_469 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_469_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_470 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_470_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_471 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard someone yelling math equations", "After ordering,  Alice noticed a pirate with no sword"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_471_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard someone yelling math equations", "After ordering,  Alice noticed a pirate with no sword"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_472 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_472_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_473 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_473_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_474 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she hid under the bar", "This caused Alice to dance the circle dance"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_474_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she hid under the bar", "This caused Alice to dance the circle dance"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_475 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_475_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_476 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Bill", "The police came rushing in to join along Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_476_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Bill", "The police came rushing in to join along Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "COPS",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_477 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_477_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_478 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_478_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_479 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_479_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_49 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_480 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_480_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_481 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_481_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_482 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard a bad pickup line", "While sitting down, Bill overheard someone yelling math equations"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_482_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard a bad pickup line", "While sitting down, Bill overheard someone yelling math equations"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_483 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_483_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_484 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That???s when the band began playing a guitar solo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_484_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That???s when the band began playing a guitar solo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_485 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_485_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_486 = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the circle dance"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_486_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the circle dance"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_487 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_487_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_488 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_488_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_489 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_489_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_490 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "Alice just took her apple crumble and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_490_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "Alice just took her apple crumble and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_491 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_491_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_50 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_492 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_492_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_493 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_493_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_494 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_494_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_495 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_495_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_496 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_496_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_497 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_497_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_498 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_498_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_51 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_499 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_499_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_500 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_500_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_501 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_501_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_502 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_502_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_503 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_503_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_504 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_504_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_505 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_505_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_52 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_506 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_506_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_507 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_507_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_508 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_508_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_509 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_509_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_510 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_510_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_511 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_511_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_512 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_512_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_53 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_513 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_513_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_514 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_514_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_515 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_515_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_516 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_516_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_517 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_517_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_518 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_518_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_519 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_519_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_54 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_520 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_520_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_521 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_521_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_522 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_522_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_523 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_523_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_524 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_524_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_525 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_525_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_526 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_526_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_55 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_527 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_527_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_528 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_528_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_529 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_529_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_530 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_530_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_531 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_531_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_532 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_532_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_533 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_533_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_56 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_534 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_534_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_535 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_535_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_536 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_536_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_537 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_537_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_538 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_538_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_539 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_539_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_540 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_540_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_57 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_541 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_541_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_542 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_542_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_543 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_543_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_544 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_544_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_545 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_545_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_546 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_546_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_547 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_547_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_58 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_548 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_548_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_549 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_549_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_550 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_550_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_551 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_551_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_552 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_552_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_553 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_553_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_554 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_554_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_59 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_555 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_555_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_556 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_556_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_557 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_557_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_558 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_558_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_559 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_559_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_560 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_560_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_561 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_561_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_60 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_562 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_562_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_563 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_563_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_564 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_564_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_565 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_565_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_566 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That???s when the band began playing a symphony"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_566_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That???s when the band began playing a symphony"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_567 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_567_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_568 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the circle dance", "Alice was so revolted she hid under the bar"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_568_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the circle dance", "Alice was so revolted she hid under the bar"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_569 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_569_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_570 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The police came rushing in to spectate Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_570_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The police came rushing in to spectate Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_571 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_571_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_572 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "On his way out, Bill took the salt shaker"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_572_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "On his way out, Bill took the salt shaker"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_573 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_573_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_61 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_574 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_574_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_575 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_575_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_576 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "While sitting down, Bill overheard someone yelling math equations"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_576_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "While sitting down, Bill overheard someone yelling math equations"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_577 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_577_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_578 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting really bad music"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_578_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting really bad music"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_579 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_579_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_580 = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the samba", "This caused Alice to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_580_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the samba", "This caused Alice to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BAND",
						"true_tonode": "DANCE",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_581 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_581_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_582 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Bill", "The barista had to intervene by throwing banana peels at Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_582_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Bill", "The barista had to intervene by throwing banana peels at Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_583 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_583_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_584 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the salt shaker", "On her way out, Alice took the salt shaker"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_584_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the salt shaker", "On her way out, Alice took the salt shaker"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTA",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_585 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_585_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_62 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_586 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_586_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_587 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_587_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_588 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "While sitting down, Alice overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_588_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "While sitting down, Alice overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_589 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_589_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_590 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_590_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_591 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_591_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_592 = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she hid under the bar"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_592_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she hid under the bar"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_593 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_593_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_594 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The police came rushing in to spectate Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_594_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The police came rushing in to spectate Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_595 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_595_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_596 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her apple crumble and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_596_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her apple crumble and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_597 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_597_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_63 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_598 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_598_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_599 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_599_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_600 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard a bad pickup line", "While sitting down, Alice overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_600_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard a bad pickup line", "While sitting down, Alice overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_601 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_601_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_602 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting really bad music"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_602_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting really bad music"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_603 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_603_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_604 = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the circle dance", "Alice was so revolted she hid under the bar"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_604_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the circle dance", "Alice was so revolted she hid under the bar"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_605 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_605_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_606 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The police came rushing in to spectate Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_606_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The police came rushing in to spectate Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_607 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_607_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_608 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her apple crumble and left", "Bill just took his blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_608_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her apple crumble and left", "Bill just took his blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_609 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_609_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_64 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_610 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_610_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_611 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_611_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_612 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "While sitting down, Bill overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_612_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "While sitting down, Bill overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_613 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_613_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_614 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That???s when the band began playing a guitar solo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_614_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That???s when the band began playing a guitar solo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_615 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_615_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_616 = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he yelled in seven languages", "This caused Bill to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_616_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he yelled in seven languages", "This caused Bill to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_617 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_617_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_618 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The police came rushing in to spectate Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_618_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The police came rushing in to spectate Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_619 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_619_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_620 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "On his way out, Bill took the empty pitcher"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_620_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "On his way out, Bill took the empty pitcher"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_621 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_621_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_65 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_622 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_622_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_623 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_623_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_624 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a pirate with no sword", "While sitting down, Alice overheard someone yelling math equations"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_624_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a pirate with no sword", "While sitting down, Alice overheard someone yelling math equations"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_625 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_625_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_626 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That???s when the band began playing a symphony"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_626_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That???s when the band began playing a symphony"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_627 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_627_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_628 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the circle dance", "Alice was so revolted she yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_628_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the circle dance", "Alice was so revolted she yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_629 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_629_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_630 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The police came rushing in to join along Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_630_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The police came rushing in to join along Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_631 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_631_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_632 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her blueberry pie and left", "On her way out, Alice took the empty pitcher"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_632_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her blueberry pie and left", "On her way out, Alice took the empty pitcher"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_633 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_633_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_66 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_634 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_634_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_635 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_635_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_636 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard a bad pickup line", "While sitting down, Alice overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_636_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard a bad pickup line", "While sitting down, Alice overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "HEARD",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_637 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_637_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_638 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting really bad music"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_638_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting really bad music"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_639 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_639_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_640 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he hid under the bar", "This caused Bill to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_640_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he hid under the bar", "This caused Bill to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_641 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_641_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_642 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The police came rushing in to spectate Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_642_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The police came rushing in to spectate Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_643 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_643_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_644 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "On his way out, Bill took the salt shaker"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_644_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "On his way out, Bill took the salt shaker"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_645 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_645_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_67 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_646 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_646_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_647 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_647_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_648 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard a bad pickup line", "While sitting down, Alice overheard someone yelling math equations"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_648_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard a bad pickup line", "While sitting down, Alice overheard someone yelling math equations"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "HEARD",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_649 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_649_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_650 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_650_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_651 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_651_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_652 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he hid under the bar", "This caused Bill to dance the circle dance"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_652_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he hid under the bar", "This caused Bill to dance the circle dance"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_653 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_653_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_654 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Alice", "The police came rushing in to join along Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_654_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Alice", "The police came rushing in to join along Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "REVOLT",
						"true_tonode": "COPS",
						"false_tonode": "COPS",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_655 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_655_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_656 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Bill <br><br><br> what happens next? <p>",
		labels: ["Alice just took her apple crumble and left", "Bill just took his blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_656_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Bill <br><br><br> what happens next? <p>",
		labels: ["Alice just took her apple crumble and left", "Bill just took his blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "COPS",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_657 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_657_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_68 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_658 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_658_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_659 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_659_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_660 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_660_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_661 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_661_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_662 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That???s when the band began playing a symphony"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_662_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That???s when the band began playing a symphony"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_663 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_663_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_664 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the circle dance", "Alice was so revolted she yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_664_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the circle dance", "Alice was so revolted she yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_665 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_665_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_666 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Alice", "The barista had to intervene by throwing banana peels at Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_666_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Alice", "The barista had to intervene by throwing banana peels at Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_667 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_667_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_668 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her blueberry pie and left", "On her way out, Alice took the salt shaker"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_668_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her blueberry pie and left", "On her way out, Alice took the salt shaker"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_669 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_669_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_69 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_670 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_670_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_671 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_671_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_672 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_672_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "NOTICE",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_673 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_673_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_674 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting really bad music"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_674_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting really bad music"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_675 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_675_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_676 = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the circle dance", "Bill was so revolted he hid under the bar"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_676_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the circle dance", "Bill was so revolted he hid under the bar"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_677 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_677_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_678 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The police came rushing in to spectate Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_678_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The police came rushing in to spectate Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_679 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_679_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_680 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his blueberry pie and left", "On his way out, Bill took the empty pitcher"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_680_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his blueberry pie and left", "On his way out, Bill took the empty pitcher"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_681 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_681_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_70 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_682 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_682_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_683 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_683_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_684 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_684_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_685 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_685_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_686 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_686_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_687 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_687_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_688 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_688_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_71 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_689 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_689_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_690 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_690_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_691 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_691_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_692 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_692_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_693 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_693_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_694 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_694_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_695 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_695_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_72 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_696 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_696_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_697 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_697_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_698 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_698_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_699 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_699_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_700 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_700_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_701 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_701_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_702 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_702_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_73 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_703 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_703_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_704 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_704_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_705 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_705_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_706 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_706_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_707 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_707_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_708 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_708_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_709 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_709_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_74 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_710 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_710_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_711 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_711_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_712 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_712_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_713 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_713_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_714 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_714_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_715 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_715_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_716 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_716_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_75 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_717 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_717_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_718 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_718_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_719 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_719_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_720 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_720_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_721 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_721_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_722 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_722_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_723 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_723_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_76 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_724 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_724_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_725 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_725_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_726 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_726_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_727 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_727_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_728 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_728_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_729 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_729_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_730 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_730_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_77 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_731 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_731_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_732 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_732_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_733 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_733_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_734 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_734_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_735 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_735_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_736 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_736_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_737 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_737_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_78 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_738 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_738_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_739 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_739_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_740 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_740_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_741 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_741_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_742 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_742_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_743 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_743_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_744 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_744_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_79 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_745 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_745_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_746 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_746_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_747 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_747_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_748 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_748_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_749 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_749_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_750 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_750_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_751 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_751_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_80 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_752 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_752_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_753 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_753_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_754 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_754_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_755 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_755_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_756 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That???s when the band began playing a symphony"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_756_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That???s when the band began playing a symphony"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_757 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_757_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_758 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_758_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_759 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_759_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_760 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Alice", "The barista had to intervene by throwing banana peels at Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_760_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Alice", "The barista had to intervene by throwing banana peels at Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_761 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_761_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_762 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "Alice just took her blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_762_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "Alice just took her blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_763 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_763_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_81 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_764 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_764_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_765 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_765_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_766 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a pirate with no sword", "While sitting down, Alice overheard someone yelling math equations"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_766_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a pirate with no sword", "While sitting down, Alice overheard someone yelling math equations"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_767 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_767_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_768 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_768_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_769 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_769_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_770 = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_770_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_771 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_771_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_772 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The police came rushing in to spectate Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_772_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The police came rushing in to spectate Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_773 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_773_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_774 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "Alice just took her blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_774_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "Alice just took her blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_775 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_775_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_82 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_776 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_776_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_777 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_777_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_778 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a pirate with no sword", "While sitting down, Alice overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_778_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a pirate with no sword", "While sitting down, Alice overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_779 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_779_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_780 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That???s when the band began playing a symphony"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_780_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That???s when the band began playing a symphony"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_781 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_781_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_782 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the circle dance", "Alice was so revolted she hid under the bar"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_782_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the circle dance", "Alice was so revolted she hid under the bar"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_783 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_783_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_784 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The police came rushing in to join along Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_784_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The police came rushing in to join along Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_785 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_785_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_786 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her apple crumble and left", "On her way out, Alice took the salt shaker"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_786_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her apple crumble and left", "On her way out, Alice took the salt shaker"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_787 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_787_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_83 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_788 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_788_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_789 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_789_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_790 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard a bad pickup line", "While sitting down, Alice overheard someone yelling math equations"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_790_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard a bad pickup line", "While sitting down, Alice overheard someone yelling math equations"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_791 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_791_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_792 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That???s when the band began playing a symphony"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_792_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That???s when the band began playing a symphony"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_793 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_793_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_794 = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_794_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_795 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_795_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_796 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Bill", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_796_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Bill", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_797 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_797_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_798 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her blueberry pie and left", "On her way out, Alice took the salt shaker"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_798_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her blueberry pie and left", "On her way out, Alice took the salt shaker"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_799 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_799_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_84 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_800 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_800_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_801 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_801_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_802 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_802_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_803 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_803_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_804 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That???s when the band began playing a symphony"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_804_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That???s when the band began playing a symphony"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_805 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_805_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_806 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the circle dance", "This caused Alice to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_806_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the circle dance", "This caused Alice to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_807 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_807_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_808 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Alice", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_808_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Alice", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_809 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_809_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_810 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her apple crumble and left", "On her way out, Alice took the empty pitcher"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_810_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her apple crumble and left", "On her way out, Alice took the empty pitcher"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_811 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_811_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_85 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_812 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_812_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_813 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_813_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_814 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "While sitting down, Bill overheard someone yelling math equations"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_814_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "While sitting down, Bill overheard someone yelling math equations"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_815 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_815_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_816 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting really bad music"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_816_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting really bad music"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_817 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_817_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_818 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the circle dance", "Bill was so revolted he hid under the bar"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_818_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the circle dance", "Bill was so revolted he hid under the bar"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_819 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_819_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_820 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Alice", "The police came rushing in to join along Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_820_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Alice", "The police came rushing in to join along Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "REVOLT",
						"true_tonode": "COPS",
						"false_tonode": "COPS",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_821 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_821_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_822 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Bill <br><br><br> what happens next? <p>",
		labels: ["Alice just took her blueberry pie and left", "Bill just took his blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_822_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Bill <br><br><br> what happens next? <p>",
		labels: ["Alice just took her blueberry pie and left", "Bill just took his blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "COPS",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_823 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_823_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_86 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_824 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_824_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_825 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_825_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_826 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "While sitting down, Bill overheard someone yelling math equations"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_826_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "While sitting down, Bill overheard someone yelling math equations"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_827 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_827_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_828 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_828_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_829 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_829_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_830 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he hid under the bar", "Alice was so revolted she hid under the bar"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_830_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he hid under the bar", "Alice was so revolted she hid under the bar"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "REVOLT",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_831 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_831_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_832 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Bill", "The police came rushing in to spectate Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_832_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Bill", "The police came rushing in to spectate Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_833 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_833_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_834 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the empty pitcher", "Bill just took his blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_834_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the empty pitcher", "Bill just took his blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_835 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_835_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_87 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_836 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_836_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_837 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_837_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_838 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard a bad pickup line", "After ordering,  Alice noticed a pirate with no sword"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_838_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard a bad pickup line", "After ordering,  Alice noticed a pirate with no sword"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_839 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_839_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_840 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That???s when the band began playing a symphony"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_840_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That???s when the band began playing a symphony"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_841 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_841_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_842 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_842_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_843 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_843_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_844 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The barista had to intervene by throwing banana peels at Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_844_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The barista had to intervene by throwing banana peels at Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_845 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_845_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_846 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "On his way out, Bill took the empty pitcher"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_846_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "On his way out, Bill took the empty pitcher"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_847 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_847_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_88 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_848 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_848_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_849 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_849_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_850 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard a bad pickup line", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_850_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard a bad pickup line", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_851 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_851_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_852 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That???s when the band began playing a guitar solo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_852_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That???s when the band began playing a guitar solo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_853 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_853_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_854 = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the circle dance"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_854_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the circle dance"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_855 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_855_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_856 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The police came rushing in to spectate Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_856_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The police came rushing in to spectate Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_857 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_857_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_858 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["Bill just took his blueberry pie and left", "Alice just took her apple crumble and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_858_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["Bill just took his blueberry pie and left", "Alice just took her apple crumble and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_859 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_859_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_89 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_860 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_860_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_861 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_861_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_862 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_862_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_863 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_863_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_864 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_864_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_865 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the circle dance", "This caused Bill to dance the circle dance"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_865_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the circle dance", "This caused Bill to dance the circle dance"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_866 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_866_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_867 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Alice", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_867_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Alice", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_868 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_868_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_869 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "Alice just took her apple crumble and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_869_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "Alice just took her apple crumble and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_870 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_870_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_90 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_871 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_871_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_872 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_872_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_873 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_873_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_874 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_874_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_875 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_875_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_876 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_876_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_877 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_877_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_91 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_878 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_878_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_879 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_879_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_880 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_880_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_881 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_881_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_882 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_882_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_883 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_883_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_884 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_884_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_92 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_885 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_885_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_886 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_886_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_887 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_887_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_888 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_888_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_889 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_889_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_890 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_890_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_891 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_891_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_93 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_892 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_892_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_893 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_893_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_894 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_894_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_895 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_895_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_896 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_896_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_897 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_897_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_898 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_898_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_94 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_899 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_899_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_900 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_900_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_901 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_901_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_902 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_902_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_903 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_903_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_904 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_904_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_905 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_905_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_95 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_906 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_906_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_907 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_907_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_908 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_908_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_909 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_909_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_910 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_910_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_911 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_911_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_912 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_912_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_96 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_913 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_913_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_914 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_914_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_915 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_915_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_916 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_916_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_917 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_917_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_918 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_918_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_919 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_919_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_97 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_920 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_920_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_921 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_921_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_922 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_922_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_923 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_923_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_924 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_924_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_925 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_925_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_926 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_926_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_98 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_927 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_927_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_928 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_928_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_929 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_929_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_930 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_930_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_931 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_931_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_932 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_932_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_933 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_933_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_99 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_934 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_934_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_935 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_935_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_936 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_936_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_937 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_937_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_938 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_938_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_939 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_939_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_940 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_940_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_100 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_941 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_941_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_942 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_942_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_943 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "After ordering,  Alice noticed a pirate with no sword"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_943_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "After ordering,  Alice noticed a pirate with no sword"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_944 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_944_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_945 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That???s when the band began playing a guitar solo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_945_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That???s when the band began playing a guitar solo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_946 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_946_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_947 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she hid under the bar", "This caused Alice to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_947_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she hid under the bar", "This caused Alice to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_948 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_948_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_949 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Alice", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_949_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Alice", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_950 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_950_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_951 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her apple crumble and left", "On her way out, Alice took the empty pitcher"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_951_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her apple crumble and left", "On her way out, Alice took the empty pitcher"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_952 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_952_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_101 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_953 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_953_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_954 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_954_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_955 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a pirate with no sword", "While sitting down, Alice overheard someone yelling math equations"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_955_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a pirate with no sword", "While sitting down, Alice overheard someone yelling math equations"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_956 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_956_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_957 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That???s when the band began playing a guitar solo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_957_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That???s when the band began playing a guitar solo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_958 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_958_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_959 = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she hid under the bar"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_959_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she hid under the bar"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_960 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_960_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_961 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Alice", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_961_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Alice", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_962 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_962_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_963 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["Bill just took his blueberry pie and left", "Alice just took her blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_963_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["Bill just took his blueberry pie and left", "Alice just took her blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_964 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_964_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_102 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_965 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_965_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_966 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_966_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_967 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard a bad pickup line", "While sitting down, Alice overheard someone yelling math equations"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_967_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard a bad pickup line", "While sitting down, Alice overheard someone yelling math equations"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "HEARD",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_968 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_968_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_969 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That???s when the band began playing a guitar solo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_969_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That???s when the band began playing a guitar solo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_970 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_970_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_971 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the samba", "Bill was so revolted he yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_971_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the samba", "Bill was so revolted he yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_972 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_972_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_973 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Bill", "The barista had to intervene by throwing banana peels at Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_973_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Bill", "The barista had to intervene by throwing banana peels at Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_974 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_974_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_975 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "Alice just took her blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_975_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "Alice just took her blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "COPS",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_976 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_976_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_103 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_977 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_977_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_978 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_978_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_979 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard a bad pickup line", "While sitting down, Bill overheard someone yelling math equations"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_979_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard a bad pickup line", "While sitting down, Bill overheard someone yelling math equations"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_980 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_980_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_981 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting really bad music"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_981_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting really bad music"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_982 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_982_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_983 = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she hid under the bar"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_983_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she hid under the bar"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_984 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_984_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_985 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The police came rushing in to join along Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_985_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The police came rushing in to join along Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_986 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_986_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_987 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her apple crumble and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_987_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her apple crumble and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_988 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_988_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_104 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_989 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_989_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_990 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_990_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_991 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard a bad pickup line", "While sitting down, Alice overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_991_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard a bad pickup line", "While sitting down, Alice overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "HEARD",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_992 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_992_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_993 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_993_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_994 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he hid under the bar", "This caused Bill to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_994_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he hid under the bar", "This caused Bill to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_995 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_995_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_996 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The police came rushing in to spectate Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_996_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The police came rushing in to spectate Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_997 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_997_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_998 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the salt shaker", "Bill just took his apple crumble and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_998_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the salt shaker", "Bill just took his apple crumble and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_999 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_999_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_105 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_1000 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1000_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_1001 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1001_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_1002 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "After ordering,  Bill noticed a man with a face tattoo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1002_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "After ordering,  Bill noticed a man with a face tattoo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_1003 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1003_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_1004 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1004_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_1005 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1005_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_1006 = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he yelled in seven languages", "This caused Bill to dance the circle dance"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1006_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he yelled in seven languages", "This caused Bill to dance the circle dance"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_1007 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1007_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_1008 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The barista had to intervene by dumping a bucket of water at Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1008_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The barista had to intervene by dumping a bucket of water at Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DANCE",
						"true_tonode": "BARISTA",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_1009 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1009_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_1010 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Bill <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "On his way out, Bill took the empty pitcher"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1010_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Bill <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "On his way out, Bill took the empty pitcher"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTA",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_1011 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1011_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_106 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_1012 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1012_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_1013 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1013_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_1014 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "While sitting down, Bill overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1014_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "While sitting down, Bill overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_1015 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1015_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_1016 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That???s when the band began playing a guitar solo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1016_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That???s when the band began playing a guitar solo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_1017 = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1017_ = {
		type: "html-keyboard-response",
		stimulus: "That???s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_1018 = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he yelled in seven languages", "This caused Bill to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1018_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That???s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he yelled in seven languages", "This caused Bill to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_1019 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1019_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_1020 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The barista had to intervene by dumping a bucket of water at Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1020_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The barista had to intervene by dumping a bucket of water at Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DANCE",
						"true_tonode": "BARISTA",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_1021 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1021_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_1022 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the salt shaker", "Bill just took his blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1022_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the salt shaker", "Bill just took his blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_1023 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1023_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_107 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_1024 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1024_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_1025 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1025_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_1026 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard someone yelling math equations"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1026_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard someone yelling math equations"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_1027 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1027_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_1028 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting really bad music"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1028_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a symphony", "Suddenly, the radio began broadcasting really bad music"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_1029 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1029_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_1030 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she hid under the bar", "This caused Alice to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1030_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she hid under the bar", "This caused Alice to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_1031 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1031_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_1032 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Alice", "The barista had to intervene by throwing banana peels at Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1032_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Alice", "The barista had to intervene by throwing banana peels at Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_1033 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1033_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_1034 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "Alice just took her apple crumble and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1034_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "Alice just took her apple crumble and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_1035 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1035_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_108 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_1036 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1036_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_1037 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1037_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_1038 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard a bad pickup line", "After ordering,  Bill noticed a pirate with no sword"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1038_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard a bad pickup line", "After ordering,  Bill noticed a pirate with no sword"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_1039 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1039_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_1040 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That???s when the band began playing a symphony"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1040_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That???s when the band began playing a symphony"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_1041 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1041_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_1042 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he yelled in seven languages", "This caused Bill to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1042_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he yelled in seven languages", "This caused Bill to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_1043 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1043_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_1044 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Bill", "The barista had to intervene by dumping a bucket of water at Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1044_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Bill", "The barista had to intervene by dumping a bucket of water at Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_1045 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1045_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_1046 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the empty pitcher", "Bill just took his blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1046_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the empty pitcher", "Bill just took his blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_1047 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1047_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_109 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_1048 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1048_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_1049 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1049_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_1050 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1050_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_1051 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1051_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_1052 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting really bad music"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1052_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["That???s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting really bad music"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_1053 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1053_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_1054 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the circle dance", "This caused Alice to dance the circle dance"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1054_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the circle dance", "This caused Alice to dance the circle dance"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_1055 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1055_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_1056 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The police came rushing in to join along Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1056_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The police came rushing in to join along Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_1057 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1057_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_1058 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her apple crumble and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1058_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her apple crumble and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_1059 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1059_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_110 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 


// CODE BODY END


var comments = {
  type: 'survey-text',
  questions: [{prompt: "Thanks for participating! We appreciate any feedback.", 
                rows: 15, columns: 100}],
  }

jsPsych.init({
  timeline: [intro_instructions,intro_instructions2,s_1,s_1_,s_2,s_2_,q_3,q_3_,s_4,s_4_,q_5,q_5_,s_6,s_6_,q_7,q_7_,s_8,s_8_,q_9,q_9_,s_10,s_10_,q_11,q_11_,s_12,s_12_,betweenstory_1,s_13,s_13_,s_14,s_14_,q_15,q_15_,s_16,s_16_,s_17,s_17_,q_18,q_18_,s_19,s_19_,q_20,q_20_,s_21,s_21_,q_22,q_22_,s_23,s_23_,betweenstory_2,s_24,s_24_,s_25,s_25_,q_26,q_26_,s_27,s_27_,q_28,q_28_,s_29,s_29_,q_30,q_30_,s_31,s_31_,q_32,q_32_,s_33,s_33_,q_34,q_34_,s_35,s_35_,betweenstory_3,s_36,s_36_,s_37,s_37_,q_38,q_38_,s_39,s_39_,q_40,q_40_,s_41,s_41_,q_42,q_42_,s_43,s_43_,q_44,q_44_,s_45,s_45_,q_46,q_46_,s_47,s_47_,betweenstory_4,s_48,s_48_,s_49,s_49_,q_50,q_50_,s_51,s_51_,q_52,q_52_,s_53,s_53_,q_54,q_54_,s_55,s_55_,q_56,q_56_,s_57,s_57_,q_58,q_58_,s_59,s_59_,betweenstory_5,s_60,s_60_,s_61,s_61_,q_62,q_62_,s_63,s_63_,q_64,q_64_,s_65,s_65_,q_66,q_66_,s_67,s_67_,q_68,q_68_,s_69,s_69_,q_70,q_70_,s_71,s_71_,betweenstory_6,s_72,s_72_,s_73,s_73_,q_74,q_74_,s_75,s_75_,s_76,s_76_,q_77,q_77_,s_78,s_78_,q_79,q_79_,s_80,s_80_,q_81,q_81_,s_82,s_82_,betweenstory_7,s_83,s_83_,s_84,s_84_,q_85,q_85_,s_86,s_86_,q_87,q_87_,s_88,s_88_,q_89,q_89_,s_90,s_90_,q_91,q_91_,s_92,s_92_,q_93,q_93_,s_94,s_94_,betweenstory_8,s_95,s_95_,s_96,s_96_,q_97,q_97_,s_98,s_98_,q_99,q_99_,s_100,s_100_,q_101,q_101_,s_102,s_102_,q_103,q_103_,s_104,s_104_,q_105,q_105_,s_106,s_106_,betweenstory_9,s_107,s_107_,s_108,s_108_,q_109,q_109_,s_110,s_110_,q_111,q_111_,s_112,s_112_,q_113,q_113_,s_114,s_114_,q_115,q_115_,s_116,s_116_,q_117,q_117_,s_118,s_118_,betweenstory_10,s_119,s_119_,s_120,s_120_,s_121,s_121_,s_122,s_122_,s_123,s_123_,s_124,s_124_,s_125,s_125_,betweenstory_11,s_126,s_126_,s_127,s_127_,s_128,s_128_,s_129,s_129_,s_130,s_130_,s_131,s_131_,s_132,s_132_,betweenstory_12,s_133,s_133_,s_134,s_134_,s_135,s_135_,s_136,s_136_,s_137,s_137_,s_138,s_138_,s_139,s_139_,betweenstory_13,s_140,s_140_,s_141,s_141_,s_142,s_142_,s_143,s_143_,s_144,s_144_,s_145,s_145_,s_146,s_146_,betweenstory_14,s_147,s_147_,s_148,s_148_,s_149,s_149_,s_150,s_150_,s_151,s_151_,s_152,s_152_,s_153,s_153_,betweenstory_15,s_154,s_154_,s_155,s_155_,s_156,s_156_,s_157,s_157_,s_158,s_158_,s_159,s_159_,s_160,s_160_,betweenstory_16,s_161,s_161_,s_162,s_162_,s_163,s_163_,s_164,s_164_,s_165,s_165_,s_166,s_166_,s_167,s_167_,betweenstory_17,s_168,s_168_,s_169,s_169_,s_170,s_170_,s_171,s_171_,s_172,s_172_,s_173,s_173_,s_174,s_174_,betweenstory_18,s_175,s_175_,s_176,s_176_,s_177,s_177_,s_178,s_178_,s_179,s_179_,s_180,s_180_,s_181,s_181_,betweenstory_19,s_182,s_182_,s_183,s_183_,s_184,s_184_,s_185,s_185_,s_186,s_186_,s_187,s_187_,s_188,s_188_,betweenstory_20,s_189,s_189_,s_190,s_190_,q_191,q_191_,s_192,s_192_,q_193,q_193_,s_194,s_194_,q_195,q_195_,s_196,s_196_,q_197,q_197_,s_198,s_198_,q_199,q_199_,s_200,s_200_,betweenstory_21,s_201,s_201_,s_202,s_202_,q_203,q_203_,s_204,s_204_,s_205,s_205_,q_206,q_206_,s_207,s_207_,q_208,q_208_,s_209,s_209_,q_210,q_210_,s_211,s_211_,betweenstory_22,s_212,s_212_,s_213,s_213_,q_214,q_214_,s_215,s_215_,s_216,s_216_,q_217,q_217_,s_218,s_218_,q_219,q_219_,s_220,s_220_,q_221,q_221_,s_222,s_222_,betweenstory_23,s_223,s_223_,s_224,s_224_,q_225,q_225_,s_226,s_226_,q_227,q_227_,s_228,s_228_,q_229,q_229_,s_230,s_230_,q_231,q_231_,s_232,s_232_,q_233,q_233_,s_234,s_234_,betweenstory_24,s_235,s_235_,s_236,s_236_,q_237,q_237_,s_238,s_238_,q_239,q_239_,s_240,s_240_,q_241,q_241_,s_242,s_242_,q_243,q_243_,s_244,s_244_,q_245,q_245_,s_246,s_246_,betweenstory_25,s_247,s_247_,s_248,s_248_,q_249,q_249_,s_250,s_250_,s_251,s_251_,q_252,q_252_,s_253,s_253_,q_254,q_254_,s_255,s_255_,q_256,q_256_,s_257,s_257_,betweenstory_26,s_258,s_258_,s_259,s_259_,q_260,q_260_,s_261,s_261_,s_262,s_262_,q_263,q_263_,s_264,s_264_,q_265,q_265_,s_266,s_266_,q_267,q_267_,s_268,s_268_,betweenstory_27,s_269,s_269_,s_270,s_270_,q_271,q_271_,s_272,s_272_,s_273,s_273_,q_274,q_274_,s_275,s_275_,q_276,q_276_,s_277,s_277_,q_278,q_278_,s_279,s_279_,betweenstory_28,s_280,s_280_,s_281,s_281_,q_282,q_282_,s_283,s_283_,q_284,q_284_,s_285,s_285_,q_286,q_286_,s_287,s_287_,q_288,q_288_,s_289,s_289_,q_290,q_290_,s_291,s_291_,betweenstory_29,s_292,s_292_,s_293,s_293_,q_294,q_294_,s_295,s_295_,q_296,q_296_,s_297,s_297_,q_298,q_298_,s_299,s_299_,q_300,q_300_,s_301,s_301_,q_302,q_302_,s_303,s_303_,betweenstory_30,s_304,s_304_,s_305,s_305_,s_306,s_306_,s_307,s_307_,s_308,s_308_,s_309,s_309_,s_310,s_310_,betweenstory_31,s_311,s_311_,s_312,s_312_,s_313,s_313_,s_314,s_314_,s_315,s_315_,s_316,s_316_,s_317,s_317_,betweenstory_32,s_318,s_318_,s_319,s_319_,s_320,s_320_,s_321,s_321_,s_322,s_322_,s_323,s_323_,s_324,s_324_,betweenstory_33,s_325,s_325_,s_326,s_326_,s_327,s_327_,s_328,s_328_,s_329,s_329_,s_330,s_330_,s_331,s_331_,betweenstory_34,s_332,s_332_,s_333,s_333_,s_334,s_334_,s_335,s_335_,s_336,s_336_,s_337,s_337_,s_338,s_338_,betweenstory_35,s_339,s_339_,s_340,s_340_,s_341,s_341_,s_342,s_342_,s_343,s_343_,s_344,s_344_,s_345,s_345_,betweenstory_36,s_346,s_346_,s_347,s_347_,s_348,s_348_,s_349,s_349_,s_350,s_350_,s_351,s_351_,s_352,s_352_,betweenstory_37,s_353,s_353_,s_354,s_354_,s_355,s_355_,s_356,s_356_,s_357,s_357_,s_358,s_358_,s_359,s_359_,betweenstory_38,s_360,s_360_,s_361,s_361_,s_362,s_362_,s_363,s_363_,s_364,s_364_,s_365,s_365_,s_366,s_366_,betweenstory_39,s_367,s_367_,s_368,s_368_,s_369,s_369_,s_370,s_370_,s_371,s_371_,s_372,s_372_,s_373,s_373_,betweenstory_40,s_374,s_374_,s_375,s_375_,q_376,q_376_,s_377,s_377_,q_378,q_378_,s_379,s_379_,q_380,q_380_,s_381,s_381_,q_382,q_382_,s_383,s_383_,q_384,q_384_,s_385,s_385_,betweenstory_41,s_386,s_386_,s_387,s_387_,q_388,q_388_,s_389,s_389_,q_390,q_390_,s_391,s_391_,q_392,q_392_,s_393,s_393_,q_394,q_394_,s_395,s_395_,q_396,q_396_,s_397,s_397_,betweenstory_42,s_398,s_398_,s_399,s_399_,q_400,q_400_,s_401,s_401_,q_402,q_402_,s_403,s_403_,q_404,q_404_,s_405,s_405_,q_406,q_406_,s_407,s_407_,q_408,q_408_,s_409,s_409_,betweenstory_43,s_410,s_410_,s_411,s_411_,q_412,q_412_,s_413,s_413_,q_414,q_414_,s_415,s_415_,q_416,q_416_,s_417,s_417_,q_418,q_418_,s_419,s_419_,q_420,q_420_,s_421,s_421_,betweenstory_44,s_422,s_422_,s_423,s_423_,q_424,q_424_,s_425,s_425_,q_426,q_426_,s_427,s_427_,q_428,q_428_,s_429,s_429_,q_430,q_430_,s_431,s_431_,q_432,q_432_,s_433,s_433_,betweenstory_45,s_434,s_434_,s_435,s_435_,q_436,q_436_,s_437,s_437_,q_438,q_438_,s_439,s_439_,q_440,q_440_,s_441,s_441_,q_442,q_442_,s_443,s_443_,q_444,q_444_,s_445,s_445_,betweenstory_46,s_446,s_446_,s_447,s_447_,q_448,q_448_,s_449,s_449_,s_450,s_450_,q_451,q_451_,s_452,s_452_,q_453,q_453_,s_454,s_454_,q_455,q_455_,s_456,s_456_,betweenstory_47,s_457,s_457_,s_458,s_458_,q_459,q_459_,s_460,s_460_,q_461,q_461_,s_462,s_462_,q_463,q_463_,s_464,s_464_,q_465,q_465_,s_466,s_466_,q_467,q_467_,s_468,s_468_,betweenstory_48,s_469,s_469_,s_470,s_470_,q_471,q_471_,s_472,s_472_,s_473,s_473_,q_474,q_474_,s_475,s_475_,q_476,q_476_,s_477,s_477_,q_478,q_478_,s_479,s_479_,betweenstory_49,s_480,s_480_,s_481,s_481_,q_482,q_482_,s_483,s_483_,q_484,q_484_,s_485,s_485_,q_486,q_486_,s_487,s_487_,q_488,q_488_,s_489,s_489_,q_490,q_490_,s_491,s_491_,betweenstory_50,s_492,s_492_,s_493,s_493_,s_494,s_494_,s_495,s_495_,s_496,s_496_,s_497,s_497_,s_498,s_498_,betweenstory_51,s_499,s_499_,s_500,s_500_,s_501,s_501_,s_502,s_502_,s_503,s_503_,s_504,s_504_,s_505,s_505_,betweenstory_52,s_506,s_506_,s_507,s_507_,s_508,s_508_,s_509,s_509_,s_510,s_510_,s_511,s_511_,s_512,s_512_,betweenstory_53,s_513,s_513_,s_514,s_514_,s_515,s_515_,s_516,s_516_,s_517,s_517_,s_518,s_518_,s_519,s_519_,betweenstory_54,s_520,s_520_,s_521,s_521_,s_522,s_522_,s_523,s_523_,s_524,s_524_,s_525,s_525_,s_526,s_526_,betweenstory_55,s_527,s_527_,s_528,s_528_,s_529,s_529_,s_530,s_530_,s_531,s_531_,s_532,s_532_,s_533,s_533_,betweenstory_56,s_534,s_534_,s_535,s_535_,s_536,s_536_,s_537,s_537_,s_538,s_538_,s_539,s_539_,s_540,s_540_,betweenstory_57,s_541,s_541_,s_542,s_542_,s_543,s_543_,s_544,s_544_,s_545,s_545_,s_546,s_546_,s_547,s_547_,betweenstory_58,s_548,s_548_,s_549,s_549_,s_550,s_550_,s_551,s_551_,s_552,s_552_,s_553,s_553_,s_554,s_554_,betweenstory_59,s_555,s_555_,s_556,s_556_,s_557,s_557_,s_558,s_558_,s_559,s_559_,s_560,s_560_,s_561,s_561_,betweenstory_60,s_562,s_562_,s_563,s_563_,q_564,q_564_,s_565,s_565_,q_566,q_566_,s_567,s_567_,q_568,q_568_,s_569,s_569_,q_570,q_570_,s_571,s_571_,q_572,q_572_,s_573,s_573_,betweenstory_61,s_574,s_574_,s_575,s_575_,q_576,q_576_,s_577,s_577_,q_578,q_578_,s_579,s_579_,q_580,q_580_,s_581,s_581_,q_582,q_582_,s_583,s_583_,q_584,q_584_,s_585,s_585_,betweenstory_62,s_586,s_586_,s_587,s_587_,q_588,q_588_,s_589,s_589_,q_590,q_590_,s_591,s_591_,q_592,q_592_,s_593,s_593_,q_594,q_594_,s_595,s_595_,q_596,q_596_,s_597,s_597_,betweenstory_63,s_598,s_598_,s_599,s_599_,q_600,q_600_,s_601,s_601_,q_602,q_602_,s_603,s_603_,q_604,q_604_,s_605,s_605_,q_606,q_606_,s_607,s_607_,q_608,q_608_,s_609,s_609_,betweenstory_64,s_610,s_610_,s_611,s_611_,q_612,q_612_,s_613,s_613_,q_614,q_614_,s_615,s_615_,q_616,q_616_,s_617,s_617_,q_618,q_618_,s_619,s_619_,q_620,q_620_,s_621,s_621_,betweenstory_65,s_622,s_622_,s_623,s_623_,q_624,q_624_,s_625,s_625_,q_626,q_626_,s_627,s_627_,q_628,q_628_,s_629,s_629_,q_630,q_630_,s_631,s_631_,q_632,q_632_,s_633,s_633_,betweenstory_66,s_634,s_634_,s_635,s_635_,q_636,q_636_,s_637,s_637_,q_638,q_638_,s_639,s_639_,q_640,q_640_,s_641,s_641_,q_642,q_642_,s_643,s_643_,q_644,q_644_,s_645,s_645_,betweenstory_67,s_646,s_646_,s_647,s_647_,q_648,q_648_,s_649,s_649_,q_650,q_650_,s_651,s_651_,q_652,q_652_,s_653,s_653_,q_654,q_654_,s_655,s_655_,q_656,q_656_,s_657,s_657_,betweenstory_68,s_658,s_658_,s_659,s_659_,q_660,q_660_,s_661,s_661_,q_662,q_662_,s_663,s_663_,q_664,q_664_,s_665,s_665_,q_666,q_666_,s_667,s_667_,q_668,q_668_,s_669,s_669_,betweenstory_69,s_670,s_670_,s_671,s_671_,q_672,q_672_,s_673,s_673_,q_674,q_674_,s_675,s_675_,q_676,q_676_,s_677,s_677_,q_678,q_678_,s_679,s_679_,q_680,q_680_,s_681,s_681_,betweenstory_70,s_682,s_682_,s_683,s_683_,s_684,s_684_,s_685,s_685_,s_686,s_686_,s_687,s_687_,s_688,s_688_,betweenstory_71,s_689,s_689_,s_690,s_690_,s_691,s_691_,s_692,s_692_,s_693,s_693_,s_694,s_694_,s_695,s_695_,betweenstory_72,s_696,s_696_,s_697,s_697_,s_698,s_698_,s_699,s_699_,s_700,s_700_,s_701,s_701_,s_702,s_702_,betweenstory_73,s_703,s_703_,s_704,s_704_,s_705,s_705_,s_706,s_706_,s_707,s_707_,s_708,s_708_,s_709,s_709_,betweenstory_74,s_710,s_710_,s_711,s_711_,s_712,s_712_,s_713,s_713_,s_714,s_714_,s_715,s_715_,s_716,s_716_,betweenstory_75,s_717,s_717_,s_718,s_718_,s_719,s_719_,s_720,s_720_,s_721,s_721_,s_722,s_722_,s_723,s_723_,betweenstory_76,s_724,s_724_,s_725,s_725_,s_726,s_726_,s_727,s_727_,s_728,s_728_,s_729,s_729_,s_730,s_730_,betweenstory_77,s_731,s_731_,s_732,s_732_,s_733,s_733_,s_734,s_734_,s_735,s_735_,s_736,s_736_,s_737,s_737_,betweenstory_78,s_738,s_738_,s_739,s_739_,s_740,s_740_,s_741,s_741_,s_742,s_742_,s_743,s_743_,s_744,s_744_,betweenstory_79,s_745,s_745_,s_746,s_746_,s_747,s_747_,s_748,s_748_,s_749,s_749_,s_750,s_750_,s_751,s_751_,betweenstory_80,s_752,s_752_,s_753,s_753_,q_754,q_754_,s_755,s_755_,q_756,q_756_,s_757,s_757_,q_758,q_758_,s_759,s_759_,q_760,q_760_,s_761,s_761_,q_762,q_762_,s_763,s_763_,betweenstory_81,s_764,s_764_,s_765,s_765_,q_766,q_766_,s_767,s_767_,q_768,q_768_,s_769,s_769_,q_770,q_770_,s_771,s_771_,q_772,q_772_,s_773,s_773_,q_774,q_774_,s_775,s_775_,betweenstory_82,s_776,s_776_,s_777,s_777_,q_778,q_778_,s_779,s_779_,q_780,q_780_,s_781,s_781_,q_782,q_782_,s_783,s_783_,q_784,q_784_,s_785,s_785_,q_786,q_786_,s_787,s_787_,betweenstory_83,s_788,s_788_,s_789,s_789_,q_790,q_790_,s_791,s_791_,q_792,q_792_,s_793,s_793_,q_794,q_794_,s_795,s_795_,q_796,q_796_,s_797,s_797_,q_798,q_798_,s_799,s_799_,betweenstory_84,s_800,s_800_,s_801,s_801_,q_802,q_802_,s_803,s_803_,q_804,q_804_,s_805,s_805_,q_806,q_806_,s_807,s_807_,q_808,q_808_,s_809,s_809_,q_810,q_810_,s_811,s_811_,betweenstory_85,s_812,s_812_,s_813,s_813_,q_814,q_814_,s_815,s_815_,q_816,q_816_,s_817,s_817_,q_818,q_818_,s_819,s_819_,q_820,q_820_,s_821,s_821_,q_822,q_822_,s_823,s_823_,betweenstory_86,s_824,s_824_,s_825,s_825_,q_826,q_826_,s_827,s_827_,q_828,q_828_,s_829,s_829_,q_830,q_830_,s_831,s_831_,q_832,q_832_,s_833,s_833_,q_834,q_834_,s_835,s_835_,betweenstory_87,s_836,s_836_,s_837,s_837_,q_838,q_838_,s_839,s_839_,q_840,q_840_,s_841,s_841_,q_842,q_842_,s_843,s_843_,q_844,q_844_,s_845,s_845_,q_846,q_846_,s_847,s_847_,betweenstory_88,s_848,s_848_,s_849,s_849_,q_850,q_850_,s_851,s_851_,q_852,q_852_,s_853,s_853_,q_854,q_854_,s_855,s_855_,q_856,q_856_,s_857,s_857_,q_858,q_858_,s_859,s_859_,betweenstory_89,s_860,s_860_,s_861,s_861_,q_862,q_862_,s_863,s_863_,s_864,s_864_,q_865,q_865_,s_866,s_866_,q_867,q_867_,s_868,s_868_,q_869,q_869_,s_870,s_870_,betweenstory_90,s_871,s_871_,s_872,s_872_,s_873,s_873_,s_874,s_874_,s_875,s_875_,s_876,s_876_,s_877,s_877_,betweenstory_91,s_878,s_878_,s_879,s_879_,s_880,s_880_,s_881,s_881_,s_882,s_882_,s_883,s_883_,s_884,s_884_,betweenstory_92,s_885,s_885_,s_886,s_886_,s_887,s_887_,s_888,s_888_,s_889,s_889_,s_890,s_890_,s_891,s_891_,betweenstory_93,s_892,s_892_,s_893,s_893_,s_894,s_894_,s_895,s_895_,s_896,s_896_,s_897,s_897_,s_898,s_898_,betweenstory_94,s_899,s_899_,s_900,s_900_,s_901,s_901_,s_902,s_902_,s_903,s_903_,s_904,s_904_,s_905,s_905_,betweenstory_95,s_906,s_906_,s_907,s_907_,s_908,s_908_,s_909,s_909_,s_910,s_910_,s_911,s_911_,s_912,s_912_,betweenstory_96,s_913,s_913_,s_914,s_914_,s_915,s_915_,s_916,s_916_,s_917,s_917_,s_918,s_918_,s_919,s_919_,betweenstory_97,s_920,s_920_,s_921,s_921_,s_922,s_922_,s_923,s_923_,s_924,s_924_,s_925,s_925_,s_926,s_926_,betweenstory_98,s_927,s_927_,s_928,s_928_,s_929,s_929_,s_930,s_930_,s_931,s_931_,s_932,s_932_,s_933,s_933_,betweenstory_99,s_934,s_934_,s_935,s_935_,s_936,s_936_,s_937,s_937_,s_938,s_938_,s_939,s_939_,s_940,s_940_,betweenstory_100,s_941,s_941_,s_942,s_942_,q_943,q_943_,s_944,s_944_,q_945,q_945_,s_946,s_946_,q_947,q_947_,s_948,s_948_,q_949,q_949_,s_950,s_950_,q_951,q_951_,s_952,s_952_,betweenstory_101,s_953,s_953_,s_954,s_954_,q_955,q_955_,s_956,s_956_,q_957,q_957_,s_958,s_958_,q_959,q_959_,s_960,s_960_,q_961,q_961_,s_962,s_962_,q_963,q_963_,s_964,s_964_,betweenstory_102,s_965,s_965_,s_966,s_966_,q_967,q_967_,s_968,s_968_,q_969,q_969_,s_970,s_970_,q_971,q_971_,s_972,s_972_,q_973,q_973_,s_974,s_974_,q_975,q_975_,s_976,s_976_,betweenstory_103,s_977,s_977_,s_978,s_978_,q_979,q_979_,s_980,s_980_,q_981,q_981_,s_982,s_982_,q_983,q_983_,s_984,s_984_,q_985,q_985_,s_986,s_986_,q_987,q_987_,s_988,s_988_,betweenstory_104,s_989,s_989_,s_990,s_990_,q_991,q_991_,s_992,s_992_,s_993,s_993_,q_994,q_994_,s_995,s_995_,q_996,q_996_,s_997,s_997_,q_998,q_998_,s_999,s_999_,betweenstory_105,s_1000,s_1000_,s_1001,s_1001_,q_1002,q_1002_,s_1003,s_1003_,q_1004,q_1004_,s_1005,s_1005_,q_1006,q_1006_,s_1007,s_1007_,q_1008,q_1008_,s_1009,s_1009_,q_1010,q_1010_,s_1011,s_1011_,betweenstory_106,s_1012,s_1012_,s_1013,s_1013_,q_1014,q_1014_,s_1015,s_1015_,q_1016,q_1016_,s_1017,s_1017_,q_1018,q_1018_,s_1019,s_1019_,q_1020,q_1020_,s_1021,s_1021_,q_1022,q_1022_,s_1023,s_1023_,betweenstory_107,s_1024,s_1024_,s_1025,s_1025_,q_1026,q_1026_,s_1027,s_1027_,q_1028,q_1028_,s_1029,s_1029_,q_1030,q_1030_,s_1031,s_1031_,q_1032,q_1032_,s_1033,s_1033_,q_1034,q_1034_,s_1035,s_1035_,betweenstory_108,s_1036,s_1036_,s_1037,s_1037_,q_1038,q_1038_,s_1039,s_1039_,q_1040,q_1040_,s_1041,s_1041_,q_1042,q_1042_,s_1043,s_1043_,q_1044,q_1044_,s_1045,s_1045_,q_1046,q_1046_,s_1047,s_1047_,betweenstory_109,s_1048,s_1048_,s_1049,s_1049_,q_1050,q_1050_,s_1051,s_1051_,q_1052,q_1052_,s_1053,s_1053_,q_1054,q_1054_,s_1055,s_1055_,q_1056,q_1056_,s_1057,s_1057_,q_1058,q_1058_,s_1059,s_1059_,betweenstory_110,comments],
  display_element: 'jspsych-target',
  show_progress_bar: true,
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