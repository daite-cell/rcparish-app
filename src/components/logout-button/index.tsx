import { Button } from '../ui/button';
import React from 'react';

interface LogoutButtonProps {
	onLogout?: () => void | Promise<void>;
	isLoading?: boolean;
	className?: string;
}

const LogoutButton = React.memo(({ onLogout, isLoading = false, className = '' }: LogoutButtonProps) => {
	const handleClick = React.useCallback(() => onLogout?.(), [onLogout]);

	return (
		<Button
			variant="outline"
			onClick={handleClick}
			disabled={isLoading}
			className={`h-7 text-xs font-normal bg-transparent rounded-none text-primary border-primary hover:bg-primary hover:text-white ${className}`}
			aria-label="Logout"
		>
			{isLoading ? 'Logging out...' : 'Logout'}
		</Button>
	);
});

export default LogoutButton;
