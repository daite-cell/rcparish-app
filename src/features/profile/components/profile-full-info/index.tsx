import { UserDetailItem } from '@/components';
import { memo } from 'react';

const userData = {
	name: 'Fr. Gnanasekar S A',
	parishName: 'Perumanam Parish',
	vicariateName: 'Thiruvannamalai',
	churchName: 'Christ the King Church',
	email: 'sagsekar82@gmail.com',
	mobile: '9600391303',
};

const displayData = [
	{ label: 'Name', value: userData.name },
	{ label: 'Parish Name', value: userData.parishName },
	{ label: 'Vicariate Name', value: userData.vicariateName },
	{ label: 'Church Name', value: userData.churchName },
	{ label: 'Email Id', value: userData.email },
	{ label: 'Mobile Number', value: userData.mobile },
];
const ProfileFullInfo = memo(() => {
	return (
		<div className="mt-5">
			{displayData.map((item, index) => (
				<UserDetailItem key={index} label={item.label} value={item.value} />
			))}
		</div>
	);
});

export default ProfileFullInfo;
