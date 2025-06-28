import FormButton from '../form-button';

interface ButtonActionsProps {
	onPrint: () => void;
	onClose: () => void;
}

const ButtonActions = ({ onPrint, onClose }: ButtonActionsProps) => (
	<div className="flex justify-end w-[98%] my-3.5 no-print">
		<FormButton label="print" onClick={onPrint} />
		<FormButton label="close" onClick={onClose} />
	</div>
);
export default ButtonActions;
