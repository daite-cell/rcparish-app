import { DynamicDataTable } from '@/components';
import { Label } from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { institutionOptions } from '@/forms-options-data';
import useHousesInstitutionsListColumns from '../../hooks/useHousesInstitutionsListColumns';

const HousesInstitutionsListTablesContainer = () => {
	const [selectedCategory, setSelectedCategory] = useState(institutionOptions[0].value);
	const housesInstitutionsListColumns = useHousesInstitutionsListColumns();
	return (
		<div>
			<div className="flex flex-col gap-1 flex-1 mt-5">
				<Label className="text-xs font-normal">Select the Category</Label>
				<select
					value={selectedCategory}
					onChange={(e) => setSelectedCategory(e.target.value)}
					title="Select the Category"
					className="w-full flex-1 mt-1 h-12 border p-3 text-xs outline-none"
				>
					{institutionOptions.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			</div>

			{housesInstitutionsListColumns[selectedCategory] && (
				<DynamicDataTable
					wrapText={false}
					enableExport={true}
					data={housesInstitutionsListColumns[selectedCategory].data}
					customColumns={housesInstitutionsListColumns[selectedCategory].columns}
					tableId="Houses-Institutions-list"
				/>
			)}
		</div>
	);
};

export default HousesInstitutionsListTablesContainer;
