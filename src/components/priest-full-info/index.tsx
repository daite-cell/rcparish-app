import type { PriestFullInfoProps } from '@/types';
import AdminDefaultImage from '../admin-default-image';
import InfoRow from '../info-row';
import ServiceRecord from '../service-record';
import { useRef } from 'react';
import AppNavHeader from '../app-nav-header';
import FormButton from '../form-button';

const PriestFullInfo = ({
	name,
	priestFrom,
	ordinationDate,
	birthDate,
	livingStatus,
	nativePlace,
	aadhaarNumber,
	phoneNumber,
	email,
	address,
}: PriestFullInfoProps) => {
	const personalInfo = {
		'Priest From': priestFrom,
		'Ordination Date': ordinationDate,
		'Birth Date': birthDate,
		'Living Status': livingStatus,
		'Native Place': nativePlace,
	};
	const contactInfo = {
		'Aadhaar Number': aadhaarNumber,
		'Phone Number': phoneNumber,
		Email: email,
		Address: address,
	};

	const printRef = useRef<HTMLDivElement>(null);

	const handlePrint = () => {
		window.print();
	};
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
						<h1 className="font-bold text-3xl text-[#998c70] mb-4">{name}</h1>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							<div>
								{Object.entries(personalInfo).map(([label, value]) => (
									<InfoRow key={label} label={label} value={value} />
								))}
							</div>
							<div>
								{Object.entries(contactInfo).map(([label, value]) => (
									<InfoRow key={label} label={label} value={value} />
								))}
							</div>
						</div>
					</div>
				</div>
				<ServiceRecord />
			</div>
		</div>
	);
};

export default PriestFullInfo;
