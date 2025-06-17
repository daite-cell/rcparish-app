import {
	SectionHeading,
	StatisticsCard,
	StatisticsSection,
	StatisticsSectionRow,
	OccasionalSection,
} from '../../components';
import React from 'react';
import { statistics_cards_content } from '../../data';

const DashBoard = () => {
	return (
		<>
			<div className="grid grid-cols-1 gap-4 p-3 lg:p-7 lg:grid-cols-2 ">
				{statistics_cards_content.map((section, index) => (
					<React.Fragment key={index}>
						<div className="">
							{section.section.map((child_section, sectionIndex) => (
								<div key={sectionIndex}>
									<div>
										<StatisticsSection>
											<SectionHeading title={child_section.title} />
											<StatisticsSectionRow>
												{child_section.cards.map((card, cardIndex) => (
													<StatisticsCard
														key={`${card.id}-${cardIndex}`}
														link={card.link}
														icon={card.icon}
														label={card.label}
														value={card.value}
														id={card.id}
													/>
												))}
											</StatisticsSectionRow>
										</StatisticsSection>
									</div>
								</div>
							))}
							<div className="mt-12 ">
								<div className="px-2">
									<SectionHeading title={section.occasional_name} />
									<OccasionalSection data={section.occasional_content} />
								</div>
							</div>
						</div>
					</React.Fragment>
				))}
			</div>
		</>
	);
};

export default DashBoard;
