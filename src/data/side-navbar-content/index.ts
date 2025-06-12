const side_nav_links = [
	{
		page_path_name: 'dashboard',
		label: '',
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
				path_url: '/',
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
		page_path_name: '/diocese/history',
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
		page_path_name: '/parish/parish_history',
		label: 'Parish',
		page_nav_links: [
			{
				path_url: '/parish/parish_history',
				label: 'Parish History',
				icon: 'BookText',
			},
			{
				path_url: '/parish/patron_saint',
				label: 'Patron Saint',
				icon: 'BookText',
			},
			{
				path_url: '/parish/present_parish_priest',
				label: 'Present Parish Priest',
				icon: 'BookText',
			},
			{
				path_url: '/parish/former_parish_priest',
				label: 'Parish Activities',
				icon: 'BookText',
			},
			{
				path_url: '/parish/sub_stations',
				label: 'Main Station / Sub Station',
				icon: 'BookText',
			},
		],
	},
	{
		page_path_name: 'religious_people',
		label: 'Religious People',
		page_nav_links: [
			{
				path_url: '/religious_people',
				label: 'Parish Priest',
				icon: 'BookText',
			},
			{
				path_url: '/religious_people',
				label: 'Asst. Parish Priest',
				icon: 'BookText',
			},
			{
				path_url: '/religious_people',
				label: 'Congregation',
				icon: 'BookText',
			},
			{
				path_url: '/religious_people',
				label: 'Special Ministry',
				icon: 'BookText',
			},
			{
				path_url: '/religious_people',
				label: 'Spiritual Priests',
				icon: 'BookText',
			},
			{
				path_url: '/religious_people',
				label: 'On Leave',
				icon: 'BookText',
			},
			{
				path_url: '/religious_people',
				label: 'Foreign Ministry',
				icon: 'BookText',
			},
			{
				path_url: '/religious_people',
				label: 'VF',
				icon: 'BookText',
			},

			{
				path_url: '/religious_people',
				label: 'Commissions',
				icon: 'BookText',
			},
			{
				path_url: '/religious_people',
				label: 'Committees',
				icon: 'BookText',
			},
			{
				path_url: '/religious_people',
				label: 'Curia',
				icon: 'BookText',
			},
			{
				path_url: '/religious_people',
				label: 'Obituary',
				icon: 'BookText',
			},
			{
				path_url: '/religious_people',
				label: 'Working Else',
				icon: 'BookText',
			},
		],
	},
	{
		page_path_name: '/pious_group/parish_council_members',
		label: 'Internal Order',
		page_nav_links: [
			{
				path_url: '/pious_group/parish_council_members',
				label: 'Parish Council Members',
				icon: 'BookText',
			},
			{
				path_url: '/pious_group/religious_people_parish',
				label: 'Religious People in Parish',
				icon: 'BookText',
			},
			{
				path_url: '/pious_group/priest_nun_parish',
				label: 'Sons and Daughters of the Soil',
				icon: 'BookText',
			},
			{
				path_url: '/pious_group/family_members',
				label: 'Members in Families',
				icon: 'BookText',
			},
			{
				path_url: '/pious_group/families',
				label: 'Families',
				icon: 'BookText',
			},
			{
				path_url: '/pious_group/school_students',
				label: 'School Students',
				icon: 'BookText',
			},
			{
				path_url: '/pious_group/college_students',
				label: 'College Students',
				icon: 'BookText',
			},
			{
				path_url: '/pious_group/anbiams',
				label: 'Anbiam',
				icon: 'BookText',
			},
			{
				path_url: '/pious_group/associations_club',
				label: 'Associations & Club',
				icon: 'BookText',
			},
			{
				path_url: '/pious_group/anbiam_incharge',
				label: 'Anbiam Incharge',
				icon: 'BookText',
			},
			{
				path_url: '/pious_group/associations_incharge',
				label: 'Associations Incharge',
				icon: 'BookText',
			},
		],
	},
	{
		page_path_name: '/sacraments/chronicles',
		label: 'Register',
		page_nav_links: [
			{
				path_url: '/sacraments/chronicles',
				label: 'Chronicles',
				icon: 'BookText',
			},
			{
				path_url: '/sacraments/baptism',
				label: 'Baptism Register',
				icon: 'BookText',
			},
			{
				path_url: '/sacraments/confirmations',
				label: 'Confirmation Register',
				icon: 'BookText',
			},

			{
				path_url: '/sacraments/marriage_registration',
				label: 'Marriage Register',
				icon: 'BookText',
				child_nav_links: [
					{
						path_url: '/sacraments/marriage_registration',
						label: 'Marriage Registration',
						icon: 'Folder',
					},
					{
						path_url: '/sacraments/marriage_proposal',
						label: 'Marriage Proposal Form',
						icon: 'Folder',
					},
				],
			},
			{
				path_url: '/sacraments/death_register',
				label: 'Death Register',
				icon: 'BookText',
			},
		],
	},
	{
		page_path_name: '/properties/rent_details',
		label: 'Properties',
		page_nav_links: [
			{
				path_url: '/properties/rent_details',
				label: 'Rent House or Shop Details',
				icon: 'BookText',
			},
			{
				path_url: '/properties/land_properties',
				label: 'Land Properties',
				icon: 'BookText',
			},
			{
				path_url: '/properties/cemetery',
				label: 'Cemetery',
				icon: 'BookText',
			},

			{
				path_url: '/properties/church_inventory',
				label: 'Church Inventory',
				icon: 'BookText',
			},
			{
				path_url: '/properties/other_inventory',
				label: 'Other Inventory',
				icon: 'BookText',
			},
		],
	},
	{
		page_path_name: '/accounting/subscription',
		label: 'Accounting',
		page_nav_links: [
			{
				path_url: '/accounting/subscription',
				label: 'Subscriptions',
				icon: 'BookText',
			},
			{
				path_url: '/accounting/donations',
				label: 'Donations',
				icon: 'BookText',
			},
			{
				path_url: '/accounting/church_collections',
				label: 'Church Collections',
				icon: 'BookText',
			},
			{
				path_url: '/accounting/rent_shop',
				label: 'Rent & Shop',
				icon: 'BookText',
			},
			{
				path_url: '/accounting/workers',
				label: 'Workers (Employers)',
				icon: 'BookText',
			},
			{
				path_url: '/accounting/employers_salary',
				label: 'Employers - Salary',
				icon: 'BookText',
			},

			{
				path_url: '/accounting/day_book',
				label: 'Day Book',
				icon: 'BookText',
			},

			{
				path_url: '/accounting/auditing_income',
				label: 'For Auditing',
				icon: 'BookText',
				child_nav_links: [
					{
						path_url: '/accounting/auditing_income',
						label: 'Auditing - Income',
						icon: 'Folder',
					},
					{
						path_url: '/accounting/auditing_expense',
						label: 'For Auditing - Expenses',
						icon: 'Folder',
					},
				],
			},
		],
	},
	{
		page_path_name: '/houses/institutions',
		label: 'Houses',
		page_nav_links: [
			{
				path_url: '/houses/institutions',
				label: 'Institutions',
				icon: 'BookText',
			},
			{
				path_url: '/houses/vocational_institutions',
				label: 'Vocational Institutions',
				icon: 'BookText',
			},
			{
				path_url: '/houses/communities',
				label: 'Communities / Presbytery',
				icon: 'BookText',
			},
		],
	},
	{
		page_path_name: '/common_pool/search_family',
		label: 'Common Pool',
		page_nav_links: [
			{
				path_url: '/common_pool/search_family',
				label: 'Search By Family',
				icon: 'BookText',
			},
			{
				path_url: '/common_pool/search_member',
				label: 'Search By Member',
				icon: 'BookText',
			},
			{
				path_url: '/common_pool/admitted_list',
				label: 'Re-Admitted List',
				icon: 'BookText',
			},
		],
	},
];

const rules_sub_links = [
	{
		label: 'Baptism',
		nav_links: [
			{ nav_link_name: 'Rule of Canon Law', nav_url: '/parish/baptism_canal_rule' },
			{ nav_link_name: 'Rule of Parish', nav_url: '/parish/baptism_parish_rule' },
		],
	},
	{
		label: 'First Holy Communion',
		nav_links: [
			{ nav_link_name: 'Rule of Canon Law', nav_url: '/parish/fhc_canal_rule' },
			{ nav_link_name: 'Rule of Parish', nav_url: 'parish/baptism_canal_rule' },
		],
	},
	{
		label: 'Confirmation',
		nav_links: [
			{ nav_link_name: 'Rule of Canon Law', nav_url: '/parish/confirmation_canal_rule' },
			{ nav_link_name: 'Rule of Parish', nav_url: '/parish/confirmation_parish_rule' },
		],
	},
	{
		label: 'Marriage',
		nav_links: [
			{ nav_link_name: 'Rule of Canon Law', nav_url: '/parish/marriage_canal_rule' },
			{ nav_link_name: 'Rule of Parish', nav_url: '/parish/marriage_parish_rule' },
		],
	},
	{
		label: 'Anointing the Sick',
		nav_links: [
			{ nav_link_name: 'Rule of Canon Law', nav_url: '/parish/anointing_canal_rule' },
			{ nav_link_name: 'Rule of Parish', nav_url: '/parish/anointing_parish_rule' },
		],
	},
	{
		label: 'Confession',
		nav_links: [
			{ nav_link_name: 'Rule of Canon Law', nav_url: '/parish/confession_canal_rule' },
			{ nav_link_name: 'Rule of Parish', nav_url: '/parish/confession_parish_rule' },
		],
	},
	{
		label: 'Funeral Procedure of Canon Law',
		nav_links: [
			{ nav_link_name: 'Rule of Canon Law', nav_url: '/parish/funeral_canal_rule' },
			{ nav_link_name: 'Rule of Parish', nav_url: '/parish/funeral_parish_rule' },
		],
	},
	{
		label: 'Mass Offering',
		nav_links: [
			{ nav_link_name: 'Rule of Canon Law', nav_url: '/parish/mass_offerings_canal_rule' },
			{ nav_link_name: 'Rule of Parish', nav_url: '/parish/mass_offerings_parish_rule' },
		],
	},
	{
		label: 'Penal Sanction',
		nav_links: [
			{ nav_link_name: 'Rule of Canon Law', nav_url: '/parish/penal_canal_rule' },
			{ nav_link_name: 'Rule of Parish', nav_url: '/parish/penal_parish_rule' },
		],
	},
	{
		label: 'Duties',
		nav_links: [
			{ nav_link_name: 'Rule of Canon Law', nav_url: '/parish/priest_duty_rule' },
			{ nav_link_name: 'Rule of Parish', nav_url: '/parish/general_duty_rule' },
		],
	},
];

export { side_nav_links, rules_sub_links };
