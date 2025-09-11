import { DynamicDataTable } from '@/components';
import { Label } from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import useInstitutionsListColumns from '../../hooks/useInstitutionsListColumns';
import { institutionOptions } from '@/forms-options-data';

const InstitutionsListTablesContainer = () => {
	const [selectedCategory, setSelectedCategory] = useState(institutionOptions[0].value);
	const institutionsListColumns = useInstitutionsListColumns();
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

			{institutionsListColumns[selectedCategory] && (
				<DynamicDataTable
					wrapText={false}
					enableExport={true}
					data={institutionsListColumns[selectedCategory].data}
					customColumns={institutionsListColumns[selectedCategory].columns}
					tableId="Diocese-Institutions-list"
				/>
			)}
		</div>
	);
};

export default InstitutionsListTablesContainer;
