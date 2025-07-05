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
						tabs: [
							{
								label: 'CLOSED REQUEST',
							},
							{
								label: 'OPEN REQUEST',
							},
							{
								label: 'CREATE REQUEST',
							},
						],
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
		page_path_name: '/diocese/history',
		label: 'Diocese',
		page_nav_links: [
			{
				path_url: '/diocese/history',
				label: 'History',
				icon: 'BookText',
				tabs: [{ label: 'view' }],
			},
			{
				path_url: '/diocese/patron_saints',
				label: 'Patron Saints',
				icon: 'BookText',
				tabs: [{ label: 'view' }],
			},
			{
				path_url: '/diocese/bishop',
				label: 'Bishop',
				icon: 'CalendarDays',
				tabs: [{ label: 'RETIRED / EMERITUS BISHOPS' }, { label: 'view' }, { label: 'edit' }],
			},
			{
				path_url: '/diocese/retired_bishops',
				label: 'Emeritus / Retired Bishops',
				icon: 'CalendarDays',
				tabs: [{ label: 'view' }],
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
				tabs: [{ label: 'view' }],
			},
			{
				path_url: '/diocese/curia_members',
				label: 'Members of Curia',
				icon: 'Folder',
				tabs: [{ label: 'view' }, { label: 'edit' }],
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
				tabs: [{ label: 'PRIOR DIGNITARIES' }, { label: 'view' }, { label: 'edit' }],
			},
			{
				path_url: '/diocese/senate_members',
				label: 'Senate Members',
				icon: 'Folder',
				tabs: [{ label: 'PRIOR DIGNITARIES' }, { label: 'edit' }],
			},

			{
				path_url: '/diocese/vf',
				label: 'Vicariate Forane',
				icon: 'Folder',
				tabs: [{ label: 'view' }],
			},
			{
				path_url: '/diocese/vicariates',
				label: 'Vicariates',
				icon: 'Folder',
				tabs: [{ label: 'print' }],
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
				tabs: [{ label: 'view' }, { label: 'add' }],
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
				tabs: [{ label: 'View' }],
			},
			{
				path_url: '/parish/former_parish_priest',
				label: 'Former Parish Priest',
				icon: 'BookText',
			},
			{
				path_url: '/parish/parish_activities',
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
				path_url: '/religious_people/priest',
				label: 'Parish Priest',
				icon: 'BookText',
			},
			{
				path_url: '/religious_people/asst_priest',
				label: 'Asst. Parish Priest',
				icon: 'BookText',
			},
			{
				path_url: '/religious_people/congregation',
				label: 'Congregation',
				icon: 'BookText',
			},
			{
				path_url: '/religious_people/special_ministry',
				label: 'Special Ministry',
				icon: 'BookText',
			},
			{
				path_url: '/religious_people/spiritual_priest',
				label: 'Spiritual Priests',
				icon: 'BookText',
			},
			{
				path_url: '/religious_people/on_leave',
				label: 'On Leave',
				icon: 'BookText',
			},
			{
				path_url: '/religious_people/foreign_ministry',
				label: 'Foreign Ministry',
				icon: 'BookText',
			},
			{
				path_url: '/religious_people/vf',
				label: 'VF',
				icon: 'BookText',
			},

			{
				path_url: '/religious_people/commissions',
				label: 'Commissions',
				icon: 'BookText',
			},
			{
				path_url: '/religious_people/committees',
				label: 'Committees',
				icon: 'BookText',
			},
			{
				path_url: '/religious_people/curia',
				label: 'Curia',
				icon: 'BookText',
			},
			{
				path_url: '/religious_people/obituary',
				label: 'Obituary',
				icon: 'BookText',
			},
			{
				path_url: '/religious_people/working_else',
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
				tabs: [{ label: 'COUNCIL DETAILS' }, { label: 'View' }, { label: 'add/change' }],
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
				tabs: [{ label: 'ANBIAM FAMILY CARD' }, { label: 'view' }, { label: 'add' }],
			},
			{
				path_url: '/pious_group/school_students',
				label: 'School Students',
				icon: 'BookText',
				tabs: [{ label: 'view' }],
			},
			{
				path_url: '/pious_group/college_students',
				label: 'College Students',
				icon: 'BookText',
				tabs: [{ label: 'view' }],
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
				tabs: [{ label: 'ANBIAM FAMILY CARD' }, { label: 'view' }, { label: 'add' }],
			},
			{
				path_url: '/pious_group/associations_incharge',
				label: 'Associations Incharge',
				icon: 'BookText',
				tabs: [{ label: 'ANBIAM FAMILY CARD' }, { label: 'view' }, { label: 'add' }],
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
				path_url: '/sacraments/holy_communion',
				label: 'First Holy Communion Register',
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
				label: 'Rent House / Shop Details',
				icon: 'BookText',
			},
			{
				path_url: '/properties/land_properties',
				label: 'Land Properties',
				icon: 'BookText',
				tabs: [{ label: 'view' }],
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
				tabs: [{ label: 'payment details' }, { label: 'view' }],
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
				tabs: [{ label: 'rent payment details' }, { label: 'view' }],
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
				tabs: [{ label: 'payment details' }, { label: 'view' }],
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
				tabs: [{ label: 'search by family' }],
			},
			{
				path_url: '/common_pool/search_member',
				label: 'Search By Member',
				icon: 'BookText',
				tabs: [{ label: 'search by member' }],
			},
			{
				path_url: '/common_pool/admitted_list',
				label: 'Re-Admitted List',
				icon: 'BookText',
				tabs: [{ label: 'view' }],
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
			{ nav_link_name: 'Rule of Parish', nav_url: '/parish/fhc_parish_rule' },
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

const rules = [
	{
		page_path_name: 'parish',
		label_heading: 'Rules & Regulations',
		rules_sub_links: [
			{
				label: 'Baptism',
				nav_links: [
					{ nav_link_name: 'Rule of Canon Law', nav_url: '/parish/rules/baptism_canal_rule' },
					{ nav_link_name: 'Rule of Parish', nav_url: '/parish/rules/baptism_parish_rule' },
				],
			},
			{
				label: 'First Holy Communion',
				nav_links: [
					{ nav_link_name: 'Rule of Canon Law', nav_url: '/parish/rules/fhc_canal_rule' },
					{ nav_link_name: 'Rule of Parish', nav_url: '/parish/rules/fhc_parish_rule' },
				],
			},
			{
				label: 'Confirmation',
				nav_links: [
					{ nav_link_name: 'Rule of Canon Law', nav_url: '/parish/rules/confirmation_canal_rule' },
					{ nav_link_name: 'Rule of Parish', nav_url: '/parish/rules/confirmation_parish_rule' },
				],
			},
			{
				label: 'Marriage',
				nav_links: [
					{ nav_link_name: 'Rule of Canon Law', nav_url: '/parish/rules/marriage_canal_rule' },
					{ nav_link_name: 'Rule of Parish', nav_url: '/parish/rules/marriage_parish_rule' },
				],
			},
			{
				label: 'Anointing the Sick',
				nav_links: [
					{ nav_link_name: 'Rule of Canon Law', nav_url: '/parish/rules/anointing_canal_rule' },
					{ nav_link_name: 'Rule of Parish', nav_url: '/parish/rules/anointing_parish_rule' },
				],
			},
			{
				label: 'Confession',
				nav_links: [
					{ nav_link_name: 'Rule of Canon Law', nav_url: '/parish/rules/confession_canal_rule' },
					{ nav_link_name: 'Rule of Parish', nav_url: '/parish/rules/confession_parish_rule' },
				],
			},
			{
				label: 'Funeral Procedure of Canon Law',
				nav_links: [
					{ nav_link_name: 'Rule of Canon Law', nav_url: '/parish/rules/funeral_canal_rule' },
					{ nav_link_name: 'Rule of Parish', nav_url: '/parish/rules/funeral_parish_rule' },
				],
			},
			{
				label: 'Mass Offering',
				nav_links: [
					{ nav_link_name: 'Rule of Canon Law', nav_url: '/parish/rules/mass_offerings_canal_rule' },
					{ nav_link_name: 'Rule of Parish', nav_url: '/parish/rules/mass_offerings_parish_rule' },
				],
			},
			{
				label: 'Penal Sanction',
				nav_links: [
					{ nav_link_name: 'Rule of Canon Law', nav_url: '/parish/rules/penal_canal_rule' },
					{ nav_link_name: 'Rule of Parish', nav_url: '/parish/rules/penal_parish_rule' },
				],
			},
			{
				label: 'Duties',
				nav_links: [
					{ nav_link_name: 'Rule of Canon Law', nav_url: '/parish/rules/priest_duty_rule' },
					{ nav_link_name: 'Rule of Parish', nav_url: '/parish/rules/general_duty_rule' },
				],
			},
		],
	},
	{
		page_path_name: 'diocese',
		label_heading: 'Statutes (Rules)',
		rules_sub_links: [
			{
				label: 'Baptism',
				nav_links: [{ nav_link_name: 'Rule of Canon Law', nav_url: '/diocese/statutes/baptism_canal_rule' }],
			},
			{
				label: 'First Holy Communion',
				nav_links: [{ nav_link_name: 'Rule of Canon Law', nav_url: '/diocese/statutes/fhc_canal_rule' }],
			},
			{
				label: 'Confirmation',
				nav_links: [{ nav_link_name: 'Rule of Canon Law', nav_url: '/diocese/statutes/confirmation_canal_rule' }],
			},
			{
				label: 'Marriage',
				nav_links: [{ nav_link_name: 'Rule of Canon Law', nav_url: '/diocese/statutes/marriage_canal_rule' }],
			},
			{
				label: 'Anointing the Sick',
				nav_links: [{ nav_link_name: 'Rule of Canon Law', nav_url: '/diocese/statutes/anointing_canal_rule' }],
			},
			{
				label: 'Confession',
				nav_links: [{ nav_link_name: 'Rule of Canon Law', nav_url: '/diocese/statutes/confession_canal_rule' }],
			},
			{
				label: 'Funeral Procedure of Canon Law',
				nav_links: [{ nav_link_name: 'Rule of Canon Law', nav_url: '/diocese/statutes/funeral_canal_rule' }],
			},
			{
				label: 'Mass Offering',
				nav_links: [{ nav_link_name: 'Rule of Canon Law', nav_url: '/diocese/statutes/mass_offerings_canal_rule' }],
			},

			{
				label: 'Penal Sanction',
				nav_links: [
					{ nav_link_name: 'Rule of Canon Law', nav_url: '/diocese/statutes/penal_canal_rule' },
					{ nav_link_name: 'Duty of Priest', nav_url: '/diocese/statutes/priest_duty_rule' },
				],
			},
		],
	},
];

const dynamic_navLinks_data = [
	{
		page_path_name: 'parish',
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
				label: 'Former Parish Priest',
				icon: 'BookText',
			},
			{
				path_url: '/parish/parish_activities',
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
		page_path_name: 'diocese',
		label: 'Diocese',
		page_nav_links: [
			{
				path_url: '/diocese/history',
				label: 'History',
				icon: 'BookText',
				tabs: [{ label: 'view' }],
			},
			{
				path_url: '/diocese/patron_saints',
				label: 'Patron Saints',
				icon: 'BookText',
				tabs: [{ label: 'view' }],
			},
			{
				path_url: '/diocese/bishop',
				label: 'Bishop',
				icon: 'CalendarDays',
				tabs: [{ label: 'RETIRED / EMERITUS BISHOPS' }, { label: 'view' }, { label: 'edit' }],
			},
			{
				path_url: '/diocese/retired_bishops',
				label: 'Emeritus / Retired Bishops',
				icon: 'CalendarDays',
				tabs: [{ label: 'view' }],
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
				tabs: [{ label: 'view' }],
			},
			{
				path_url: '/diocese/curia_members',
				label: 'Members of Curia',
				icon: 'Folder',
				tabs: [{ label: 'view' }, { label: 'edit' }],
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
				tabs: [{ label: 'PRIOR DIGNITARIES' }, { label: 'view' }, { label: 'edit' }],
			},
			{
				path_url: '/diocese/senate_members',
				label: 'Senate Members',
				icon: 'Folder',
				tabs: [{ label: 'PRIOR DIGNITARIES' }, { label: 'edit' }],
			},

			{
				path_url: '/diocese/vf',
				label: 'Vicariate Forane',
				icon: 'Folder',
				tabs: [{ label: 'view' }],
			},
			{
				path_url: '/diocese/vicariates',
				label: 'Vicariates',
				icon: 'Folder',
				tabs: [{ label: 'print' }],
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
		],
	},
];

export { side_nav_links, rules_sub_links, rules, dynamic_navLinks_data };
