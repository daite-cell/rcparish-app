import { useRef } from 'react';
import type { PriestPersonalDetailsProps } from '@/types';
import AdminDefaultImage from '../admin-default-image';
import InfoRow from '../info-row';
import ServiceRecord from '../service-record';
import AppNavHeader from '../app-nav-header';
import FormButton from '../form-button';
import { useStore } from '@/store/store';
import { toTitleCaseFromSnake } from '@/utils/toTitleCaseFromSnake';

const createPersonalInfo = (selectRow: PriestPersonalDetailsProps) => ({
	priest_from: 'Diocese',
	ordination_date: selectRow?.ordinationDate || '',
	birth_date: selectRow?.birthDate || '',
	living_status: selectRow?.livingStatus || '',
	native_place: selectRow?.nativePlace || '',
});

const createContactInfo = (selectRow: PriestPersonalDetailsProps) => ({
	adhaar_number: selectRow?.adhaarNumber || '',
	phone_number: selectRow?.mobileNumber || '',
	email: selectRow?.mailId || '',
	address: selectRow?.presentResidential || '',
});

const GenericMemberPersonalInfo = () => {
	const selectRow = useStore((state) => state.selectRow) as PriestPersonalDetailsProps;
	const printRef = useRef<HTMLDivElement>(null);

	const handlePrint = () => {
		window.print();
	};
	if (!selectRow) {
		return <div className="p-6 text-center">No data found</div>;
	}

	return (
		<div className="w-full">
			<div className="w-full flex justify-end ">
				<FormButton label="print" onClick={handlePrint} className="no-print " />
			</div>
			<div ref={printRef} id="parish-info" className="border border-gray-300  overflow-hidden mt-5 print-area">
				<div className="hidden print:block">
					<AppNavHeader />
				</div>
				<div className="border-b border-gray-300 bg-gray-50 px-4 py-3">
					<h1 className="font-bold text-xs uppercase text-black">Profile</h1>
				</div>
				<div className="flex flex-col md:flex-row gap-6 p-6 border-b border-gray-300">
					<div className="flex-1 flex items-start justify-center">
						<AdminDefaultImage height={200} width={200} />
					</div>
					<div className="flex-[2] ">
						<h1 className="font-bold text-3xl text-[#998c70] mb-4">{selectRow?.nameOfThePriests || ''}</h1>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							{[createPersonalInfo(selectRow), createContactInfo(selectRow)].map((info, i) => (
								<div key={i}>
									{Object.entries(info).map(([label, value]) => (
										<InfoRow key={label} label={toTitleCaseFromSnake(label)} value={value} />
									))}
								</div>
							))}
						</div>
					</div>
				</div>
				<ServiceRecord />
			</div>
		</div>
	);
};

export default GenericMemberPersonalInfo;
