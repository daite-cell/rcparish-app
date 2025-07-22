const categoryOptions = [
	{ label: 'Schools', value: 'Schools' },
	{ label: 'Technical Institute', value: 'Technical Institute' },
	{ label: 'Study Centre', value: 'Study Centre' },
	{ label: 'Colleges', value: 'Colleges' },
	{ label: 'Homage', value: 'Homage' },
	{ label: 'Orphanage', value: 'Orphanage' },
	{ label: 'Health Institutes', value: 'Health Institutes' },
	{ label: 'Hostels', value: 'Hostels' },
	{ label: 'Boardings', value: 'Boardings' },
];
const schoolTypeOptions = [
	{ label: 'Diocesan Schools', value: 'Diocesan Schools' },
	{ label: 'Religious (TAM)', value: 'Religious (TAM)' },
	{ label: 'Religious (ENG)', value: 'Religious (ENG)' },
];

const diocesanCategoryOptions = [
	{ label: 'Diocesan Elementary', value: 'Diocesan Elementary' },
	{ label: 'Diocesan Middle', value: 'Diocesan Middle' },
	{ label: 'Diocesan HS', value: 'Diocesan HS' },
	{ label: 'Diocesan Hr Sec', value: 'Diocesan Hr Sec' },
	{ label: 'Diocesan CBSC', value: 'Diocesan CBSC' },
	{ label: 'Diocesan (TAM)', value: 'Diocesan (TAM)' },
	{ label: 'Diocesan (ENG)', value: 'Diocesan (ENG)' },
];

const landOwnershipOptions = [
	{ label: 'Diocese', value: 'Diocese' },
	{ label: 'Congregation', value: 'Congregation' },
	{ label: 'Others', value: 'Others' },
];

const classOptions = [
	{ label: 'LKG', value: 'LKG' },
	{ label: 'UKG', value: 'UKG' },
	{ label: '1st', value: '1st' },
	{ label: '2nd', value: '2nd' },
	{ label: '3rd', value: '3rd' },
	{ label: '4th', value: '4th' },
	{ label: '5th', value: '5th' },
	{ label: '6th', value: '6th' },
	{ label: '7th', value: '7th' },
	{ label: '8th', value: '8th' },
	{ label: '9th', value: '9th' },
	{ label: '10th', value: '10th' },
	{ label: '11th', value: '11th' },
	{ label: '12th', value: '12th' },
];

const genderOptions = [
	{ label: 'Boys', value: 'Boys' },
	{ label: 'Girls', value: 'Girls' },
	{ label: 'Co-Ed', value: 'Co-Ed' },
	{ label: 'Mingle', value: 'Mingle' },
];

const classUptoOptions = [...classOptions];

const runByOptions = [
	{ label: 'Diocese', value: 'Diocese' },
	{ label: 'Religious (Nun)', value: 'Religious (Nun)' },
	{ label: 'Religious (Men)', value: 'Religious (Men)' },
	{ label: 'Congregation', value: 'Congregation' },
];

const mediumOptions = [
	{ label: 'Tamil', value: 'Tamil' },
	{ label: 'English', value: 'English' },
	{ label: 'Dual Language', value: 'Dual Language' },
];

const managementOptions = [
	{ label: 'Fully Aided', value: 'Fully Aided' },
	{ label: 'Partially Aided', value: 'Partially Aided' },
	{ label: 'Self Finance', value: 'Self Finance' },
];

const belongsToOptions = [
	{ label: 'Diocese', value: 'Diocese' },
	{ label: 'Religious (Nun)', value: 'Religious (Nun)' },
	{ label: 'Religious (Men)', value: 'Religious (Men)' },
];

const seminaryOptions = [
	{ label: 'Minor seminary', value: '0' },
	{ label: 'Philosophy', value: '1' },
	{ label: 'Theology', value: '2' },
	{ label: 'Noviciate', value: '3' },
	{ label: 'Generalate', value: '4' },
];

const subStationOptions = [
	{ label: 'Perumanam Parish', value: 'S01' },
	{ label: 'Panayur', value: 'S02' },
	{ label: 'Chinnappa Nagar', value: 'S03' },
	{ label: 'T. Kallery', value: 'S04' },
	{ label: 'Samukkudayampattu', value: 'S05' },
];

const conventTypeOptions = [
	{ label: 'Convent For Nun', value: '0' },
	{ label: 'Convent For Priest', value: '1' },
	{ label: 'Presbytery', value: '2' },
];

const congregationOptions = [
	{ label: 'Apostolic Carmel (AC)', value: 'Apostolic Carmel (AC)' },
	{
		label: 'Benedictine Sisters of Our Lady of Grace & Compassion (OSB)',
		value: 'Benedictine Sisters of Our Lady of Grace & Compassion (OSB)',
	},
	{ label: 'Bridgettine Sisters (OSSS)', value: 'Bridgettine Sisters (OSSS)' },
	{
		label: 'Congregation of the Immaculate Conception (CIC)',
		value: 'Congregation of the Immaculate Conception (CIC)',
	},
	{
		label: 'Congregation of the Sisters of Theresian Carmelites (CTC)',
		value: 'Congregation of the Sisters of Theresian Carmelites (CTC)',
	},
	{ label: 'Carmelite Sisters of St. Theresa (CSST)', value: 'Carmelite Sisters of St. Theresa (CSST)' },
	{ label: 'Daughters of Mary Help of Christians (FMA)', value: 'Daughters of Mary Help of Christians (FMA)' },
	{ label: 'Daughters of Charity St. Vincent (DC)', value: 'Daughters of Charity St. Vincent (DC)' },
	{ label: 'Daughters of Mary (DM)', value: 'Daughters of Mary (DM)' },
	{ label: 'Dominican Sisters (DS)', value: 'Dominican Sisters (DS)' },
	{
		label: 'Franciscan Sisters of Our lady of Bon Succours (FBS)',
		value: 'Franciscan Sisters of Our lady of Bon Succours (FBS)',
	},
	{
		label: 'Franciscan Sisters of Immaculate Heart of Mary(FIHM)',
		value: 'Franciscan Sisters of Immaculate Heart of Mary(FIHM)',
	},
	{ label: 'Franciscan Sisters of Aloysius Gonzaga (FSAG)', value: 'Franciscan Sisters of Aloysius Gonzaga (FSAG)' },
	{ label: 'Franciscan Sisters of St. Joseph (FSJ)', value: 'Franciscan Sisters of St. Joseph (FSJ)' },
	{
		label: 'Franciscan Sisters of Immaculate Heart of Mary of Quilon (FSIHM)',
		value: 'Franciscan Sisters of Immaculate Heart of Mary of Quilon (FSIHM)',
	},
	{
		label: 'Franciscan Sisters of Presentation of BVM (FSPM)',
		value: 'Franciscan Sisters of Presentation of BVM (FSPM)',
	},
	{ label: 'Missionaries of Charity (MC)', value: 'Missionaries of Charity (MC)' },
	{
		label: 'Medical Mission Secular Institute of St. Thomas (MMSI)',
		value: 'Medical Mission Secular Institute of St. Thomas (MMSI)',
	},
	{ label: 'Poor Clares of Perpetual Adorations (PCPA)', value: 'Poor Clares of Perpetual Adorations (PCPA)' },
	{ label: 'Servants of Mary (OSM)', value: 'Servants of Mary (OSM)' },
	{ label: 'Seva Missionary Sisters (SMS)', value: 'Seva Missionary Sisters (SMS)' },
	{ label: 'Sisters of Our Lady of the Mission(OLMS)', value: 'Sisters of Our Lady of the Mission(OLMS)' },
	{
		label: 'Sisters of the Adoration of Blessed Sacraments (AS)',
		value: 'Sisters of the Adoration of Blessed Sacraments (AS)',
	},
	{ label: 'Sisters of St. Annes of Trichirappalli (SAT)', value: 'Sisters of St. Annes of Trichirappalli (SAT)' },
	{ label: 'Sisters of St. Charles Borromeo (SCB)', value: 'Sisters of St. Charles Borromeo (SCB)' },
	{ label: 'Sisters of Cross of Chavanad (SCC)', value: 'Sisters of Cross of Chavanad (SCC)' },
	{ label: 'Sisters of the Destitute (SD)', value: 'Sisters of the Destitute (SD)' },
	{ label: 'Sisters of St. Joseph of Cluny (SJC)', value: 'Sisters of St. Joseph of Cluny (SJC)' },
	{ label: 'Sisters of Maria Auxilium (SMA)', value: 'Sisters of Maria Auxilium (SMA)' },
	{ label: 'Sisters of the Sacred Heart of Jesus (SSHJ)', value: 'Sisters of the Sacred Heart of Jesus (SSHJ)' },
	{ label: 'Society of Sisters of St. Annes (SSA)', value: 'Society of Sisters of St. Annes (SSA)' },
	{ label: 'Others', value: 'Others' },
];
export const conventTypes = [
	{ label: 'Convent For Nun', value: 'nun' },
	{ label: 'Convent For Priest', value: 'priest' },
	{ label: 'Presbytery', value: 'presbytery' },
];

const abbreviationOptions = [
	{ label: 'AC', value: 'AC' },
	{ label: 'OSB', value: 'OSB' },
	{ label: 'OSSS', value: 'OSSS' },
	{ label: 'CIC', value: 'CIC' },
	{ label: 'CTC', value: 'CTC' },
	{ label: 'CSST', value: 'CSST' },
	{ label: 'FMA', value: 'FMA' },
	{ label: 'DC', value: 'DC' },
	{ label: 'DM', value: 'DM' },
	{ label: 'DS', value: 'DS' },
	{ label: 'FBS', value: 'FBS' },
	{ label: 'FIHM', value: 'FIHM' },
	{ label: 'FSAG', value: 'FSAG' },
	{ label: 'FSJ', value: 'FSJ' },
	{ label: 'FSIHM', value: 'FSIHM' },
	{ label: 'FSPM', value: 'FSPM' },
	{ label: 'MC', value: 'MC' },
	{ label: 'MMSI', value: 'MMSI' },
	{ label: 'PCPA', value: 'PCPA' },
	{ label: 'OSM', value: 'OSM' },
	{ label: 'SMS', value: 'SMS' },
	{ label: 'OLMS', value: 'OLMS' },
	{ label: 'AS', value: 'AS' },
	{ label: 'SAT', value: 'SAT' },
	{ label: 'SCB', value: 'SCB' },
	{ label: 'SCC', value: 'SCC' },
	{ label: 'SD', value: 'SD' },
	{ label: 'SJC', value: 'SJC' },
	{ label: 'SMA', value: 'SMA' },
	{ label: 'SSHJ', value: 'SSHJ' },
	{ label: 'SSA', value: 'SSA' },
	{ label: 'Others', value: 'Others' },
];

export {
	categoryOptions,
	schoolTypeOptions,
	diocesanCategoryOptions,
	landOwnershipOptions,
	classOptions,
	genderOptions,
	classUptoOptions,
	runByOptions,
	mediumOptions,
	managementOptions,
	belongsToOptions,
	seminaryOptions,
	subStationOptions,
	conventTypeOptions,
	congregationOptions,
	abbreviationOptions,
};
