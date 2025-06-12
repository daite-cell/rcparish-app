const parish_rules_generic_content = {
	baptism_parish_rule: 'BAPTISM RULE IN PARISH',
	fhc_parish_rule: 'FIRST HOLY COMMUNION RULE IN PARISH',
	confirmation_parish_rule: 'CONFIRMATION RULE IN PARISH',
	marriage_parish_rule: 'MARRIAGE RULE IN PARISH',
	anointing_parish_rule: 'ANOINTING THE SICK RULE IN PARISH',
	confession_parish_rule: 'CONFESSION RULE IN PARISH',
	funeral_parish_rule: 'FUNERAL PROCEDURE RULE IN PARISH',
	mass_offerings_parish_rule: 'MASS OFFERING RULE IN PARISH',
	penal_parish_rule: 'PENAL SANCTION RULE IN PARISH',
	general_duty_rule: 'PARISH GENERAL DUTIES RULES',
};

const parish_nav_links_data = {
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
};

export { parish_rules_generic_content, parish_nav_links_data };
