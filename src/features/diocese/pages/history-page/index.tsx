import {
	InfoHeadingTitle,
	InfoParagraph,
	TabsLayout,
	BulletPointList,
	ParagraphGroupWithTitle,
	PDFViewer,
} from '@/components';

import {
	bulletItems,
	christianHistoryTimeline,
	historyInfoContent,
	parisMissionsHistory,
	priests,
} from '../../data/history-content';
import { usePathName } from '@/utils/getPathName';
import { PDF_URLS } from '@/config/constants';

const HistoryPage = () => {
	const pathname = usePathName();

	const isDioceseHistory = pathname === '/diocese/history';
	return (
		<TabsLayout hasPageHeading={false} tabs={[{ label: 'view' }]}>
			<h1 className="text-[16px] font-bold uppercase">{isDioceseHistory ? 'DIOCESE HISTORY' : 'PATRON SAINTS'}</h1>
			{isDioceseHistory ? (
				<>
					<InfoHeadingTitle title="Contents" />
					<BulletPointList style="!text-[15px] !font-semibold " items={bulletItems} />
					<InfoParagraph style=" !text-[14px] indent-9 ">
						The salient aspects of political, religious and socio-economic spheres of the North Arcot district have been
						dealt with in the previous chapter. Here in this chapter we will study certain environments and backgrounds
						that helped to create the Christian religious history. No one had ever written Christian religious history
						of North Arcot. All what we have are some information's collected from parish chronicles and pamphlets. It
						is not possible with the above materials to give a scientific history of Christianity of North Arcot, and
						with this background an attempt has been made to provide certain points in chronological order to give a
						general picture of the history of Christianity of our field of study. Before considering the historical
						origin of the Church in the two districts of North Arcot (Vellore and Tiruvannamalai), we study a few
						aspects of the global climate that opened the door for evangelisation in this part of India.
					</InfoParagraph>
					{historyInfoContent.slice(0, 2).map((paragraph, index) => (
						<ParagraphGroupWithTitle
							key={index}
							title={paragraph.title}
							paragraphs={paragraph.paragraphsGroup}
							style=" !text-[14px] "
						/>
					))}
					<div className="ml-5">
						<p className="!text-[14px]">
							Vellore was surrounded by the Mughuls and was taken by them in the following year.{' '}
						</p>
						<BulletPointList style=" mt-5 !font-normal !text-base/6 !text-[14px]" items={parisMissionsHistory} />
					</div>

					<InfoHeadingTitle style="!text-[14px] " title="Missionaries of Paris Foreign Missions Society " />
					<div className="mt-6 ">
						<BulletPointList
							style="ml-5 mt-5 !font-normal !text-base/6 !text-[14px]"
							items={christianHistoryTimeline}
						/>
					</div>
					{historyInfoContent.slice(2, 5).map((paragraph, index) => (
						<ParagraphGroupWithTitle
							style="!text-[14px] "
							key={index}
							title={paragraph.title}
							paragraphs={paragraph.paragraphsGroup}
						/>
					))}
					<h1 className="mt-5 mb-2 text-justify text-[14px] leading-[1.5] font-sans">
						<strong>
							<span className="text-[14px] leading-[1.5] font-sans">THE PIONEER BISHOPS OF THE DIOCESE OF VELLORE</span>
						</strong>
					</h1>

					{historyInfoContent.slice(5).map((paragraph, index) => (
						<ParagraphGroupWithTitle
							style="!text-[14px] "
							key={index}
							title={paragraph.title}
							paragraphs={paragraph.paragraphsGroup}
						/>
					))}

					{priests.map((priest, index) => (
						<InfoHeadingTitle style="!text-[14px] " key={index} title={priest} />
					))}
				</>
			) : (
				<PDFViewer pdfUrl={PDF_URLS.PATRON_SAINTS} />
			)}
		</TabsLayout>
	);
};

export default HistoryPage;
