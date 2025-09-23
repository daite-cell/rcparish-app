import { FormButton, PageSectionHeading } from '@/components';
import { TabsLayout } from '@/layouts';
import { useStore } from '@/store/store';
import { AddNewFamilyMemberForm } from '../../forms';

const AddNewFamilyMemberContainer = () => {
	const { handleCloseFamilesForm } = useStore();
	return (
		<div className="flex flex-col">
			<FormButton label="close" className="self-end mr-8" onClick={handleCloseFamilesForm} />
			<TabsLayout hasPageHeading={false} tabs={[]}>
				<PageSectionHeading title="Add New Family Member" className="underline" />
				<AddNewFamilyMemberForm />
			</TabsLayout>
		</div>
	);
};

export default AddNewFamilyMemberContainer;
