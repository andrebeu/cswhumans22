{	
	"BEGIN": {
		"sent": 
			"One [location.time], [subject.name] walked into the [location.name]",
		"edge": {
			"location.latent.true": {"NODE11": 0.5, "NODE12": 0.5},
			"location.latent.false": {"NODE11": 0.5, "NODE12": 0.5}
		}
	},

	"NODE11": {
		"sent": 
			"Today, [subject.name] waited in line patiently.",
		"edge":{
			"location.latent.true": {"NODE21": 1.0, "NODE22": 0.0},
			"location.latent.false": {"NODE21": 0.0, "NODE22": 1.0}
		}
	},
	"NODE12": {
		"sent": 
			"[subject.name] was impatient, and decided to cut the line.",
		"edge": {
			"location.latent.true": {"NODE21": 0.0, "NODE22": 1.0},
			"location.latent.false": {"NODE21": 1.0, "NODE22": 0.0}
		}
	},

	"NODE21": {
		"sent": 
			"[subject.name] then sat by the window, and read a book for hours.",
		"edge": {
			"location.latent.true": {"END": 1.0},
			"location.latent.false": {"END": 1.0}
		}
	},
	"NODE22": {
		"sent": 
			"After ordering, [subject.name] stole a salt shaker and left.",
		"edge": {
			"location.latent.true": {"END": 1.0},
			"location.latent.false": {"END": 1.0}
		}
	},

	
	"END": {
		"sent": 
			"That is all that is remembered.",
		"edge": {}
	}
}