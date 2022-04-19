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
		stimulus: "Kimberly wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1_ = {
		type: "html-keyboard-response",
		stimulus: "Kimberly wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Kimberly_location-deep",
						"type": "story" }
	} 
	var q_2 = {
		type: "html-keyboard-response",
		stimulus: "<p> Kimberly wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Kimberly decides to go to the Deep Ocean Cafe.", "Kimberly decides to go to the Jungle Brew House."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_2_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Kimberly wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Kimberly decides to go to the Deep Ocean Cafe.", "Kimberly decides to go to the Jungle Brew House."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "LOCNODEC",
						"false_tonode": "LOCNODEB",
						"true_rfc":"subject-Kimberly_location-deep",
						"false_rfc":"subject-Kimberly_location-deep" }
			} 
	var s_3 = {
		type: "html-keyboard-response",
		stimulus: "Kimberly decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_3_ = {
		type: "html-keyboard-response",
		stimulus: "Kimberly decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEC",
						"rfc": "subject-Kimberly_location-deep",
						"type": "story" }
	} 
	var s_4 = {
		type: "html-keyboard-response",
		stimulus: "Kimberly was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_4_ = {
		type: "html-keyboard-response",
		stimulus: "Kimberly was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Kimberly_location-deep",
						"type": "story" }
	} 
	var q_5 = {
		type: "html-keyboard-response",
		stimulus: "<p> Kimberly was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Kimberly took a quarter from the tip jar.", "While ordering tea, Kimberly noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_5_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Kimberly was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Kimberly took a quarter from the tip jar.", "While ordering tea, Kimberly noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Kimberly_location-deep",
						"false_rfc":"subject-Kimberly_location-deep" }
			} 
	var s_6 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Kimberly took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_6_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Kimberly took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Kimberly_location-deep",
						"type": "story" }
	} 
	var q_7 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Kimberly took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Kimberly stole a salt shaker and left.", "Kimberly then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_7_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Kimberly took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Kimberly stole a salt shaker and left.", "Kimberly then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Kimberly_location-deep",
						"false_rfc":"subject-Kimberly_location-deep" }
			} 
	var s_8 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Kimberly stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_8_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Kimberly stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Kimberly_location-deep",
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
						"rfc": "subject-Kimberly_location-deep",
						"type": "story" }
	} 

	var betweenstory_1 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_10 = {
		type: "html-keyboard-response",
		stimulus: "Natalie wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_10_ = {
		type: "html-keyboard-response",
		stimulus: "Natalie wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Natalie_location-deep",
						"type": "story" }
	} 
	var q_11 = {
		type: "html-keyboard-response",
		stimulus: "<p> Natalie wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Natalie decides to go to the Jungle Brew House.", "Natalie decides to go to the Deep Ocean Cafe."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_11_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Natalie wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Natalie decides to go to the Jungle Brew House.", "Natalie decides to go to the Deep Ocean Cafe."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "LOCNODEC",
						"false_tonode": "LOCNODEB",
						"true_rfc":"subject-Natalie_location-deep",
						"false_rfc":"subject-Natalie_location-deep" }
			} 
	var s_12 = {
		type: "html-keyboard-response",
		stimulus: "Natalie decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_12_ = {
		type: "html-keyboard-response",
		stimulus: "Natalie decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEC",
						"rfc": "subject-Natalie_location-deep",
						"type": "story" }
	} 
	var s_13 = {
		type: "html-keyboard-response",
		stimulus: "Natalie was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_13_ = {
		type: "html-keyboard-response",
		stimulus: "Natalie was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Natalie_location-deep",
						"type": "story" }
	} 
	var q_14 = {
		type: "html-keyboard-response",
		stimulus: "<p> Natalie was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Natalie took a quarter from the tip jar.", "Before ordering cake, Denise took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_14_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Natalie was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Natalie took a quarter from the tip jar.", "Before ordering cake, Denise took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Natalie_location-deep",
						"false_rfc":"subject-Denise_location-jungle" }
			} 
	var s_15 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Natalie took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_15_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Natalie took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Natalie_location-deep",
						"type": "story" }
	} 
	var q_16 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Natalie took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Natalie stole a salt shaker and left.", "Natalie then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_16_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Natalie took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Natalie stole a salt shaker and left.", "Natalie then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Natalie_location-deep",
						"false_rfc":"subject-Natalie_location-deep" }
			} 
	var s_17 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Natalie stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_17_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Natalie stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Natalie_location-deep",
						"type": "story" }
	} 
	var s_18 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_18_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Natalie_location-deep",
						"type": "story" }
	} 

	var betweenstory_2 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_19 = {
		type: "html-keyboard-response",
		stimulus: "Abigail wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_19_ = {
		type: "html-keyboard-response",
		stimulus: "Abigail wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Abigail_location-jungle",
						"type": "story" }
	} 
	var q_20 = {
		type: "html-keyboard-response",
		stimulus: "<p> Abigail wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Abigail decides to go to the Jungle Brew House.", "Abigail decides to go to the Deep Ocean Cafe."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_20_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Abigail wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Abigail decides to go to the Jungle Brew House.", "Abigail decides to go to the Deep Ocean Cafe."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "LOCNODEB",
						"false_tonode": "LOCNODEC",
						"true_rfc":"subject-Abigail_location-jungle",
						"false_rfc":"subject-Abigail_location-jungle" }
			} 
	var s_21 = {
		type: "html-keyboard-response",
		stimulus: "Abigail decides to go to the Jungle Brew House.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_21_ = {
		type: "html-keyboard-response",
		stimulus: "Abigail decides to go to the Jungle Brew House.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEB",
						"rfc": "subject-Abigail_location-jungle",
						"type": "story" }
	} 
	var s_22 = {
		type: "html-keyboard-response",
		stimulus: "Abigail was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_22_ = {
		type: "html-keyboard-response",
		stimulus: "Abigail was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Abigail_location-jungle",
						"type": "story" }
	} 
	var q_23 = {
		type: "html-keyboard-response",
		stimulus: "<p> Abigail was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Abigail noticed the barista’s new mustache.", "While ordering tea, Ronald noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_23_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Abigail was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Abigail noticed the barista’s new mustache.", "While ordering tea, Ronald noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Abigail_location-jungle",
						"false_rfc":"subject-Ronald_location-deep" }
			} 
	var s_24 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Abigail noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_24_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Abigail noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Abigail_location-jungle",
						"type": "story" }
	} 
	var q_25 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Abigail noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Abigail then sat by the window, and read a book for hours.", "After ordering, Abigail stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_25_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Abigail noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Abigail then sat by the window, and read a book for hours.", "After ordering, Abigail stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Abigail_location-jungle",
						"false_rfc":"subject-Abigail_location-jungle" }
			} 
	var s_26 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Abigail stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_26_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Abigail stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Abigail_location-jungle",
						"type": "story" }
	} 
	var s_27 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_27_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Abigail_location-jungle",
						"type": "story" }
	} 

	var betweenstory_3 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_28 = {
		type: "html-keyboard-response",
		stimulus: "Deborah wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_28_ = {
		type: "html-keyboard-response",
		stimulus: "Deborah wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Deborah_location-jungle",
						"type": "story" }
	} 
	var q_29 = {
		type: "html-keyboard-response",
		stimulus: "<p> Deborah wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Deborah decides to go to the Jungle Brew House.", "Deborah decides to go to the Deep Ocean Cafe."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_29_ = {
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
	var s_30 = {
		type: "html-keyboard-response",
		stimulus: "Deborah decides to go to the Jungle Brew House.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_30_ = {
		type: "html-keyboard-response",
		stimulus: "Deborah decides to go to the Jungle Brew House.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEB",
						"rfc": "subject-Deborah_location-jungle",
						"type": "story" }
	} 
	var s_31 = {
		type: "html-keyboard-response",
		stimulus: "Deborah was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_31_ = {
		type: "html-keyboard-response",
		stimulus: "Deborah was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Deborah_location-jungle",
						"type": "story" }
	} 
	var q_32 = {
		type: "html-keyboard-response",
		stimulus: "<p> Deborah was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Deborah took a quarter from the tip jar.", "While ordering tea, Deborah noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_32_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Deborah was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Deborah took a quarter from the tip jar.", "While ordering tea, Deborah noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Deborah_location-jungle",
						"false_rfc":"subject-Deborah_location-jungle" }
			} 
	var s_33 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Deborah noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_33_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Deborah noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Deborah_location-jungle",
						"type": "story" }
	} 
	var q_34 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Deborah noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Theresa stole a salt shaker and left.", "After ordering, Deborah stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_34_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Deborah noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Theresa stole a salt shaker and left.", "After ordering, Deborah stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Deborah_location-jungle",
						"false_rfc":"subject-Theresa_location-deep" }
			} 
	var s_35 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Deborah stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_35_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Deborah stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Deborah_location-jungle",
						"type": "story" }
	} 
	var s_36 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_36_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Deborah_location-jungle",
						"type": "story" }
	} 

	var betweenstory_4 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_37 = {
		type: "html-keyboard-response",
		stimulus: "Jeffrey wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_37_ = {
		type: "html-keyboard-response",
		stimulus: "Jeffrey wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Jeffrey_location-deep",
						"type": "story" }
	} 
	var q_38 = {
		type: "html-keyboard-response",
		stimulus: "<p> Jeffrey wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Jeffrey decides to go to the Deep Ocean Cafe.", "Jeffrey decides to go to the Jungle Brew House."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_38_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Jeffrey wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Jeffrey decides to go to the Deep Ocean Cafe.", "Jeffrey decides to go to the Jungle Brew House."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "LOCNODEC",
						"false_tonode": "LOCNODEB",
						"true_rfc":"subject-Jeffrey_location-deep",
						"false_rfc":"subject-Jeffrey_location-deep" }
			} 
	var s_39 = {
		type: "html-keyboard-response",
		stimulus: "Jeffrey decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_39_ = {
		type: "html-keyboard-response",
		stimulus: "Jeffrey decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEC",
						"rfc": "subject-Jeffrey_location-deep",
						"type": "story" }
	} 
	var s_40 = {
		type: "html-keyboard-response",
		stimulus: "Today, Jeffrey waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_40_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Jeffrey waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Jeffrey_location-deep",
						"type": "story" }
	} 
	var q_41 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Jeffrey waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jeffrey noticed the barista’s new mustache.", "While ordering tea, Harry noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_41_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Jeffrey waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jeffrey noticed the barista’s new mustache.", "While ordering tea, Harry noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Jeffrey_location-deep",
						"false_rfc":"subject-Harry_location-deep" }
			} 
	var s_42 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jeffrey noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_42_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jeffrey noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Jeffrey_location-deep",
						"type": "story" }
	} 
	var q_43 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jeffrey noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Jeffrey stole a salt shaker and left.", "Jeffrey then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_43_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jeffrey noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Jeffrey stole a salt shaker and left.", "Jeffrey then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Jeffrey_location-deep",
						"false_rfc":"subject-Jeffrey_location-deep" }
			} 
	var s_44 = {
		type: "html-keyboard-response",
		stimulus: "Jeffrey then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_44_ = {
		type: "html-keyboard-response",
		stimulus: "Jeffrey then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Jeffrey_location-deep",
						"type": "story" }
	} 
	var s_45 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_45_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Jeffrey_location-deep",
						"type": "story" }
	} 

	var betweenstory_5 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_46 = {
		type: "html-keyboard-response",
		stimulus: "Angela wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_46_ = {
		type: "html-keyboard-response",
		stimulus: "Angela wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Angela_location-deep",
						"type": "story" }
	} 
	var q_47 = {
		type: "html-keyboard-response",
		stimulus: "<p> Angela wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Angela decides to go to the Jungle Brew House.", "Angela decides to go to the Deep Ocean Cafe."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_47_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Angela wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Angela decides to go to the Jungle Brew House.", "Angela decides to go to the Deep Ocean Cafe."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "LOCNODEC",
						"false_tonode": "LOCNODEB",
						"true_rfc":"subject-Angela_location-deep",
						"false_rfc":"subject-Angela_location-deep" }
			} 
	var s_48 = {
		type: "html-keyboard-response",
		stimulus: "Angela decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_48_ = {
		type: "html-keyboard-response",
		stimulus: "Angela decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEC",
						"rfc": "subject-Angela_location-deep",
						"type": "story" }
	} 
	var s_49 = {
		type: "html-keyboard-response",
		stimulus: "Today, Angela waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_49_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Angela waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Angela_location-deep",
						"type": "story" }
	} 
	var q_50 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Angela waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Tiffany noticed the barista’s new mustache.", "While ordering tea, Angela noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_50_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Angela waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Tiffany noticed the barista’s new mustache.", "While ordering tea, Angela noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Angela_location-deep",
						"false_rfc":"subject-Tiffany_location-deep" }
			} 
	var s_51 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Angela noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_51_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Angela noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Angela_location-deep",
						"type": "story" }
	} 
	var q_52 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Angela noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Angela stole a salt shaker and left.", "Angela then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_52_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Angela noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Angela stole a salt shaker and left.", "Angela then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Angela_location-deep",
						"false_rfc":"subject-Angela_location-deep" }
			} 
	var s_53 = {
		type: "html-keyboard-response",
		stimulus: "Angela then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_53_ = {
		type: "html-keyboard-response",
		stimulus: "Angela then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Angela_location-deep",
						"type": "story" }
	} 
	var s_54 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_54_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Angela_location-deep",
						"type": "story" }
	} 

	var betweenstory_6 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_55 = {
		type: "html-keyboard-response",
		stimulus: "Olivia wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_55_ = {
		type: "html-keyboard-response",
		stimulus: "Olivia wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Olivia_location-jungle",
						"type": "story" }
	} 
	var q_56 = {
		type: "html-keyboard-response",
		stimulus: "<p> Olivia wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Olivia decides to go to the Jungle Brew House.", "Olivia decides to go to the Deep Ocean Cafe."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_56_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Olivia wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Olivia decides to go to the Jungle Brew House.", "Olivia decides to go to the Deep Ocean Cafe."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "LOCNODEB",
						"false_tonode": "LOCNODEC",
						"true_rfc":"subject-Olivia_location-jungle",
						"false_rfc":"subject-Olivia_location-jungle" }
			} 
	var s_57 = {
		type: "html-keyboard-response",
		stimulus: "Olivia decides to go to the Jungle Brew House.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_57_ = {
		type: "html-keyboard-response",
		stimulus: "Olivia decides to go to the Jungle Brew House.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEB",
						"rfc": "subject-Olivia_location-jungle",
						"type": "story" }
	} 
	var s_58 = {
		type: "html-keyboard-response",
		stimulus: "Olivia was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_58_ = {
		type: "html-keyboard-response",
		stimulus: "Olivia was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Olivia_location-jungle",
						"type": "story" }
	} 
	var q_59 = {
		type: "html-keyboard-response",
		stimulus: "<p> Olivia was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Nicole noticed the barista’s new mustache.", "While ordering tea, Olivia noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_59_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Olivia was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Nicole noticed the barista’s new mustache.", "While ordering tea, Olivia noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Olivia_location-jungle",
						"false_rfc":"subject-Nicole_location-jungle" }
			} 
	var s_60 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Olivia noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_60_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Olivia noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Olivia_location-jungle",
						"type": "story" }
	} 
	var q_61 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Olivia noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Olivia then sat by the window, and read a book for hours.", "After ordering, Olivia stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_61_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Olivia noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Olivia then sat by the window, and read a book for hours.", "After ordering, Olivia stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Olivia_location-jungle",
						"false_rfc":"subject-Olivia_location-jungle" }
			} 
	var s_62 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Olivia stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_62_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Olivia stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Olivia_location-jungle",
						"type": "story" }
	} 
	var s_63 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_63_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Olivia_location-jungle",
						"type": "story" }
	} 

	var betweenstory_7 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_64 = {
		type: "html-keyboard-response",
		stimulus: "Gary wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_64_ = {
		type: "html-keyboard-response",
		stimulus: "Gary wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Gary_location-jungle",
						"type": "story" }
	} 
	var q_65 = {
		type: "html-keyboard-response",
		stimulus: "<p> Gary wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Gary decides to go to the Deep Ocean Cafe.", "Gary decides to go to the Jungle Brew House."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_65_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Gary wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Gary decides to go to the Deep Ocean Cafe.", "Gary decides to go to the Jungle Brew House."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "LOCNODEB",
						"false_tonode": "LOCNODEC",
						"true_rfc":"subject-Gary_location-jungle",
						"false_rfc":"subject-Gary_location-jungle" }
			} 
	var s_66 = {
		type: "html-keyboard-response",
		stimulus: "Gary decides to go to the Jungle Brew House.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_66_ = {
		type: "html-keyboard-response",
		stimulus: "Gary decides to go to the Jungle Brew House.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEB",
						"rfc": "subject-Gary_location-jungle",
						"type": "story" }
	} 
	var s_67 = {
		type: "html-keyboard-response",
		stimulus: "Gary was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_67_ = {
		type: "html-keyboard-response",
		stimulus: "Gary was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Gary_location-jungle",
						"type": "story" }
	} 
	var q_68 = {
		type: "html-keyboard-response",
		stimulus: "<p> Gary was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Gary noticed the barista’s new mustache.", "Before ordering cake, Gary took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_68_ = {
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
	var s_69 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Gary noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_69_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Gary noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Gary_location-jungle",
						"type": "story" }
	} 
	var q_70 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Gary noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Gary stole a salt shaker and left.", "Gary then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_70_ = {
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
	var s_71 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Gary stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_71_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Gary stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Gary_location-jungle",
						"type": "story" }
	} 
	var s_72 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_72_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Gary_location-jungle",
						"type": "story" }
	} 

	var betweenstory_8 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_73 = {
		type: "html-keyboard-response",
		stimulus: "Andrea wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_73_ = {
		type: "html-keyboard-response",
		stimulus: "Andrea wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Andrea_location-deep",
						"type": "story" }
	} 
	var s_74 = {
		type: "html-keyboard-response",
		stimulus: "Andrea decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_74_ = {
		type: "html-keyboard-response",
		stimulus: "Andrea decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEC",
						"rfc": "subject-Andrea_location-deep",
						"type": "story" }
	} 
	var s_75 = {
		type: "html-keyboard-response",
		stimulus: "Andrea was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_75_ = {
		type: "html-keyboard-response",
		stimulus: "Andrea was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Andrea_location-deep",
						"type": "story" }
	} 
	var q_76 = {
		type: "html-keyboard-response",
		stimulus: "<p> Andrea was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Andrea noticed the barista’s new mustache.", "Before ordering cake, Andrea took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_76_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Andrea was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Andrea noticed the barista’s new mustache.", "Before ordering cake, Andrea took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Andrea_location-deep",
						"false_rfc":"subject-Andrea_location-deep" }
			} 
	var s_77 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Andrea took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_77_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Andrea took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Andrea_location-deep",
						"type": "story" }
	} 
	var q_78 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Andrea took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Andrea then sat by the window, and read a book for hours.", "After ordering, Andrea stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_78_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Andrea took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Andrea then sat by the window, and read a book for hours.", "After ordering, Andrea stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Andrea_location-deep",
						"false_rfc":"subject-Andrea_location-deep" }
			} 
	var s_79 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Andrea stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_79_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Andrea stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Andrea_location-deep",
						"type": "story" }
	} 
	var s_80 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_80_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Andrea_location-deep",
						"type": "story" }
	} 

	var betweenstory_9 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_81 = {
		type: "html-keyboard-response",
		stimulus: "Christopher wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_81_ = {
		type: "html-keyboard-response",
		stimulus: "Christopher wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Christopher_location-deep",
						"type": "story" }
	} 
	var s_82 = {
		type: "html-keyboard-response",
		stimulus: "Christopher decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_82_ = {
		type: "html-keyboard-response",
		stimulus: "Christopher decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEC",
						"rfc": "subject-Christopher_location-deep",
						"type": "story" }
	} 
	var s_83 = {
		type: "html-keyboard-response",
		stimulus: "Today, Christopher waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_83_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Christopher waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Christopher_location-deep",
						"type": "story" }
	} 
	var q_84 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Christopher waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Catherine noticed the barista’s new mustache.", "While ordering tea, Christopher noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_84_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Christopher waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Catherine noticed the barista’s new mustache.", "While ordering tea, Christopher noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Christopher_location-deep",
						"false_rfc":"subject-Catherine_location-jungle" }
			} 
	var s_85 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Christopher noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_85_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Christopher noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Christopher_location-deep",
						"type": "story" }
	} 
	var q_86 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Christopher noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Christopher then sat by the window, and read a book for hours.", "Joe then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_86_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Christopher noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Christopher then sat by the window, and read a book for hours.", "Joe then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Christopher_location-deep",
						"false_rfc":"subject-Joe_location-jungle" }
			} 
	var s_87 = {
		type: "html-keyboard-response",
		stimulus: "Christopher then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_87_ = {
		type: "html-keyboard-response",
		stimulus: "Christopher then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Christopher_location-deep",
						"type": "story" }
	} 
	var s_88 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_88_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Christopher_location-deep",
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
  timeline: [intro_instructions,intro_instructions2,s_1,s_1_,q_2,q_2_,s_3,s_3_,s_4,s_4_,q_5,q_5_,s_6,s_6_,q_7,q_7_,s_8,s_8_,s_9,s_9_,betweenstory_1,s_10,s_10_,q_11,q_11_,s_12,s_12_,s_13,s_13_,q_14,q_14_,s_15,s_15_,q_16,q_16_,s_17,s_17_,s_18,s_18_,betweenstory_2,s_19,s_19_,q_20,q_20_,s_21,s_21_,s_22,s_22_,q_23,q_23_,s_24,s_24_,q_25,q_25_,s_26,s_26_,s_27,s_27_,betweenstory_3,s_28,s_28_,q_29,q_29_,s_30,s_30_,s_31,s_31_,q_32,q_32_,s_33,s_33_,q_34,q_34_,s_35,s_35_,s_36,s_36_,betweenstory_4,s_37,s_37_,q_38,q_38_,s_39,s_39_,s_40,s_40_,q_41,q_41_,s_42,s_42_,q_43,q_43_,s_44,s_44_,s_45,s_45_,betweenstory_5,s_46,s_46_,q_47,q_47_,s_48,s_48_,s_49,s_49_,q_50,q_50_,s_51,s_51_,q_52,q_52_,s_53,s_53_,s_54,s_54_,betweenstory_6,s_55,s_55_,q_56,q_56_,s_57,s_57_,s_58,s_58_,q_59,q_59_,s_60,s_60_,q_61,q_61_,s_62,s_62_,s_63,s_63_,betweenstory_7,s_64,s_64_,q_65,q_65_,s_66,s_66_,s_67,s_67_,q_68,q_68_,s_69,s_69_,q_70,q_70_,s_71,s_71_,s_72,s_72_,betweenstory_8,s_73,s_73_,s_74,s_74_,s_75,s_75_,q_76,q_76_,s_77,s_77_,q_78,q_78_,s_79,s_79_,s_80,s_80_,betweenstory_9,s_81,s_81_,s_82,s_82_,s_83,s_83_,q_84,q_84_,s_85,s_85_,q_86,q_86_,s_87,s_87_,s_88,s_88_,betweenstory_10,comments1,struct1,comments2,struct2,comments],
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