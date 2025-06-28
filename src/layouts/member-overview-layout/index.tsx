import { AppNavHeader, FormButton } from '@/components';
import React, { useRef } from 'react';

const MemberOverviewLayout = ({ children, heading }: { children: React.ReactNode; heading?: string }) => {
	const printRef = useRef<HTMLDivElement>(null);
	const handlePrint = () => {
		window.print();
	};
	return (
		<div className="w-full">
			<div className="w-full flex justify-end ">
				<FormButton label="print" onClick={handlePrint} className="no-print " />
			</div>
			{heading && <h1 className="hidden print:block  font-bold">{heading}</h1>}
			<div ref={printRef} id="parish-info" className="border border-gray-300  overflow-hidden mt-5 print-area">
				<div className="hidden print:block">
					<AppNavHeader />
				</div>
				<div className="border-b border-gray-300 bg-gray-50 px-4 py-3">
					<h1 className="font-bold text-xs uppercase text-black">Profile</h1>
				</div>
				{children}
			</div>
		</div>
	);
};

export default MemberOverviewLayout;
