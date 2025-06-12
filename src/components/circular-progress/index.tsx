import type { CircularProgressProps } from '@/types';
import React, { useEffect, useState } from 'react';

const CircularProgress: React.FC<CircularProgressProps> = ({
	size = 120,
	strokeWidth = 4,
	color = 'text-primary',
	speed = 20,
}) => {
	const [value, setValue] = useState(0);

	const radius = (size - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference - (value / 100) * circumference;

	useEffect(() => {
		const interval = setInterval(() => {
			setValue((prev) => {
				if (prev >= 100) {
					clearInterval(interval);
					return 100;
				}
				return prev + 1;
			});
		}, speed);

		return () => clearInterval(interval);
	}, [speed]);

	return (
		<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
			<circle
				className="text-gray-300"
				strokeWidth={strokeWidth}
				stroke="currentColor"
				fill="transparent"
				r={radius}
				cx={size / 2}
				cy={size / 2}
			/>
			<circle
				className={color}
				strokeWidth={strokeWidth}
				strokeDasharray={circumference}
				strokeDashoffset={offset}
				strokeLinecap="round"
				stroke="currentColor"
				fill="transparent"
				r={radius}
				cx={size / 2}
				cy={size / 2}
			/>
			<text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="text-sm fill-current text-primary">
				{`${value}%`}
			</text>
		</svg>
	);
};

export default CircularProgress;
