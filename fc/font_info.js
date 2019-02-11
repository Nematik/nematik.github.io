var fontList = [
	"Andale Mono",
	"Anka/Coder",
	"Anonymous Pro",
	"Bitstream Vera Sans Mono",
	"Classic Console",
	"Consolas",
	"Courier Prime",
	"DejaVu Sans Mono",
	"Dina",
	"Droid Sans Mono",
	"Envy Code R",
	"Fantasque Sans Mono",
	"Fira Mono",
	"FixedSys Excelsior 3.01",
	"Hack",
	"Hermit",
	"IBM 3270",
	"Inconsolata-dz",
	"InputMono",
	"InputMonoCondensed",
	"Iosevka",
	"Liberation Mono",
	"Lucida Console",
	"Luculent",
	"Luxi Mono",
	"M+ 1m light",
	"M+ 1m medium",
	"M+ 1m regular",
	"Menlo",
	"Mensch",
	"Meslo LG L",
	"Meslo LG M",
	"Meslo LG S",
	"Monofur",
	"Monoid",
	"mononoki",
	"monoOne",
	"MonteCarlo",
	"NanumGothicCoding",
	"OCR A Extended",
	"Office Code Pro",
	"Office Code Pro Light",
	"Office Code Pro Medium",
	"OpenDyslexicMono",
	"PragmataPro",
	"ProFontWindows",
	"ProggyClean",
	"PT Mono",
	"Roboto Mono",
	"Roboto Mono Light",
	"Roboto Mono Medium",
	"SF Mono",
	"Source Code Pro",
	"Source Code Pro Light",
	"Source Code Pro Medium",
	"Space Mono",
	"Tamsyn8x16",
	"Terminus",
	"Ubuntu Mono"
];
var fontInfos = {
	"Fantasque Sans Mono": {
		"defaultBig": 23,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			23
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			23
		],
		"defaultSmall": 14
	},
	"Monofur": {
		"defaultBig": 23,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			23
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			23
		],
		"defaultSmall": 14
	},
	"Roboto Mono": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	},
	"Hermit": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			20
		],
		"defaultSmall": 13
	},
	"Luculent": {
		"defaultBig": 23,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			23
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			23
		],
		"defaultSmall": 14
	},
	"Hack": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			20
		],
		"defaultSmall": 13
	},
	"M+ 1m light": {
		"defaultBig": 23,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			15,
			23
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			15,
			15,
			23
		],
		"defaultSmall": 15
	},
	"monoOne": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			20
		],
		"defaultSmall": 13
	},
	"Courier Prime": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	},
	"InputMonoCondensed": {
		"defaultBig": 19,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			19
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			19
		],
		"defaultSmall": 12
	},
	"Mensch": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	},
	"Space Mono": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	},
	"Andale Mono": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	},
	"Dina": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10
		],
		"aa1": [],
		"defaultSmall": 10
	},
	"FixedSys Excelsior 3.01": {
		"defaultBig": 20,
		"aa0": [
			12
		],
		"aa1": [],
		"defaultSmall": 12
	},
	"M+ 1m medium": {
		"defaultBig": 23,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			15,
			23
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			15,
			15,
			23
		],
		"defaultSmall": 15
	},
	"SF Mono": {
		"defaultBig": 20,
		"aa0": [
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	},
	"M+ 1m regular": {
		"defaultBig": 23,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			15,
			23
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			15,
			15,
			23
		],
		"defaultSmall": 15
	},
	"Menlo": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	},
	"ProFontWindows": {
		"defaultBig": 24,
		"aa0": [
			8,
			10,
			11,
			12,
			14,
			24
		],
		"aa1": [
			8,
			10,
			11,
			12,
			14,
			24
		],
		"defaultSmall": 14
	},
	"IBM 3270": {
		"defaultBig": 22,
		"aa0": [
			11,
			12,
			16,
			22
		],
		"aa1": [
			11,
			12,
			16,
			22
		],
		"defaultSmall": 12
	},
	"Source Code Pro Light": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	},
	"Office Code Pro Medium": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	},
	"mononoki": {
		"defaultBig": 21,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			21
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			21
		],
		"defaultSmall": 13
	},
	"Roboto Mono Medium": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	},
	"Terminus": {
		"defaultBig": 24,
		"aa0": [
			10,
			11,
			12,
			14,
			24
		],
		"aa1": [],
		"defaultSmall": 14
	},
	"Ubuntu Mono": {
		"defaultBig": 23,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			15,
			23
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			15,
			23
		],
		"defaultSmall": 15
	},
	"PragmataPro": {
		"defaultBig": 23,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			23
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			23
		],
		"defaultSmall": 14
	},
	"Lucida Console": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	},
	"OpenDyslexicMono": {
		"defaultBig": 16,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			16
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			16
		],
		"defaultSmall": 10
	},
	"OCR A Extended": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	},
	"Liberation Mono": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	},
	"Roboto Mono Light": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	},
	"Iosevka": {
		"defaultBig": 23,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			23
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			23
		],
		"defaultSmall": 14
	},
	"NanumGothicCoding": {
		"defaultBig": 23,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			15,
			23
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			15,
			23
		],
		"defaultSmall": 15
	},
	"Consolas": {
		"defaultBig": 22,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			22
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			22
		],
		"defaultSmall": 14
	},
	"PT Mono": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	},
	"ProggyClean": {
		"defaultBig": 20,
		"aa0": [
			9
		],
		"aa1": [],
		"defaultSmall": 9
	},
	"Envy Code R": {
		"defaultBig": 22,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			22
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			22
		],
		"defaultSmall": 14
	},
	"Monoid": {
		"defaultBig": 23,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			23
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			23
		],
		"defaultSmall": 14
	},
	"Meslo LG S": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	},
	"Fira Mono": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	},
	"Meslo LG M": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	},
	"Anonymous Pro": {
		"defaultBig": 22,
		"aa0": [
			7,
			8,
			9,
			10,
			11,
			12,
			14,
			22
		],
		"aa1": [
			11,
			12,
			14,
			22
		],
		"defaultSmall": 14
	},
	"Source Code Pro Medium": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	},
	"DejaVu Sans Mono": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	},
	"InputMono": {
		"defaultBig": 19,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			19
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			19
		],
		"defaultSmall": 12
	},
	"Bitstream Vera Sans Mono": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	},
	"MonteCarlo": {
		"defaultBig": 20,
		"aa0": [
			10
		],
		"aa1": [],
		"defaultSmall": 10
	},
	"Office Code Pro Light": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	},
	"Inconsolata-dz": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	},
	"Meslo LG L": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	},
	"Tamsyn8x16": {
		"defaultBig": 20,
		"aa0": [
			10
		],
		"aa1": [],
		"defaultSmall": 10
	},
	"Droid Sans Mono": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	},
	"Classic Console": {
		"defaultBig": 20,
		"aa0": [
			15
		],
		"aa1": [],
		"defaultSmall": 15
	},
	"Source Code Pro": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	},
	"Luxi Mono": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	},
	"Anka/Coder": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	},
	"Office Code Pro": {
		"defaultBig": 20,
		"aa0": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"aa1": [
			8,
			9,
			10,
			11,
			12,
			14,
			20
		],
		"defaultSmall": 12
	}
};