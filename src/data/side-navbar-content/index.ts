const side_nav_links = [
	{
		page_path_name: 'dashboard',
		label: 'Dashboard',
		page_nav_links: [
			{
				path_url: '/dashboard',
				label: 'Dashboard',
				icon: 'House',
			},
			{
				path_url: '/',
				label: 'Queries From',
				icon: 'Newspaper',
				child_nav_links: [
					{
						path_url: '/query_from_bishop',
						label: 'Bishop',
						icon: 'Folder',
					},
					{
						path_url: '/query_from_people',
						label: 'People',
						icon: 'Folder',
					},
				],
			},
			{
				path_url: '/request_to_bishop',
				label: 'Request To Bishop',
				icon: 'Folder',
			},
			{
				path_url: '/sermon',
				label: 'Sermon',
				icon: 'Folder',
			},
			{
				path_url: '/',
				label: 'Supported Links',
				icon: 'LinkIcon',
			},
			{
				path_url: '/',
				label: 'About',
				icon: 'Folder',
			},
		],
	},
	{
		page_path_name: 'diocese',
		label: 'Diocese',
		page_nav_links: [
			{
				path_url: '/diocese/history',
				label: 'History',
				icon: 'BookText',
			},
			{
				path_url: '/diocese/patron_saints',
				label: 'Patron Saints',
				icon: 'BookText',
			},
			{
				path_url: '/diocese/bishop',
				label: 'Bishop',
				icon: 'CalendarDays',
			},
			{
				path_url: '/diocese/retired_bishops',
				label: 'Emeritus / Retired Bishops',
				icon: 'CalendarDays',
			},
			{
				path_url: '/diocese/priests',
				label: 'Priests',
				icon: 'Folder',
			},
			{
				path_url: '/diocese/calender_dates',
				label: 'Calender Dates',
				icon: 'CalendarDays',
			},
			{
				path_url: '/diocese/curia_members',
				label: 'Members of Curia',
				icon: 'Folder',
			},
			{
				path_url: '/diocese/commissions',
				label: 'Commissions',
				icon: 'Folder',
			},

			{
				path_url: '/diocese/committees',
				label: 'Committees',
				icon: 'Folder',
			},
			{
				path_url: '/diocese/vsss',
				label: 'Social Service Society',
				icon: 'Folder',
			},
			{
				path_url: '/diocese/college_consulters',
				label: 'College of Consultors',
				icon: 'Folder',
			},
			{
				path_url: '/diocese/senate_members',
				label: 'Senate Members',
				icon: 'Folder',
			},

			{
				path_url: '/diocese/vf',
				label: 'Vicariate Forane',
				icon: 'Folder',
			},
			{
				path_url: '/diocese/vicariates',
				label: 'Vicariates',
				icon: 'Folder',
			},
			{
				path_url: '/diocese/parishes',
				label: 'Parishes',
				icon: 'Folder',
			},

			{
				path_url: '/diocese/properties',
				label: 'Land Properties',
				icon: 'BookText',
			},
			{
				path_url: '/diocese/houses_list',
				label: 'Houses',
				icon: 'Folder',
			},
			{
				path_url: '/diocese/institutions_list',
				label: 'Institutions List',
				icon: 'Folder',
			},
			{
				path_url: '/diocese/vocational_list',
				label: 'Vocational List',
				icon: 'Folder',
			},
			{
				path_url: '/diocese/statutes',
				label: 'Statutes (Rules)',
				icon: 'Folder',
			},
		],
	},
	{
		page_path_name: 'religious_people',
		label: 'Religious People',
		page_nav_links: [
			{
				path_url: '',
				label: 'Parish Priest',
				icon: 'BookText',
			},
			{
				path_url: '',
				label: 'Asst. Parish Priest',
				icon: 'BookText',
			},
			{
				path_url: '',
				label: 'Congregation',
				icon: 'BookText',
			},
			{
				path_url: '',
				label: 'Special Ministry',
				icon: 'BookText',
			},
			{
				path_url: '',
				label: 'Spiritual Priests',
				icon: 'BookText',
			},
			{
				path_url: '',
				label: 'On Leave',
				icon: 'BookText',
			},
			{
				path_url: '',
				label: 'Foreign Ministry',
				icon: 'BookText',
			},
			{
				path_url: '',
				label: 'VF',
				icon: 'BookText',
			},

			{
				path_url: '',
				label: 'Commissions',
				icon: 'BookText',
			},
			{
				path_url: '',
				label: 'Committees',
				icon: 'BookText',
			},
			{
				path_url: '',
				label: 'Curia',
				icon: 'BookText',
			},
			{
				path_url: '',
				label: 'Obituary',
				icon: 'BookText',
			},
			{
				path_url: '',
				label: 'Working Else',
				icon: 'BookText',
			},
		],
	},
];

export { side_nav_links };
