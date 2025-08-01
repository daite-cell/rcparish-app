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

const rentTypeOptions = [
	{ label: 'Rent', value: 'Rent' },
	{ label: 'Lease', value: 'Lease' },
];

const shopTypeOptions = [
	{ label: 'Shop', value: 'Shop' },
	{ label: 'House', value: 'House' },
	{ label: 'Community Hall', value: 'Community Hall' },
	{ label: 'Other', value: 'Other' },
];

const propertyOwnerOptions = [
	{ label: 'Parish', value: 'Parish' },
	{ label: 'Association', value: 'Association' },
	{ label: 'Diocese', value: 'Diocese' },
	{ label: 'Other', value: 'Other' },
];

const maintainedByOptions = [
	{ label: 'Bishop', value: '0' },
	{ label: 'Parish Priest', value: '1' },
	{ label: 'President of the Association', value: '2' },
	{ label: 'Others', value: '3' },
];

const maintainedByParishOptions = [
	{ label: 'Alapakkam Parish', value: 'Alapakkam Parish' },
	{ label: 'Arakkonam Parish', value: 'Arakkonam Parish' },
	{ label: 'Arcot Parish (Capuchins)', value: 'Arcot Parish (Capuchins)' },
	{ label: 'Chengalpattu Parish', value: 'Chengalpattu Parish' },
	{ label: 'Chitlapakkam Parish', value: 'Chitlapakkam Parish' },
	{ label: 'Chetpet Parish (Capuchins)', value: 'Chetpet Parish (Capuchins)' },
	{ label: 'Desur Parish (Jesuits)', value: 'Desur Parish (Jesuits)' },
	{ label: 'Gandhinagar Parish', value: 'Gandhinagar Parish' },
	{ label: 'Iruppukuricy Parish', value: 'Iruppukuricy Parish' },
	{ label: 'Kadambathur Parish', value: 'Kadambathur Parish' },
	{ label: 'Kancheepuram Parish', value: 'Kancheepuram Parish' },
	{ label: 'Kilachery Parish', value: 'Kilachery Parish' },
	{ label: 'Kolappanchery Parish', value: 'Kolappanchery Parish' },
	{ label: 'Kolathur Parish', value: 'Kolathur Parish' },
	{ label: 'Kosapet Parish', value: 'Kosapet Parish' },
	{ label: 'Maduranthagam Parish', value: 'Maduranthagam Parish' },
	{ label: 'Mandaveli Parish', value: 'Mandaveli Parish' },
	{ label: 'Manapakkam Parish', value: 'Manapakkam Parish' },
	{ label: 'Manavalanagar Parish', value: 'Manavalanagar Parish' },
	{ label: 'Maraimalai Nagar Parish', value: 'Maraimalai Nagar Parish' },
	{ label: 'Nanmangalam Parish', value: 'Nanmangalam Parish' },
	{ label: 'Nazarethpet Parish', value: 'Nazarethpet Parish' },
	{ label: 'Neervalur Parish', value: 'Neervalur Parish' },
	{ label: 'Nesapakkam Parish', value: 'Nesapakkam Parish' },
	{ label: 'Padi Parish', value: 'Padi Parish' },
	{ label: 'Padappai Parish', value: 'Padappai Parish' },
	{ label: 'Palanchur Parish', value: 'Palanchur Parish' },
	{ label: 'Palavakkam Parish', value: 'Palavakkam Parish' },
	{ label: 'Palayaseevaram Parish', value: 'Palayaseevaram Parish' },
	{ label: 'Pallavaram Parish', value: 'Pallavaram Parish' },
	{ label: 'Pammal Parish', value: 'Pammal Parish' },
	{ label: 'Panruti Parish (OFM Cap)', value: 'Panruti Parish (OFM Cap)' },
	{ label: 'Perungalathur Parish', value: 'Perungalathur Parish' },
	{ label: 'Perungudi Parish', value: 'Perungudi Parish' },
	{ label: 'Perur Parish', value: 'Perur Parish' },
	{ label: 'Poonamallee Parish', value: 'Poonamallee Parish' },
	{ label: 'Porur Parish', value: 'Porur Parish' },
	{ label: 'Ramanjeri Parish', value: 'Ramanjeri Parish' },
	{ label: 'Redhills Parish', value: 'Redhills Parish' },
	{ label: 'Santhome Cathedral Parish', value: 'Santhome Cathedral Parish' },
	{ label: 'Sembakkam Parish', value: 'Sembakkam Parish' },
	{ label: 'Sithalapakkam Parish', value: 'Sithalapakkam Parish' },
	{ label: 'Sriperumbudur Parish', value: 'Sriperumbudur Parish' },
	{ label: 'St. Anthony’s Shrine, Broadway Parish', value: 'St. Anthony’s Shrine, Broadway Parish' },
	{ label: 'St. Joseph’s Shrine, Poonamallee Parish', value: 'St. Joseph’s Shrine, Poonamallee Parish' },
	{ label: 'St. Mary’s Co-Cathedral Parish, Chennai', value: 'St. Mary’s Co-Cathedral Parish, Chennai' },
	{ label: 'St. Thomas Mount Parish', value: 'St. Thomas Mount Parish' },
	{ label: 'Tambaram Parish', value: 'Tambaram Parish' },
	{ label: 'Thandarai Parish', value: 'Thandarai Parish' },
	{ label: 'Thiruninravur Parish', value: 'Thiruninravur Parish' },
	{ label: 'Thiruvallur Parish', value: 'Thiruvallur Parish' },
	{ label: 'Thiruvanmiyur Parish', value: 'Thiruvanmiyur Parish' },
	{ label: 'Thiruvotriyur Parish', value: 'Thiruvotriyur Parish' },
	{ label: 'Thozhupedu Parish', value: 'Thozhupedu Parish' },
	{ label: 'Tindivanam Parish', value: 'Tindivanam Parish' },
	{ label: 'Uthiramerur Parish', value: 'Uthiramerur Parish' },
	{ label: 'Vandavasi Parish', value: 'Vandavasi Parish' },
	{ label: 'Vellavedu Parish', value: 'Vellavedu Parish' },
	{ label: 'Villivakkam Parish', value: 'Villivakkam Parish' },
	{ label: 'Vyasarpadi Parish', value: 'Vyasarpadi Parish' },
];

const churchInventoryCategoryOptions = [
	{ label: 'Garments and Vestments', value: 'Garments and Vestments' },
	{ label: 'Electric Appliances', value: 'Electric Appliances' },
	{ label: 'Audio Systems', value: 'Audio Systems' },
	{ label: 'Furniture - Wood Material Based', value: 'Furniture - Wood Material Based' },
	{ label: 'Furniture - Steel and Iron Based', value: 'Furniture - Steel and Iron Based' },
	{ label: 'Statue', value: 'Statue' },
	{ label: 'Instruments', value: 'Instruments' },
	{ label: 'Glass Items', value: 'Glass Items' },
	{ label: 'Decoration Things', value: 'Decoration Things' },
	{ label: 'Others', value: 'Others' },
];

const buyerTypeOptions = [
	{ label: 'Purchased', value: 'Purchased' },
	{ label: 'Sponsored', value: 'Sponsored' },
];

const ownForOptions = [
	{ label: 'Parish', value: 'Parish' },
	{ label: 'Parish Priest', value: 'Parish Priest' },
	{ label: 'Diocese', value: 'Diocese' },
];
const otherInventoryCategoryOptions = [
	{ label: 'Vehicles', value: '0' },
	{ label: 'Electric Appliances', value: '1' },
	{ label: 'Furniture', value: '2' },
	{ label: 'Home Appliances', value: '3' },
	{ label: 'Furniture - Steel and Iron Based', value: '4' },
	{ label: 'Kitchen Accessories', value: '5' },
	{ label: 'Others', value: '6' },
];

const positionsOptions = [
	{ label: 'President', value: 'President' },
	{ label: 'Secretary', value: 'Secretary' },
	{ label: 'Treasurer', value: 'Treasurer' },
	{ label: 'Caller', value: 'Caller' },
	{ label: 'Member', value: 'Member' },
];

const electedStatusOptions = [
	{ label: 'Regular', value: 'Regular' },
	{ label: 'Intermediate', value: 'Intermediate' },
];

const positionRoleOptions = [
	{ label: 'Asst.PP', value: 'Asst.PP' },
	{ label: 'Fr', value: 'Fr' },
	{ label: 'Sup', value: 'Sup' },
	{ label: 'Sr', value: 'Sr' },
	{ label: 'Br', value: 'Br' },
	{ label: 'Dn', value: 'Dn' },
	{ label: 'Rec', value: 'Rec' },
	{ label: 'Nurse', value: 'Nurse' },
	{ label: 'Teacher', value: 'Teacher' },
	{ label: 'Choir Master', value: 'Choir Master' },
	{ label: 'Studying', value: 'Studying' },
	{ label: 'Other', value: 'Other' },
];
const inchargeOptions = [
	{ label: 'Choir', value: 'Choir' },
	{ label: 'Liturgy', value: 'Liturgy' },
	{ label: 'Dispensary', value: 'Dispensary' },
	{ label: 'Social Service', value: 'Social Service' },
	{ label: 'Ministry', value: 'Ministry' },
	{ label: 'Records', value: 'Records' },
	{ label: 'Financial', value: 'Financial' },
	{ label: 'Hospital', value: 'Hospital' },
	{ label: 'School', value: 'School' },
	{ label: 'Catism', value: 'Catism' },
	{ label: 'Other', value: 'Other' },
];

const roofTypeOptions = [
	{ label: 'Concrete Roof', value: 'Concrete Roof' },
	{ label: 'Sheet Roof', value: 'Sheet Roof' },
	{ label: 'Hut', value: 'Hut' },
];

const communityOptions = [
	{ label: 'SC', value: 'SC' },
	{ label: 'BC', value: 'BC' },
	{ label: 'MBC', value: 'MBC' },
	{ label: 'OC', value: 'OC' },
];

const houseOwnershipOptions = [
	{ label: 'Own', value: 'Own' },
	{ label: 'Rent in Private', value: 'Rent in Private' },
	{ label: 'Rent in Diocese', value: 'Rent in Diocese' },
	{ label: 'Living with Childern', value: 'Living with Childern' },
	{ label: 'Living with Parent', value: 'Living with Parent' },
];

const livingStatusOptions = [
	{ label: 'In Parish', value: 'In Parish' },
	{ label: 'In Other Parish', value: 'In Other Parish' },
	{ label: 'Foreign', value: 'Foreign' },
];

const settledAsOptions = [
	{ label: 'Permanent', value: 'Permanent' },
	{ label: 'Temporary', value: 'Temporary' },
];

const activenessOptions = [
	{ label: 'Active', value: 'active' },
	{ label: 'In-Active', value: 'inactive' },
];

const commissionOptions = [
	{ label: 'Pastoral Commissions', value: 'pastoral-commissions' },
	{ label: 'Social Commissions', value: 'social-commissions' },
	{ label: 'Formative Commissions', value: 'formative-commissions' },
	{ label: 'Marriage Tribunal', value: 'marriage-tribunal' },
];

const commissionPositionOptions = [
	{ label: 'Catechism, Catechists & BCC - Pastoral Commissions', value: '5' },
	{ label: 'Evangelization - Pastoral Commissions', value: '14' },
	{ label: 'Bible - Pastoral Commissions', value: '3' },
	{ label: 'Liturgy - Pastoral Commissions', value: '22' },
	{ label: 'Family & Health - Pastoral Commissions', value: '15' },
	{ label: 'Youth - Pastoral Commissions', value: '55' },
	{ label: 'Laity - Pastoral Commissions', value: '20' },
	{ label: 'Dialogue & Ecumenism - Pastoral Commissions', value: '12' },
	{ label: 'Communication - Pastoral Commissions', value: '9' },
	{ label: 'Pious Associations - Pastoral Commissions', value: '30' },
];

const secretaryPositionOptions = [
	{ label: 'Secretary', value: 'Secretary' },
	{ label: 'Join-Secretary', value: 'Join-Secretary' },
];

const categoryFromOptions = [
	{ label: 'Religious Person', value: 'Religious People' },
	{ label: 'Lay Person', value: 'Lay People' },
];

const statusOptions = [
	{ label: 'Present', value: '0' },
	{ label: 'Past', value: '1' },
];

const committeeOptions = [
	{ label: 'Finance Committee', value: '0' },
	{ label: 'Education Committee', value: '1' },
	{ label: 'Pastoral Project Committee', value: '2' },
	{ label: 'Social Project Committee', value: '3' },
];

const housingListParishOptions = [
	{ label: 'Alapakkam Parish', value: 'V01P01' },
	{ label: 'Arakkonam Parish', value: 'V01P02' },
	{ label: 'Arcot Parish (Capuchins)', value: 'V01P03' },
	{ label: 'Haffieldspet Parish', value: 'V01P04' },
	{ label: 'Ranipet Parish', value: 'V01P05' },
	{ label: 'Walajapet Parish', value: 'V01P06' },
	{ label: 'Banavaram Parish', value: 'V02P01' },
	{ label: 'Gudiyatham Parish', value: 'V02P02' },
	{ label: 'Odugathur Parish', value: 'V02P03' },
	{ label: 'Pallikonda Parish', value: 'V02P04' },
	{ label: 'Thiruvalam Parish', value: 'V02P05' },
	{ label: 'Vallimalai Parish', value: 'V02P06' },
	{ label: 'Vellore Town Parish', value: 'V02P07' },
	{ label: 'Veppoor Parish', value: 'V02P08' },
	{ label: 'A.K.Pudur Parish', value: 'V03P01' },
	{ label: 'Chinnasalem Parish', value: 'V03P02' },
	{ label: 'Kallakurichi Parish', value: 'V03P03' },
	{ label: 'Mangalampet Parish', value: 'V03P04' },
	{ label: 'Sankarapuram Parish', value: 'V03P05' },
	{ label: 'Siruvathur Parish', value: 'V03P06' },
	{ label: 'Thiyagadurgam Parish', value: 'V03P07' },
	{ label: 'Chengam Parish', value: 'V04P01' },
	{ label: 'Chetpet Parish', value: 'V04P02' },
	{ label: 'Javvadu Hills Parish', value: 'V04P03' },
	{ label: 'Polur Parish', value: 'V04P04' },
	{ label: 'Thiruvannamalai Parish', value: 'V04P05' },
	{ label: 'Vettavalam Parish', value: 'V04P06' },
	{ label: 'Anilady Parish', value: 'V05P01' },
	{ label: 'Arni Parish', value: 'V05P02' },
	{ label: 'Chethupattu Parish', value: 'V05P03' },
	{ label: 'Kilpennathur Parish', value: 'V05P04' },
	{ label: 'Mattanur Parish', value: 'V05P05' },
	{ label: 'Vandavasi Parish', value: 'V05P06' },
	{ label: 'Periyeri Parish', value: 'V06P01' },
	{ label: 'Veeranam Parish', value: 'V06P02' },
	{ label: 'Virudhachalam Parish', value: 'V06P03' },
	{ label: 'Vazhapadi Parish', value: 'V06P04' },
	{ label: 'Chinna Salem Parish (M)', value: 'V06P05' },
	{ label: 'Perambalur Parish', value: 'V07P01' },
	{ label: 'Kumbakonam Parish', value: 'V07P02' },
	{ label: 'Jayankondam Parish', value: 'V07P03' },
	{ label: 'Srimushnam Parish', value: 'V07P04' },
	{ label: 'Chidambaram Parish', value: 'V07P05' },
	{ label: 'Cuddalore Parish', value: 'V08P01' },
	{ label: 'Panruti Parish', value: 'V08P02' },
	{ label: 'Neyveli Parish', value: 'V08P03' },
	{ label: 'Kurinjipadi Parish', value: 'V08P04' },
	{ label: 'Parangipettai Parish', value: 'V08P05' },
	{ label: 'Zamin Gudalore Parish', value: 'V08P06' },
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
	rentTypeOptions,
	shopTypeOptions,
	propertyOwnerOptions,
	maintainedByOptions,
	maintainedByParishOptions,
	churchInventoryCategoryOptions,
	buyerTypeOptions,
	ownForOptions,
	otherInventoryCategoryOptions,
	positionsOptions,
	electedStatusOptions,
	positionRoleOptions,
	inchargeOptions,
	roofTypeOptions,
	communityOptions,
	houseOwnershipOptions,
	livingStatusOptions,
	settledAsOptions,
	activenessOptions,
	commissionOptions,
	commissionPositionOptions,
	secretaryPositionOptions,
	categoryFromOptions,
	statusOptions,
	committeeOptions,
	housingListParishOptions,
};
