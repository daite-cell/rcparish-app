import { memo } from 'react';
import { CircularProgress, LogoutButton, TodayDate } from '@/components';
import ProfileFullInfo from '../profile-full-info';

const ProfileContainer = memo(() => {
	return (
		<div className="p-5 text-[#a8926c]">
			<TodayDate />
			<div>
				<h1 className="text-xs font-bold">PROFILE</h1>
				<h1 className="mt-5 text-xs font-bold">Profile Access Status</h1>
				<div className="flex items-center gap-6 my-4">
					<CircularProgress strokeWidth={8} size={80} />
					<h1 className="text-xs ">PROFILE ACCESSED</h1>
				</div>
				<ProfileFullInfo />
				<div className="flex justify-end w-full mt-5 ">
					<LogoutButton />
				</div>
			</div>
		</div>
	);
});

export default ProfileContainer;
