
// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Szpieg2000',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'InsertYourAPIKeyHere123456', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
		{
			id: '2',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '3',
			name: 'Twitter',
			icon: 'twitter',
			link: 'https://x.com/',
		},
		
		{
			id: '4',
			name: 'Twitch',
			icon: 'twitch',
			link: 'https://www.twitch.tv/',
		},
		{
			id: '5',
			name: 'Discord',
			icon: 'bot-message-square',
			link: 'https://discord.com',
		},
		{
			id: '6',
			name: 'GMail',
			icon: 'mail',
			link: 'https://odysee.com/',
		},
	],


	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'Tools',
			id: '1',
			links: [
				{
					name: 'EZGif',
					link: 'https://ezgif.com/',
				},
				{
					name: 'Catbox',
					link: 'https://catbox.moe/',
				},
				{
					name: 'TTS',
					link: 'https://lazypy.ro/tts/?voice=Wiseguy&service=VoiceForge&text=Why%20Hello%20there%2C%20Old%20Sport!&lang=English&g=A',
				},
				{
					name: 'PMCSkin 3D',
					link: 'https://www.planetminecraft.com/skin-editor/',
				},
			],
		},
		{
			icon: 'DOCUMENTARIES',
			id: '2',
			links: [
				{
					name: 'Roblox',
					link: 'https://create.roblox.com/docs',
				},
				{
					name: 'Garry\'s Mod',
					link: 'https://wiki.facepunch.com/gmod/',
				},
				{
					name: 'Figura',
					link: 'https://figura-wiki.pages.dev/',
				},
				{
					name: 'Garry\'s Mod Workshop',
					link: 'https://steamcommunity.com/app/4000/workshop/',
				},
			],
		},
	],


	miniPages: [
		{
			name: "Projects",
			list:true,
			links: [
				{
					name: "Milanote",
					link: "https://app.milanote.com/1Vbduf1cmOx377/stud-pole-games-extended-universe?p=97Wj2maX3Ek",
				},
				{
					name: "Roblox Group",
					link: "https://www.roblox.com/groups/15165785/Stud-Pole-Games#!/about",
				},
				{
					name: "GMod Addon Collection",
					link: "https://steamcommunity.com/workshop/filedetails/?id=3116332724"
				}
			]
		},
		{
			name: 'Games',
			list:true,
			links: [
				{
					name: 'Jackbox',
					link: 'https://jackbox.tv/',
				},
				{
					name: 'Hunder Games - Bransteele',
					link: 'https://brantsteele.net/hungergames/disclaimer.php',
				},
				{
					name: 'Murder Games - Orteil',
					link: 'https://orteil.dashnet.org/murdergames/',
				},
				{
					name: 'Neal.Fun',
					link: 'https://neal.fun/',
				},
				{
					name: 'The Useless Web',
					link: 'https://theuselessweb.com/',
				}
			]
		},
		{
			name: 'Miscellanous',
			list:true,
			links: [
				{
					name: 'Messenger',
					link: 'https://www.messenger.com/t/1625560917484906/',
				},
				{
					name: 'Spacehey',
					link: 'https://spacehey.com/szpieg2000',
				},
				{
					name: 'Toyhouse',
					link: 'https://toyhou.se/~world/228226.intertwined-strings',
				},
				{
					name: 'Dropbox',
					link: 'https://www.dropbox.com/h',
				},
				{
					name: 'Perchance',
					link: 'https://www.perchance.org/',
				}
			]
		}
	]
};
