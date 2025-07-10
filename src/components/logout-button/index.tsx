import { Button } from '../ui/button';
import React from 'react';

interface LogoutButtonProps {
	onLogout?: () => void | Promise<void>;
	isLoading?: boolean;
	className?: string;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout, isLoading = false, className = '' }) => {
	const handleClick = React.useCallback(() => onLogout?.(), [onLogout]);

	return (
		<Button
			variant="outline"
			onClick={handleClick}
			disabled={isLoading}
			className={`h-8 text-sm bg-transparent rounded-none text-primary border-primary hover:bg-primary hover:text-white ${className}`}
			aria-label="Logout"
		>
			{isLoading ? 'Logging out...' : 'Logout'}
		</Button>
	);
};

export default LogoutButton;
