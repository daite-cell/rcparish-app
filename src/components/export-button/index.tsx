import { ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';

const ExportButton = () => {
	return (
		<Button className="text-[#d7c49e] bg-[#343148] text-[12px] border-none min-w-[90px]  mr-2 px-4 py-1 text-center transition duration-500 rounded-none  hover:text-[#343148] hover:bg-[#d7c49e] hover:cursor-pointer">
			Export <ChevronDown className="w-4 h-4" />
		</Button>
	);
};

export default ExportButton;
