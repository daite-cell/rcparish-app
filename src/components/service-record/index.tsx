import DynamicDataTable from '../dynamic-table';
interface ServiceRecordProps {
	serviceData?: Array<{
		serviceAs: string;
		details: string;
		status: string;
		category: string;
		placeOrParishName: string;
		churchOrInstitutionName: string;
		from: string;
		till: string;
		remark: string;
	}>;
}

const priestServiceData = [
	{
		serviceAs: 'Parish Priest',
		details: 'Veppur Parish',
		status: 'Present',
		category: 'Parish Priest',
		placeOrParishName: 'Veppur Parish',
		churchOrInstitutionName: 'Holy Cross Church',
		from: '2020-06-01',
		till: 'Till Now',
		remark: '',
	},

	{
		serviceAs: 'Assistant Parish Priest',
		details: 'Chennai Parish',
		status: 'Past',
		category: 'Parish Service',
		placeOrParishName: 'Chennai Parish',
		churchOrInstitutionName: 'St. Mary’s Church',
		from: '2016-01-01',
		till: '2020-05-31',
		remark: 'Transferred',
	},
];

const ServiceRecord = ({ serviceData = priestServiceData }: ServiceRecordProps) => {
	return (
		<div className="px-4">
			<h1 className=" font-bold text-xs uppercase text-black  py-4">Service record</h1>
			<DynamicDataTable data={serviceData} isDynamic={false} tableId="service-record" />
		</div>
	);
};

export default ServiceRecord;
