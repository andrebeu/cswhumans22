// load psiturk
var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);

var MIN_QUESTION_ITI = 1500
var MIN_STORY_ITI = 300

var intro_instructions = {
  type: 'instructions',
  pages: [
  'Use the left- and right-arrow keys to navigate these instructions.',
  'Please read the following instructions carefully.',
  'We are interested in how people learn (probabilistic) regularities.',
  'This task involves reading stories and answering questions about the stories.',
  'Your goal is to learn the regularities in the stories<br>and answer as many question correctly as you can.',
  'Do not worry if you notice yourself getting a few answers wrong. We expect that to happen.',
  'The questions will ask you to predict what happens next in the story.<br>And just like in real life, nobody can predict everything.',
  'To ensure you are paying attention,<br> we included a few questions where the answer should be obvious.',
  'If you do pay attention, and learn some regularities, <br>we will pay you a bonus of up to $6.',
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
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_2 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_2_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_3 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_3_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_4 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_4_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_5 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_5_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_6 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_6_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_7 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_7_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_8 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_8_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_1 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_9 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_9_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_10 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_10_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_11 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_11_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_12 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_12_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_13 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_13_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_14 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_14_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_15 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_15_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_16 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_16_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_2 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_17 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_17_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_18 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_18_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_19 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_19_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_20 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_20_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_21 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_21_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_22 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_22_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_23 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_23_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_24 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_24_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_3 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_25 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_25_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_26 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_26_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_27 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_27_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_28 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_28_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_29 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_29_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_30 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_30_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_31 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_31_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_32 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_32_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_4 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_33 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_33_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_34 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_34_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_35 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_35_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_36 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_36_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_37 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_37_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_38 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_38_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_39 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_39_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_40 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_40_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_5 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_41 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_41_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_42 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.", "Bill <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_42_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.", "Bill <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_43 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_43_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_44 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_44_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_45 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_45_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_46 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_46_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_47 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_47_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_48 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_48_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_49 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_49_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
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
	var s_50 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_50_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_51 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_51_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
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
	var s_52 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_52_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_53 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_53_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_6 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_54 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_54_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_55 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_55_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_56 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_56_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_57 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_57_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_58 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_58_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_59 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_59_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_60 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_60_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_61 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_61_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SELFSAY",
						"true_tonode": "STORY",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_62 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_62_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_63 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_63_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_64 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_64_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_7 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_65 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_65_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_66 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_66_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_67 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_67_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_68 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_68_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_69 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_69_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_70 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_70_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_71 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_71_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_72 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_72_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_73 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_73_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
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
	var s_74 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_74_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_75 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_75_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_76 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_76_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_8 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_77 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_77_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_78 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_78_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_79 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_79_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_80 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_80_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_81 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_81_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_82 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_82_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_83 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_83_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_84 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_84_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_85 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_85_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_86 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_86_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_87 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_87_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_88 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_88_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_9 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_89 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_89_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_90 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_90_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_91 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_91_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_92 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_92_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_93 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_93_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_94 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_94_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_95 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_95_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_96 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_96_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_97 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_97_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_98 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_98_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_99 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_99_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_10 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_100 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_100_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_101 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.", "Bill <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_101_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.", "Bill <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_102 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_102_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_103 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_103_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_104 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_104_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_105 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_105_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_106 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_106_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_107 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_107_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_108 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_108_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_109 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_109_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
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
	var s_110 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_110_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_111 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_111_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_11 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_112 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_112_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_113 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_113_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_114 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_114_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_115 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_115_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_116 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_116_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_117 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_117_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
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
	var s_118 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_118_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_119 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_119_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_120 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_120_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_121 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_121_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_122 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That must have been when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_122_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That must have been when Bill <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_123 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_123_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_124 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_124_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_12 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_125 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_125_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_126 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_126_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_127 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_127_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
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
	var s_128 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_128_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_129 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_129_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_130 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_130_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_131 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_131_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_132 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_132_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_133 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_133_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_134 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_134_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_135 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_135_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_13 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_136 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_136_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_137 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.", "Bill <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_137_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.", "Bill <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_138 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_138_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_139 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_139_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_140 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_140_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_141 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_141_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
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
	var s_142 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_142_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_143 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_143_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_144 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_144_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_145 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_145_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
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
	var s_146 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_146_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_147 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_147_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_14 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_148 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_148_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_149 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_149_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_150 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_150_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_151 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_151_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_152 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_152_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_153 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_153_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_154 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_154_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "SELFSAY",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_155 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_155_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_156 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_156_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_157 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_157_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
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
	var s_158 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_158_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_159 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_159_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_15 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_160 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_160_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_161 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_161_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_162 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_162_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_163 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_163_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_164 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_164_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_165 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_165_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_166 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_166_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_167 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_167_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_168 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_168_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That must have been when Alice <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_169 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_169_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_170 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_170_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_16 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_171 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_171_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_172 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_172_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_173 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_173_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_174 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_174_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_175 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_175_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_176 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_176_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "SELFSAY",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_177 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_177_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_178 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_178_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_179 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_179_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_180 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_180_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_17 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_181 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_181_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_182 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_182_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_183 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_183_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_184 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_184_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_185 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_185_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_186 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_186_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_187 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_187_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_188 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_188_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_189 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_189_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_190 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_190_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_191 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_191_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_18 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_192 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_192_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_193 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_193_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_194 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_194_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_195 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_195_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_196 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_196_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_197 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_197_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
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
	var s_198 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_198_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_199 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_199_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_200 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_200_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_19 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_201 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_201_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_202 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_202_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_203 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_203_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_204 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_204_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_205 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_205_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
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
	var s_206 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_206_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_207 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_207_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_208 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_208_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_209 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_209_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
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
	var s_210 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_210_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_211 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_211_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_20 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_212 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_212_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_213 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_213_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_214 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_214_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_215 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_215_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_216 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_216_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_217 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_217_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_218 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_218_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_219 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_219_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_220 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_220_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
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
	var s_221 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_221_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_222 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_222_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_223 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_223_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_21 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_224 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_224_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_225 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_225_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_226 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_226_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_227 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_227_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_228 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_228_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_229 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_229_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_230 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_230_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
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
	var s_231 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_231_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_232 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_232_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
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
	var s_233 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_233_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_234 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_234_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_22 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_235 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_235_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_236 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_236_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_237 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_237_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_238 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_238_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SAW",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_239 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_239_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_240 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_240_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_241 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_241_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_242 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_242_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_243 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_243_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
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
	var s_244 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_244_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_245 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_245_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_23 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_246 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_246_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_247 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.", "Bill <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_247_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.", "Bill <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_248 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_248_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_249 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_249_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_250 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_250_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_251 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_251_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_252 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_252_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_253 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_253_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_254 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_254_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_255 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_255_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
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
	var s_256 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_256_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_257 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_257_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_24 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_258 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_258_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_259 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_259_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_260 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_260_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_261 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_261_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_262 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_262_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_263 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_263_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_264 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_264_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_265 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_265_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_266 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_266_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_267 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_267_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
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
	var s_268 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_268_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_269 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_269_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_25 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_270 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_270_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_271 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_271_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_272 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_272_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_273 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_273_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_274 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_274_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_275 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_275_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_276 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_276_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_277 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_277_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_278 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_278_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
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
	var s_279 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_279_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_280 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_280_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
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
	var s_281 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_281_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_282 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_282_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_26 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_283 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_283_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_284 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_284_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_285 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_285_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_286 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_286_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_287 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_287_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_288 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_288_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
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
	var s_289 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_289_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_290 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_290_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_291 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_291_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_292 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_292_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_293 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_293_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_294 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_294_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_295 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_295_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_27 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_296 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_296_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_297 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_297_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_298 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_298_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_299 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_299_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_300 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_300_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_301 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_301_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_302 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_302_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_303 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_303_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
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
	var s_304 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_304_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_305 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_305_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_28 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_306 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_306_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_307 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.", "Bill <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_307_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.", "Bill <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_308 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_308_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_309 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_309_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_310 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_310_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
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
	var s_311 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_311_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_312 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_312_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_313 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_313_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_314 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_314_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_315 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_315_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
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
	var s_316 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_316_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_317 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_317_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_29 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_318 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_318_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_319 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_319_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_320 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_320_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_321 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_321_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_322 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_322_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_323 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_323_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_324 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_324_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_325 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_325_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_326 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_326_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_327 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_327_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
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
	var s_328 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_328_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_329 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_329_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_30 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_330 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_330_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_331 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.", "Bill <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_331_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.", "Bill <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_332 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_332_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_333 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_333_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_334 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_334_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_335 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_335_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_336 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_336_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_337 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_337_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_338 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_338_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_339 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_339_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
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
	var s_340 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_340_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_341 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_341_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_31 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_342 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_342_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_343 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_343_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_344 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_344_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_345 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_345_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_346 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_346_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_347 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_347_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_348 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_348_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_349 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_349_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
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
	var s_350 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_350_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_351 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_351_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
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
	var s_352 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_352_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_353 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_353_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_32 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_354 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_354_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_355 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_355_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_356 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_356_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_357 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_357_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_358 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_358_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_359 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_359_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_360 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_360_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_361 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_361_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_362 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_362_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
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
	var s_363 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_363_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_364 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_364_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_33 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_365 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_365_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_366 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_366_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_367 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_367_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_368 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_368_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_369 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_369_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_370 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_370_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
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
	var s_371 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_371_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_372 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_372_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_373 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_373_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_374 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_374_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_375 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_375_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_376 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_376_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_377 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_377_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_34 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_378 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_378_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_379 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_379_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_380 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_380_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_381 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_381_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_382 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_382_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_383 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_383_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_384 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_384_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_385 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_385_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_386 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_386_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
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
	var s_387 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_387_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_388 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_388_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_389 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_389_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_35 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_390 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_390_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_391 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_391_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_392 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_392_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_393 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_393_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_394 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_394_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_395 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_395_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_396 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_396_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_397 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_397_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_398 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_398_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
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
	var s_399 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_399_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_400 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_400_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_36 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_401 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_401_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_402 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.", "Bill <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_402_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.", "Bill <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_403 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_403_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_404 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_404_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_405 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_405_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_406 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_406_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_407 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_407_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_408 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_408_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_409 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_409_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_410 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_410_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_411 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_411_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_412 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_412_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_37 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_413 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_413_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_414 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.", "Alice <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_414_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.", "Alice <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_415 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_415_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_416 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_416_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_417 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_417_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_418 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_418_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_419 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_419_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_420 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_420_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
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
	var s_421 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_421_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_422 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_422_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_423 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_423_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_424 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_424_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_38 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_425 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_425_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_426 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_426_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_427 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_427_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_428 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_428_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_429 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_429_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_430 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_430_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_431 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_431_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_432 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_432_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_433 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_433_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_434 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_434_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
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
	var s_435 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_435_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_436 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_436_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_437 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_437_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_39 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_438 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_438_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_439 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.", "Bill <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_439_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.", "Bill <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_440 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_440_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_441 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_441_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_442 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_442_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_443 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_443_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_444 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_444_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_445 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_445_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_446 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_446_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
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
	var s_447 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_447_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_448 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_448_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_449 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_449_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_450 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_450_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_40 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_451 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_451_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_452 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.", "Bill <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_452_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.", "Bill <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_453 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_453_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_454 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_454_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
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
	var s_455 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_455_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_456 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_456_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_457 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_457_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_458 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_458_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_459 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_459_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_460 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_460_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
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
	var s_461 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_461_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_462 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_462_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_41 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_463 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_463_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_464 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_464_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_465 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_465_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_466 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_466_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_467 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_467_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_468 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_468_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "SELFSAY",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_469 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_469_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_470 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_470_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_471 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_471_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
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
	var s_472 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_472_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_473 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_473_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_42 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_474 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_474_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_475 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_475_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_476 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_476_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_477 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_477_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_478 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_478_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_479 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_479_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_480 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_480_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_481 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_481_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_482 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_482_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_483 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_483_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
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
	var s_484 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_484_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_485 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_485_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_43 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_486 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_486_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_487 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_487_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_488 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_488_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_489 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_489_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_490 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_490_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_491 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_491_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_492 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_492_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_493 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_493_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_494 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_494_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_495 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_495_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_496 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_496_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_44 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_497 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_497_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_498 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.", "Alice <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_498_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.", "Alice <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_499 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_499_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_500 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_500_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_501 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_501_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_502 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_502_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_503 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_503_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_504 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_504_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_505 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_505_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
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
	var s_506 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_506_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_507 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_507_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_508 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_508_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_45 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_509 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_509_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_510 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_510_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_511 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_511_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_512 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_512_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_513 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_513_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_514 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_514_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_515 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_515_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_516 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_516_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_517 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_517_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_518 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_518_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_46 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_519 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_519_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_520 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_520_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_521 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_521_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_522 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_522_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_523 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_523_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_524 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_524_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_525 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_525_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_526 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_526_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_527 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_527_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
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
	var s_528 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_528_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_529 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_529_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_530 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_530_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_47 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_531 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_531_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_532 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_532_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_533 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_533_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_534 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_534_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_535 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_535_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
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
	var s_536 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_536_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_537 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_537_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_538 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_538_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_539 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_539_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
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
	var s_540 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_540_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_541 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_541_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_48 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_542 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_542_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_543 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_543_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_544 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_544_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_545 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_545_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_546 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_546_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_547 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_547_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_548 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_548_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_549 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_549_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_550 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_550_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That must have been when Alice <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_551 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_551_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_552 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_552_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_49 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_553 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_553_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_554 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_554_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_555 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_555_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_556 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_556_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_557 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_557_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_558 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_558_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_559 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_559_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_560 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_560_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_561 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_561_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_562 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_562_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
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
	var s_563 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_563_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_564 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_564_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_50 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_565 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_565_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_566 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_566_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_567 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_567_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_568 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_568_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_569 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_569_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_570 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_570_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "SELFSAY",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_571 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_571_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_572 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_572_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_573 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_573_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
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
	var s_574 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_574_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_575 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_575_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_51 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_576 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_576_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_577 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_577_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_578 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_578_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_579 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_579_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
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
	var s_580 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_580_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_581 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_581_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_582 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_582_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_583 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_583_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SELFSAY",
						"true_tonode": "STORY",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_584 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_584_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_585 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_585_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
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
	var s_586 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_586_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_587 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_587_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_52 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_588 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_588_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_589 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.", "Bill <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_589_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.", "Bill <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_590 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_590_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_591 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_591_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_592 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_592_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_593 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_593_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_594 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_594_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_595 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_595_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_596 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_596_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_597 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_597_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_598 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_598_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_53 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_599 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_599_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_600 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_600_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_601 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_601_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_602 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_602_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_603 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_603_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_604 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_604_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_605 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_605_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_606 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_606_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
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
	var s_607 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_607_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_608 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_608_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
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
	var s_609 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_609_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_610 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_610_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_54 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_611 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_611_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_612 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_612_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_613 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_613_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_614 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_614_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_615 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_615_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_616 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_616_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_617 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_617_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_618 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_618_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_619 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_619_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_55 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_620 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_620_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_621 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_621_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_622 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_622_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_623 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_623_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_624 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_624_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
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
	var s_625 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_625_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_626 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_626_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_627 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_627_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
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
	var s_628 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_628_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_629 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_629_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
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
	var s_630 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_630_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_631 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_631_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_56 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_632 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_632_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_633 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_633_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_634 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_634_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_635 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_635_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_636 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_636_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SAW",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_637 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_637_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_638 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_638_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_639 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_639_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_640 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_640_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_641 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_641_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_57 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_642 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_642_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_643 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.", "Alice <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_643_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.", "Alice <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_644 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_644_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_645 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_645_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_646 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_646_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_647 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_647_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_648 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_648_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_649 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_649_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_650 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_650_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_651 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_651_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_652 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_652_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
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
	var s_653 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_653_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_654 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_654_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_58 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_655 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_655_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_656 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_656_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_657 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_657_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_658 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_658_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_659 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_659_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_660 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_660_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_661 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_661_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_662 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_662_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_663 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_663_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
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
	var s_664 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_664_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_665 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_665_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_666 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_666_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_667 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_667_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_59 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_668 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_668_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_669 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.", "Alice <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_669_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.", "Alice <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_670 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_670_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_671 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_671_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_672 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_672_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_673 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_673_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_674 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_674_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_675 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_675_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_676 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_676_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_677 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_677_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_678 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_678_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_679 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_679_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_60 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_680 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_680_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_681 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_681_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_682 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_682_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_683 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_683_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_684 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_684_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_685 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_685_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_686 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_686_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_687 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_687_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_688 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_688_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_689 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_689_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_690 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_690_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_691 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_691_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
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
	var s_692 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_692_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_693 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_693_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_61 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_694 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_694_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_695 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_695_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_696 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_696_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_697 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_697_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_698 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_698_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_699 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_699_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_700 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_700_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_701 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_701_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_702 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_702_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_703 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_703_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_704 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_704_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
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
	var s_705 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_705_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_706 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_706_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_62 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_707 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_707_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_708 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_708_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_709 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_709_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_710 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_710_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_711 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_711_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_712 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_712_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "SELFSAY",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_713 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_713_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_714 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_714_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_715 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_715_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_716 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_716_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
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
	var s_717 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_717_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_718 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_718_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_63 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_719 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_719_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_720 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.", "Alice <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_720_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.", "Alice <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_721 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_721_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_722 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'", "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_722_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'", "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_723 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_723_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_724 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_724_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
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
	var s_725 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_725_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_726 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_726_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_727 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_727_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
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
	var s_728 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_728_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_729 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_729_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_730 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_730_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_64 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_731 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_731_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_732 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_732_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_733 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_733_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_734 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_734_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_735 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_735_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_736 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_736_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_737 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_737_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_738 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_738_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_739 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_739_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_65 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_740 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_740_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_741 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.", "Alice <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_741_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.", "Alice <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_742 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_742_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_743 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_743_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_744 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_744_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_745 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_745_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
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
	var s_746 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_746_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_747 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_747_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "SELFSAY",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_748 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_748_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_749 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_749_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_750 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_750_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_751 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_751_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
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
	var s_752 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_752_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_753 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_753_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_66 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_754 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_754_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_755 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_755_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_756 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_756_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_757 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_757_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_758 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_758_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_759 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_759_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_760 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_760_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
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
	var s_761 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_761_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_762 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_762_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
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
	var s_763 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_763_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_764 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_764_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_67 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_765 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_765_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_766 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_766_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_767 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_767_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_768 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_768_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_769 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_769_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
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
	var s_770 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_770_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_771 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_771_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_772 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_772_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_773 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_773_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_774 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_774_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_775 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_775_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_776 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_776_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_68 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_777 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_777_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_778 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_778_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_779 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_779_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_780 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_780_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_781 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_781_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_782 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_782_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_783 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_783_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_784 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_784_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_785 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_785_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_786 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_786_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_787 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_787_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_69 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_788 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_788_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_789 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_789_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_790 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_790_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_791 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_791_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_792 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_792_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_793 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_793_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_794 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_794_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_795 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_795_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_796 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_796_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_70 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_797 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_797_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_798 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_798_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_799 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_799_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_800 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_800_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_801 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_801_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_802 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_802_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_803 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_803_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_804 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_804_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_805 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_805_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_806 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_806_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_807 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_807_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_71 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_808 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_808_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_809 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_809_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_810 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_810_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_811 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_811_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_812 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_812_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_813 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_813_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_814 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_814_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_815 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_815_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_816 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_816_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_72 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_817 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_817_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_818 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_818_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_819 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_819_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_820 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_820_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_821 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_821_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_822 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_822_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_823 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_823_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_824 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_824_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_825 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_825_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_826 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_826_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_827 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_827_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
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
	var s_828 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_828_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_829 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_829_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_73 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_830 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_830_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_831 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_831_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_832 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_832_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_833 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_833_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_834 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_834_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_835 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_835_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_836 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_836_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_837 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_837_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SELFSAY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_838 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_838_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_839 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_839_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
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
	var s_840 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_840_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_841 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_841_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_74 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_842 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_842_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_843 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_843_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_844 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_844_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_845 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_845_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_846 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_846_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_847 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_847_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_848 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_848_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_849 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_849_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_850 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_850_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_851 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_851_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
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
	var s_852 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_852_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_853 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_853_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_75 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_854 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_854_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_855 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_855_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_856 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_856_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_857 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_857_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_858 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_858_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_859 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_859_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_860 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_860_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_861 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_861_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_862 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_862_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_863 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_863_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
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
	var s_864 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_864_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_865 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_865_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_76 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_866 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_866_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_867 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.", "Bill <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_867_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.", "Bill <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_868 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_868_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_869 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_869_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_870 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_870_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
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
	var s_871 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_871_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_872 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_872_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_873 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_873_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_874 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_874_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That was when they saw Alice <b>transport</b>. <br>"],
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
	var s_875 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_875_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_876 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_876_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_77 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_877 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_877_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_878 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_878_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_879 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_879_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_880 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_880_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_881 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_881_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_882 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_882_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_883 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_883_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_884 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_884_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_885 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_885_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_886 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_886_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_887 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_887_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_888 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_888_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_889 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_889_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_78 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_890 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_890_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_891 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.", "Bill <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_891_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.", "Bill <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_892 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_892_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_893 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_893_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_894 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_894_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_895 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_895_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_896 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_896_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_897 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_897_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_898 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_898_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_899 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_899_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_79 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_900 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_900_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_901 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_901_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_902 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_902_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_903 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_903_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_904 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_904_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_905 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_905_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_906 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_906_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_907 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_907_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
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
	var s_908 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_908_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_909 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_909_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_910 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_910_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_80 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_911 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_911_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_912 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_912_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_913 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_913_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_914 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_914_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_915 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_915_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
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
	var s_916 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_916_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_917 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_917_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_918 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_918_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_919 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_919_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_920 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_920_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_921 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_921_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_81 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_922 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_922_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_923 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_923_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_924 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_924_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_925 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_925_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_926 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_926_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_927 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_927_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_928 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_928_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_929 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_929_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_930 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_930_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_931 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_931_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
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
	var s_932 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_932_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_933 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_933_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_82 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_934 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_934_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_935 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_935_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_936 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_936_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_937 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_937_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_938 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_938_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_939 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_939_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_940 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_940_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_941 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_941_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_942 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_942_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_83 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_943 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_943_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_944 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_944_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_945 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_945_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_946 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_946_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_947 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_947_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_948 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_948_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_949 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_949_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_950 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_950_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_951 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_951_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_952 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_952_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_953 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_953_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_84 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_954 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_954_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_955 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_955_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_956 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_956_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_957 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_957_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
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
	var s_958 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_958_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_959 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_959_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_960 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_960_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_961 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_961_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_962 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_962_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_963 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_963_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_964 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_964_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_85 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_965 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_965_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_966 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_966_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_967 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_967_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
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
	var s_968 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_968_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_969 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_969_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
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
	var s_970 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_970_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_971 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_971_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_972 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_972_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_973 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_973_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_974 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_974_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
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
	var s_975 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_975_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_976 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_976_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_86 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_977 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_977_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_978 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_978_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_979 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_979_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_980 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_980_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_981 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_981_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_982 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_982_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_983 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_983_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_984 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_984_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_985 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_985_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
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
	var s_986 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_986_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_987 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_987_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_988 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_988_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_87 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_989 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_989_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_990 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.", "Alice <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_990_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.", "Alice <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_991 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_991_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_992 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_992_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_993 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_993_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_994 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_994_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_995 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_995_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_996 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_996_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
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
	var s_997 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_997_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_998 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_998_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
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
	var s_999 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_999_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1000 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1000_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_88 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1001 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1001_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1002 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1002_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1003 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1003_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1004 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1004_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1005 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1005_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1006 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1006_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
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
	var s_1007 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1007_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1008 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1008_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1009 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1009_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1010 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1010_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1011 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1011_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1012 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1012_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
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
	var s_1013 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1013_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1014 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1014_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_89 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1015 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1015_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1016 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.", "Bill <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1016_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.", "Bill <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1017 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1017_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1018 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1018_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1019 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1019_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1020 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1020_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1021 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1021_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1022 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1022_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1023 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1023_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1024 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1024_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
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
	var s_1025 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1025_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1026 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1026_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_90 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1027 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1027_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1028 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.", "Alice <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1028_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.", "Alice <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1029 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1029_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1030 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1030_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1031 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1031_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1032 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1032_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1033 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1033_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1034 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1034_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1035 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1035_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
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
	var s_1036 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1036_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1037 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1037_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_91 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1038 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1038_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1039 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1039_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1040 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1040_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1041 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1041_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1042 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1042_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1043 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1043_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1044 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1044_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1045 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1045_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1046 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1046_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1047 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1047_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1048 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1048_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_92 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1049 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1049_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1050 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.", "Bill <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1050_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.", "Bill <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1051 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1051_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1052 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1052_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1053 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1053_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1054 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1054_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
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
	var s_1055 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1055_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1056 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1056_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1057 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1057_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1058 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1058_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1059 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1059_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1060 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1060_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1061 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1061_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1062 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1062_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_93 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1063 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1063_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1064 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1064_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1065 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1065_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1066 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1066_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1067 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1067_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1068 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1068_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1069 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1069_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
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
	var s_1070 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1070_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1071 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1071_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
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
	var s_1072 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1072_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1073 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1073_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_94 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1074 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1074_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1075 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1075_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1076 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1076_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1077 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1077_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1078 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1078_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1079 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1079_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1080 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1080_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1081 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1081_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1082 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1082_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1083 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1083_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
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
	var s_1084 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1084_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1085 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1085_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_95 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1086 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1086_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1087 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1087_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1088 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1088_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1089 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1089_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1090 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1090_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1091 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1091_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1092 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1092_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1093 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1093_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1094 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1094_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
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
	var s_1095 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1095_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1096 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1096_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_96 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1097 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1097_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1098 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1098_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1099 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1099_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1100 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1100_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1101 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1101_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1102 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1102_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1103 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1103_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1104 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1104_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1105 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1105_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1106 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1106_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_97 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1107 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1107_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1108 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1108_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1109 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1109_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1110 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1110_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1111 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1111_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1112 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1112_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1113 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1113_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1114 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1114_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1115 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1115_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
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
	var s_1116 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1116_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1117 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1117_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_98 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1118 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1118_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1119 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1119_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1120 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1120_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1121 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1121_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1122 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1122_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1123 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1123_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1124 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1124_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1125 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1125_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1126 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1126_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
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
	var s_1127 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1127_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1128 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1128_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1129 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1129_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_99 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1130 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1130_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1131 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1131_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1132 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1132_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1133 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1133_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1134 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1134_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
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
	var s_1135 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1135_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1136 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1136_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1137 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1137_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1138 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1138_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
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
	var s_1139 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1139_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1140 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1140_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
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


var comments = {
  type: 'survey-text',
  questions: [{prompt: "Thanks for participating! We appreciate any feedback.", 
                rows: 15, columns: 100}],
  }

jsPsych.init({
  timeline: [intro_instructions,intro_instructions2,s_1,s_1_,s_2,s_2_,s_3,s_3_,s_4,s_4_,s_5,s_5_,s_6,s_6_,s_7,s_7_,s_8,s_8_,betweenstory_1,s_9,s_9_,s_10,s_10_,s_11,s_11_,s_12,s_12_,s_13,s_13_,s_14,s_14_,s_15,s_15_,s_16,s_16_,betweenstory_2,s_17,s_17_,s_18,s_18_,s_19,s_19_,s_20,s_20_,s_21,s_21_,s_22,s_22_,s_23,s_23_,s_24,s_24_,betweenstory_3,s_25,s_25_,s_26,s_26_,s_27,s_27_,s_28,s_28_,s_29,s_29_,s_30,s_30_,s_31,s_31_,s_32,s_32_,betweenstory_4,s_33,s_33_,s_34,s_34_,s_35,s_35_,s_36,s_36_,s_37,s_37_,s_38,s_38_,s_39,s_39_,s_40,s_40_,betweenstory_5,s_41,s_41_,q_42,q_42_,s_43,s_43_,q_44,q_44_,s_45,s_45_,s_46,s_46_,q_47,q_47_,s_48,s_48_,q_49,q_49_,s_50,s_50_,q_51,q_51_,s_52,s_52_,s_53,s_53_,betweenstory_6,s_54,s_54_,s_55,s_55_,s_56,s_56_,q_57,q_57_,s_58,s_58_,q_59,q_59_,s_60,s_60_,q_61,q_61_,s_62,s_62_,s_63,s_63_,s_64,s_64_,betweenstory_7,s_65,s_65_,s_66,s_66_,q_67,q_67_,s_68,s_68_,q_69,q_69_,s_70,s_70_,q_71,q_71_,s_72,s_72_,q_73,q_73_,s_74,s_74_,s_75,s_75_,s_76,s_76_,betweenstory_8,s_77,s_77_,q_78,q_78_,s_79,s_79_,q_80,q_80_,s_81,s_81_,q_82,q_82_,s_83,s_83_,s_84,s_84_,q_85,q_85_,s_86,s_86_,s_87,s_87_,s_88,s_88_,betweenstory_9,s_89,s_89_,q_90,q_90_,s_91,s_91_,q_92,q_92_,s_93,s_93_,s_94,s_94_,q_95,q_95_,s_96,s_96_,s_97,s_97_,s_98,s_98_,s_99,s_99_,betweenstory_10,s_100,s_100_,q_101,q_101_,s_102,s_102_,s_103,s_103_,s_104,s_104_,q_105,q_105_,s_106,s_106_,q_107,q_107_,s_108,s_108_,q_109,q_109_,s_110,s_110_,s_111,s_111_,betweenstory_11,s_112,s_112_,q_113,q_113_,s_114,s_114_,q_115,q_115_,s_116,s_116_,q_117,q_117_,s_118,s_118_,s_119,s_119_,q_120,q_120_,s_121,s_121_,q_122,q_122_,s_123,s_123_,s_124,s_124_,betweenstory_12,s_125,s_125_,s_126,s_126_,q_127,q_127_,s_128,s_128_,q_129,q_129_,s_130,s_130_,q_131,q_131_,s_132,s_132_,s_133,s_133_,s_134,s_134_,s_135,s_135_,betweenstory_13,s_136,s_136_,q_137,q_137_,s_138,s_138_,q_139,q_139_,s_140,s_140_,q_141,q_141_,s_142,s_142_,s_143,s_143_,s_144,s_144_,q_145,q_145_,s_146,s_146_,s_147,s_147_,betweenstory_14,s_148,s_148_,s_149,s_149_,q_150,q_150_,s_151,s_151_,q_152,q_152_,s_153,s_153_,q_154,q_154_,s_155,s_155_,s_156,s_156_,q_157,q_157_,s_158,s_158_,s_159,s_159_,betweenstory_15,s_160,s_160_,s_161,s_161_,q_162,q_162_,s_163,s_163_,s_164,s_164_,s_165,s_165_,q_166,q_166_,s_167,s_167_,q_168,q_168_,s_169,s_169_,s_170,s_170_,betweenstory_16,s_171,s_171_,s_172,s_172_,q_173,q_173_,s_174,s_174_,s_175,s_175_,q_176,q_176_,s_177,s_177_,s_178,s_178_,s_179,s_179_,s_180,s_180_,betweenstory_17,s_181,s_181_,q_182,q_182_,s_183,s_183_,s_184,s_184_,q_185,q_185_,s_186,s_186_,s_187,s_187_,s_188,s_188_,q_189,q_189_,s_190,s_190_,s_191,s_191_,betweenstory_18,s_192,s_192_,s_193,s_193_,s_194,s_194_,s_195,s_195_,s_196,s_196_,q_197,q_197_,s_198,s_198_,s_199,s_199_,s_200,s_200_,betweenstory_19,s_201,s_201_,s_202,s_202_,q_203,q_203_,s_204,s_204_,q_205,q_205_,s_206,s_206_,s_207,s_207_,s_208,s_208_,q_209,q_209_,s_210,s_210_,s_211,s_211_,betweenstory_20,s_212,s_212_,q_213,q_213_,s_214,s_214_,s_215,s_215_,q_216,q_216_,s_217,s_217_,q_218,q_218_,s_219,s_219_,q_220,q_220_,s_221,s_221_,s_222,s_222_,s_223,s_223_,betweenstory_21,s_224,s_224_,s_225,s_225_,s_226,s_226_,s_227,s_227_,q_228,q_228_,s_229,s_229_,q_230,q_230_,s_231,s_231_,q_232,q_232_,s_233,s_233_,s_234,s_234_,betweenstory_22,s_235,s_235_,s_236,s_236_,s_237,s_237_,q_238,q_238_,s_239,s_239_,q_240,q_240_,s_241,s_241_,s_242,s_242_,q_243,q_243_,s_244,s_244_,s_245,s_245_,betweenstory_23,s_246,s_246_,q_247,q_247_,s_248,s_248_,q_249,q_249_,s_250,s_250_,s_251,s_251_,s_252,s_252_,q_253,q_253_,s_254,s_254_,q_255,q_255_,s_256,s_256_,s_257,s_257_,betweenstory_24,s_258,s_258_,q_259,q_259_,s_260,s_260_,s_261,s_261_,q_262,q_262_,s_263,s_263_,s_264,s_264_,q_265,q_265_,s_266,s_266_,q_267,q_267_,s_268,s_268_,s_269,s_269_,betweenstory_25,s_270,s_270_,q_271,q_271_,s_272,s_272_,s_273,s_273_,q_274,q_274_,s_275,s_275_,q_276,q_276_,s_277,s_277_,q_278,q_278_,s_279,s_279_,q_280,q_280_,s_281,s_281_,s_282,s_282_,betweenstory_26,s_283,s_283_,q_284,q_284_,s_285,s_285_,q_286,q_286_,s_287,s_287_,q_288,q_288_,s_289,s_289_,q_290,q_290_,s_291,s_291_,q_292,q_292_,s_293,s_293_,s_294,s_294_,s_295,s_295_,betweenstory_27,s_296,s_296_,s_297,s_297_,q_298,q_298_,s_299,s_299_,s_300,s_300_,s_301,s_301_,s_302,s_302_,q_303,q_303_,s_304,s_304_,s_305,s_305_,betweenstory_28,s_306,s_306_,q_307,q_307_,s_308,s_308_,s_309,s_309_,q_310,q_310_,s_311,s_311_,q_312,q_312_,s_313,s_313_,s_314,s_314_,q_315,q_315_,s_316,s_316_,s_317,s_317_,betweenstory_29,s_318,s_318_,q_319,q_319_,s_320,s_320_,q_321,q_321_,s_322,s_322_,q_323,q_323_,s_324,s_324_,s_325,s_325_,s_326,s_326_,q_327,q_327_,s_328,s_328_,s_329,s_329_,betweenstory_30,s_330,s_330_,q_331,q_331_,s_332,s_332_,q_333,q_333_,s_334,s_334_,s_335,s_335_,s_336,s_336_,q_337,q_337_,s_338,s_338_,q_339,q_339_,s_340,s_340_,s_341,s_341_,betweenstory_31,s_342,s_342_,s_343,s_343_,s_344,s_344_,q_345,q_345_,s_346,s_346_,q_347,q_347_,s_348,s_348_,q_349,q_349_,s_350,s_350_,q_351,q_351_,s_352,s_352_,s_353,s_353_,betweenstory_32,s_354,s_354_,s_355,s_355_,q_356,q_356_,s_357,s_357_,q_358,q_358_,s_359,s_359_,s_360,s_360_,s_361,s_361_,q_362,q_362_,s_363,s_363_,s_364,s_364_,betweenstory_33,s_365,s_365_,q_366,q_366_,s_367,s_367_,q_368,q_368_,s_369,s_369_,q_370,q_370_,s_371,s_371_,q_372,q_372_,s_373,s_373_,q_374,q_374_,s_375,s_375_,s_376,s_376_,s_377,s_377_,betweenstory_34,s_378,s_378_,q_379,q_379_,s_380,s_380_,q_381,q_381_,s_382,s_382_,s_383,s_383_,q_384,q_384_,s_385,s_385_,q_386,q_386_,s_387,s_387_,s_388,s_388_,s_389,s_389_,betweenstory_35,s_390,s_390_,s_391,s_391_,q_392,q_392_,s_393,s_393_,s_394,s_394_,q_395,q_395_,s_396,s_396_,s_397,s_397_,q_398,q_398_,s_399,s_399_,s_400,s_400_,betweenstory_36,s_401,s_401_,q_402,q_402_,s_403,s_403_,s_404,s_404_,q_405,q_405_,s_406,s_406_,q_407,q_407_,s_408,s_408_,q_409,q_409_,s_410,s_410_,s_411,s_411_,s_412,s_412_,betweenstory_37,s_413,s_413_,q_414,q_414_,s_415,s_415_,s_416,s_416_,q_417,q_417_,s_418,s_418_,s_419,s_419_,q_420,q_420_,s_421,s_421_,q_422,q_422_,s_423,s_423_,s_424,s_424_,betweenstory_38,s_425,s_425_,q_426,q_426_,s_427,s_427_,q_428,q_428_,s_429,s_429_,q_430,q_430_,s_431,s_431_,q_432,q_432_,s_433,s_433_,q_434,q_434_,s_435,s_435_,s_436,s_436_,s_437,s_437_,betweenstory_39,s_438,s_438_,q_439,q_439_,s_440,s_440_,q_441,q_441_,s_442,s_442_,q_443,q_443_,s_444,s_444_,s_445,s_445_,q_446,q_446_,s_447,s_447_,q_448,q_448_,s_449,s_449_,s_450,s_450_,betweenstory_40,s_451,s_451_,q_452,q_452_,s_453,s_453_,q_454,q_454_,s_455,s_455_,s_456,s_456_,s_457,s_457_,q_458,q_458_,s_459,s_459_,q_460,q_460_,s_461,s_461_,s_462,s_462_,betweenstory_41,s_463,s_463_,s_464,s_464_,q_465,q_465_,s_466,s_466_,s_467,s_467_,q_468,q_468_,s_469,s_469_,s_470,s_470_,q_471,q_471_,s_472,s_472_,s_473,s_473_,betweenstory_42,s_474,s_474_,s_475,s_475_,q_476,q_476_,s_477,s_477_,s_478,s_478_,q_479,q_479_,s_480,s_480_,q_481,q_481_,s_482,s_482_,q_483,q_483_,s_484,s_484_,s_485,s_485_,betweenstory_43,s_486,s_486_,s_487,s_487_,q_488,q_488_,s_489,s_489_,s_490,s_490_,q_491,q_491_,s_492,s_492_,s_493,s_493_,q_494,q_494_,s_495,s_495_,s_496,s_496_,betweenstory_44,s_497,s_497_,q_498,q_498_,s_499,s_499_,q_500,q_500_,s_501,s_501_,q_502,q_502_,s_503,s_503_,s_504,s_504_,q_505,q_505_,s_506,s_506_,s_507,s_507_,s_508,s_508_,betweenstory_45,s_509,s_509_,s_510,s_510_,q_511,q_511_,s_512,s_512_,s_513,s_513_,q_514,q_514_,s_515,s_515_,s_516,s_516_,s_517,s_517_,s_518,s_518_,betweenstory_46,s_519,s_519_,q_520,q_520_,s_521,s_521_,s_522,s_522_,q_523,q_523_,s_524,s_524_,q_525,q_525_,s_526,s_526_,q_527,q_527_,s_528,s_528_,s_529,s_529_,s_530,s_530_,betweenstory_47,s_531,s_531_,q_532,q_532_,s_533,s_533_,s_534,s_534_,q_535,q_535_,s_536,s_536_,s_537,s_537_,s_538,s_538_,q_539,q_539_,s_540,s_540_,s_541,s_541_,betweenstory_48,s_542,s_542_,s_543,s_543_,q_544,q_544_,s_545,s_545_,s_546,s_546_,q_547,q_547_,s_548,s_548_,s_549,s_549_,q_550,q_550_,s_551,s_551_,s_552,s_552_,betweenstory_49,s_553,s_553_,s_554,s_554_,s_555,s_555_,q_556,q_556_,s_557,s_557_,q_558,q_558_,s_559,s_559_,q_560,q_560_,s_561,s_561_,q_562,q_562_,s_563,s_563_,s_564,s_564_,betweenstory_50,s_565,s_565_,s_566,s_566_,q_567,q_567_,s_568,s_568_,s_569,s_569_,q_570,q_570_,s_571,s_571_,s_572,s_572_,q_573,q_573_,s_574,s_574_,s_575,s_575_,betweenstory_51,s_576,s_576_,s_577,s_577_,s_578,s_578_,q_579,q_579_,s_580,s_580_,q_581,q_581_,s_582,s_582_,q_583,q_583_,s_584,s_584_,q_585,q_585_,s_586,s_586_,s_587,s_587_,betweenstory_52,s_588,s_588_,q_589,q_589_,s_590,s_590_,q_591,q_591_,s_592,s_592_,s_593,s_593_,s_594,s_594_,q_595,q_595_,s_596,s_596_,s_597,s_597_,s_598,s_598_,betweenstory_53,s_599,s_599_,s_600,s_600_,q_601,q_601_,s_602,s_602_,q_603,q_603_,s_604,s_604_,s_605,s_605_,q_606,q_606_,s_607,s_607_,q_608,q_608_,s_609,s_609_,s_610,s_610_,betweenstory_54,s_611,s_611_,s_612,s_612_,q_613,q_613_,s_614,s_614_,s_615,s_615_,s_616,s_616_,s_617,s_617_,s_618,s_618_,s_619,s_619_,betweenstory_55,s_620,s_620_,s_621,s_621_,q_622,q_622_,s_623,s_623_,q_624,q_624_,s_625,s_625_,s_626,s_626_,q_627,q_627_,s_628,s_628_,q_629,q_629_,s_630,s_630_,s_631,s_631_,betweenstory_56,s_632,s_632_,s_633,s_633_,q_634,q_634_,s_635,s_635_,q_636,q_636_,s_637,s_637_,s_638,s_638_,s_639,s_639_,s_640,s_640_,s_641,s_641_,betweenstory_57,s_642,s_642_,q_643,q_643_,s_644,s_644_,q_645,q_645_,s_646,s_646_,s_647,s_647_,q_648,q_648_,s_649,s_649_,q_650,q_650_,s_651,s_651_,q_652,q_652_,s_653,s_653_,s_654,s_654_,betweenstory_58,s_655,s_655_,q_656,q_656_,s_657,s_657_,s_658,s_658_,q_659,q_659_,s_660,s_660_,q_661,q_661_,s_662,s_662_,q_663,q_663_,s_664,s_664_,q_665,q_665_,s_666,s_666_,s_667,s_667_,betweenstory_59,s_668,s_668_,q_669,q_669_,s_670,s_670_,q_671,q_671_,s_672,s_672_,q_673,q_673_,s_674,s_674_,q_675,q_675_,s_676,s_676_,s_677,s_677_,s_678,s_678_,s_679,s_679_,betweenstory_60,s_680,s_680_,q_681,q_681_,s_682,s_682_,q_683,q_683_,s_684,s_684_,q_685,q_685_,s_686,s_686_,q_687,q_687_,s_688,s_688_,q_689,q_689_,s_690,s_690_,q_691,q_691_,s_692,s_692_,s_693,s_693_,betweenstory_61,s_694,s_694_,q_695,q_695_,s_696,s_696_,q_697,q_697_,s_698,s_698_,q_699,q_699_,s_700,s_700_,q_701,q_701_,s_702,s_702_,s_703,s_703_,q_704,q_704_,s_705,s_705_,s_706,s_706_,betweenstory_62,s_707,s_707_,s_708,s_708_,q_709,q_709_,s_710,s_710_,s_711,s_711_,q_712,q_712_,s_713,s_713_,q_714,q_714_,s_715,s_715_,q_716,q_716_,s_717,s_717_,s_718,s_718_,betweenstory_63,s_719,s_719_,q_720,q_720_,s_721,s_721_,q_722,q_722_,s_723,s_723_,q_724,q_724_,s_725,s_725_,s_726,s_726_,q_727,q_727_,s_728,s_728_,s_729,s_729_,s_730,s_730_,betweenstory_64,s_731,s_731_,s_732,s_732_,s_733,s_733_,s_734,s_734_,s_735,s_735_,q_736,q_736_,s_737,s_737_,s_738,s_738_,s_739,s_739_,betweenstory_65,s_740,s_740_,q_741,q_741_,s_742,s_742_,q_743,q_743_,s_744,s_744_,q_745,q_745_,s_746,s_746_,q_747,q_747_,s_748,s_748_,q_749,q_749_,s_750,s_750_,q_751,q_751_,s_752,s_752_,s_753,s_753_,betweenstory_66,s_754,s_754_,s_755,s_755_,q_756,q_756_,s_757,s_757_,s_758,s_758_,s_759,s_759_,q_760,q_760_,s_761,s_761_,q_762,q_762_,s_763,s_763_,s_764,s_764_,betweenstory_67,s_765,s_765_,s_766,s_766_,q_767,q_767_,s_768,s_768_,q_769,q_769_,s_770,s_770_,q_771,q_771_,s_772,s_772_,s_773,s_773_,q_774,q_774_,s_775,s_775_,s_776,s_776_,betweenstory_68,s_777,s_777_,q_778,q_778_,s_779,s_779_,q_780,q_780_,s_781,s_781_,s_782,s_782_,q_783,q_783_,s_784,s_784_,s_785,s_785_,s_786,s_786_,s_787,s_787_,betweenstory_69,s_788,s_788_,s_789,s_789_,s_790,s_790_,s_791,s_791_,q_792,q_792_,s_793,s_793_,s_794,s_794_,s_795,s_795_,s_796,s_796_,betweenstory_70,s_797,s_797_,s_798,s_798_,q_799,q_799_,s_800,s_800_,q_801,q_801_,s_802,s_802_,s_803,s_803_,q_804,q_804_,s_805,s_805_,s_806,s_806_,s_807,s_807_,betweenstory_71,s_808,s_808_,s_809,s_809_,s_810,s_810_,s_811,s_811_,q_812,q_812_,s_813,s_813_,s_814,s_814_,s_815,s_815_,s_816,s_816_,betweenstory_72,s_817,s_817_,q_818,q_818_,s_819,s_819_,q_820,q_820_,s_821,s_821_,s_822,s_822_,q_823,q_823_,s_824,s_824_,q_825,q_825_,s_826,s_826_,q_827,q_827_,s_828,s_828_,s_829,s_829_,betweenstory_73,s_830,s_830_,s_831,s_831_,q_832,q_832_,s_833,s_833_,s_834,s_834_,q_835,q_835_,s_836,s_836_,q_837,q_837_,s_838,s_838_,q_839,q_839_,s_840,s_840_,s_841,s_841_,betweenstory_74,s_842,s_842_,q_843,q_843_,s_844,s_844_,q_845,q_845_,s_846,s_846_,q_847,q_847_,s_848,s_848_,s_849,s_849_,s_850,s_850_,q_851,q_851_,s_852,s_852_,s_853,s_853_,betweenstory_75,s_854,s_854_,q_855,q_855_,s_856,s_856_,q_857,q_857_,s_858,s_858_,s_859,s_859_,q_860,q_860_,s_861,s_861_,s_862,s_862_,q_863,q_863_,s_864,s_864_,s_865,s_865_,betweenstory_76,s_866,s_866_,q_867,q_867_,s_868,s_868_,s_869,s_869_,q_870,q_870_,s_871,s_871_,s_872,s_872_,s_873,s_873_,q_874,q_874_,s_875,s_875_,s_876,s_876_,betweenstory_77,s_877,s_877_,q_878,q_878_,s_879,s_879_,q_880,q_880_,s_881,s_881_,q_882,q_882_,s_883,s_883_,q_884,q_884_,s_885,s_885_,q_886,q_886_,s_887,s_887_,s_888,s_888_,s_889,s_889_,betweenstory_78,s_890,s_890_,q_891,q_891_,s_892,s_892_,q_893,q_893_,s_894,s_894_,s_895,s_895_,s_896,s_896_,s_897,s_897_,s_898,s_898_,s_899,s_899_,betweenstory_79,s_900,s_900_,q_901,q_901_,s_902,s_902_,s_903,s_903_,q_904,q_904_,s_905,s_905_,s_906,s_906_,q_907,q_907_,s_908,s_908_,s_909,s_909_,s_910,s_910_,betweenstory_80,s_911,s_911_,s_912,s_912_,q_913,q_913_,s_914,s_914_,q_915,q_915_,s_916,s_916_,s_917,s_917_,q_918,q_918_,s_919,s_919_,s_920,s_920_,s_921,s_921_,betweenstory_81,s_922,s_922_,q_923,q_923_,s_924,s_924_,s_925,s_925_,q_926,q_926_,s_927,s_927_,q_928,q_928_,s_929,s_929_,s_930,s_930_,q_931,q_931_,s_932,s_932_,s_933,s_933_,betweenstory_82,s_934,s_934_,s_935,s_935_,s_936,s_936_,s_937,s_937_,q_938,q_938_,s_939,s_939_,s_940,s_940_,s_941,s_941_,s_942,s_942_,betweenstory_83,s_943,s_943_,q_944,q_944_,s_945,s_945_,q_946,q_946_,s_947,s_947_,q_948,q_948_,s_949,s_949_,s_950,s_950_,s_951,s_951_,s_952,s_952_,s_953,s_953_,betweenstory_84,s_954,s_954_,s_955,s_955_,s_956,s_956_,q_957,q_957_,s_958,s_958_,q_959,q_959_,s_960,s_960_,s_961,s_961_,q_962,q_962_,s_963,s_963_,s_964,s_964_,betweenstory_85,s_965,s_965_,s_966,s_966_,q_967,q_967_,s_968,s_968_,q_969,q_969_,s_970,s_970_,s_971,s_971_,q_972,q_972_,s_973,s_973_,q_974,q_974_,s_975,s_975_,s_976,s_976_,betweenstory_86,s_977,s_977_,s_978,s_978_,q_979,q_979_,s_980,s_980_,q_981,q_981_,s_982,s_982_,q_983,q_983_,s_984,s_984_,q_985,q_985_,s_986,s_986_,s_987,s_987_,s_988,s_988_,betweenstory_87,s_989,s_989_,q_990,q_990_,s_991,s_991_,s_992,s_992_,q_993,q_993_,s_994,s_994_,s_995,s_995_,q_996,q_996_,s_997,s_997_,q_998,q_998_,s_999,s_999_,s_1000,s_1000_,betweenstory_88,s_1001,s_1001_,q_1002,q_1002_,s_1003,s_1003_,q_1004,q_1004_,s_1005,s_1005_,q_1006,q_1006_,s_1007,s_1007_,q_1008,q_1008_,s_1009,s_1009_,q_1010,q_1010_,s_1011,s_1011_,q_1012,q_1012_,s_1013,s_1013_,s_1014,s_1014_,betweenstory_89,s_1015,s_1015_,q_1016,q_1016_,s_1017,s_1017_,q_1018,q_1018_,s_1019,s_1019_,q_1020,q_1020_,s_1021,s_1021_,s_1022,s_1022_,s_1023,s_1023_,q_1024,q_1024_,s_1025,s_1025_,s_1026,s_1026_,betweenstory_90,s_1027,s_1027_,q_1028,q_1028_,s_1029,s_1029_,s_1030,s_1030_,s_1031,s_1031_,q_1032,q_1032_,s_1033,s_1033_,s_1034,s_1034_,q_1035,q_1035_,s_1036,s_1036_,s_1037,s_1037_,betweenstory_91,s_1038,s_1038_,q_1039,q_1039_,s_1040,s_1040_,q_1041,q_1041_,s_1042,s_1042_,q_1043,q_1043_,s_1044,s_1044_,s_1045,s_1045_,s_1046,s_1046_,s_1047,s_1047_,s_1048,s_1048_,betweenstory_92,s_1049,s_1049_,q_1050,q_1050_,s_1051,s_1051_,q_1052,q_1052_,s_1053,s_1053_,q_1054,q_1054_,s_1055,s_1055_,q_1056,q_1056_,s_1057,s_1057_,q_1058,q_1058_,s_1059,s_1059_,q_1060,q_1060_,s_1061,s_1061_,s_1062,s_1062_,betweenstory_93,s_1063,s_1063_,s_1064,s_1064_,q_1065,q_1065_,s_1066,s_1066_,s_1067,s_1067_,s_1068,s_1068_,q_1069,q_1069_,s_1070,s_1070_,q_1071,q_1071_,s_1072,s_1072_,s_1073,s_1073_,betweenstory_94,s_1074,s_1074_,s_1075,s_1075_,s_1076,s_1076_,q_1077,q_1077_,s_1078,s_1078_,q_1079,q_1079_,s_1080,s_1080_,q_1081,q_1081_,s_1082,s_1082_,q_1083,q_1083_,s_1084,s_1084_,s_1085,s_1085_,betweenstory_95,s_1086,s_1086_,s_1087,s_1087_,q_1088,q_1088_,s_1089,s_1089_,s_1090,s_1090_,q_1091,q_1091_,s_1092,s_1092_,s_1093,s_1093_,q_1094,q_1094_,s_1095,s_1095_,s_1096,s_1096_,betweenstory_96,s_1097,s_1097_,s_1098,s_1098_,s_1099,s_1099_,s_1100,s_1100_,q_1101,q_1101_,s_1102,s_1102_,q_1103,q_1103_,s_1104,s_1104_,s_1105,s_1105_,s_1106,s_1106_,betweenstory_97,s_1107,s_1107_,q_1108,q_1108_,s_1109,s_1109_,q_1110,q_1110_,s_1111,s_1111_,s_1112,s_1112_,s_1113,s_1113_,s_1114,s_1114_,q_1115,q_1115_,s_1116,s_1116_,s_1117,s_1117_,betweenstory_98,s_1118,s_1118_,q_1119,q_1119_,s_1120,s_1120_,s_1121,s_1121_,q_1122,q_1122_,s_1123,s_1123_,q_1124,q_1124_,s_1125,s_1125_,q_1126,q_1126_,s_1127,s_1127_,s_1128,s_1128_,s_1129,s_1129_,betweenstory_99,s_1130,s_1130_,s_1131,s_1131_,q_1132,q_1132_,s_1133,s_1133_,q_1134,q_1134_,s_1135,s_1135_,s_1136,s_1136_,s_1137,s_1137_,q_1138,q_1138_,s_1139,s_1139_,s_1140,s_1140_,betweenstory_100,comments],
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