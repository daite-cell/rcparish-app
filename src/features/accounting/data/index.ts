const auditing_income_sections = [
	{
		title: 'Monthly',
		baseName: 'monthly',
		fields: [
			{ name: 'toOpeningBalance', label: 'To Opening Balance' },
			{ name: 'cash', label: 'Cash' },
			{ name: 'bank', label: 'Bank' },
			{ name: 'monthlySubscriptions', label: 'Monthly Subscriptions' },
			{ name: 'sundayCollections', label: 'Sunday Collections' },
			{ name: 'dumbBoxCollections', label: 'Dumb Box Collections' },
			{ name: 'firstSundayCollections', label: 'First Sunday Collections' },
			{ name: 'subTotal', label: 'Sub Total', placeholder: 'Auto calculated', disabled: true },
		],
	},
	{
		title: 'Special',
		baseName: 'special',
		fields: [
			{ name: 'goodFridayCollection', label: 'Good Friday Collection' },
			{ name: 'holyChildHood', label: 'Holy Child Hood' },
			{ name: 'hungerAndDisease', label: 'Hunger and Disease (Maundy Thursday)' },
			{ name: 'grottoShrines', label: 'Grotto / Shrines / Public Devotion' },
			{ name: 'communioIndia', label: 'Communio India' },
			{ name: 'subTotal', label: 'Sub Total', placeholder: 'Auto calculated', disabled: true },
		],
	},
	{
		title: 'FROM DIOCESE',
		baseName: 'diocese',
		fields: [
			{ name: 'parishPriestAllowance', label: 'Parish Priest / Asst. pp Allowance' },
			{ name: 'catechistsAllowance', label: 'Catechists Allowance' },
			{ name: 'regentDeacons', label: 'Regent / Deacons' },
			{ name: 'poorParishMaintenance', label: 'Poor Parish Maintenance' },
			{ name: 'subTotal', label: 'Sub Total', placeholder: 'Auto calculated', disabled: true },
		],
	},
	{
		title: 'RENTAL & STALL INCOME',
		baseName: 'rental',
		fields: [
			{ name: 'rentFromShop', label: 'Rent from Shop and House' },
			{ name: 'rentFromHall', label: 'Rent from Community Hall' },
			{ name: 'subTotal', label: 'Sub Total', placeholder: 'Auto calculated', disabled: true },
		],
	},
	{
		title: 'OTHER INCOME',
		baseName: 'other',
		fields: [
			{ name: 'agriculturalIncome', label: 'Agricultural Income' },
			{ name: 'marriageMass', label: 'Marriage Mass' },
			{ name: 'funeralCollections', label: 'Funeral Collections' },
			{ name: 'burialCemetery', label: 'Burial & Cemetery Collections' },
			{ name: 'priestContribution', label: 'Contribution from Parish Priest' },
			{ name: 'fixedDepositInterest', label: 'Fixed Deposit Interest' },
			{ name: 'bankInterest', label: 'Interest from Bank' },
			{ name: 'sacramentCollections', label: 'Sacrament Collections (Baptism, Confirmation)' },
			{ name: 'loan', label: 'Loan' },
			{ name: 'subTotal', label: 'Sub Total', placeholder: 'Auto calculated', disabled: true },
		],
	},
	{
		title: 'ADVANCE AND DEPOSITS',
		baseName: 'advance',
		fields: [
			{ name: 'fixedDeposit', label: 'Fixed Deposit' },
			{ name: 'shopHouseAdvances', label: 'Shop / House Advances' },
			{ name: 'cautionDeposit', label: 'Caution Deposit Collected' },
			{ name: 'subTotal', label: 'Sub Total', placeholder: 'Auto calculated', disabled: true },
		],
	},
];

const auditing_expense_sections = [
	{
		title: 'ADMINISTRATIVE EXPENSES',
		baseName: 'administrativeExpenses',
		fields: [
			{ name: 'bankCharges', label: 'Bank Charges' },
			{ name: 'parishPriestAllowance', label: 'Parish Priest / Asst. PP Allowance' },
			{ name: 'parishHouseRent', label: 'Parish House Rent' },
			{ name: 'catechistsAllowance', label: "Catechist's Allowance" },
			{ name: 'regentDeaconAllowance', label: 'Regent / Deacon Allowance' },
			{ name: 'booksAndPeriodicals', label: 'Books and Periodicals' },
			{ name: 'electricityExpenses', label: 'Electricity Expenses' },
			{ name: 'houseAndWaterTax', label: 'House & Water Tax' },
			{ name: 'printingAndStationery', label: 'Printing and Stationery' },
			{ name: 'staffSalary', label: 'Staff Salary' },
			{ name: 'telephoneExpenses', label: 'Telephone Expenses' },
			{ name: 'travellingAndConveyance', label: 'Travelling & Conveyance Expenses' },
			{ name: 'priestMedicalExpenses', label: "Priest's Medical Expenses" },
			{ name: 'subTotal', label: 'Sub Total', placeholder: 'Auto calculated', disabled: true },
		],
	},
	{
		title: 'CHURCH AND HOUSE MAINTENANCE',
		baseName: 'maintenance',
		fields: [
			{ name: 'churchRepairs', label: 'Church Repairs' },
			{ name: 'houseRepairs', label: 'House Repairs' },
			{ name: 'equipmentMaintenance', label: 'Equipment Maintenance' },
			{ name: 'furnitureMaintenance', label: 'Furniture Maintenance' },
			{ name: 'gardenMaintenance', label: 'Garden Maintenance' },
			{ name: 'subTotal', label: 'Sub Total', placeholder: 'Auto calculated', disabled: true },
		],
	},
	{
		title: 'CONTRIBUTION TO DIOCESE',
		baseName: 'contribution',
		fields: [
			{ name: 'diocesanFund', label: 'Diocesan Fund' },
			{ name: 'educationFund', label: 'Education Fund' },
			{ name: 'medicalFund', label: 'Medical Fund' },
			{ name: 'missionFund', label: 'Mission Fund' },
			{ name: 'subTotal', label: 'Sub Total', placeholder: 'Auto calculated', disabled: true },
		],
	},
	{
		title: 'HALL & STALL MAINTENANCE',
		baseName: 'hallMaintenance',
		fields: [
			{ name: 'hallRepairs', label: 'Hall Repairs' },
			{ name: 'stallRepairs', label: 'Stall Repairs' },
			{ name: 'subTotal', label: 'Sub Total', placeholder: 'Auto calculated', disabled: true },
		],
	},
	{
		title: 'OTHER EXPENSES',
		baseName: 'otherExpenses',
		fields: [
			{ name: 'charity', label: 'Charity' },
			{ name: 'hospitality', label: 'Hospitality' },
			{ name: 'transport', label: 'Transport' },
			{ name: 'legalExpenses', label: 'Legal Expenses' },
			{ name: 'insurancePremium', label: 'Insurance Premium' },
			{ name: 'miscellaneous', label: 'Miscellaneous' },
			{ name: 'festiveExpenses', label: 'Festive Expenses' },
			{ name: 'youthMinistry', label: 'Youth Ministry' },
			{ name: 'loanRepayment', label: 'Loan Repayment' },
			{ name: 'subTotal', label: 'Sub Total', placeholder: 'Auto calculated', disabled: true },
		],
	},
	{
		title: 'ADVANCE AND DEPOSITS',
		baseName: 'advance',
		fields: [
			{ name: 'fixedDeposit', label: 'Fixed Deposit' },
			{ name: 'shopHouseAdvance', label: 'Shop / House Advances' },
			{ name: 'cautionDepositCollected', label: 'Caution Deposit Collected' },
			{ name: 'subTotal', label: 'Sub Total', placeholder: 'Auto calculated', disabled: true },
		],
	},
	{
		title: 'BY CLOSING BALANCE',
		baseName: 'closing',
		fields: [
			{ name: 'closingCashBalance', label: 'Closing Cash Balance' },
			{ name: 'closingBankBalance', label: 'Closing Bank Balance' },
			{ name: 'closingFixedDeposit', label: 'Closing Fixed Deposit' },
			{ name: 'subTotal', label: 'Sub Total', placeholder: 'Auto calculated', disabled: true },
		],
	},
];

export { auditing_income_sections, auditing_expense_sections };
