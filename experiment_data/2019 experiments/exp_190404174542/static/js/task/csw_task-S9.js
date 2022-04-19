// load psiturk
var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);

var MIN_QUESTION_ITI = 1500
var MIN_STORY_ITI = 500

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
		stimulus: "Ryan wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1_ = {
		type: "html-keyboard-response",
		stimulus: "Ryan wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Ryan_location-jungle",
						"type": "story" }
	} 
	var q_2 = {
		type: "html-keyboard-response",
		stimulus: "<p> Ryan wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Ryan decides to go to the Deep Ocean Cafe.", "Ryan decides to go to the Jungle Brew House."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_2_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Ryan wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Ryan decides to go to the Deep Ocean Cafe.", "Ryan decides to go to the Jungle Brew House."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "LOCNODEB",
						"false_tonode": "LOCNODEC",
						"true_rfc":"subject-Ryan_location-jungle",
						"false_rfc":"subject-Ryan_location-jungle" }
			} 
	var s_3 = {
		type: "html-keyboard-response",
		stimulus: "Ryan decides to go to the Jungle Brew House.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_3_ = {
		type: "html-keyboard-response",
		stimulus: "Ryan decides to go to the Jungle Brew House.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEB",
						"rfc": "subject-Ryan_location-jungle",
						"type": "story" }
	} 
	var s_4 = {
		type: "html-keyboard-response",
		stimulus: "Today, Ryan waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_4_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Ryan waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Ryan_location-jungle",
						"type": "story" }
	} 
	var q_5 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Ryan waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Maria took a quarter from the tip jar.", "Before ordering cake, Ryan took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_5_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Ryan waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Maria took a quarter from the tip jar.", "Before ordering cake, Ryan took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Ryan_location-jungle",
						"false_rfc":"subject-Maria_location-deep" }
			} 
	var s_6 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Ryan took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_6_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Ryan took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Ryan_location-jungle",
						"type": "story" }
	} 
	var q_7 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Ryan took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Ryan then sat by the window, and read a book for hours.", "Lawrence then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_7_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Ryan took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Ryan then sat by the window, and read a book for hours.", "Lawrence then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Ryan_location-jungle",
						"false_rfc":"subject-Lawrence_location-deep" }
			} 
	var s_8 = {
		type: "html-keyboard-response",
		stimulus: "Ryan then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_8_ = {
		type: "html-keyboard-response",
		stimulus: "Ryan then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Ryan_location-jungle",
						"type": "story" }
	} 
	var s_9 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_9_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Ryan_location-jungle",
						"type": "story" }
	} 

	var betweenstory_1 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_10 = {
		type: "html-keyboard-response",
		stimulus: "Russell wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_10_ = {
		type: "html-keyboard-response",
		stimulus: "Russell wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Russell_location-jungle",
						"type": "story" }
	} 
	var s_11 = {
		type: "html-keyboard-response",
		stimulus: "Russell decides to go to the Jungle Brew House.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_11_ = {
		type: "html-keyboard-response",
		stimulus: "Russell decides to go to the Jungle Brew House.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEB",
						"rfc": "subject-Russell_location-jungle",
						"type": "story" }
	} 
	var s_12 = {
		type: "html-keyboard-response",
		stimulus: "Today, Russell waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_12_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Russell waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Russell_location-jungle",
						"type": "story" }
	} 
	var q_13 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Russell waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Russell took a quarter from the tip jar.", "Before ordering cake, Mary took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_13_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Russell waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Russell took a quarter from the tip jar.", "Before ordering cake, Mary took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Russell_location-jungle",
						"false_rfc":"subject-Mary_location-jungle" }
			} 
	var s_14 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Russell took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_14_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Russell took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Russell_location-jungle",
						"type": "story" }
	} 
	var q_15 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Russell took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Russell stole a salt shaker and left.", "Russell then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_15_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Russell took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Russell stole a salt shaker and left.", "Russell then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Russell_location-jungle",
						"false_rfc":"subject-Russell_location-jungle" }
			} 
	var s_16 = {
		type: "html-keyboard-response",
		stimulus: "Russell then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_16_ = {
		type: "html-keyboard-response",
		stimulus: "Russell then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Russell_location-jungle",
						"type": "story" }
	} 
	var s_17 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_17_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Russell_location-jungle",
						"type": "story" }
	} 

	var betweenstory_2 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_18 = {
		type: "html-keyboard-response",
		stimulus: "Samuel wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_18_ = {
		type: "html-keyboard-response",
		stimulus: "Samuel wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Samuel_location-deep",
						"type": "story" }
	} 
	var q_19 = {
		type: "html-keyboard-response",
		stimulus: "<p> Samuel wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Samuel decides to go to the Jungle Brew House.", "Samuel decides to go to the Deep Ocean Cafe."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_19_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Samuel wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Samuel decides to go to the Jungle Brew House.", "Samuel decides to go to the Deep Ocean Cafe."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "LOCNODEC",
						"false_tonode": "LOCNODEB",
						"true_rfc":"subject-Samuel_location-deep",
						"false_rfc":"subject-Samuel_location-deep" }
			} 
	var s_20 = {
		type: "html-keyboard-response",
		stimulus: "Samuel decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_20_ = {
		type: "html-keyboard-response",
		stimulus: "Samuel decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEC",
						"rfc": "subject-Samuel_location-deep",
						"type": "story" }
	} 
	var s_21 = {
		type: "html-keyboard-response",
		stimulus: "Today, Samuel waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_21_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Samuel waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Samuel_location-deep",
						"type": "story" }
	} 
	var q_22 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Samuel waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Samuel noticed the barista’s new mustache.", "Before ordering cake, Samuel took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_22_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Samuel waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Samuel noticed the barista’s new mustache.", "Before ordering cake, Samuel took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Samuel_location-deep",
						"false_rfc":"subject-Samuel_location-deep" }
			} 
	var s_23 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Samuel noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_23_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Samuel noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Samuel_location-deep",
						"type": "story" }
	} 
	var q_24 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Samuel noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Nicholas then sat by the window, and read a book for hours.", "Samuel then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_24_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Samuel noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Nicholas then sat by the window, and read a book for hours.", "Samuel then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Samuel_location-deep",
						"false_rfc":"subject-Nicholas_location-deep" }
			} 
	var s_25 = {
		type: "html-keyboard-response",
		stimulus: "Samuel then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_25_ = {
		type: "html-keyboard-response",
		stimulus: "Samuel then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Samuel_location-deep",
						"type": "story" }
	} 
	var s_26 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_26_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Samuel_location-deep",
						"type": "story" }
	} 

	var betweenstory_3 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_27 = {
		type: "html-keyboard-response",
		stimulus: "Olivia wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_27_ = {
		type: "html-keyboard-response",
		stimulus: "Olivia wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Olivia_location-deep",
						"type": "story" }
	} 
	var q_28 = {
		type: "html-keyboard-response",
		stimulus: "<p> Olivia wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Olivia decides to go to the Deep Ocean Cafe.", "Olivia decides to go to the Jungle Brew House."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_28_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Olivia wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Olivia decides to go to the Deep Ocean Cafe.", "Olivia decides to go to the Jungle Brew House."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "LOCNODEC",
						"false_tonode": "LOCNODEB",
						"true_rfc":"subject-Olivia_location-deep",
						"false_rfc":"subject-Olivia_location-deep" }
			} 
	var s_29 = {
		type: "html-keyboard-response",
		stimulus: "Olivia decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_29_ = {
		type: "html-keyboard-response",
		stimulus: "Olivia decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEC",
						"rfc": "subject-Olivia_location-deep",
						"type": "story" }
	} 
	var s_30 = {
		type: "html-keyboard-response",
		stimulus: "Olivia was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_30_ = {
		type: "html-keyboard-response",
		stimulus: "Olivia was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Olivia_location-deep",
						"type": "story" }
	} 
	var q_31 = {
		type: "html-keyboard-response",
		stimulus: "<p> Olivia was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Olivia took a quarter from the tip jar.", "Before ordering cake, Nicholas took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_31_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Olivia was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Olivia took a quarter from the tip jar.", "Before ordering cake, Nicholas took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Olivia_location-deep",
						"false_rfc":"subject-Nicholas_location-deep" }
			} 
	var s_32 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Olivia took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_32_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Olivia took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Olivia_location-deep",
						"type": "story" }
	} 
	var q_33 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Olivia took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Olivia then sat by the window, and read a book for hours.", "After ordering, Olivia stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_33_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Olivia took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Olivia then sat by the window, and read a book for hours.", "After ordering, Olivia stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Olivia_location-deep",
						"false_rfc":"subject-Olivia_location-deep" }
			} 
	var s_34 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Olivia stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_34_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Olivia stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Olivia_location-deep",
						"type": "story" }
	} 
	var s_35 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_35_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Olivia_location-deep",
						"type": "story" }
	} 

	var betweenstory_4 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_36 = {
		type: "html-keyboard-response",
		stimulus: "Anthony wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_36_ = {
		type: "html-keyboard-response",
		stimulus: "Anthony wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Anthony_location-jungle",
						"type": "story" }
	} 
	var q_37 = {
		type: "html-keyboard-response",
		stimulus: "<p> Anthony wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Anthony decides to go to the Deep Ocean Cafe.", "Anthony decides to go to the Jungle Brew House."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_37_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Anthony wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Anthony decides to go to the Deep Ocean Cafe.", "Anthony decides to go to the Jungle Brew House."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "LOCNODEB",
						"false_tonode": "LOCNODEC",
						"true_rfc":"subject-Anthony_location-jungle",
						"false_rfc":"subject-Anthony_location-jungle" }
			} 
	var s_38 = {
		type: "html-keyboard-response",
		stimulus: "Anthony decides to go to the Jungle Brew House.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_38_ = {
		type: "html-keyboard-response",
		stimulus: "Anthony decides to go to the Jungle Brew House.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEB",
						"rfc": "subject-Anthony_location-jungle",
						"type": "story" }
	} 
	var s_39 = {
		type: "html-keyboard-response",
		stimulus: "Anthony was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_39_ = {
		type: "html-keyboard-response",
		stimulus: "Anthony was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Anthony_location-jungle",
						"type": "story" }
	} 
	var q_40 = {
		type: "html-keyboard-response",
		stimulus: "<p> Anthony was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Anthony took a quarter from the tip jar.", "While ordering tea, Anthony noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_40_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Anthony was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Anthony took a quarter from the tip jar.", "While ordering tea, Anthony noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Anthony_location-jungle",
						"false_rfc":"subject-Anthony_location-jungle" }
			} 
	var s_41 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Anthony noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_41_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Anthony noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Anthony_location-jungle",
						"type": "story" }
	} 
	var q_42 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Anthony noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Anthony then sat by the window, and read a book for hours.", "After ordering, Anthony stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_42_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Anthony noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Anthony then sat by the window, and read a book for hours.", "After ordering, Anthony stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Anthony_location-jungle",
						"false_rfc":"subject-Anthony_location-jungle" }
			} 
	var s_43 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Anthony stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_43_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Anthony stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Anthony_location-jungle",
						"type": "story" }
	} 
	var s_44 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_44_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Anthony_location-jungle",
						"type": "story" }
	} 

	var betweenstory_5 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_45 = {
		type: "html-keyboard-response",
		stimulus: "Deborah wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_45_ = {
		type: "html-keyboard-response",
		stimulus: "Deborah wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Deborah_location-jungle",
						"type": "story" }
	} 
	var q_46 = {
		type: "html-keyboard-response",
		stimulus: "<p> Deborah wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Deborah decides to go to the Jungle Brew House.", "Deborah decides to go to the Deep Ocean Cafe."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_46_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Deborah wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Deborah decides to go to the Jungle Brew House.", "Deborah decides to go to the Deep Ocean Cafe."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "LOCNODEB",
						"false_tonode": "LOCNODEC",
						"true_rfc":"subject-Deborah_location-jungle",
						"false_rfc":"subject-Deborah_location-jungle" }
			} 
	var s_47 = {
		type: "html-keyboard-response",
		stimulus: "Deborah decides to go to the Jungle Brew House.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_47_ = {
		type: "html-keyboard-response",
		stimulus: "Deborah decides to go to the Jungle Brew House.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEB",
						"rfc": "subject-Deborah_location-jungle",
						"type": "story" }
	} 
	var s_48 = {
		type: "html-keyboard-response",
		stimulus: "Deborah was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_48_ = {
		type: "html-keyboard-response",
		stimulus: "Deborah was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Deborah_location-jungle",
						"type": "story" }
	} 
	var q_49 = {
		type: "html-keyboard-response",
		stimulus: "<p> Deborah was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Deborah noticed the barista’s new mustache.", "While ordering tea, Pamela noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_49_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Deborah was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Deborah noticed the barista’s new mustache.", "While ordering tea, Pamela noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Deborah_location-jungle",
						"false_rfc":"subject-Pamela_location-deep" }
			} 
	var s_50 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Deborah noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_50_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Deborah noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Deborah_location-jungle",
						"type": "story" }
	} 
	var q_51 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Deborah noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Deborah then sat by the window, and read a book for hours.", "After ordering, Deborah stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_51_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Deborah noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Deborah then sat by the window, and read a book for hours.", "After ordering, Deborah stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Deborah_location-jungle",
						"false_rfc":"subject-Deborah_location-jungle" }
			} 
	var s_52 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Deborah stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_52_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Deborah stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Deborah_location-jungle",
						"type": "story" }
	} 
	var s_53 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_53_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Deborah_location-jungle",
						"type": "story" }
	} 

	var betweenstory_6 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_54 = {
		type: "html-keyboard-response",
		stimulus: "Adam wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_54_ = {
		type: "html-keyboard-response",
		stimulus: "Adam wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Adam_location-deep",
						"type": "story" }
	} 
	var q_55 = {
		type: "html-keyboard-response",
		stimulus: "<p> Adam wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Adam decides to go to the Jungle Brew House.", "Adam decides to go to the Deep Ocean Cafe."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_55_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Adam wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Adam decides to go to the Jungle Brew House.", "Adam decides to go to the Deep Ocean Cafe."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "LOCNODEC",
						"false_tonode": "LOCNODEB",
						"true_rfc":"subject-Adam_location-deep",
						"false_rfc":"subject-Adam_location-deep" }
			} 
	var s_56 = {
		type: "html-keyboard-response",
		stimulus: "Adam decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_56_ = {
		type: "html-keyboard-response",
		stimulus: "Adam decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEC",
						"rfc": "subject-Adam_location-deep",
						"type": "story" }
	} 
	var s_57 = {
		type: "html-keyboard-response",
		stimulus: "Adam was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_57_ = {
		type: "html-keyboard-response",
		stimulus: "Adam was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Adam_location-deep",
						"type": "story" }
	} 
	var q_58 = {
		type: "html-keyboard-response",
		stimulus: "<p> Adam was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Adam noticed the barista’s new mustache.", "Before ordering cake, Adam took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_58_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Adam was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Adam noticed the barista’s new mustache.", "Before ordering cake, Adam took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Adam_location-deep",
						"false_rfc":"subject-Adam_location-deep" }
			} 
	var s_59 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Adam took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_59_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Adam took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Adam_location-deep",
						"type": "story" }
	} 
	var q_60 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Adam took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, William stole a salt shaker and left.", "After ordering, Adam stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_60_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Adam took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, William stole a salt shaker and left.", "After ordering, Adam stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Adam_location-deep",
						"false_rfc":"subject-William_location-jungle" }
			} 
	var s_61 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Adam stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_61_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Adam stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Adam_location-deep",
						"type": "story" }
	} 
	var s_62 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_62_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Adam_location-deep",
						"type": "story" }
	} 

	var betweenstory_7 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_63 = {
		type: "html-keyboard-response",
		stimulus: "Janice wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_63_ = {
		type: "html-keyboard-response",
		stimulus: "Janice wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Janice_location-deep",
						"type": "story" }
	} 
	var q_64 = {
		type: "html-keyboard-response",
		stimulus: "<p> Janice wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Janice decides to go to the Jungle Brew House.", "Janice decides to go to the Deep Ocean Cafe."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_64_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Janice wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Janice decides to go to the Jungle Brew House.", "Janice decides to go to the Deep Ocean Cafe."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "LOCNODEC",
						"false_tonode": "LOCNODEB",
						"true_rfc":"subject-Janice_location-deep",
						"false_rfc":"subject-Janice_location-deep" }
			} 
	var s_65 = {
		type: "html-keyboard-response",
		stimulus: "Janice decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_65_ = {
		type: "html-keyboard-response",
		stimulus: "Janice decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEC",
						"rfc": "subject-Janice_location-deep",
						"type": "story" }
	} 
	var s_66 = {
		type: "html-keyboard-response",
		stimulus: "Janice was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_66_ = {
		type: "html-keyboard-response",
		stimulus: "Janice was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Janice_location-deep",
						"type": "story" }
	} 
	var q_67 = {
		type: "html-keyboard-response",
		stimulus: "<p> Janice was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Janice took a quarter from the tip jar.", "While ordering tea, Janice noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_67_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Janice was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Janice took a quarter from the tip jar.", "While ordering tea, Janice noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Janice_location-deep",
						"false_rfc":"subject-Janice_location-deep" }
			} 
	var s_68 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Janice took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_68_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Janice took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Janice_location-deep",
						"type": "story" }
	} 
	var q_69 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Janice took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Janice then sat by the window, and read a book for hours.", "After ordering, Janice stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_69_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Janice took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Janice then sat by the window, and read a book for hours.", "After ordering, Janice stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Janice_location-deep",
						"false_rfc":"subject-Janice_location-deep" }
			} 
	var s_70 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Janice stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_70_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Janice stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Janice_location-deep",
						"type": "story" }
	} 
	var s_71 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_71_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Janice_location-deep",
						"type": "story" }
	} 

	var betweenstory_8 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_72 = {
		type: "html-keyboard-response",
		stimulus: "Stephen wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_72_ = {
		type: "html-keyboard-response",
		stimulus: "Stephen wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Stephen_location-deep",
						"type": "story" }
	} 
	var s_73 = {
		type: "html-keyboard-response",
		stimulus: "Stephen decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_73_ = {
		type: "html-keyboard-response",
		stimulus: "Stephen decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEC",
						"rfc": "subject-Stephen_location-deep",
						"type": "story" }
	} 
	var s_74 = {
		type: "html-keyboard-response",
		stimulus: "Today, Stephen waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_74_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Stephen waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Stephen_location-deep",
						"type": "story" }
	} 
	var q_75 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Stephen waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Stephen took a quarter from the tip jar.", "While ordering tea, Stephen noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_75_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Stephen waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Stephen took a quarter from the tip jar.", "While ordering tea, Stephen noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Stephen_location-deep",
						"false_rfc":"subject-Stephen_location-deep" }
			} 
	var s_76 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Stephen noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_76_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Stephen noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Stephen_location-deep",
						"type": "story" }
	} 
	var q_77 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Stephen noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Stephen stole a salt shaker and left.", "Stephen then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_77_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Stephen noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Stephen stole a salt shaker and left.", "Stephen then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Stephen_location-deep",
						"false_rfc":"subject-Stephen_location-deep" }
			} 
	var s_78 = {
		type: "html-keyboard-response",
		stimulus: "Stephen then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_78_ = {
		type: "html-keyboard-response",
		stimulus: "Stephen then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Stephen_location-deep",
						"type": "story" }
	} 
	var s_79 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_79_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Stephen_location-deep",
						"type": "story" }
	} 

	var betweenstory_9 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_80 = {
		type: "html-keyboard-response",
		stimulus: "Gary wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_80_ = {
		type: "html-keyboard-response",
		stimulus: "Gary wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Gary_location-jungle",
						"type": "story" }
	} 
	var s_81 = {
		type: "html-keyboard-response",
		stimulus: "Gary decides to go to the Jungle Brew House.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_81_ = {
		type: "html-keyboard-response",
		stimulus: "Gary decides to go to the Jungle Brew House.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEB",
						"rfc": "subject-Gary_location-jungle",
						"type": "story" }
	} 
	var s_82 = {
		type: "html-keyboard-response",
		stimulus: "Gary was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_82_ = {
		type: "html-keyboard-response",
		stimulus: "Gary was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Gary_location-jungle",
						"type": "story" }
	} 
	var q_83 = {
		type: "html-keyboard-response",
		stimulus: "<p> Gary was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Gary noticed the barista’s new mustache.", "Before ordering cake, Gary took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_83_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Gary was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Gary noticed the barista’s new mustache.", "Before ordering cake, Gary took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Gary_location-jungle",
						"false_rfc":"subject-Gary_location-jungle" }
			} 
	var s_84 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Gary noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_84_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Gary noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Gary_location-jungle",
						"type": "story" }
	} 
	var q_85 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Gary noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Gary stole a salt shaker and left.", "Gary then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_85_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Gary noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Gary stole a salt shaker and left.", "Gary then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Gary_location-jungle",
						"false_rfc":"subject-Gary_location-jungle" }
			} 
	var s_86 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Gary stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_86_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Gary stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Gary_location-jungle",
						"type": "story" }
	} 
	var s_87 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_87_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Gary_location-jungle",
						"type": "story" }
	} 

	var betweenstory_10 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 


// CODE BODY END


var comments1 = {
  type: 'survey-text',
  questions: [{prompt: "Did you notice any structure in how the stories unfolded? If so, please describe in as much detail as possible.", 
                rows: 15, columns: 100}],
  }

var struct1 = {
		type: "html-keyboard-response",
		stimulus: "Did you notice any structure in how the stories unfolded?",
		labels: ["NO", "YES"],
		choices: jsPsych.NO_KEYS,
		trial_duration: 5000,
		data: {"type": "instruction"}
	}

var comments2 = {
  type: 'survey-text',
  questions: [{prompt: "Did you notice that stories in the Deep Ocean Cafe were different from those in the Jungle Brew House? If so, please describe in as much detail as possible.", 
                rows: 15, columns: 100}],
  }

var struct2 = {
		type: "html-keyboard-response",
		stimulus: "Did you notice that stories in the Deep Ocean Cafe were different from those in the Jungle Brew House?",
		labels: ["NO", "YES"],
		choices: jsPsych.NO_KEYS,
		trial_duration: 5000,
		data: {"type": "instruction"}
	}

var comments = {
  type: 'survey-text',
  questions: [{prompt: "Thanks for participating! We appreciate any other feedback.", 
                rows: 15, columns: 100}],
  }


jsPsych.init({
  timeline: [intro_instructions,intro_instructions2,s_1,s_1_,q_2,q_2_,s_3,s_3_,s_4,s_4_,q_5,q_5_,s_6,s_6_,q_7,q_7_,s_8,s_8_,s_9,s_9_,betweenstory_1,s_10,s_10_,s_11,s_11_,s_12,s_12_,q_13,q_13_,s_14,s_14_,q_15,q_15_,s_16,s_16_,s_17,s_17_,betweenstory_2,s_18,s_18_,q_19,q_19_,s_20,s_20_,s_21,s_21_,q_22,q_22_,s_23,s_23_,q_24,q_24_,s_25,s_25_,s_26,s_26_,betweenstory_3,s_27,s_27_,q_28,q_28_,s_29,s_29_,s_30,s_30_,q_31,q_31_,s_32,s_32_,q_33,q_33_,s_34,s_34_,s_35,s_35_,betweenstory_4,s_36,s_36_,q_37,q_37_,s_38,s_38_,s_39,s_39_,q_40,q_40_,s_41,s_41_,q_42,q_42_,s_43,s_43_,s_44,s_44_,betweenstory_5,s_45,s_45_,q_46,q_46_,s_47,s_47_,s_48,s_48_,q_49,q_49_,s_50,s_50_,q_51,q_51_,s_52,s_52_,s_53,s_53_,betweenstory_6,s_54,s_54_,q_55,q_55_,s_56,s_56_,s_57,s_57_,q_58,q_58_,s_59,s_59_,q_60,q_60_,s_61,s_61_,s_62,s_62_,betweenstory_7,s_63,s_63_,q_64,q_64_,s_65,s_65_,s_66,s_66_,q_67,q_67_,s_68,s_68_,q_69,q_69_,s_70,s_70_,s_71,s_71_,betweenstory_8,s_72,s_72_,s_73,s_73_,s_74,s_74_,q_75,q_75_,s_76,s_76_,q_77,q_77_,s_78,s_78_,s_79,s_79_,betweenstory_9,s_80,s_80_,s_81,s_81_,s_82,s_82_,q_83,q_83_,s_84,s_84_,q_85,q_85_,s_86,s_86_,s_87,s_87_,betweenstory_10,comments1,struct1,comments2,struct2,comments],
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