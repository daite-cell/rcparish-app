import { Button } from '../ui/button';

const LogoutButton = () => {
	return (
		<Button
			variant="outline"
			className="h-8 text-sm bg-transparent rounded-none hover:bg-primary hover:text-white text-primary border-primary"
			aria-label="Logout"
		>
			Logout
		</Button>
	);
};

export default LogoutButton;
