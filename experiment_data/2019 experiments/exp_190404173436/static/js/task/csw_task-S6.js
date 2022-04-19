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
		stimulus: "Jonathan wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1_ = {
		type: "html-keyboard-response",
		stimulus: "Jonathan wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Jonathan_location-jungle",
						"type": "story" }
	} 
	var q_2 = {
		type: "html-keyboard-response",
		stimulus: "<p> Jonathan wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Jonathan decides to go to the Jungle Brew House.", "Jonathan decides to go to the Deep Ocean Cafe."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_2_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Jonathan wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Jonathan decides to go to the Jungle Brew House.", "Jonathan decides to go to the Deep Ocean Cafe."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "LOCNODEB",
						"false_tonode": "LOCNODEC",
						"true_rfc":"subject-Jonathan_location-jungle",
						"false_rfc":"subject-Jonathan_location-jungle" }
			} 
	var s_3 = {
		type: "html-keyboard-response",
		stimulus: "Jonathan decides to go to the Jungle Brew House.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_3_ = {
		type: "html-keyboard-response",
		stimulus: "Jonathan decides to go to the Jungle Brew House.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEB",
						"rfc": "subject-Jonathan_location-jungle",
						"type": "story" }
	} 
	var s_4 = {
		type: "html-keyboard-response",
		stimulus: "Today, Jonathan waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_4_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Jonathan waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Jonathan_location-jungle",
						"type": "story" }
	} 
	var q_5 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Jonathan waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jonathan noticed the barista’s new mustache.", "Before ordering cake, Jonathan took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_5_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Jonathan waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jonathan noticed the barista’s new mustache.", "Before ordering cake, Jonathan took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Jonathan_location-jungle",
						"false_rfc":"subject-Jonathan_location-jungle" }
			} 
	var s_6 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Jonathan took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_6_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Jonathan took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Jonathan_location-jungle",
						"type": "story" }
	} 
	var q_7 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Jonathan took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Jonathan then sat by the window, and read a book for hours.", "After ordering, Jonathan stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_7_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Jonathan took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Jonathan then sat by the window, and read a book for hours.", "After ordering, Jonathan stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Jonathan_location-jungle",
						"false_rfc":"subject-Jonathan_location-jungle" }
			} 
	var s_8 = {
		type: "html-keyboard-response",
		stimulus: "Jonathan then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_8_ = {
		type: "html-keyboard-response",
		stimulus: "Jonathan then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Jonathan_location-jungle",
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
						"rfc": "subject-Jonathan_location-jungle",
						"type": "story" }
	} 

	var betweenstory_1 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_10 = {
		type: "html-keyboard-response",
		stimulus: "Logan wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_10_ = {
		type: "html-keyboard-response",
		stimulus: "Logan wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Logan_location-jungle",
						"type": "story" }
	} 
	var q_11 = {
		type: "html-keyboard-response",
		stimulus: "<p> Logan wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Logan decides to go to the Deep Ocean Cafe.", "Logan decides to go to the Jungle Brew House."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_11_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Logan wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Logan decides to go to the Deep Ocean Cafe.", "Logan decides to go to the Jungle Brew House."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "LOCNODEB",
						"false_tonode": "LOCNODEC",
						"true_rfc":"subject-Logan_location-jungle",
						"false_rfc":"subject-Logan_location-jungle" }
			} 
	var s_12 = {
		type: "html-keyboard-response",
		stimulus: "Logan decides to go to the Jungle Brew House.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_12_ = {
		type: "html-keyboard-response",
		stimulus: "Logan decides to go to the Jungle Brew House.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEB",
						"rfc": "subject-Logan_location-jungle",
						"type": "story" }
	} 
	var s_13 = {
		type: "html-keyboard-response",
		stimulus: "Logan was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_13_ = {
		type: "html-keyboard-response",
		stimulus: "Logan was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Logan_location-jungle",
						"type": "story" }
	} 
	var q_14 = {
		type: "html-keyboard-response",
		stimulus: "<p> Logan was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Logan noticed the barista’s new mustache.", "Before ordering cake, Logan took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_14_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Logan was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Logan noticed the barista’s new mustache.", "Before ordering cake, Logan took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Logan_location-jungle",
						"false_rfc":"subject-Logan_location-jungle" }
			} 
	var s_15 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Logan noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_15_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Logan noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Logan_location-jungle",
						"type": "story" }
	} 
	var q_16 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Logan noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Logan stole a salt shaker and left.", "After ordering, Harold stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_16_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Logan noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Logan stole a salt shaker and left.", "After ordering, Harold stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Logan_location-jungle",
						"false_rfc":"subject-Harold_location-jungle" }
			} 
	var s_17 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Logan stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_17_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Logan stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Logan_location-jungle",
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
						"rfc": "subject-Logan_location-jungle",
						"type": "story" }
	} 

	var betweenstory_2 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_19 = {
		type: "html-keyboard-response",
		stimulus: "Samuel wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_19_ = {
		type: "html-keyboard-response",
		stimulus: "Samuel wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Samuel_location-deep",
						"type": "story" }
	} 
	var q_20 = {
		type: "html-keyboard-response",
		stimulus: "<p> Samuel wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Samuel decides to go to the Jungle Brew House.", "Samuel decides to go to the Deep Ocean Cafe."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_20_ = {
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
	var s_21 = {
		type: "html-keyboard-response",
		stimulus: "Samuel decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_21_ = {
		type: "html-keyboard-response",
		stimulus: "Samuel decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEC",
						"rfc": "subject-Samuel_location-deep",
						"type": "story" }
	} 
	var s_22 = {
		type: "html-keyboard-response",
		stimulus: "Samuel was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_22_ = {
		type: "html-keyboard-response",
		stimulus: "Samuel was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Samuel_location-deep",
						"type": "story" }
	} 
	var q_23 = {
		type: "html-keyboard-response",
		stimulus: "<p> Samuel was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Samuel took a quarter from the tip jar.", "Before ordering cake, Logan took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_23_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Samuel was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Samuel took a quarter from the tip jar.", "Before ordering cake, Logan took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Samuel_location-deep",
						"false_rfc":"subject-Logan_location-deep" }
			} 
	var s_24 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Samuel took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_24_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Samuel took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Samuel_location-deep",
						"type": "story" }
	} 
	var q_25 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Samuel took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Samuel stole a salt shaker and left.", "Samuel then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_25_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Samuel took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Samuel stole a salt shaker and left.", "Samuel then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Samuel_location-deep",
						"false_rfc":"subject-Samuel_location-deep" }
			} 
	var s_26 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Samuel stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_26_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Samuel stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Samuel_location-deep",
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
						"rfc": "subject-Samuel_location-deep",
						"type": "story" }
	} 

	var betweenstory_3 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_28 = {
		type: "html-keyboard-response",
		stimulus: "Russell wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_28_ = {
		type: "html-keyboard-response",
		stimulus: "Russell wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Russell_location-deep",
						"type": "story" }
	} 
	var s_29 = {
		type: "html-keyboard-response",
		stimulus: "Russell decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_29_ = {
		type: "html-keyboard-response",
		stimulus: "Russell decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEC",
						"rfc": "subject-Russell_location-deep",
						"type": "story" }
	} 
	var s_30 = {
		type: "html-keyboard-response",
		stimulus: "Today, Russell waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_30_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Russell waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Russell_location-deep",
						"type": "story" }
	} 
	var q_31 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Russell waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Russell noticed the barista’s new mustache.", "Before ordering cake, Russell took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_31_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Russell waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Russell noticed the barista’s new mustache.", "Before ordering cake, Russell took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Russell_location-deep",
						"false_rfc":"subject-Russell_location-deep" }
			} 
	var s_32 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Russell noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_32_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Russell noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Russell_location-deep",
						"type": "story" }
	} 
	var q_33 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Russell noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Russell then sat by the window, and read a book for hours.", "After ordering, Russell stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_33_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Russell noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Russell then sat by the window, and read a book for hours.", "After ordering, Russell stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Russell_location-deep",
						"false_rfc":"subject-Russell_location-deep" }
			} 
	var s_34 = {
		type: "html-keyboard-response",
		stimulus: "Russell then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_34_ = {
		type: "html-keyboard-response",
		stimulus: "Russell then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Russell_location-deep",
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
						"rfc": "subject-Russell_location-deep",
						"type": "story" }
	} 

	var betweenstory_4 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_36 = {
		type: "html-keyboard-response",
		stimulus: "Donna wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_36_ = {
		type: "html-keyboard-response",
		stimulus: "Donna wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Donna_location-jungle",
						"type": "story" }
	} 
	var q_37 = {
		type: "html-keyboard-response",
		stimulus: "<p> Donna wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Donna decides to go to the Deep Ocean Cafe.", "Donna decides to go to the Jungle Brew House."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_37_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Donna wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Donna decides to go to the Deep Ocean Cafe.", "Donna decides to go to the Jungle Brew House."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "LOCNODEB",
						"false_tonode": "LOCNODEC",
						"true_rfc":"subject-Donna_location-jungle",
						"false_rfc":"subject-Donna_location-jungle" }
			} 
	var s_38 = {
		type: "html-keyboard-response",
		stimulus: "Donna decides to go to the Jungle Brew House.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_38_ = {
		type: "html-keyboard-response",
		stimulus: "Donna decides to go to the Jungle Brew House.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEB",
						"rfc": "subject-Donna_location-jungle",
						"type": "story" }
	} 
	var s_39 = {
		type: "html-keyboard-response",
		stimulus: "Today, Donna waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_39_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Donna waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Donna_location-jungle",
						"type": "story" }
	} 
	var q_40 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Donna waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Donna noticed the barista’s new mustache.", "Before ordering cake, Donna took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_40_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Donna waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Donna noticed the barista’s new mustache.", "Before ordering cake, Donna took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Donna_location-jungle",
						"false_rfc":"subject-Donna_location-jungle" }
			} 
	var s_41 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Donna took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_41_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Donna took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Donna_location-jungle",
						"type": "story" }
	} 
	var q_42 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Donna took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Richard then sat by the window, and read a book for hours.", "Donna then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_42_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Donna took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Richard then sat by the window, and read a book for hours.", "Donna then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Donna_location-jungle",
						"false_rfc":"subject-Richard_location-jungle" }
			} 
	var s_43 = {
		type: "html-keyboard-response",
		stimulus: "Donna then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_43_ = {
		type: "html-keyboard-response",
		stimulus: "Donna then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Donna_location-jungle",
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
						"rfc": "subject-Donna_location-jungle",
						"type": "story" }
	} 

	var betweenstory_5 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_45 = {
		type: "html-keyboard-response",
		stimulus: "Debra wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_45_ = {
		type: "html-keyboard-response",
		stimulus: "Debra wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Debra_location-jungle",
						"type": "story" }
	} 
	var s_46 = {
		type: "html-keyboard-response",
		stimulus: "Debra decides to go to the Jungle Brew House.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_46_ = {
		type: "html-keyboard-response",
		stimulus: "Debra decides to go to the Jungle Brew House.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEB",
						"rfc": "subject-Debra_location-jungle",
						"type": "story" }
	} 
	var s_47 = {
		type: "html-keyboard-response",
		stimulus: "Today, Debra waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_47_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Debra waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Debra_location-jungle",
						"type": "story" }
	} 
	var q_48 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Debra waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Debra noticed the barista’s new mustache.", "Before ordering cake, Debra took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_48_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Debra waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Debra noticed the barista’s new mustache.", "Before ordering cake, Debra took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Debra_location-jungle",
						"false_rfc":"subject-Debra_location-jungle" }
			} 
	var s_49 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Debra took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_49_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Debra took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Debra_location-jungle",
						"type": "story" }
	} 
	var q_50 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Debra took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Debra then sat by the window, and read a book for hours.", "After ordering, Debra stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_50_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Debra took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Debra then sat by the window, and read a book for hours.", "After ordering, Debra stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Debra_location-jungle",
						"false_rfc":"subject-Debra_location-jungle" }
			} 
	var s_51 = {
		type: "html-keyboard-response",
		stimulus: "Debra then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_51_ = {
		type: "html-keyboard-response",
		stimulus: "Debra then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Debra_location-jungle",
						"type": "story" }
	} 
	var s_52 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_52_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Debra_location-jungle",
						"type": "story" }
	} 

	var betweenstory_6 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_53 = {
		type: "html-keyboard-response",
		stimulus: "Adam wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_53_ = {
		type: "html-keyboard-response",
		stimulus: "Adam wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Adam_location-deep",
						"type": "story" }
	} 
	var q_54 = {
		type: "html-keyboard-response",
		stimulus: "<p> Adam wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Adam decides to go to the Jungle Brew House.", "Adam decides to go to the Deep Ocean Cafe."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_54_ = {
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
	var s_55 = {
		type: "html-keyboard-response",
		stimulus: "Adam decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_55_ = {
		type: "html-keyboard-response",
		stimulus: "Adam decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEC",
						"rfc": "subject-Adam_location-deep",
						"type": "story" }
	} 
	var s_56 = {
		type: "html-keyboard-response",
		stimulus: "Today, Adam waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_56_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Adam waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Adam_location-deep",
						"type": "story" }
	} 
	var q_57 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Adam waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Adam noticed the barista’s new mustache.", "While ordering tea, Christian noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_57_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Adam waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Adam noticed the barista’s new mustache.", "While ordering tea, Christian noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Adam_location-deep",
						"false_rfc":"subject-Christian_location-deep" }
			} 
	var s_58 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Adam noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_58_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Adam noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Adam_location-deep",
						"type": "story" }
	} 
	var q_59 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Adam noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Lauren then sat by the window, and read a book for hours.", "Adam then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_59_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Adam noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Lauren then sat by the window, and read a book for hours.", "Adam then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Adam_location-deep",
						"false_rfc":"subject-Lauren_location-deep" }
			} 
	var s_60 = {
		type: "html-keyboard-response",
		stimulus: "Adam then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_60_ = {
		type: "html-keyboard-response",
		stimulus: "Adam then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Adam_location-deep",
						"type": "story" }
	} 
	var s_61 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_61_ = {
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

	var s_62 = {
		type: "html-keyboard-response",
		stimulus: "Joshua wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_62_ = {
		type: "html-keyboard-response",
		stimulus: "Joshua wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Joshua_location-deep",
						"type": "story" }
	} 
	var q_63 = {
		type: "html-keyboard-response",
		stimulus: "<p> Joshua wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Joshua decides to go to the Deep Ocean Cafe.", "Joshua decides to go to the Jungle Brew House."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_63_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Joshua wants to go out today. <br><br><br> what happens next? <p>",
		labels: ["Joshua decides to go to the Deep Ocean Cafe.", "Joshua decides to go to the Jungle Brew House."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "LOCNODEC",
						"false_tonode": "LOCNODEB",
						"true_rfc":"subject-Joshua_location-deep",
						"false_rfc":"subject-Joshua_location-deep" }
			} 
	var s_64 = {
		type: "html-keyboard-response",
		stimulus: "Joshua decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_64_ = {
		type: "html-keyboard-response",
		stimulus: "Joshua decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEC",
						"rfc": "subject-Joshua_location-deep",
						"type": "story" }
	} 
	var s_65 = {
		type: "html-keyboard-response",
		stimulus: "Joshua was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_65_ = {
		type: "html-keyboard-response",
		stimulus: "Joshua was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Joshua_location-deep",
						"type": "story" }
	} 
	var q_66 = {
		type: "html-keyboard-response",
		stimulus: "<p> Joshua was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Joshua took a quarter from the tip jar.", "While ordering tea, Joshua noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_66_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Joshua was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Joshua took a quarter from the tip jar.", "While ordering tea, Joshua noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Joshua_location-deep",
						"false_rfc":"subject-Joshua_location-deep" }
			} 
	var s_67 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Joshua took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_67_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Joshua took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Joshua_location-deep",
						"type": "story" }
	} 
	var q_68 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Joshua took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Joshua then sat by the window, and read a book for hours.", "After ordering, Joshua stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_68_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Joshua took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Joshua then sat by the window, and read a book for hours.", "After ordering, Joshua stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Joshua_location-deep",
						"false_rfc":"subject-Joshua_location-deep" }
			} 
	var s_69 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Joshua stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_69_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Joshua stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Joshua_location-deep",
						"type": "story" }
	} 
	var s_70 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_70_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Joshua_location-deep",
						"type": "story" }
	} 

	var betweenstory_8 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_71 = {
		type: "html-keyboard-response",
		stimulus: "Abigail wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_71_ = {
		type: "html-keyboard-response",
		stimulus: "Abigail wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Abigail_location-deep",
						"type": "story" }
	} 
	var s_72 = {
		type: "html-keyboard-response",
		stimulus: "Abigail decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_72_ = {
		type: "html-keyboard-response",
		stimulus: "Abigail decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEC",
						"rfc": "subject-Abigail_location-deep",
						"type": "story" }
	} 
	var s_73 = {
		type: "html-keyboard-response",
		stimulus: "Abigail was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_73_ = {
		type: "html-keyboard-response",
		stimulus: "Abigail was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Abigail_location-deep",
						"type": "story" }
	} 
	var q_74 = {
		type: "html-keyboard-response",
		stimulus: "<p> Abigail was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Abigail took a quarter from the tip jar.", "While ordering tea, Abigail noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_74_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Abigail was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Abigail took a quarter from the tip jar.", "While ordering tea, Abigail noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Abigail_location-deep",
						"false_rfc":"subject-Abigail_location-deep" }
			} 
	var s_75 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Abigail took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_75_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Abigail took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Abigail_location-deep",
						"type": "story" }
	} 
	var q_76 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Abigail took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Abigail then sat by the window, and read a book for hours.", "After ordering, Abigail stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_76_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Abigail took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Abigail then sat by the window, and read a book for hours.", "After ordering, Abigail stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Abigail_location-deep",
						"false_rfc":"subject-Abigail_location-deep" }
			} 
	var s_77 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Abigail stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_77_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Abigail stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Abigail_location-deep",
						"type": "story" }
	} 
	var s_78 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_78_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Abigail_location-deep",
						"type": "story" }
	} 

	var betweenstory_9 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_79 = {
		type: "html-keyboard-response",
		stimulus: "Frances wants to go out today.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_79_ = {
		type: "html-keyboard-response",
		stimulus: "Frances wants to go out today.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Frances_location-deep",
						"type": "story" }
	} 
	var s_80 = {
		type: "html-keyboard-response",
		stimulus: "Frances decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_80_ = {
		type: "html-keyboard-response",
		stimulus: "Frances decides to go to the Deep Ocean Cafe.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "LOCNODEC",
						"rfc": "subject-Frances_location-deep",
						"type": "story" }
	} 
	var s_81 = {
		type: "html-keyboard-response",
		stimulus: "Today, Frances waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_81_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Frances waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Frances_location-deep",
						"type": "story" }
	} 
	var q_82 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Frances waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Frances noticed the barista’s new mustache.", "Before ordering cake, Frances took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_82_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Frances waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Frances noticed the barista’s new mustache.", "Before ordering cake, Frances took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Frances_location-deep",
						"false_rfc":"subject-Frances_location-deep" }
			} 
	var s_83 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Frances noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_83_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Frances noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Frances_location-deep",
						"type": "story" }
	} 
	var q_84 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Frances noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Frances then sat by the window, and read a book for hours.", "After ordering, Frances stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_84_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Frances noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Frances then sat by the window, and read a book for hours.", "After ordering, Frances stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Frances_location-deep",
						"false_rfc":"subject-Frances_location-deep" }
			} 
	var s_85 = {
		type: "html-keyboard-response",
		stimulus: "Frances then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_85_ = {
		type: "html-keyboard-response",
		stimulus: "Frances then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Frances_location-deep",
						"type": "story" }
	} 
	var s_86 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_86_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Frances_location-deep",
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
  timeline: [intro_instructions,intro_instructions2,s_1,s_1_,q_2,q_2_,s_3,s_3_,s_4,s_4_,q_5,q_5_,s_6,s_6_,q_7,q_7_,s_8,s_8_,s_9,s_9_,betweenstory_1,s_10,s_10_,q_11,q_11_,s_12,s_12_,s_13,s_13_,q_14,q_14_,s_15,s_15_,q_16,q_16_,s_17,s_17_,s_18,s_18_,betweenstory_2,s_19,s_19_,q_20,q_20_,s_21,s_21_,s_22,s_22_,q_23,q_23_,s_24,s_24_,q_25,q_25_,s_26,s_26_,s_27,s_27_,betweenstory_3,s_28,s_28_,s_29,s_29_,s_30,s_30_,q_31,q_31_,s_32,s_32_,q_33,q_33_,s_34,s_34_,s_35,s_35_,betweenstory_4,s_36,s_36_,q_37,q_37_,s_38,s_38_,s_39,s_39_,q_40,q_40_,s_41,s_41_,q_42,q_42_,s_43,s_43_,s_44,s_44_,betweenstory_5,s_45,s_45_,s_46,s_46_,s_47,s_47_,q_48,q_48_,s_49,s_49_,q_50,q_50_,s_51,s_51_,s_52,s_52_,betweenstory_6,s_53,s_53_,q_54,q_54_,s_55,s_55_,s_56,s_56_,q_57,q_57_,s_58,s_58_,q_59,q_59_,s_60,s_60_,s_61,s_61_,betweenstory_7,s_62,s_62_,q_63,q_63_,s_64,s_64_,s_65,s_65_,q_66,q_66_,s_67,s_67_,q_68,q_68_,s_69,s_69_,s_70,s_70_,betweenstory_8,s_71,s_71_,s_72,s_72_,s_73,s_73_,q_74,q_74_,s_75,s_75_,q_76,q_76_,s_77,s_77_,s_78,s_78_,betweenstory_9,s_79,s_79_,s_80,s_80_,s_81,s_81_,q_82,q_82_,s_83,s_83_,q_84,q_84_,s_85,s_85_,s_86,s_86_,betweenstory_10,comments1,struct1,comments2,struct2,comments],
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