import { LawsAndRulesContainer, TabsLayout } from '@/components';
import { useRouteName } from '@/utils/getRouteName';
import { useState } from 'react';
import { parish_rules_generic_content } from '../../data';
import RulesEditForm from '@/components/rules-edit-form';

const RulesOfParishGenericPage = () => {
	const rule = useRouteName('rule');
	console.warn(rule);
	const [activeIndex, setActiveIndex] = useState(0);
	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};

	const rulesInCanonLaw = [
		'baptism_canal_rule',
		'fhc_canal_rule',
		'confirmation_canal_rule',
		'marriage_canal_rule',
		'anointing_canal_rule',
		'confession_canal_rule',
		'funeral_canal_rule',
		'mass_offerings_canal_rule',
		'penal_canal_rule',
		'priest_duty_rule',
	];

	const hasCanonLawRule = rulesInCanonLaw.includes(rule as string);

	const sectionHeading = parish_rules_generic_content[rule as keyof typeof parish_rules_generic_content];
	return (
		<TabsLayout
			onTabChange={handleToggleTab}
			activeTabId={activeIndex}
			tabs={hasCanonLawRule ? [{ label: 'view' }] : [{ label: 'view' }, { label: 'edit' }]}
		>
			{hasCanonLawRule ? (
				<>
					<div>{activeIndex === 0 && <LawsAndRulesContainer />}</div>
				</>
			) : (
				<div>
					{activeIndex === 1 ? (
						<>
							<h1 className="font-bold ">{sectionHeading}</h1>
							<RulesEditForm />
						</>
					) : (
						<h1 className="font-bold ">{sectionHeading}</h1>
					)}
				</div>
			)}
		</TabsLayout>
	);
};

export default RulesOfParishGenericPage;
