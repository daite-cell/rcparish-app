import { ProfileCard } from '@/components';
import { profile_steps_content } from '@/features/profile/data/profile-steps-content';

const Profile = () => {
	return (
		<div className="p-6">
			<div className="">
				{profile_steps_content.map((step, index) => (
					<div key={index} className="my-8">
						<h1 className="text-[#34314880] font-bold underline">{step.section_name} :</h1>
						<div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-6 ">
							{step.steps_content.map((step, index) => (
								<ProfileCard
									key={index}
									step={step.step}
									stepNumber={step.step}
									title={step.title}
									subtitle={step.subtitle}
									pathUrl={step.path_url}
								/>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Profile;
