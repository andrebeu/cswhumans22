

// load psiturk
var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);

var sid = `${uniqueId}`
var cb = `{condition}`

jsPsych.data.addProperties({
  subject_id: sid,
  condition: cb
});

var intro1 = {
	type: 'instructions',
	pages: ['** After reading, press spacebar. ** ']
	}
var intro2 = {
	type: 'instructions',
	pages: ['There are two parts to this experiment.']
	} 
var intro3 = {
	type: 'instructions',
	pages: ['First you will read a series of stories, a sentence at a time.']
	}
var intro4 = {
	type: 'instructions',
	pages: ['As you read, pay attention to the sequence of events, because eventually you will begin to be asked to predict what happens next in the story.']
	} 
var intro5 = {
	type: 'instructions',
	pages: [' ** once ready, press spacebar to begin the first story ** ']
	} 
    

	var s_0 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var s_1 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.']
	} 
	var s_2 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_3 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Silvia.']
	} 
	var s_4 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"']
	} 
	var s_5 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_6 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.']
	} 
	var s_7 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_8 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_9 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_10 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var s_11 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.']
	} 
	var s_12 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_13 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.']
	} 
	var s_14 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"']
	} 
	var s_15 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_16 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.']
	} 
	var s_17 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_18 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_19 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_20 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var s_21 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.']
	} 
	var s_22 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_23 = {
		type: 'instructions',
		pages: ['Silvia proceeded to give a slight shove to Ben.']
	} 
	var s_24 = {
		type: 'instructions',
		pages: ['Ben yelled into Silvia\'s face, \"Hey! Relax.\"']
	} 
	var s_25 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_26 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.']
	} 
	var s_27 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_28 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_29 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_30 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var s_31 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.']
	} 
	var s_32 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_33 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.']
	} 
	var s_34 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var s_35 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_36 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_37 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_38 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_39 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_40 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var s_41 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.']
	} 
	var s_42 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_43 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var s_44 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_45 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_46 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var s_47 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_48 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_49 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

    var questions_begin_50 = {
      type: 'instructions',
      pages: [' ** you will now begin to be probed with questions mid story ** ']
    } 

	var s_51 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_52 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Jesse, the first person in line.', 'Clumsily, she stepped on Jesse\'s foot.']
	} 
	var s_53 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Jesse\'s foot.']
	} 
	var s_54 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_55 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Jesse.', 'Olivia turned to Jesse and gave him a very mean look.']
	} 
	var s_56 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.']
	} 
	var s_57 = {
		type: 'instructions',
		pages: ['Jesse yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_58 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_59 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var s_60 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_61 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_62 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_63 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_64 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var q_65 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.']
	} 
	var s_66 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.']
	} 
	var q_67 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Jesse.', 'Jesse promptly stepped back in front of Olivia.']
	} 
	var s_68 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Jesse.']
	} 
	var s_69 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.']
	} 
	var q_70 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Jesse.', 'In retaliation, Jesse pushed Olivia.']
	} 
	var s_71 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.']
	} 
	var s_72 = {
		type: 'instructions',
		pages: ['Jesse snatched a cookie and crumbled it above Olivia\'s head.']
	} 
	var q_73 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'The barista ran out from behind the counter and ordered Jesse to leave.']
	} 
	var s_74 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.']
	} 
	var s_75 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_76 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_77 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_78 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var s_79 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Olivia\'s foot.']
	} 
	var q_80 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_81 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_82 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Jesse.', 'Jesse proceeded to give a slight shove to Olivia.']
	} 
	var s_83 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.']
	} 
	var q_84 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"', 'In retaliation, Olivia pushed Jesse.']
	} 
	var s_85 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.']
	} 
	var q_86 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a cake and crumbled it above Olivia\'s head.', 'Olivia snatched a cake and crumbled it above Jesse\'s head.']
	} 
	var s_87 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Olivia\'s head.']
	} 
	var q_88 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_89 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.']
	} 
	var s_90 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_91 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_92 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_93 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var s_94 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.']
	} 
	var s_95 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Silvia.']
	} 
	var s_96 = {
		type: 'instructions',
		pages: ['Silvia ignored her and proceeded to order a mocha.']
	} 
	var q_97 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stared with rage into Silvia\'s eyes.', 'Silvia stared with rage into Olivia\'s eyes.']
	} 
	var s_98 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Silvia\'s eyes.']
	} 
	var q_99 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a cake and crumbled it above Olivia\'s head.', 'Olivia snatched a cake and crumbled it above Silvia\'s head.']
	} 
	var s_100 = {
		type: 'instructions',
		pages: ['Silvia snatched a cake and crumbled it above Olivia\'s head.']
	} 
	var s_101 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var s_102 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_103 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_104 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_105 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var s_106 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var q_107 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Olivia.', 'Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_108 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Olivia.']
	} 
	var s_109 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var q_110 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia yelled into Ben\'s face, \"Hey! Relax.\"', 'Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_111 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_112 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_113 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var q_114 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_115 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_116 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_117 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_118 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

  
jsPsych.init({
  display_element: 'jspsych-target',
  timeline: [intro1,intro2,intro3,intro4,intro5,s_0,s_1,s_2,s_3,s_4,s_5,s_6,s_7,s_8,
betweenstory_9,s_10,s_11,s_12,s_13,s_14,s_15,s_16,s_17,s_18,
betweenstory_19,s_20,s_21,s_22,s_23,s_24,s_25,s_26,s_27,s_28,
betweenstory_29,s_30,s_31,s_32,s_33,s_34,s_35,s_36,s_37,s_38,
betweenstory_39,s_40,s_41,s_42,s_43,s_44,s_45,s_46,s_47,s_48,
betweenstory_49,questions_begin_50,s_51,q_52,s_53,s_54,q_55,s_56,s_57,s_58,s_59,s_60,q_61,s_62,
betweenstory_63,s_64,q_65,s_66,q_67,s_68,s_69,q_70,s_71,s_72,q_73,s_74,s_75,s_76,
betweenstory_77,s_78,s_79,q_80,s_81,q_82,s_83,q_84,s_85,q_86,s_87,q_88,s_89,s_90,s_91,
betweenstory_92,s_93,s_94,s_95,s_96,q_97,s_98,q_99,s_100,s_101,s_102,s_103,
betweenstory_104,s_105,s_106,q_107,s_108,s_109,q_110,s_111,s_112,s_113,q_114,s_115,q_116,s_117,
betweenstory_118,],

  on_finish: function() {
    // psiturk save
    psiturk.saveData({
        success: function() { 
            psiturk.completeHIT(); 
        }
    });
  },
});

