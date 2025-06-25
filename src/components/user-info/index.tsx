import { Link } from 'react-router-dom';
import { TodayDate, CircularProgress, LogoutButton } from '../index';

interface UserInfoProps {
	userName: string;
	userEmail: string;
}

const UserInfo = ({ userName, userEmail }: UserInfoProps) => {
	return (
		<div className="p-5 shadow-sm">
			<div className="flex flex-col">
				<TodayDate />
				<div className="text-sm ">
					Welcome Father, <strong>{userName}</strong>
				</div>

				<div className="mt-1 mb-2 text-sm text-[#a8926c]">{userEmail}</div>
			</div>

			<div className="flex items-center justify-between mt-4">
				<div className="flex items-center ">
					<CircularProgress size={60} />
					<Link className="ml-3 text-sm animate-out hover:underline" to="/profile">
						View Profile
					</Link>
				</div>

				<LogoutButton />
			</div>
		</div>
	);
};

export default UserInfo;
