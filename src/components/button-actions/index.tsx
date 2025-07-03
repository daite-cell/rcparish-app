import FormButton from '../form-button';

interface ButtonActionsProps {
	onPrint: () => void;
	onClose: () => void;
	enableClose?: boolean;
}

const ButtonActions = ({ onPrint, onClose, enableClose = true }: ButtonActionsProps) => (
	<div className="flex justify-end w-[98%] my-3.5 no-print">
		<FormButton label="print" onClick={onPrint} />
		{enableClose && <FormButton label="close" onClick={onClose} />}
	</div>
);
export default ButtonActions;
