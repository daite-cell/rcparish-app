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
];

export { side_nav_links };
