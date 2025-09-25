import type { ChurchInventoryEntry, LandRegistrationEntry, OtherInventoryEntry, RentPropertyEntry } from '@/types';

export const getRentDetailsSectionData = (row: RentPropertyEntry) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					agreement_type: row?.type ?? '',
					'property_id_/_no': row?.property_id ?? '',
				},
			},
			{
				heading: 'PROPERTY PARTICULARS',
				data: {
					type_of_property: row?.property_type_content ?? '',
					property_own_for: row?.own_for ?? '',
					property_maintained_by: row?.maintained_by_content ?? '',
					land_owner_ship: row?.ownership_content ?? '',
				},
			},
		],
	},
	{
		col: 2,
		sections: [
			{
				heading: 'RENDER DETAILS',
				data: {
					render_name: row?.render_name ?? '',
					mobile_number: row?.mobile_no ?? '',
					adhaar_number: row?.adhaar_no ?? '',
					address: row?.address ?? '',
				},
			},
			{
				heading: 'RENT DETAILS',
				data: {
					advance_amount: row?.type_data_1 ?? '',
					fixed_monthly_amount: row?.type_data_2 ?? '',
					fixed_amount_from_on: row?.type_data_3 ?? '',
				},
			},
		],
	},
	{
		col: 3,
		sections: [
			{
				heading: '',
				data: {
					agreement_document_written: row?.ag_written ?? '',
					agreement_from_on: row?.ag_from ?? '',
					agreement_period: row?.ag_period ?? '',
					agreement_upto: row?.ag_end_on ?? '',
					agreement_made_by: row?.ag_made_by ?? '',
				},
			},
		],
	},
];
export const getLandPropertiesSectionData = (row: LandRegistrationEntry) => [
	{
		col: 1,
		sections: [
			{
				heading: 'LAND DETAILS',
				data: {
					automatic_document_id: row?.document_no ?? '',
					parish_name: row?.parish_content ?? '',
					purchaser_name: row?.purchaser_name ?? '',
					vender_name: row?.vendor_name ?? '',
					purchasing_amount: row?.purchasing_amount ?? '',
				},
			},
		],
	},
	{
		col: 2,
		sections: [
			{
				heading: '',
				data: {
					date_of_registration: row?.register_date ?? '',
				},
			},
			{
				heading: 'SURVEY NO DETAILS',
				data: {
					old_survey_no: row?.old_survey ?? '',
					new_survey_no: row?.new_survey ?? '',
					patta_no: '',
					document_availability: row?.document_availability ?? '',
				},
			},
		],
	},
	{
		col: 3,
		sections: [
			{
				heading: '',
				data: {
					document: row?.file ?? '',
					extent: row?.extent ?? '',
					usage_of_land: row?.land_usage ?? '',
					type_of_land: row?.land_type ?? '',
				},
			},
			{
				heading: 'REMARKS ABOUT PROPERTY',
				data: {
					remarks: row?.remarks ?? '',
				},
			},
		],
	},
];

export const getChurchInventorySectionData = (row: ChurchInventoryEntry) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					'for_main_station_/_sub_station': row?.sub_station_name ?? '',
					category: row.category_content ?? '',
					rate_per_item: row?.rate ?? '',
				},
			},
		],
	},
	{
		col: 2,
		sections: [
			{
				heading: '',
				data: {
					quantity: row?.quantity ?? '',
					cost: row?.rate ?? '',
					'purchased_/_sponsored': row?.buyer_type ?? '',
				},
			},
		],
	},
	{
		col: 3,
		sections: [
			{
				heading: '',
				data: {
					'name_of_the_purchased_/sponsored_person': row?.buyer_name ?? '',
					date_on: row?.buying_date ?? '',
					property_own_for: row?.own_for ?? '',
				},
			},
		],
	},
];

export const getOtherInventorySectionData = (row: OtherInventoryEntry) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					category: row.category_content ?? '',
					rate_per_item: row?.rate ?? '',
					quantity: row?.quantity ?? '',
				},
			},
		],
	},
	{
		col: 2,
		sections: [
			{
				heading: '',
				data: {
					cost: row?.rate ?? '',
					'purchased_/_sponsored': row?.buyer_type ?? '',
					name: row?.buyer_name ?? '',
				},
			},
		],
	},
	{
		col: 3,
		sections: [
			{
				heading: '',
				data: {
					date_on: row?.buying_date ?? '',
					property_own_for: row?.own_for ?? '',
				},
			},
		],
	},
];
