import { ButtonActions } from '@/components';
import { useStore } from '@/store/store';

interface PriorityDignitariesTableProps {
	children: React.ReactNode;
	enableClose?: boolean;
	heading?: string;
}

const PriorityDignitariesTableLayout = ({ children, enableClose, heading }: PriorityDignitariesTableProps) => {
	const { handleCloseRow } = useStore();
	const handlePrint = () => {
		if (typeof window !== 'undefined' && window.print) {
			window.print();
		} else {
			console.error('Error printing page');
		}
	};

	return (
		<div className="flex flex-col print-area">
			{heading && <h1 className="text-5xl my-6 hidden print:block">{heading}</h1>}
			<ButtonActions onPrint={handlePrint} onClose={handleCloseRow} enableClose={enableClose} />
			{children}
		</div>
	);
};

export default PriorityDignitariesTableLayout;
