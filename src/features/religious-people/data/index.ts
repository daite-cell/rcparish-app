type PriestProps = {
	name: string;
	present_position: string;
	ordination_date: string;
	birth_date: string;
	living_status: string;
	mobile_number: string;
	email: string;
};

const priests: PriestProps[] = [
	{
		name: 'Most Rev Fr. Ambrose Picharmuthu',
		present_position: "Bishop ( Bishop's House )",
		ordination_date: '1993-03-25',
		birth_date: '1966-05-03',
		living_status: 'Alive',
		mobile_number: '9486424008',
		email: 'rcbishopvellore@gmail.com',
	},
	{
		name: 'Fr. Ramesh L',
		present_position: `Chancellor ( Bishop's House )\nCatechism & Catechists & BCC - Pastoral Commissions ( - )`,
		ordination_date: '2005-04-20',
		birth_date: '1977-03-07',
		living_status: 'Alive',
		mobile_number: '9894891490',
		email: 'ramesh77anto@gmail.com',
	},
	{
		name: 'Fr. Kulandesu A',
		present_position: "Procurator ( Bishop's House )",
		ordination_date: '1987-05-01',
		birth_date: '1958-12-25',
		living_status: 'Alive',
		mobile_number: '9442671433',
		email: 'frkulandesu@gmail.com',
	},
	{
		name: 'Fr. James S',
		present_position: `VSSS Director ( Bishop's House )\nSocial Service & Justice & Peace - Social Commissions ( - )`,
		ordination_date: '2002-04-22',
		birth_date: '1974-03-10',
		living_status: 'Alive',
		mobile_number: '9443636055',
		email: 'frjame@yahoo.com',
	},
	{
		name: 'Fr. Irudayaraj N T',
		present_position: `Pastoral Centre Director ( Bishop's House )\nFamily & Health - Pastoral Commissions ( - )\nPastoral Council - Formative commissions ( - )`,
		ordination_date: '1997-04-25',
		birth_date: '1968-12-09',
		living_status: 'Alive',
		mobile_number: '9751122773',
		email: 'ntirudayam@yahoo.com',
	},
	{
		name: 'Fr. Clement Rosario S A S',
		present_position: `RCM Schools Manager ( Bishop's House )\nLegal Cell - Social Commissions ( - )\nAdvocate - Marriage Tribunal ( - )`,
		ordination_date: '1993-05-25',
		birth_date: '1966-01-05',
		living_status: 'Alive',
		mobile_number: '9751523417',
		email: 'frclamiroso@gmail.com',
	},
];

export { priests, type PriestProps };
