interface UserDetailItemProps {
	label: string;
	value: string;
}

const UserDetailItem = ({ label, value }: UserDetailItemProps) => {
	return (
		<div className="">
			<h1 className="mt-2 text-xs font-bold text-[#a8926c]">{label}</h1>
			<h1 className=" mt-1 pb-2 border-b border-[rgba(215,196,158,0.1)] text-sm text-primary">
				<strong>{value}</strong>
			</h1>
		</div>
	);
};

export default UserDetailItem;
