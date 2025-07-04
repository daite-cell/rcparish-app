import { DynamicDataTable } from '@/components';
import { useStore } from '@/store/store';
import type { Cemetery, ChurchInventory, LandDocument, PresbyteryInventory, Property, TableConfig } from '@/types';
import { useRouteName } from '@/utils/getRouteName';
import type { ColumnDef } from '@tanstack/react-table';
import { getCommonColumns } from '../get-common-columns';

const RenderPrePropertiesTables = () => {
	const type = useRouteName('type');
	const { handleSelectRow } = useStore();
	const common = getCommonColumns;

	const properties_table_with_columns = {
		rent_details: {
			columns: [
				...common<Property>(handleSelectRow),
				{ accessorKey: 'details', header: 'Details' },
				{ accessorKey: 'type', header: 'Type' },
				{ accessorKey: 'propertyType', header: 'Property Type' },
				{ accessorKey: 'propertyName', header: 'Property Name' },
				{ accessorKey: 'propertyIdOrNo', header: 'Property Id / No' },
				{ accessorKey: 'propertyOwnFor', header: 'Property Own for' },
				{ accessorKey: 'propertyMaintainedBy', header: 'Property Maintained by' },
				{ accessorKey: 'ownershipName', header: 'Name of the Ownership' },
				{ accessorKey: 'renderName', header: 'Name of the Render' },
				{ accessorKey: 'mobile', header: 'Mobile' },
				{ accessorKey: 'adhaar', header: 'Adhaar' },
				{ accessorKey: 'address', header: 'Address' },
				{ accessorKey: 'leaseAmount', header: 'Advance / Lease Amount' },
				{ accessorKey: 'agreementDocumentWritten', header: 'Agreement Document written' },
				{ accessorKey: 'agreementFromOn', header: 'Agreement from on' },
				{ accessorKey: 'agreementPeriod', header: 'Agreement period' },
				{ accessorKey: 'agreementEndOn', header: 'Agreement End on' },
				{ accessorKey: 'agreementMadeBy', header: 'Agreement Made by' },
			] as ColumnDef<Property, unknown>[],
		} satisfies TableConfig<Property>,
		land_properties: {
			columns: [
				...common<LandDocument>(handleSelectRow),
				{ accessorKey: 'document', header: 'Document' },
				{ accessorKey: 'parishName', header: 'Parish Name' },
				{ accessorKey: 'villageName', header: 'Village name' },
				{ accessorKey: 'automaticDocumentId', header: 'Automatic Document ID' },
				{ accessorKey: 'dateOfRegistration', header: 'Date of registration' },
				{ accessorKey: 'purchasingAmount', header: 'Purchasing Amount' },
				{ accessorKey: 'purchaserName', header: 'Purchaser Name' },
				{ accessorKey: 'vendorName', header: 'Vendor Name' },
				{ accessorKey: 'oldSurvey', header: 'Old Survey' },
				{ accessorKey: 'newSurvey', header: 'New survey' },
				{ accessorKey: 'extentInAcre', header: 'Extent ( in acre)' },
				{ accessorKey: 'pattaNo', header: 'Patta No' },
				{ accessorKey: 'availabilityOfDocument', header: 'Availability of Document (yes / no)' },
				{ accessorKey: 'landUsage', header: 'Land Usage' },
				{ accessorKey: 'landType', header: 'Land Type' },
				{ accessorKey: 'remark', header: 'Remark' },
			] as ColumnDef<LandDocument, unknown>[],
		} satisfies TableConfig<LandDocument>,
		cemetery: {
			columns: [
				...common<Cemetery>(handleSelectRow),
				{ accessorKey: 'details', header: 'Details' },
				{ accessorKey: 'cemeteryNumber', header: 'Cemetery Number' },
				{ accessorKey: 'forFamily', header: 'For Family' },
				{ accessorKey: 'maintainedBy', header: 'Maintained by' },
				{ accessorKey: 'mobile', header: 'Mobile' },
				{ accessorKey: 'parish', header: 'Parish' },
				{ accessorKey: 'cemeteryAt', header: 'Cemetery at' },
				{ accessorKey: 'address', header: 'Address' },
				{ accessorKey: 'dugOnLastTime', header: 'Dug on (Last time)' },
			] as ColumnDef<Cemetery, unknown>[],
		} satisfies TableConfig<Cemetery>,
		church_inventory: {
			columns: [
				...common<ChurchInventory>(handleSelectRow),
				{ accessorKey: 'details', header: 'Details' },
				{ accessorKey: 'stationType', header: 'Sub-Station / Main-Station' },
				{ accessorKey: 'thingName', header: "Thing's Name" },
				{ accessorKey: 'thingIdOrNo', header: 'Thing Id / No' },
				{ accessorKey: 'category', header: 'Category' },
				{ accessorKey: 'ratePerItem', header: 'Rate per item' },
				{ accessorKey: 'quantity', header: 'Quantity' },
				{ accessorKey: 'price', header: 'Price' },
				{ accessorKey: 'purchasedOrSponsored', header: 'Purchased / Sponsored' },
				{ accessorKey: 'sponsorName', header: 'Name of the Purchased / Sponsored Person' },
				{ accessorKey: 'dateOn', header: 'Date on' },
				{ accessorKey: 'propertyOwnFor', header: 'Property Own For' },
			] as ColumnDef<ChurchInventory, unknown>[],
		} satisfies TableConfig<ChurchInventory>,
		other_inventory: {
			columns: [
				...common<PresbyteryInventory>(handleSelectRow),
				{ accessorKey: 'details', header: 'Details' },
				{ accessorKey: 'thingName', header: "Thing's Name" },
				{ accessorKey: 'thingIdOrNo', header: 'Thing Id / No' },
				{ accessorKey: 'category', header: 'Category' },
				{ accessorKey: 'ratePerItem', header: 'Rate per item' },
				{ accessorKey: 'quantity', header: 'Quantity' },
				{ accessorKey: 'price', header: 'Price' },
				{ accessorKey: 'purchasedOrSponsored', header: 'Purchased / Sponsored' },
				{ accessorKey: 'sponsorName', header: 'Name' },
				{ accessorKey: 'dateOn', header: 'Date on' },
				{ accessorKey: 'propertyOwnFor', header: 'Property Own For' },
			] as ColumnDef<PresbyteryInventory, unknown>[],
		} satisfies TableConfig<PresbyteryInventory>,
	};

	return (
		<div>
			{type && properties_table_with_columns[type as keyof typeof properties_table_with_columns]?.columns && (
				<DynamicDataTable
					wrapText={false}
					data={[]}
					customColumns={(
						properties_table_with_columns[type as keyof typeof properties_table_with_columns]?.columns as ColumnDef<
							PresbyteryInventory,
							unknown
						>[]
					).map((column) => column as ColumnDef<Property, unknown>)}
				/>
			)}
		</div>
	);
};

export default RenderPrePropertiesTables;
