// load psiturk
var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);

var MIN_QUESTION_ITI = 2500
var MIN_STORY_ITI = 800

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
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_2 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_2_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_3 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_3_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_4 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_4_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_5 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_5_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_6 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_6_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_7 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_7_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_1 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_8 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_8_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_9 = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_9_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_10 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_10_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_11 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_11_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_12 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_12_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_13 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_13_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_14 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_14_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_2 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_15 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_15_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_16 = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_16_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_17 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_17_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_18 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_18_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_19 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_19_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_20 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_20_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_21 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_21_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_3 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_22 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_22_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_23 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_23_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_24 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_24_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_25 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_25_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_26 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_26_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_27 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_27_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_28 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_28_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_4 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_29 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_29_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_30 = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_30_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_31 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_31_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_32 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_32_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_33 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_33_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_34 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_34_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_35 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_35_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_5 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_36 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_36_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_37 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_37_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_38 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_38_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_39 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_39_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_40 = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_40_ = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_41 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_41_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_42 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_42_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_6 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_43 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_43_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_44 = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_44_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_45 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_45_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_46 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_46_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_47 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_47_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_48 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_48_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_49 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_49_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_7 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_50 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_50_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_51 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_51_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_52 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_52_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_53 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_53_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_54 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_54_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_55 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_55_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_56 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_56_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_8 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_57 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_57_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_58 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_58_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_59 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "Before ordering, Alice <b>saw</b> <br> 'a real life zombie?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_59_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "Before ordering, Alice <b>saw</b> <br> 'a real life zombie?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_60 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_60_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_61 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'", "<b>Eventually</b> it happened, <br> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_61_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'", "<b>Eventually</b> it happened, <br> the panda's top hat did flatten."],
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
	var s_62 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_62_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_63 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_63_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_64 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_64_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_65 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_65_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_9 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_66 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_66_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_67 = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_67_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_68 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'", "After ordering, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_68_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'", "After ordering, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
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
	var s_69 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_69_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_70 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_70_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_71 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_71_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_72 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_72_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_73 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_73_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_74 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_74_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_10 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_75 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_75_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_76 = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_76_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_77 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_77_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_78 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'", "<b>Eventually</b> it happened, <br> it all became unclear."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_78_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'", "<b>Eventually</b> it happened, <br> it all became unclear."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_79 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_79_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_80 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Alice's <br><b>shaman-guru</b> yelling:", "and Alice recalled <b>her self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_80_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Alice's <br><b>shaman-guru</b> yelling:", "and Alice recalled <b>her self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "MEMORY",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_81 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_81_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_82 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_82_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_83 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_83_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_11 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_84 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_84_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_85 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice was <b>told</b> they had<br>skeletons in the basement.", "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_85_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice was <b>told</b> they had<br>skeletons in the basement.", "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here."],
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
	var s_86 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_86_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_87 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'", "Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_87_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'", "Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'"],
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
	var s_88 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_88_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_89 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_89_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_90 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Alice recalled <b>her self</b><br>saying in a low voice:", "which brought memories of Alice's <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_90_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Alice recalled <b>her self</b><br>saying in a low voice:", "which brought memories of Alice's <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_91 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_91_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_92 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_92_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_93 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_93_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_12 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_94 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_94_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_95 = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_95_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_96 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_96_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_97 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'", "<b>Eventually</b> it happened, <br> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_97_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'", "<b>Eventually</b> it happened, <br> the walls became geometric shapes."],
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
	var s_98 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_98_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_99 = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_99_ = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_100 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_100_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_101 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_101_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_102 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_102_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_13 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_103 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_103_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_104 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_104_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_105 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_105_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_106 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> it all became unclear.", "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_106_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> it all became unclear.", "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'"],
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
	var s_107 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_107_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_108 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Bill's <br><b>shaman-guru</b> yelling:", "which brought memories of Alice's <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_108_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Bill's <br><b>shaman-guru</b> yelling:", "which brought memories of Alice's <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "MEMORY",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_109 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_109_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_110 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_110_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_111 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_111_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_14 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
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
	var s_113 = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_113_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_114 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_114_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_115 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'", "<b>Eventually</b> it happened, <br> it all became unclear."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_115_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'", "<b>Eventually</b> it happened, <br> it all became unclear."],
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
	var s_116 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_116_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_117 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_117_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_118 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_118_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_119 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_119_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_15 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_120 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_120_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_121 = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_121_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_122 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_122_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_123 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_123_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_124 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_124_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_125 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_125_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_126 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_126_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_127 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_127_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_16 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_128 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_128_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_129 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_129_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_130 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_130_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_131 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> it all became unclear.", "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_131_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> it all became unclear.", "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'"],
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
	var s_132 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_132_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_133 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_133_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_134 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_134_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_135 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Alice <b>evaporate</b>. <br>", "That must have been <br>when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_135_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Alice <b>evaporate</b>. <br>", "That must have been <br>when Alice <b>transcended</b>."],
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
	var s_136 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_136_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_17 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_137 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_137_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_138 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.", "Alice was <b>told</b> they had<br>skeletons in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_138_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.", "Alice was <b>told</b> they had<br>skeletons in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_139 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_139_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_140 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'", "Before ordering, Alice <b>saw</b> <br> 'a real life zombie?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_140_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'", "Before ordering, Alice <b>saw</b> <br> 'a real life zombie?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_141 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_141_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_142 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'", "<b>Eventually</b> it happened, <br> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_142_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'", "<b>Eventually</b> it happened, <br> the panda's top hat did flatten."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_143 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_143_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_144 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_144_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_145 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_145_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_146 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_146_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_147 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when Alice <b>transcended</b>.", "That was when they saw <br>Alice <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_147_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when Alice <b>transcended</b>.", "That was when they saw <br>Alice <b>evaporate</b>. <br>"],
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
	var s_148 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_148_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_18 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_149 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_149_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_150 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_150_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_151 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_151_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_152 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> it all became unclear.", "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_152_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> it all became unclear.", "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_153 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_153_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_154 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_154_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_155 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_155_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "MEMORY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_156 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_156_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_157 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_157_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_19 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_158 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_158_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_159 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill was <b>told</b> they had<br>skeletons in the basement.", "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_159_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill was <b>told</b> they had<br>skeletons in the basement.", "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here."],
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
	var s_160 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_160_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_161 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'", "After ordering, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_161_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'", "After ordering, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
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
	var s_162 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_162_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_163 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_163_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_164 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_164_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_165 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_165_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_166 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_166_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_20 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_167 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_167_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_168 = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_168_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_169 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_169_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_170 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_170_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_171 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Alice recalled <b>her self</b><br>saying in a low voice:", "and Bill recalled <b>his self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_171_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Alice recalled <b>her self</b><br>saying in a low voice:", "and Bill recalled <b>his self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_172 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_172_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_173 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_173_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_174 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_174_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_21 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_175 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_175_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_176 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_176_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_177 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_177_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_178 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_178_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_179 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Bill's <br><b>shaman-guru</b> yelling:", "and Bill recalled <b>his self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_179_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Bill's <br><b>shaman-guru</b> yelling:", "and Bill recalled <b>his self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "MEMORY",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_180 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_180_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_181 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_181_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_182 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_182_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_22 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_183 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_183_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_184 = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_184_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_185 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_185_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_186 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'", "<b>Eventually</b> it happened, <br> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_186_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'", "<b>Eventually</b> it happened, <br> the walls became geometric shapes."],
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
	var s_187 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_187_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_188 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Bill recalled <b>his self</b><br>saying in a low voice:", "which brought memories of Bill's <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_188_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Bill recalled <b>his self</b><br>saying in a low voice:", "which brought memories of Bill's <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "MEMORY",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_189 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_189_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_190 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_190_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_191 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when Bill <b>transcended</b>.", "That was when they saw <br>Bill <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_191_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when Bill <b>transcended</b>.", "That was when they saw <br>Bill <b>evaporate</b>. <br>"],
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
	var s_192 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_192_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_23 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_193 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_193_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_194 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_194_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_195 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_195_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_196 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_196_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_197 = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_197_ = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
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
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_199 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_199_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_24 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_200 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_200_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_201 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.", "Alice was <b>told</b> they had<br>skeletons in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_201_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.", "Alice was <b>told</b> they had<br>skeletons in the basement."],
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
	var s_202 = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_202_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_203 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_203_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_204 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'", "<b>Eventually</b> it happened, <br> it all became unclear."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_204_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'", "<b>Eventually</b> it happened, <br> it all became unclear."],
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
	var s_205 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_205_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_206 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_206_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_207 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_207_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_208 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Alice <b>evaporate</b>. <br>", "That must have been <br>when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_208_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Alice <b>evaporate</b>. <br>", "That must have been <br>when Alice <b>transcended</b>."],
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
	var s_209 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_209_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_25 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_210 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_210_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_211 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_211_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_212 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_212_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_213 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_213_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_214 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_214_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_215 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_215_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_216 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Alice <b>evaporate</b>. <br>", "That must have been <br>when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_216_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Alice <b>evaporate</b>. <br>", "That must have been <br>when Alice <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_217 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_217_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_26 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_218 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_218_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_219 = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_219_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_220 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill <b>realized</b> <br>'The cat is not what it seems!'", "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_220_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill <b>realized</b> <br>'The cat is not what it seems!'", "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
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
	var s_221 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_221_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_222 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_222_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_223 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Bill's <br><b>shaman-guru</b> yelling:", "and Bill recalled <b>his self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_223_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Bill's <br><b>shaman-guru</b> yelling:", "and Bill recalled <b>his self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_224 = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_224_ = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_225 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_225_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_226 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_226_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_27 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_227 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_227_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_228 = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_228_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_229 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_229_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_230 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_230_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_231 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Bill recalled <b>his self</b><br>saying in a low voice:", "which brought memories of Bill's <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_231_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Bill recalled <b>his self</b><br>saying in a low voice:", "which brought memories of Bill's <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_232 = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_232_ = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_233 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_233_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_234 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_234_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_28 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_235 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_235_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_236 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> the 'muddy water'<br> was quite swell here.", "Alice was <b>told</b> they had<br>a dance party in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_236_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> the 'muddy water'<br> was quite swell here.", "Alice was <b>told</b> they had<br>a dance party in the basement."],
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
	var s_237 = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_237_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_238 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_238_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_239 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> the walls became geometric shapes.", "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_239_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> the walls became geometric shapes.", "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_240 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_240_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_241 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Alice recalled <b>her self</b><br>saying in a low voice:", "which brought memories of Alice's <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_241_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Alice recalled <b>her self</b><br>saying in a low voice:", "which brought memories of Alice's <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_242 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_242_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_243 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_243_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_244 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_244_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_245 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when Alice <b>transcended</b>.", "That was when they saw <br>Alice <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_245_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when Alice <b>transcended</b>.", "That was when they saw <br>Alice <b>evaporate</b>. <br>"],
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
	var s_246 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_246_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_29 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_247 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_247_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_248 = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_248_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_249 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_249_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_250 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> the panda's top hat did flatten.", "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_250_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> the panda's top hat did flatten.", "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'"],
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
	var s_251 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_251_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_252 = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_252_ = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_253 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_253_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_254 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_254_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_30 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_255 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_255_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_256 = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_256_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_257 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_257_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_258 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_258_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_259 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Alice's <br><b>shaman-guru</b> yelling:", "and Alice recalled <b>her self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_259_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Alice's <br><b>shaman-guru</b> yelling:", "and Alice recalled <b>her self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "MEMORY",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_260 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_260_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_261 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_261_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_262 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Alice <b>evaporate</b>. <br>", "That must have been <br>when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_262_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Alice <b>evaporate</b>. <br>", "That must have been <br>when Alice <b>transcended</b>."],
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
	var s_263 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_263_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_31 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_264 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_264_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_265 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_265_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_266 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_266_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_267 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'", "<b>Eventually</b> it happened, <br> it all became unclear."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_267_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'", "<b>Eventually</b> it happened, <br> it all became unclear."],
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
	var s_268 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_268_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_269 = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_269_ = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_270 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_270_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_271 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Bill <b>evaporate</b>. <br>", "That must have been <br>when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_271_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Bill <b>evaporate</b>. <br>", "That must have been <br>when Bill <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_272 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_272_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_32 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_273 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_273_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_274 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.", "Bill was <b>told</b> they had<br>a dance party in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_274_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.", "Bill was <b>told</b> they had<br>a dance party in the basement."],
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
	var s_275 = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_275_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_276 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_276_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_277 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_277_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_278 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Alice recalled <b>her self</b><br>saying in a low voice:", "and Bill recalled <b>his self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_278_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Alice recalled <b>her self</b><br>saying in a low voice:", "and Bill recalled <b>his self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "RECALL",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_279 = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_279_ = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_280 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_280_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_281 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Bill <b>evaporate</b>. <br>", "That must have been <br>when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_281_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Bill <b>evaporate</b>. <br>", "That must have been <br>when Bill <b>transcended</b>."],
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
	var s_282 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_282_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_33 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_283 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_283_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_284 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.", "Bill was <b>told</b> they had<br>skeletons in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_284_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.", "Bill was <b>told</b> they had<br>skeletons in the basement."],
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
	var s_285 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_285_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_286 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill <b>saw</b> <br> 'a real life zombie?'", "After ordering, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_286_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill <b>saw</b> <br> 'a real life zombie?'", "After ordering, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
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
	var s_287 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_287_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_288 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_288_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_289 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Bill's <br><b>shaman-guru</b> yelling:", "which brought memories of Alice's <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_289_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Bill's <br><b>shaman-guru</b> yelling:", "which brought memories of Alice's <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "MEMORY",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_290 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_290_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_291 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_291_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_292 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_292_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_34 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_293 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_293_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_294 = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_294_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_295 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_295_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_296 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_296_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_297 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Bill recalled <b>his self</b><br>saying in a low voice:", "and Alice recalled <b>her self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_297_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Bill recalled <b>his self</b><br>saying in a low voice:", "and Alice recalled <b>her self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_298 = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_298_ = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_299 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_299_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_300 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_300_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_301 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_301_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_35 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_302 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_302_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_303 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> the 'muddy water'<br> was quite swell here.", "Alice was <b>told</b> they had<br>a dance party in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_303_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> the 'muddy water'<br> was quite swell here.", "Alice was <b>told</b> they had<br>a dance party in the basement."],
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
	var s_304 = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_304_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_305 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "After ordering, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_305_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "After ordering, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
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
	var s_306 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_306_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_307 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'", "<b>Eventually</b> it happened, <br> it all became unclear."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_307_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'", "<b>Eventually</b> it happened, <br> it all became unclear."],
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
	var s_308 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_308_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_309 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Alice recalled <b>her self</b><br>saying in a low voice:", "which brought memories of Alice's <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_309_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Alice recalled <b>her self</b><br>saying in a low voice:", "which brought memories of Alice's <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_310 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_310_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_311 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_311_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_312 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_312_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_313 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_313_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_36 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_314 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_314_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_315 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill was <b>told</b> they had<br>skeletons in the basement.", "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_315_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill was <b>told</b> they had<br>skeletons in the basement.", "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here."],
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
	var s_316 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_316_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_317 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_317_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_318 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_318_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_319 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Bill recalled <b>his self</b><br>saying in a low voice:", "which brought memories of Bill's <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_319_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Bill recalled <b>his self</b><br>saying in a low voice:", "which brought memories of Bill's <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "MEMORY",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_320 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_320_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_321 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_321_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_322 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_322_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_37 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_323 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_323_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_324 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_324_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_325 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_325_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_326 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_326_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_327 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Alice recalled <b>her self</b><br>saying in a low voice:", "which brought memories of Alice's <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_327_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Alice recalled <b>her self</b><br>saying in a low voice:", "which brought memories of Alice's <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "MEMORY",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_328 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_328_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_329 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_329_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_330 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_330_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_38 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_331 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_331_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_332 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_332_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_333 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_333_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_334 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_334_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_335 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_335_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_336 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_336_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_337 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_337_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_39 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_338 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_338_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_339 = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_339_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_340 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'", "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_340_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'", "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
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
	var s_341 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_341_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_342 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_342_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_343 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Bill's <br><b>shaman-guru</b> yelling:", "and Bill recalled <b>his self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_343_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Bill's <br><b>shaman-guru</b> yelling:", "and Bill recalled <b>his self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "MEMORY",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_344 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_344_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_345 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_345_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_346 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when Bill <b>transcended</b>.", "That was when they saw <br>Bill <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_346_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when Bill <b>transcended</b>.", "That was when they saw <br>Bill <b>evaporate</b>. <br>"],
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
	var s_347 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_347_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_40 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_348 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_348_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_349 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_349_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_350 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_350_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_351 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_351_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_352 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Alice recalled <b>her self</b><br>saying in a low voice:", "and Bill recalled <b>his self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_352_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Alice recalled <b>her self</b><br>saying in a low voice:", "and Bill recalled <b>his self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "RECALL",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_353 = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_353_ = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_354 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_354_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_355 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_355_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_41 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_356 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_356_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_357 = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_357_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_358 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_358_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_359 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> the walls became geometric shapes.", "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_359_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> the walls became geometric shapes.", "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'"],
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
	var s_360 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_360_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_361 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Alice's <br><b>shaman-guru</b> yelling:", "and Alice recalled <b>her self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_361_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Alice's <br><b>shaman-guru</b> yelling:", "and Alice recalled <b>her self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_362 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_362_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_363 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_363_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_364 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_364_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_365 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_365_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_42 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_366 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_366_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_367 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice was <b>told</b> they had<br>skeletons in the basement.", "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_367_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice was <b>told</b> they had<br>skeletons in the basement.", "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here."],
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
	var s_368 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_368_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_369 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_369_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_370 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_370_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_371 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_371_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_372 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_372_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_373 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_373_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_43 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_374 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_374_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_375 = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_375_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_376 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill <b>realized</b> <br>'Maybe in the library!'", "Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_376_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill <b>realized</b> <br>'Maybe in the library!'", "Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'"],
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
	var s_377 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_377_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_378 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'", "<b>Eventually</b> it happened, <br> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_378_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'", "<b>Eventually</b> it happened, <br> the panda's top hat did flatten."],
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
	var s_379 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_379_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_380 = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_380_ = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_381 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_381_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_382 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_382_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_383 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when Bill <b>transcended</b>.", "That was when they saw <br>Bill <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_383_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when Bill <b>transcended</b>.", "That was when they saw <br>Bill <b>evaporate</b>. <br>"],
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
	var s_384 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_384_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_44 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_385 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_385_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_386 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_386_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_387 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_387_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_388 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_388_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_389 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Bill recalled <b>his self</b><br>saying in a low voice:", "and Alice recalled <b>her self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_389_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Bill recalled <b>his self</b><br>saying in a low voice:", "and Alice recalled <b>her self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_390 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_390_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_391 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_391_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_392 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_392_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_45 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_393 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_393_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_394 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_394_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_395 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_395_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_396 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> it all became unclear.", "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_396_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> it all became unclear.", "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'"],
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
	var s_397 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_397_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_398 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_398_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_399 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_399_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_400 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_400_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_46 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_401 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_401_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_402 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_402_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_403 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_403_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_404 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_404_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_405 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Alice's <br><b>shaman-guru</b> yelling:", "and Alice recalled <b>her self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_405_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Alice's <br><b>shaman-guru</b> yelling:", "and Alice recalled <b>her self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "MEMORY",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_406 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_406_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_407 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_407_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_408 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_408_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_47 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_409 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_409_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_410 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill was <b>told</b> they had<br>a dance party in the basement.", "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_410_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill was <b>told</b> they had<br>a dance party in the basement.", "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here."],
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
	var s_411 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_411_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_412 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_412_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_413 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_413_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_414 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_414_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_415 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_415_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_416 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_416_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_48 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_417 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_417_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_418 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_418_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_419 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_419_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_420 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_420_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_421 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Alice recalled <b>her self</b><br>saying in a low voice:", "which brought memories of Alice's <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_421_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Alice recalled <b>her self</b><br>saying in a low voice:", "which brought memories of Alice's <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_422 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_422_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_423 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_423_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_424 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Alice <b>evaporate</b>. <br>", "That must have been <br>when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_424_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Alice <b>evaporate</b>. <br>", "That must have been <br>when Alice <b>transcended</b>."],
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
	var s_425 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_425_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_49 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_426 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_426_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_427 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_427_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_428 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice <b>realized</b> <br>'Maybe in the library!'", "Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_428_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice <b>realized</b> <br>'Maybe in the library!'", "Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_429 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_429_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_430 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_430_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_431 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_431_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_432 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_432_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_433 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_433_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_434 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_434_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_50 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_435 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_435_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_436 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill was <b>told</b> they had<br>skeletons in the basement.", "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_436_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill was <b>told</b> they had<br>skeletons in the basement.", "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here."],
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
	var s_437 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_437_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_438 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill <b>realized</b> <br>'Maybe in the library!'", "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_438_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill <b>realized</b> <br>'Maybe in the library!'", "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
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
	var s_439 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_439_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_440 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_440_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_441 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_441_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_442 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_442_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_443 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_443_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_51 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_444 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_444_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_445 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.", "Alice was <b>told</b> they had<br>skeletons in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_445_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.", "Alice was <b>told</b> they had<br>skeletons in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_446 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_446_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_447 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill <b>realized</b> <br>'Maybe in the library!'", "After ordering, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_447_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill <b>realized</b> <br>'Maybe in the library!'", "After ordering, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_448 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_448_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_449 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_449_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_450 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_450_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_451 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_451_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_452 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Alice <b>evaporate</b>. <br>", "That must have been <br>when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_452_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Alice <b>evaporate</b>. <br>", "That must have been <br>when Alice <b>transcended</b>."],
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
	var s_453 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_453_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_52 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_454 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_454_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_455 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_455_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_456 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice <b>realized</b> <br>'Maybe in the library!'", "Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_456_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice <b>realized</b> <br>'Maybe in the library!'", "Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_457 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_457_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_458 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_458_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_459 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_459_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_460 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_460_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_461 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Alice <b>evaporate</b>. <br>", "That must have been <br>when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_461_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Alice <b>evaporate</b>. <br>", "That must have been <br>when Alice <b>transcended</b>."],
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
	var s_462 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_462_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_53 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_463 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_463_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_464 = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_464_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_465 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice <b>saw</b> <br> 'a real life zombie?'", "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_465_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice <b>saw</b> <br> 'a real life zombie?'", "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'"],
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
	var s_466 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_466_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_467 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_467_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_468 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Alice recalled <b>her self</b><br>saying in a low voice:", "which brought memories of Alice's <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_468_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Alice recalled <b>her self</b><br>saying in a low voice:", "which brought memories of Alice's <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_469 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_469_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_470 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_470_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_471 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_471_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_472 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_472_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_54 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_473 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_473_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_474 = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_474_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_475 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill <b>realized</b> <br>'Maybe in the library!'", "Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_475_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill <b>realized</b> <br>'Maybe in the library!'", "Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'"],
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
	var s_476 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_476_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_477 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_477_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_478 = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_478_ = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_479 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_479_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_480 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Bill <b>evaporate</b>. <br>", "That must have been <br>when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_480_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Bill <b>evaporate</b>. <br>", "That must have been <br>when Bill <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_481 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_481_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_55 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_482 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_482_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_483 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_483_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_484 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_484_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_485 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> it all became unclear.", "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_485_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> it all became unclear.", "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_486 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_486_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_487 = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_487_ = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_488 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_488_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_489 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when Bill <b>transcended</b>.", "That was when they saw <br>Bill <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_489_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when Bill <b>transcended</b>.", "That was when they saw <br>Bill <b>evaporate</b>. <br>"],
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
	var s_490 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_490_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_56 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_491 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_491_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_492 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_492_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_493 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_493_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_494 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_494_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_495 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Alice recalled <b>her self</b><br>saying in a low voice:", "which brought memories of Alice's <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_495_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Alice recalled <b>her self</b><br>saying in a low voice:", "which brought memories of Alice's <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_496 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_496_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_497 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_497_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_498 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_498_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_499 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_499_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_57 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_500 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_500_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_501 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill was <b>told</b> they had<br>a dance party in the basement.", "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_501_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill was <b>told</b> they had<br>a dance party in the basement.", "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here."],
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
	var s_502 = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_502_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_503 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_503_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_504 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_504_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_505 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_505_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_506 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_506_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "MEMORY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_507 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_507_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_508 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when Bill <b>transcended</b>.", "That must have been <br>when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_508_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when Bill <b>transcended</b>.", "That must have been <br>when Alice <b>transcended</b>."],
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
	var s_509 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_509_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_58 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_510 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_510_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_511 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_511_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_512 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_512_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_513 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_513_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_514 = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_514_ = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_515 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_515_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_516 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_516_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_59 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_517 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_517_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_518 = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_518_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_519 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_519_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_520 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_520_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_521 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_521_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_522 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Bill's <br><b>shaman-guru</b> yelling:", "which brought memories of Alice's <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_522_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Bill's <br><b>shaman-guru</b> yelling:", "which brought memories of Alice's <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "MEMORY",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_523 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_523_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_524 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_524_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_525 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_525_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_60 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_526 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_526_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_527 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_527_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_528 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_528_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_529 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_529_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_530 = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_530_ = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_531 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_531_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_532 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_532_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_61 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_533 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_533_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_534 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.", "Alice was <b>told</b> they had<br>skeletons in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_534_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.", "Alice was <b>told</b> they had<br>skeletons in the basement."],
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
	var s_535 = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_535_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_536 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'", "Before ordering, Alice <b>saw</b> <br> 'a real life zombie?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_536_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'", "Before ordering, Alice <b>saw</b> <br> 'a real life zombie?'"],
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
	var s_537 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_537_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_538 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_538_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_539 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_539_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_540 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_540_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_541 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Alice <b>evaporate</b>. <br>", "That was when they saw <br>Bill <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_541_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Alice <b>evaporate</b>. <br>", "That was when they saw <br>Bill <b>evaporate</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_542 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_542_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_62 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_543 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_543_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_544 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill was <b>told</b> they had<br>a dance party in the basement.", "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_544_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill was <b>told</b> they had<br>a dance party in the basement.", "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here."],
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
	var s_545 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_545_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_546 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_546_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_547 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'", "<b>Eventually</b> it happened, <br> it all became unclear."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_547_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'", "<b>Eventually</b> it happened, <br> it all became unclear."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_548 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_548_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_549 = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_549_ = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_550 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_550_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_551 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_551_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_63 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_552 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_552_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_553 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.", "Alice was <b>told</b> they had<br>skeletons in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_553_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.", "Alice was <b>told</b> they had<br>skeletons in the basement."],
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
	var s_554 = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_554_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_555 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_555_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_556 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_556_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_557 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_557_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_558 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_558_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_559 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when Alice <b>transcended</b>.", "That was when they saw <br>Alice <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_559_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when Alice <b>transcended</b>.", "That was when they saw <br>Alice <b>evaporate</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_560 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_560_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_64 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_561 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_561_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_562 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill was <b>told</b> they had<br>a dance party in the basement.", "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_562_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill was <b>told</b> they had<br>a dance party in the basement.", "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here."],
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
	var s_563 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_563_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_564 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_564_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_565 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'", "<b>Eventually</b> it happened, <br> it all became unclear."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_565_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'", "<b>Eventually</b> it happened, <br> it all became unclear."],
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
	var s_566 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_566_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_567 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_567_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_568 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_568_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_569 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_569_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_65 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_570 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_570_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_571 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> the 'muddy water'<br> was quite swell here.", "Alice was <b>told</b> they had<br>a dance party in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_571_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> the 'muddy water'<br> was quite swell here.", "Alice was <b>told</b> they had<br>a dance party in the basement."],
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
	var s_572 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_572_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_573 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_573_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_574 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_574_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_575 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_575_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_576 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_576_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "MEMORY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_577 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_577_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_578 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when Alice <b>transcended</b>.", "That was when they saw <br>Alice <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_578_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when Alice <b>transcended</b>.", "That was when they saw <br>Alice <b>evaporate</b>. <br>"],
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
	var s_579 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_579_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_66 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_580 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_580_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_581 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_581_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_582 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill <b>realized</b> <br>'Maybe in the library!'", "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_582_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill <b>realized</b> <br>'Maybe in the library!'", "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_583 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_583_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_584 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_584_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_585 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_585_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_586 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_586_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_587 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_587_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_67 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_588 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_588_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_589 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_589_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_590 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_590_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_591 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'", "<b>Eventually</b> it happened, <br> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_591_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'", "<b>Eventually</b> it happened, <br> the panda's top hat did flatten."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_592 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_592_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_593 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Alice's <br><b>shaman-guru</b> yelling:", "and Alice recalled <b>her self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_593_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Alice's <br><b>shaman-guru</b> yelling:", "and Alice recalled <b>her self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_594 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_594_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_595 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_595_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_596 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_596_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_597 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_597_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_68 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_598 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_598_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_599 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_599_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_600 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "After ordering, Bill <b>realized</b> <br>'The cat is not what it seems!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_600_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "After ordering, Bill <b>realized</b> <br>'The cat is not what it seems!'"],
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
	var s_601 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_601_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_602 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> the walls became geometric shapes.", "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_602_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> the walls became geometric shapes.", "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_603 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_603_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_604 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_604_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_605 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_605_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_606 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_606_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_69 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_607 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_607_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_608 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_608_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_609 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_609_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_610 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_610_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_611 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_611_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_612 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_612_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "MEMORY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_613 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_613_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_614 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_614_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_70 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_615 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_615_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_616 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_616_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_617 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'", "After ordering, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_617_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'", "After ordering, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
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
	var s_618 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_618_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_619 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> the panda's top hat did flatten.", "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_619_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> the panda's top hat did flatten.", "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'"],
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
	var s_620 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_620_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_621 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Bill's <br><b>shaman-guru</b> yelling:", "which brought memories of Alice's <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_621_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Bill's <br><b>shaman-guru</b> yelling:", "which brought memories of Alice's <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "MEMORY",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_622 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_622_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_623 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_623_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_624 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when Alice <b>transcended</b>.", "That must have been <br>when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_624_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when Alice <b>transcended</b>.", "That must have been <br>when Bill <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_625 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_625_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_71 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_626 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_626_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_627 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_627_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_628 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_628_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_629 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_629_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_630 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_630_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_631 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_631_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_632 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_632_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_72 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_633 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_633_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_634 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_634_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_635 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_635_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_636 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_636_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_637 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_637_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_638 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_638_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_639 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Alice <b>evaporate</b>. <br>", "That must have been <br>when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_639_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Alice <b>evaporate</b>. <br>", "That must have been <br>when Alice <b>transcended</b>."],
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
	var s_640 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_640_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_73 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_641 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_641_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_642 = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_642_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_643 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill <b>realized</b> <br>'The cat is not what it seems!'", "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_643_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill <b>realized</b> <br>'The cat is not what it seems!'", "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'"],
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
	var s_644 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_644_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_645 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> the panda's top hat did flatten.", "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_645_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> the panda's top hat did flatten.", "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'"],
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
	var s_646 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_646_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_647 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Alice's <br><b>shaman-guru</b> yelling:", "and Alice recalled <b>her self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_647_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Alice's <br><b>shaman-guru</b> yelling:", "and Alice recalled <b>her self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_648 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_648_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_649 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_649_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_650 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_650_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_74 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_651 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_651_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_652 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_652_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_653 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'", "After ordering, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_653_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'", "After ordering, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_654 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_654_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_655 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_655_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_656 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Alice recalled <b>her self</b><br>saying in a low voice:", "which brought memories of Alice's <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_656_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Alice recalled <b>her self</b><br>saying in a low voice:", "which brought memories of Alice's <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_657 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_657_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_658 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'", "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_658_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'", "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_659 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_659_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_660 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_660_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_75 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_661 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_661_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_662 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_662_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_663 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_663_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_664 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'", "<b>Eventually</b> it happened, <br> it all became unclear."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_664_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'", "<b>Eventually</b> it happened, <br> it all became unclear."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_665 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_665_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_666 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_666_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_667 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_667_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_668 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when Alice <b>transcended</b>.", "That was when they saw <br>Alice <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_668_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when Alice <b>transcended</b>.", "That was when they saw <br>Alice <b>evaporate</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_669 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_669_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_76 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_670 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_670_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_671 = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_671_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_672 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_672_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_673 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_673_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_674 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Alice's <br><b>shaman-guru</b> yelling:", "and Alice recalled <b>her self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_674_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Alice's <br><b>shaman-guru</b> yelling:", "and Alice recalled <b>her self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "MEMORY",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_675 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_675_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_676 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_676_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_677 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_677_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_77 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_678 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_678_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_679 = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_679_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_680 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_680_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_681 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_681_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_682 = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_682_ = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_683 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_683_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_684 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Bill <b>evaporate</b>. <br>", "That must have been <br>when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_684_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Bill <b>evaporate</b>. <br>", "That must have been <br>when Bill <b>transcended</b>."],
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
	var s_685 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_685_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_78 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_686 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_686_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_687 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_687_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_688 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'", "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_688_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'", "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_689 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_689_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_690 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_690_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_691 = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_691_ = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_692 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_692_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_693 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_693_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_79 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_694 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_694_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_695 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_695_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_696 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_696_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_697 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_697_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_698 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_698_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_699 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_699_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_700 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Bill <b>evaporate</b>. <br>", "That must have been <br>when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_700_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Bill <b>evaporate</b>. <br>", "That must have been <br>when Bill <b>transcended</b>."],
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
	var s_701 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_701_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_80 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_702 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_702_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_703 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_703_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_704 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_704_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_705 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'", "<b>Eventually</b> it happened, <br> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_705_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'", "<b>Eventually</b> it happened, <br> the walls became geometric shapes."],
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
	var s_706 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_706_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_707 = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_707_ = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_708 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_708_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_709 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_709_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_710 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_710_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_81 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_711 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_711_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_712 = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_712_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_713 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice <b>saw</b> <br> 'a real life zombie?'", "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_713_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice <b>saw</b> <br> 'a real life zombie?'", "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'"],
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
	var s_714 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_714_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_715 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_715_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_716 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_716_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_717 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_717_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_718 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Alice <b>evaporate</b>. <br>", "That was when they saw <br>Bill <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_718_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Alice <b>evaporate</b>. <br>", "That was when they saw <br>Bill <b>evaporate</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_719 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_719_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_82 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_720 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_720_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_721 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.", "Alice was <b>told</b> they had<br>a dance party in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_721_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.", "Alice was <b>told</b> they had<br>a dance party in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_722 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_722_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_723 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_723_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_724 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_724_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_725 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_725_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_726 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_726_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_727 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_727_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_83 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_728 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_728_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_729 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_729_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_730 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_730_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_731 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_731_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_732 = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_732_ = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_733 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_733_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_734 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_734_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_735 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Alice <b>evaporate</b>. <br>", "That was when they saw <br>Bill <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_735_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Alice <b>evaporate</b>. <br>", "That was when they saw <br>Bill <b>evaporate</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_736 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_736_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_84 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_737 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_737_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_738 = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_738_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_739 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill <b>realized</b> <br>'The cat is not what it seems!'", "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_739_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill <b>realized</b> <br>'The cat is not what it seems!'", "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
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
	var s_740 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_740_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_741 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_741_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_742 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Bill recalled <b>his self</b><br>saying in a low voice:", "which brought memories of Bill's <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_742_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Bill recalled <b>his self</b><br>saying in a low voice:", "which brought memories of Bill's <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "MEMORY",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_743 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_743_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_744 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_744_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_745 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Bill <b>evaporate</b>. <br>", "That must have been <br>when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_745_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Bill <b>evaporate</b>. <br>", "That must have been <br>when Bill <b>transcended</b>."],
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
	var s_746 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_746_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_85 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_747 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_747_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_748 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_748_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_749 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_749_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_750 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_750_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_751 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Bill's <br><b>shaman-guru</b> yelling:", "which brought memories of Alice's <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_751_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Bill's <br><b>shaman-guru</b> yelling:", "which brought memories of Alice's <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "MEMORY",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_752 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_752_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_753 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_753_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_754 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_754_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_86 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_755 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_755_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_756 = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_756_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_757 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_757_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_758 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_758_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_759 = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_759_ = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_760 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_760_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_761 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_761_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_762 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_762_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_87 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_763 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_763_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_764 = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_764_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_765 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'", "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_765_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'", "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'"],
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
	var s_766 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_766_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_767 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_767_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_768 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Bill recalled <b>his self</b><br>saying in a low voice:", "which brought memories of Bill's <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_768_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Bill recalled <b>his self</b><br>saying in a low voice:", "which brought memories of Bill's <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_769 = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_769_ = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_770 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_770_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_771 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_771_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_772 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Alice <b>evaporate</b>. <br>", "That was when they saw <br>Bill <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_772_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Alice <b>evaporate</b>. <br>", "That was when they saw <br>Bill <b>evaporate</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_773 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_773_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_88 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_774 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_774_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_775 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_775_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_776 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'", "Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_776_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'", "Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'"],
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
	var s_777 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_777_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_778 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_778_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_779 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Alice recalled <b>her self</b><br>saying in a low voice:", "and Bill recalled <b>his self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_779_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Alice recalled <b>her self</b><br>saying in a low voice:", "and Bill recalled <b>his self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_780 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_780_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_781 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_781_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_782 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_782_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_783 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_783_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_89 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_784 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_784_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_785 = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_785_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_786 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_786_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_787 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_787_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_788 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Alice's <br><b>shaman-guru</b> yelling:", "and Alice recalled <b>her self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_788_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Alice's <br><b>shaman-guru</b> yelling:", "and Alice recalled <b>her self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "MEMORY",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_789 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_789_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_790 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_790_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_791 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_791_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_90 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_792 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_792_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_793 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_793_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_794 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill <b>realized</b> <br>'Maybe in the library!'", "Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_794_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill <b>realized</b> <br>'Maybe in the library!'", "Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_795 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_795_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_796 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_796_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_797 = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_797_ = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_798 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_798_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_799 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Bill <b>evaporate</b>. <br>", "That was when they saw <br>Alice <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_799_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Bill <b>evaporate</b>. <br>", "That was when they saw <br>Alice <b>evaporate</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_800 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_800_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_91 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_801 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_801_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_802 = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_802_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_803 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'", "After ordering, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_803_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'", "After ordering, Alice <b>realized</b> <br>'Maybe in the library!'"],
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
	var s_804 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_804_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Alice <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_805 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_805_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_806 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_806_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Alice's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_807 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_807_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_808 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when Bill <b>transcended</b>.", "That must have been <br>when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_808_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when Bill <b>transcended</b>.", "That must have been <br>when Alice <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_809 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_809_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_92 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_810 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_810_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_811 = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_811_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_812 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_812_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'"],
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
	var s_813 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_813_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_814 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_814_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_815 = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_815_ = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_816 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_816_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_817 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_817_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_93 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_818 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_818_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_819 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice was <b>told</b> they had<br>a dance party in the basement.", "Alice <b>knew!</b> the 'muddy water'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_819_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice was <b>told</b> they had<br>a dance party in the basement.", "Alice <b>knew!</b> the 'muddy water'<br> was quite swell here."],
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
	var s_820 = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_820_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_821 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_821_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'"],
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
	var s_822 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_822_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_823 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'", "<b>Eventually</b> it happened, <br> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_823_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'", "<b>Eventually</b> it happened, <br> the panda's top hat did flatten."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_824 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_824_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_825 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_825_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_826 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'", "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_826_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'", "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_827 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_827_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_828 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Alice <b>evaporate</b>. <br>", "That must have been <br>when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_828_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Alice <b>evaporate</b>. <br>", "That must have been <br>when Alice <b>transcended</b>."],
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
	var s_829 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_829_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_94 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_830 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_830_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_831 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_831_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_832 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'", "After ordering, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_832_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill <b>saw</b> <br> 'that the mirrors are labyrinths?'", "After ordering, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_833 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_833_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_834 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_834_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_835 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Bill's <br><b>shaman-guru</b> yelling:", "and Bill recalled <b>his self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_835_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of Bill's <br><b>shaman-guru</b> yelling:", "and Bill recalled <b>his self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_836 = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_836_ = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_837 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'", "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_837_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'", "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_838 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_838_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_839 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_839_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_95 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_840 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_840_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_841 = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_841_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_842 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_842_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_843 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_843_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_844 = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_844_ = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_845 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_845_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_846 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_846_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_847 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_847_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_96 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_848 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_848_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_849 = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_849_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_850 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill <b>saw</b> <br> 'a real life zombie?'", "Before ordering, Alice <b>saw</b> <br> 'a real life zombie?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_850_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill <b>saw</b> <br> 'a real life zombie?'", "Before ordering, Alice <b>saw</b> <br> 'a real life zombie?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_851 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_851_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_852 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_852_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_853 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_853_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of Bill's <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_854 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_854_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "MEMORY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_855 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_855_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_856 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Alice <b>evaporate</b>. <br>", "That was when they saw <br>Bill <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_856_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Alice <b>evaporate</b>. <br>", "That was when they saw <br>Bill <b>evaporate</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_857 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_857_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_97 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_858 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_858_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_859 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_859_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_860 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_860_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, Bill <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_861 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_861_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_862 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Bill recalled <b>his self</b><br>saying in a low voice:", "which brought memories of Bill's <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_862_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Bill recalled <b>his self</b><br>saying in a low voice:", "which brought memories of Bill's <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_863 = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_863_ = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_864 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_864_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_865 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_865_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_98 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
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
		labels: ["Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.", "Bill was <b>told</b> they had<br>skeletons in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_867_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.", "Bill was <b>told</b> they had<br>skeletons in the basement."],
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
	var s_868 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_868_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_869 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "After ordering, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_869_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "After ordering, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_870 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_870_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_871 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_871_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_872 = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_872_ = {
		type: "html-keyboard-response",
		stimulus: "and Bill recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_873 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_873_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_874 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_874_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_875 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Bill <b>evaporate</b>. <br>", "That must have been <br>when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_875_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br>Bill <b>evaporate</b>. <br>", "That must have been <br>when Bill <b>transcended</b>."],
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
	var s_876 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_876_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Bill <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_99 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_877 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_877_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_878 = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_878_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_879 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_879_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_880 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_880_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_881 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Alice recalled <b>her self</b><br>saying in a low voice:", "which brought memories of Alice's <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_881_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and Alice recalled <b>her self</b><br>saying in a low voice:", "which brought memories of Alice's <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_882 = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_882_ = {
		type: "html-keyboard-response",
		stimulus: "and Alice recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_883 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_883_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_884 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_884_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br>Alice <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_100 = {
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
  timeline: [intro_instructions,intro_instructions2,s_1,s_1_,s_2,s_2_,s_3,s_3_,s_4,s_4_,s_5,s_5_,s_6,s_6_,s_7,s_7_,betweenstory_1,s_8,s_8_,s_9,s_9_,s_10,s_10_,s_11,s_11_,s_12,s_12_,s_13,s_13_,s_14,s_14_,betweenstory_2,s_15,s_15_,s_16,s_16_,s_17,s_17_,s_18,s_18_,s_19,s_19_,s_20,s_20_,s_21,s_21_,betweenstory_3,s_22,s_22_,s_23,s_23_,s_24,s_24_,s_25,s_25_,s_26,s_26_,s_27,s_27_,s_28,s_28_,betweenstory_4,s_29,s_29_,s_30,s_30_,s_31,s_31_,s_32,s_32_,s_33,s_33_,s_34,s_34_,s_35,s_35_,betweenstory_5,s_36,s_36_,s_37,s_37_,s_38,s_38_,s_39,s_39_,s_40,s_40_,s_41,s_41_,s_42,s_42_,betweenstory_6,s_43,s_43_,s_44,s_44_,s_45,s_45_,s_46,s_46_,s_47,s_47_,s_48,s_48_,s_49,s_49_,betweenstory_7,s_50,s_50_,s_51,s_51_,s_52,s_52_,s_53,s_53_,s_54,s_54_,s_55,s_55_,s_56,s_56_,betweenstory_8,s_57,s_57_,s_58,s_58_,q_59,q_59_,s_60,s_60_,q_61,q_61_,s_62,s_62_,s_63,s_63_,s_64,s_64_,s_65,s_65_,betweenstory_9,s_66,s_66_,s_67,s_67_,q_68,q_68_,s_69,s_69_,s_70,s_70_,s_71,s_71_,q_72,q_72_,s_73,s_73_,s_74,s_74_,betweenstory_10,s_75,s_75_,s_76,s_76_,s_77,s_77_,q_78,q_78_,s_79,s_79_,q_80,q_80_,s_81,s_81_,s_82,s_82_,s_83,s_83_,betweenstory_11,s_84,s_84_,q_85,q_85_,s_86,s_86_,q_87,q_87_,s_88,s_88_,s_89,s_89_,q_90,q_90_,s_91,s_91_,s_92,s_92_,s_93,s_93_,betweenstory_12,s_94,s_94_,s_95,s_95_,s_96,s_96_,q_97,q_97_,s_98,s_98_,s_99,s_99_,q_100,q_100_,s_101,s_101_,s_102,s_102_,betweenstory_13,s_103,s_103_,s_104,s_104_,s_105,s_105_,q_106,q_106_,s_107,s_107_,q_108,q_108_,s_109,s_109_,s_110,s_110_,s_111,s_111_,betweenstory_14,s_112,s_112_,s_113,s_113_,s_114,s_114_,q_115,q_115_,s_116,s_116_,s_117,s_117_,s_118,s_118_,s_119,s_119_,betweenstory_15,s_120,s_120_,s_121,s_121_,q_122,q_122_,s_123,s_123_,s_124,s_124_,s_125,s_125_,s_126,s_126_,s_127,s_127_,betweenstory_16,s_128,s_128_,s_129,s_129_,s_130,s_130_,q_131,q_131_,s_132,s_132_,s_133,s_133_,s_134,s_134_,q_135,q_135_,s_136,s_136_,betweenstory_17,s_137,s_137_,q_138,q_138_,s_139,s_139_,q_140,q_140_,s_141,s_141_,q_142,q_142_,s_143,s_143_,s_144,s_144_,q_145,q_145_,s_146,s_146_,q_147,q_147_,s_148,s_148_,betweenstory_18,s_149,s_149_,s_150,s_150_,s_151,s_151_,q_152,q_152_,s_153,s_153_,s_154,s_154_,q_155,q_155_,s_156,s_156_,s_157,s_157_,betweenstory_19,s_158,s_158_,q_159,q_159_,s_160,s_160_,q_161,q_161_,s_162,s_162_,s_163,s_163_,s_164,s_164_,s_165,s_165_,s_166,s_166_,betweenstory_20,s_167,s_167_,s_168,s_168_,s_169,s_169_,s_170,s_170_,q_171,q_171_,s_172,s_172_,s_173,s_173_,s_174,s_174_,betweenstory_21,s_175,s_175_,s_176,s_176_,s_177,s_177_,s_178,s_178_,q_179,q_179_,s_180,s_180_,s_181,s_181_,s_182,s_182_,betweenstory_22,s_183,s_183_,s_184,s_184_,s_185,s_185_,q_186,q_186_,s_187,s_187_,q_188,q_188_,s_189,s_189_,s_190,s_190_,q_191,q_191_,s_192,s_192_,betweenstory_23,s_193,s_193_,s_194,s_194_,s_195,s_195_,s_196,s_196_,s_197,s_197_,s_198,s_198_,s_199,s_199_,betweenstory_24,s_200,s_200_,q_201,q_201_,s_202,s_202_,s_203,s_203_,q_204,q_204_,s_205,s_205_,s_206,s_206_,s_207,s_207_,q_208,q_208_,s_209,s_209_,betweenstory_25,s_210,s_210_,s_211,s_211_,s_212,s_212_,s_213,s_213_,s_214,s_214_,s_215,s_215_,q_216,q_216_,s_217,s_217_,betweenstory_26,s_218,s_218_,s_219,s_219_,q_220,q_220_,s_221,s_221_,s_222,s_222_,q_223,q_223_,s_224,s_224_,s_225,s_225_,s_226,s_226_,betweenstory_27,s_227,s_227_,s_228,s_228_,s_229,s_229_,s_230,s_230_,q_231,q_231_,s_232,s_232_,s_233,s_233_,s_234,s_234_,betweenstory_28,s_235,s_235_,q_236,q_236_,s_237,s_237_,s_238,s_238_,q_239,q_239_,s_240,s_240_,q_241,q_241_,s_242,s_242_,q_243,q_243_,s_244,s_244_,q_245,q_245_,s_246,s_246_,betweenstory_29,s_247,s_247_,s_248,s_248_,s_249,s_249_,q_250,q_250_,s_251,s_251_,s_252,s_252_,s_253,s_253_,s_254,s_254_,betweenstory_30,s_255,s_255_,s_256,s_256_,s_257,s_257_,s_258,s_258_,q_259,q_259_,s_260,s_260_,s_261,s_261_,q_262,q_262_,s_263,s_263_,betweenstory_31,s_264,s_264_,s_265,s_265_,s_266,s_266_,q_267,q_267_,s_268,s_268_,s_269,s_269_,s_270,s_270_,q_271,q_271_,s_272,s_272_,betweenstory_32,s_273,s_273_,q_274,q_274_,s_275,s_275_,s_276,s_276_,s_277,s_277_,q_278,q_278_,s_279,s_279_,s_280,s_280_,q_281,q_281_,s_282,s_282_,betweenstory_33,s_283,s_283_,q_284,q_284_,s_285,s_285_,q_286,q_286_,s_287,s_287_,s_288,s_288_,q_289,q_289_,s_290,s_290_,s_291,s_291_,s_292,s_292_,betweenstory_34,s_293,s_293_,s_294,s_294_,s_295,s_295_,s_296,s_296_,q_297,q_297_,s_298,s_298_,q_299,q_299_,s_300,s_300_,s_301,s_301_,betweenstory_35,s_302,s_302_,q_303,q_303_,s_304,s_304_,q_305,q_305_,s_306,s_306_,q_307,q_307_,s_308,s_308_,q_309,q_309_,s_310,s_310_,q_311,q_311_,s_312,s_312_,s_313,s_313_,betweenstory_36,s_314,s_314_,q_315,q_315_,s_316,s_316_,s_317,s_317_,s_318,s_318_,q_319,q_319_,s_320,s_320_,s_321,s_321_,s_322,s_322_,betweenstory_37,s_323,s_323_,s_324,s_324_,s_325,s_325_,s_326,s_326_,q_327,q_327_,s_328,s_328_,s_329,s_329_,s_330,s_330_,betweenstory_38,s_331,s_331_,s_332,s_332_,s_333,s_333_,s_334,s_334_,s_335,s_335_,s_336,s_336_,s_337,s_337_,betweenstory_39,s_338,s_338_,s_339,s_339_,q_340,q_340_,s_341,s_341_,s_342,s_342_,q_343,q_343_,s_344,s_344_,s_345,s_345_,q_346,q_346_,s_347,s_347_,betweenstory_40,s_348,s_348_,s_349,s_349_,s_350,s_350_,s_351,s_351_,q_352,q_352_,s_353,s_353_,s_354,s_354_,s_355,s_355_,betweenstory_41,s_356,s_356_,s_357,s_357_,s_358,s_358_,q_359,q_359_,s_360,s_360_,q_361,q_361_,s_362,s_362_,q_363,q_363_,s_364,s_364_,s_365,s_365_,betweenstory_42,s_366,s_366_,q_367,q_367_,s_368,s_368_,s_369,s_369_,s_370,s_370_,s_371,s_371_,s_372,s_372_,s_373,s_373_,betweenstory_43,s_374,s_374_,s_375,s_375_,q_376,q_376_,s_377,s_377_,q_378,q_378_,s_379,s_379_,s_380,s_380_,q_381,q_381_,s_382,s_382_,q_383,q_383_,s_384,s_384_,betweenstory_44,s_385,s_385_,s_386,s_386_,s_387,s_387_,s_388,s_388_,q_389,q_389_,s_390,s_390_,s_391,s_391_,s_392,s_392_,betweenstory_45,s_393,s_393_,s_394,s_394_,s_395,s_395_,q_396,q_396_,s_397,s_397_,s_398,s_398_,s_399,s_399_,s_400,s_400_,betweenstory_46,s_401,s_401_,s_402,s_402_,s_403,s_403_,s_404,s_404_,q_405,q_405_,s_406,s_406_,s_407,s_407_,s_408,s_408_,betweenstory_47,s_409,s_409_,q_410,q_410_,s_411,s_411_,s_412,s_412_,s_413,s_413_,s_414,s_414_,s_415,s_415_,s_416,s_416_,betweenstory_48,s_417,s_417_,s_418,s_418_,s_419,s_419_,s_420,s_420_,q_421,q_421_,s_422,s_422_,s_423,s_423_,q_424,q_424_,s_425,s_425_,betweenstory_49,s_426,s_426_,s_427,s_427_,q_428,q_428_,s_429,s_429_,s_430,s_430_,s_431,s_431_,q_432,q_432_,s_433,s_433_,s_434,s_434_,betweenstory_50,s_435,s_435_,q_436,q_436_,s_437,s_437_,q_438,q_438_,s_439,s_439_,s_440,s_440_,s_441,s_441_,s_442,s_442_,s_443,s_443_,betweenstory_51,s_444,s_444_,q_445,q_445_,s_446,s_446_,q_447,q_447_,s_448,s_448_,s_449,s_449_,s_450,s_450_,s_451,s_451_,q_452,q_452_,s_453,s_453_,betweenstory_52,s_454,s_454_,s_455,s_455_,q_456,q_456_,s_457,s_457_,s_458,s_458_,s_459,s_459_,s_460,s_460_,q_461,q_461_,s_462,s_462_,betweenstory_53,s_463,s_463_,s_464,s_464_,q_465,q_465_,s_466,s_466_,s_467,s_467_,q_468,q_468_,s_469,s_469_,q_470,q_470_,s_471,s_471_,s_472,s_472_,betweenstory_54,s_473,s_473_,s_474,s_474_,q_475,q_475_,s_476,s_476_,s_477,s_477_,s_478,s_478_,s_479,s_479_,q_480,q_480_,s_481,s_481_,betweenstory_55,s_482,s_482_,s_483,s_483_,s_484,s_484_,q_485,q_485_,s_486,s_486_,s_487,s_487_,s_488,s_488_,q_489,q_489_,s_490,s_490_,betweenstory_56,s_491,s_491_,s_492,s_492_,s_493,s_493_,s_494,s_494_,q_495,q_495_,s_496,s_496_,q_497,q_497_,s_498,s_498_,s_499,s_499_,betweenstory_57,s_500,s_500_,q_501,q_501_,s_502,s_502_,s_503,s_503_,s_504,s_504_,s_505,s_505_,q_506,q_506_,s_507,s_507_,q_508,q_508_,s_509,s_509_,betweenstory_58,s_510,s_510_,s_511,s_511_,s_512,s_512_,s_513,s_513_,s_514,s_514_,s_515,s_515_,s_516,s_516_,betweenstory_59,s_517,s_517_,s_518,s_518_,q_519,q_519_,s_520,s_520_,s_521,s_521_,q_522,q_522_,s_523,s_523_,s_524,s_524_,s_525,s_525_,betweenstory_60,s_526,s_526_,s_527,s_527_,s_528,s_528_,s_529,s_529_,s_530,s_530_,s_531,s_531_,s_532,s_532_,betweenstory_61,s_533,s_533_,q_534,q_534_,s_535,s_535_,q_536,q_536_,s_537,s_537_,s_538,s_538_,s_539,s_539_,s_540,s_540_,q_541,q_541_,s_542,s_542_,betweenstory_62,s_543,s_543_,q_544,q_544_,s_545,s_545_,s_546,s_546_,q_547,q_547_,s_548,s_548_,s_549,s_549_,s_550,s_550_,s_551,s_551_,betweenstory_63,s_552,s_552_,q_553,q_553_,s_554,s_554_,s_555,s_555_,s_556,s_556_,s_557,s_557_,s_558,s_558_,q_559,q_559_,s_560,s_560_,betweenstory_64,s_561,s_561_,q_562,q_562_,s_563,s_563_,s_564,s_564_,q_565,q_565_,s_566,s_566_,s_567,s_567_,s_568,s_568_,s_569,s_569_,betweenstory_65,s_570,s_570_,q_571,q_571_,s_572,s_572_,s_573,s_573_,s_574,s_574_,s_575,s_575_,q_576,q_576_,s_577,s_577_,q_578,q_578_,s_579,s_579_,betweenstory_66,s_580,s_580_,s_581,s_581_,q_582,q_582_,s_583,s_583_,s_584,s_584_,s_585,s_585_,s_586,s_586_,s_587,s_587_,betweenstory_67,s_588,s_588_,s_589,s_589_,s_590,s_590_,q_591,q_591_,s_592,s_592_,q_593,q_593_,s_594,s_594_,q_595,q_595_,s_596,s_596_,s_597,s_597_,betweenstory_68,s_598,s_598_,s_599,s_599_,q_600,q_600_,s_601,s_601_,q_602,q_602_,s_603,s_603_,s_604,s_604_,s_605,s_605_,s_606,s_606_,betweenstory_69,s_607,s_607_,s_608,s_608_,s_609,s_609_,s_610,s_610_,s_611,s_611_,q_612,q_612_,s_613,s_613_,s_614,s_614_,betweenstory_70,s_615,s_615_,s_616,s_616_,q_617,q_617_,s_618,s_618_,q_619,q_619_,s_620,s_620_,q_621,q_621_,s_622,s_622_,s_623,s_623_,q_624,q_624_,s_625,s_625_,betweenstory_71,s_626,s_626_,s_627,s_627_,s_628,s_628_,s_629,s_629_,s_630,s_630_,s_631,s_631_,s_632,s_632_,betweenstory_72,s_633,s_633_,s_634,s_634_,s_635,s_635_,s_636,s_636_,s_637,s_637_,s_638,s_638_,q_639,q_639_,s_640,s_640_,betweenstory_73,s_641,s_641_,s_642,s_642_,q_643,q_643_,s_644,s_644_,q_645,q_645_,s_646,s_646_,q_647,q_647_,s_648,s_648_,s_649,s_649_,s_650,s_650_,betweenstory_74,s_651,s_651_,s_652,s_652_,q_653,q_653_,s_654,s_654_,s_655,s_655_,q_656,q_656_,s_657,s_657_,q_658,q_658_,s_659,s_659_,s_660,s_660_,betweenstory_75,s_661,s_661_,s_662,s_662_,s_663,s_663_,q_664,q_664_,s_665,s_665_,s_666,s_666_,s_667,s_667_,q_668,q_668_,s_669,s_669_,betweenstory_76,s_670,s_670_,s_671,s_671_,s_672,s_672_,s_673,s_673_,q_674,q_674_,s_675,s_675_,s_676,s_676_,s_677,s_677_,betweenstory_77,s_678,s_678_,s_679,s_679_,s_680,s_680_,s_681,s_681_,s_682,s_682_,s_683,s_683_,q_684,q_684_,s_685,s_685_,betweenstory_78,s_686,s_686_,s_687,s_687_,q_688,q_688_,s_689,s_689_,s_690,s_690_,s_691,s_691_,s_692,s_692_,s_693,s_693_,betweenstory_79,s_694,s_694_,s_695,s_695_,s_696,s_696_,s_697,s_697_,s_698,s_698_,s_699,s_699_,q_700,q_700_,s_701,s_701_,betweenstory_80,s_702,s_702_,s_703,s_703_,s_704,s_704_,q_705,q_705_,s_706,s_706_,s_707,s_707_,q_708,q_708_,s_709,s_709_,s_710,s_710_,betweenstory_81,s_711,s_711_,s_712,s_712_,q_713,q_713_,s_714,s_714_,s_715,s_715_,s_716,s_716_,s_717,s_717_,q_718,q_718_,s_719,s_719_,betweenstory_82,s_720,s_720_,q_721,q_721_,s_722,s_722_,s_723,s_723_,s_724,s_724_,s_725,s_725_,s_726,s_726_,s_727,s_727_,betweenstory_83,s_728,s_728_,s_729,s_729_,s_730,s_730_,s_731,s_731_,s_732,s_732_,q_733,q_733_,s_734,s_734_,q_735,q_735_,s_736,s_736_,betweenstory_84,s_737,s_737_,s_738,s_738_,q_739,q_739_,s_740,s_740_,s_741,s_741_,q_742,q_742_,s_743,s_743_,s_744,s_744_,q_745,q_745_,s_746,s_746_,betweenstory_85,s_747,s_747_,s_748,s_748_,s_749,s_749_,s_750,s_750_,q_751,q_751_,s_752,s_752_,s_753,s_753_,s_754,s_754_,betweenstory_86,s_755,s_755_,s_756,s_756_,s_757,s_757_,s_758,s_758_,s_759,s_759_,q_760,q_760_,s_761,s_761_,s_762,s_762_,betweenstory_87,s_763,s_763_,s_764,s_764_,q_765,q_765_,s_766,s_766_,s_767,s_767_,q_768,q_768_,s_769,s_769_,q_770,q_770_,s_771,s_771_,q_772,q_772_,s_773,s_773_,betweenstory_88,s_774,s_774_,s_775,s_775_,q_776,q_776_,s_777,s_777_,s_778,s_778_,q_779,q_779_,s_780,s_780_,q_781,q_781_,s_782,s_782_,s_783,s_783_,betweenstory_89,s_784,s_784_,s_785,s_785_,s_786,s_786_,s_787,s_787_,q_788,q_788_,s_789,s_789_,s_790,s_790_,s_791,s_791_,betweenstory_90,s_792,s_792_,s_793,s_793_,q_794,q_794_,s_795,s_795_,s_796,s_796_,s_797,s_797_,s_798,s_798_,q_799,q_799_,s_800,s_800_,betweenstory_91,s_801,s_801_,s_802,s_802_,q_803,q_803_,s_804,s_804_,s_805,s_805_,s_806,s_806_,s_807,s_807_,q_808,q_808_,s_809,s_809_,betweenstory_92,s_810,s_810_,s_811,s_811_,q_812,q_812_,s_813,s_813_,s_814,s_814_,s_815,s_815_,s_816,s_816_,s_817,s_817_,betweenstory_93,s_818,s_818_,q_819,q_819_,s_820,s_820_,q_821,q_821_,s_822,s_822_,q_823,q_823_,s_824,s_824_,s_825,s_825_,q_826,q_826_,s_827,s_827_,q_828,q_828_,s_829,s_829_,betweenstory_94,s_830,s_830_,s_831,s_831_,q_832,q_832_,s_833,s_833_,s_834,s_834_,q_835,q_835_,s_836,s_836_,q_837,q_837_,s_838,s_838_,s_839,s_839_,betweenstory_95,s_840,s_840_,s_841,s_841_,s_842,s_842_,s_843,s_843_,s_844,s_844_,q_845,q_845_,s_846,s_846_,s_847,s_847_,betweenstory_96,s_848,s_848_,s_849,s_849_,q_850,q_850_,s_851,s_851_,s_852,s_852_,s_853,s_853_,q_854,q_854_,s_855,s_855_,q_856,q_856_,s_857,s_857_,betweenstory_97,s_858,s_858_,s_859,s_859_,s_860,s_860_,s_861,s_861_,q_862,q_862_,s_863,s_863_,s_864,s_864_,s_865,s_865_,betweenstory_98,s_866,s_866_,q_867,q_867_,s_868,s_868_,q_869,q_869_,s_870,s_870_,s_871,s_871_,s_872,s_872_,q_873,q_873_,s_874,s_874_,q_875,q_875_,s_876,s_876_,betweenstory_99,s_877,s_877_,s_878,s_878_,s_879,s_879_,s_880,s_880_,q_881,q_881_,s_882,s_882_,s_883,s_883_,s_884,s_884_,betweenstory_100,comments],
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