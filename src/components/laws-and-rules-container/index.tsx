import { InfoHeadingTitle, InfoParagraph } from '@/components';
import { laws_and_rules } from '@/data/tamil-rules-content';
import { useRouteName } from '@/utils/getRouteName';

const LawsAndRulesContainer = () => {
	const rule = useRouteName('rule');
	console.warn(rule);
	const lawContent = laws_and_rules.find((law) => law.page === rule);

	if (!lawContent) {
		return <p className="text-center text-red-600">Requested rule not found.</p>;
	}

	const sectionHeading = lawContent.page_heading;

	return (
		<div>
			<h1 className="font-bold ">{sectionHeading}</h1>
			{lawContent?.sections.map((section, sectionIndex) => (
				<div className="langu" key={sectionIndex}>
					<InfoHeadingTitle title={section.section_heading || 'no content'} style="text-start font-bold !text-md" />

					{section.about_section.map((item, itemIndex) => (
						<div
							key={itemIndex}
							className="flex flex-col md:flex-row items-baseline w-full my-2  md:space-y-0 md:space-x-4 "
						>
							<div className="w-full md:w-[15%] text-start ">{item.time}</div>
							<div className="w-full md:w-[85%] text-start ">
								{item.about.map((aboutItem, aboutItemIndex) => (
									<InfoParagraph style="!mb-0 !mt-1" key={aboutItemIndex}>
										{aboutItem}
									</InfoParagraph>
								))}
							</div>
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default LawsAndRulesContainer;
