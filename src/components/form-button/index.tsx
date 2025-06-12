import type { FormButtonProps } from '@/types';
import { Button } from '../ui/button';

const FormButton: React.FC<FormButtonProps> = ({ label = 'upload', onClick }) => {
	return (
		<Button
			onClick={onClick}
			className="text-[#d7c49e] bg-[#343148] text-[12px] border-none w-[90px] mt-5 mr-2 px-4 py-1 text-center transition duration-500 rounded-none float-left hover:text-[#343148] hover:bg-[#d7c49e] hover:cursor-pointer"
		>
			{label}
		</Button>
	);
};

export default FormButton;
