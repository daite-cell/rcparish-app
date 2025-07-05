import type { PriestPersonalDetailsProps } from '@/types';

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

const religious_people_pages = [
	'priest',
	'asst_priest',
	'congregation',
	'special_ministry',
	'spiritual_priest',
	'on_leave',
	'foreign_ministry',
	'vf',
	'commissions',
	'committees',
	'curia',
	'obituary',
	'working_else',
];

type User = {
	id: number;
	name: string;
	email: string;
	age: number;
	role: string;
	created_at: string;
	image?: string;
};

const userData: User[] = [
	{
		id: 1,
		name: 'Avinash Potnuru',
		email: 'avinash@example.com',
		age: 29,
		role: 'Admin',
		created_at: '2024-06-01',
	},
	{
		id: 2,
		name: 'Sai Kumar',
		email: 'sai.kumar@example.com',
		age: 25,
		role: 'Editor',
		created_at: '2024-05-15',
	},
	{
		id: 3,
		name: 'Deepika Rao',
		email: 'deepika@example.com',
		age: 32,
		role: 'Viewer',
		created_at: '2024-04-21',
	},
	{
		id: 4,
		name: 'Rahul Verma',
		email: 'rahulv@example.com',
		age: 27,
		role: 'Admin',
		created_at: '2024-03-11',
	},
];

const priestPersonalDummyData: PriestPersonalDetailsProps[] = [
	{
		nameOfThePriests: 'Fr. Albin Justus P',
		image: '/images/admin.png',
		presentPosition: 'Parish Priest ( Veppur Parish )',
		ordinationDate: '1982-05-05',
		birthDate: '1953-10-14',
		livingStatus: 'Alive',
		mobileNumber: '9943244643',
		optionalMobileNumber: '',
		mailId: '',
		nativePlace: '',
		adhaarNumber: '',
		presentResidential: '',
	},
	{
		nameOfThePriests: 'Fr. Anandaraj A',
		image: '/images/admin.png',
		presentPosition: 'Parish Priest ( Melpudupakkam Parish )',
		ordinationDate: '2015-04-24',
		birthDate: '1984-08-27',
		livingStatus: 'Alive',
		mobileNumber: '9677570954',
		optionalMobileNumber: '',
		mailId: 'anandamvlr@gmail.com',
		nativePlace: 'BOOTHAMANGALAM',
		adhaarNumber: '540681715693',
		presentResidential:
			'S/O ABRAHAM, 381, PILLAIYAR KOIL STREET, BOOTHAMANGALAM POST, DEVIGAPURAM VIA, TIRUVANNAMALAI DT.,M - 606902',
	},
	{
		nameOfThePriests: 'Fr. Anandaraj S M',
		image: '/images/admin.png',
		presentPosition: 'Parish Priest ( Arakkonam Parish ), VF ( ARAKONAM VICARIATE )',
		ordinationDate: '1997-02-16',
		birthDate: '1965-02-07',
		livingStatus: 'Alive',
		mobileNumber: '9445334335',
		optionalMobileNumber: '',
		mailId: 'smari_anandaraj@yahoo.co.uk',
		nativePlace: '',
		adhaarNumber: '',
		presentResidential: '',
	},
];

export { religious_people_pages, priests, type PriestProps, userData, type User, priestPersonalDummyData };
