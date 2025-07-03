import type { BishopPositionTableProps } from '@/types';

const diocese_rules_heading = {
	fhc_canal_rule: 'BAPTISM RULE OF CANON LAW',
	baptism_canal_rule: 'FIRST HOLY COMMUNION RULE OF CANON LAW',
	confirmation_canal_rule: 'CONFIRMATION RULE OF CANON LAW',
	marriage_canal_rule: 'MARRIAGE RULE OF CANON LAW',
	anointing_canal_rule: 'ANOINTING THE SICK RULE OF CANON LAW',
	funeral_canal_rule: 'FUNERAL PROCEDURE RULE OF CANON LAW',
	confession_canal_rule: 'CONFESSION RULE OF CANON LAW',
	mass_offerings_canal_rule: 'MASS OFFERING RULE OF CANON LAW',
	penal_canal_rule: 'PENAL SANCTION RULE OF CANON LAW',
	priest_duty_rule: 'PRIEST DUTY RULE',
	general_duty_rule: 'DUTY OF PRIEST',
};

const bishopPositionData: BishopPositionTableProps[] = [
	{
		position: 'Bishop',
		name: 'Most Rev Fr. Ambrose Picharmuthu',
		from: '2024-12-09',
		to: 'Till Now',
		mobile: '9486424008',
		briefHistory: '-',
		upload: 'VDP0001',
	},
	{
		position: 'Bishop',
		name: 'Most Rev Fr. Dr Soundararaju SDB',
		from: '2006-08-24',
		to: '2020-03-21',
		mobile: '',
		briefHistory: '-',
		upload: 'VDP0171',
	},
	{
		position: 'Bishop',
		name: 'Most Rev Fr. Dr Chinnappa A M SDB',
		from: '1995-01-25',
		to: '2005-03-31',
		mobile: '',
		briefHistory: '-',
		upload: 'VDP0170',
	},
	{
		position: 'Bishop',
		name: 'Most Rev. Fr. Dr Michael Augustine S SDB',
		from: '1981-07-24',
		to: '2017-11-04',
		mobile: '',
		briefHistory: '-',
		upload: 'VDP0169',
	},
	{
		position: 'Bishop',
		name: 'Most Rev Fr. Rayappan Antony Muthu SDB',
		from: '1971-04-21',
		to: '1980-12-19',
		mobile: '',
		briefHistory: '-',
		upload: 'VDP0168',
	},
	{
		position: 'Bishop',
		name: 'Most Rev Fr. David Marianayagam S SDB',
		from: '1959-09-09',
		to: '1980-07-16',
		mobile: '',
		briefHistory: '-',
		upload: 'VDP0167',
	},
	{
		position: 'Bishop',
		name: 'Most Rev Fr. Dr Paul Mariaselvam SDB',
		from: '1953-03-19',
		to: '1954-06-25',
		mobile: '',
		briefHistory: '-',
		upload: 'VDP0166',
	},
];

export { diocese_rules_heading, bishopPositionData };
