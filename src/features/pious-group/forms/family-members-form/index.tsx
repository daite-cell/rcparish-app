import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	SingleSelectDropdown,
	FormButton,
	CustomFormInput,
	ControlledDateInputField,
	ControlledRadioGroup,
	ControlledFileUpload,
} from '@/components';
import {
	activenessOptions,
	bloodGroupOptions,
	communityOptions,
	courseTypeOptions,
	courseYearOptions,
	familyNameOptions,
	livingStatusOptions,
	livingWithOptions,
	members,
	occupationSectorOptions,
	qualificationOptions,
	schoolManagementOptions,
	studyingBoardOptions,
	studyingClassOptions,
	subStationOptions,
} from '@/forms-options-data';
import { Label } from '@radix-ui/react-dropdown-menu';
import { familesMembersTypeSchema, type FamilesMembersType } from '../../validation';
import { useStore } from '@/store/store';
import { useNavigate } from 'react-router-dom';
import type { MembersInParishFamilyProps } from '@/types';

const FamilyMembersForm = () => {
	const editRow = useStore((state) => state.editRow as MembersInParishFamilyProps | null);
	const { handleEditAccountingName } = useStore();
	const navigate = useNavigate();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FamilesMembersType>({
		resolver: zodResolver(familesMembersTypeSchema),
		defaultValues: {
			physicallyChallengedStatus: 'no',
			marriageStatus: 'yes',
			familyType: 'couple',
			permanentAddressStatus: 'same_as_family',
			communityStatus: 'same',
			vocationStatus: 'yes',
			dateOfBirth: 'known',
			baptismDate: 'known',
			holyCommunionDate: 'received',
			confirmationDate: 'received',
			communication: 'same_as_family',
			qualificationCategory: 'completed',
			education: 'school',
			profQualificationCategory: 'completed',
		},
	});

	const onSubmit = (data: FamilesMembersType) => {
		console.warn('Submitted Families Data:', data);
	};

	const marriageStatus = useWatch({ control, name: 'marriageStatus' });
	const communityStatus = useWatch({ control, name: 'communityStatus' });
	const physicallyChallengedStatus = useWatch({ control, name: 'physicallyChallengedStatus' });
	const vocationStatus = useWatch({ control, name: 'vocationStatus' });
	const dateOfBirth = useWatch({ control, name: 'dateOfBirth' });
	const baptismDate = useWatch({ control, name: 'baptismDate' });
	const holyCommunionDate = useWatch({ control, name: 'holyCommunionDate' });
	const confirmationDate = useWatch({ control, name: 'confirmationDate' });
	const communication = useWatch({ control, name: 'communication' });
	const qualificationCategory = useWatch({ control, name: 'qualificationCategory' });
	const education = useWatch({ control, name: 'education' });
	const profQualificationCategory = useWatch({ control, name: 'profQualificationCategory' });

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm my-6">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						control={control}
						label="Select the Family Name"
						options={familyNameOptions}
						placeholder="Select the Family Name"
						name="familyName"
						error={errors.familyName?.message}
					/>

					<SingleSelectDropdown
						control={control}
						label="Anbiam Name"
						options={[]}
						placeholder="Select Anbiam Name"
						name="selectedAnbiam"
						error={errors.selectedAnbiam?.message}
					/>

					<SingleSelectDropdown
						control={control}
						label="Main-Station / Sub-station Name"
						options={subStationOptions}
						placeholder="Select Main-Station / Sub-station Name"
						name="subStationName"
						error={errors.subStationName?.message}
					/>

					<SingleSelectDropdown
						control={control}
						label="Anbiam"
						options={[]}
						placeholder="Select Anbiam"
						name="anbiam"
						error={errors.anbiam?.message}
					/>

					<Label className="flex items-center gap-0 text-xs">
						Name of the Person :<span className="mx-2 h-7 w-[4px]  bg-red-700"></span>
						Already a Member
						<span className="mx-2 h-7 w-[4px]   bg-green-600 "></span>
						New Member
					</Label>
					<div className="flex items-center relative">
						<span className="mx-2 h-7  w-[4px]  bg-red-700 absolute -left-5"></span>
						<SingleSelectDropdown
							control={control}
							options={members}
							name="personName"
							placeholder="Select Person"
							error={errors.personName?.message}
						/>
					</div>

					<SingleSelectDropdown
						name="gender"
						control={control}
						label="Gender"
						options={[
							{ label: 'Male', value: 'male' },
							{ label: 'Female', value: 'female' },
						]}
						placeholder="Select Gender"
						error={errors.gender?.message}
					/>

					<SingleSelectDropdown
						name="relationshipToFamily"
						control={control}
						label="Relationship to Family"
						options={[
							{ label: 'Father/Husband', value: 'father-husband' },
							{ label: 'Mother/Wife', value: 'mother-wife' },
						]}
						placeholder="Select Relationship to Family"
						error={errors.relationshipToFamily?.message}
					/>

					<CustomFormInput
						control={control}
						name="fatherName"
						label="Father Name"
						placeholder="Enter Father Name"
						error={errors.fatherName?.message}
					/>

					<CustomFormInput
						control={control}
						name="motherName"
						label="Mother Name"
						placeholder="Enter Mother Name"
						error={errors.motherName?.message}
					/>

					<SingleSelectDropdown
						name="livingWith"
						control={control}
						label="Living With"
						options={livingWithOptions}
						placeholder="Select Living With"
						error={errors.livingWith?.message}
					/>

					<ControlledRadioGroup
						label="Physically Challenged"
						name="physicallyChallengedStatus"
						control={control}
						options={[
							{ label: 'Yes', value: 'yes' },
							{ label: 'No', value: 'no' },
						]}
						error={errors.physicallyChallengedStatus?.message}
					/>

					{physicallyChallengedStatus === 'yes' && (
						<>
							<CustomFormInput
								control={control}
								name="challengedType"
								label="Type"
								placeholder="Enter Type"
								error={errors.challengedType?.message}
							/>
							<CustomFormInput
								control={control}
								name="challengedPercentage"
								label="Percentage"
								placeholder="Enter Percentage"
								error={errors.challengedPercentage?.message}
							/>
						</>
					)}

					<SingleSelectDropdown
						label="Blood Group"
						name="bloodGroup"
						control={control}
						options={bloodGroupOptions}
						placeholder="Select Blood Group"
						error={errors.bloodGroup?.message}
					/>

					<ControlledRadioGroup
						label="Community (caste)"
						name="communityStatus"
						control={control}
						options={[
							{ label: 'Same as Family', value: 'same' },
							{ label: 'Different From Family', value: 'different' },
						]}
						error={errors.communityStatus?.message}
					/>

					<SingleSelectDropdown
						control={control}
						options={communityOptions}
						placeholder="Select Community"
						name="community"
						error={errors.community?.message}
					/>

					{communityStatus === 'different' ? (
						<CustomFormInput
							control={control}
							name="subCaste"
							placeholder="Enter Sub Caste"
							error={errors.subCaste?.message}
						/>
					) : (
						<CustomFormInput
							control={control}
							name="subCaste"
							placeholder="Enter Caste"
							error={errors.subCaste?.message}
						/>
					)}
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						control={control}
						label="Religion"
						options={[
							{ label: 'Rc', value: 'rc' },
							{ label: 'Other Religion', value: 'other' },
						]}
						placeholder="Select Religion"
						name="religion"
						error={errors.religion?.message}
					/>

					<SingleSelectDropdown
						control={control}
						options={[
							{ label: 'Native Parish', value: 'native' },
							{ label: 'Migrated', value: 'migrated' },
						]}
						placeholder="Select Parish Status"
						name="parishStatus"
						error={errors.parishStatus?.message}
					/>

					<ControlledRadioGroup
						label="Marriage Status"
						name="marriageStatus"
						control={control}
						options={[
							{ label: 'Yes', value: 'yes' },
							{ label: 'No', value: 'no' },
						]}
						error={errors.marriageStatus?.message}
					/>

					{marriageStatus === 'yes' && (
						<>
							<CustomFormInput
								control={control}
								name="marriageDate"
								label="Date of Marriage"
								placeholder="Enter Date of Marriage"
								error={errors.marriageDate?.message}
							/>
							<CustomFormInput
								control={control}
								name="marriageRemarks"
								label="Any Remarks"
								placeholder="Enter Remarks"
								error={errors.marriageRemarks?.message}
							/>
						</>
					)}

					<ControlledRadioGroup
						label="Vocation Status"
						name="vocationStatus"
						control={control}
						options={[
							{ label: 'Yes', value: 'yes' },
							{ label: 'No', value: 'no' },
						]}
						error={errors.vocationStatus?.message}
					/>

					{vocationStatus === 'yes' && (
						<>
							<SingleSelectDropdown
								control={control}
								options={[
									{ label: 'Congregation', value: 'congregation' },
									{ label: 'Diocese', value: 'diocese' },
								]}
								placeholder="Select Vocation Type"
								name="vocationType"
								error={errors.vocationType?.message}
							/>

							<CustomFormInput
								control={control}
								name="congregationName"
								placeholder="Enter Name of the Congregation"
								error={errors.congregationName?.message}
							/>

							<SingleSelectDropdown
								control={control}
								options={[
									{ label: 'Brotherhood', value: 'brotherhood' },
									{ label: 'Priesthood', value: 'priesthood' },
								]}
								placeholder="Select Order"
								name="vocationOrder"
								error={errors.vocationOrder?.message}
							/>

							<ControlledDateInputField
								control={control}
								name="firstJoiningDate"
								label="Date of First Joining"
								placeholder="dd/mm/yyyy"
								error={errors.firstJoiningDate?.message}
								type="date"
							/>

							<SingleSelectDropdown
								control={control}
								options={[
									{ label: 'Studying', value: 'studying' },
									{ label: 'Ministry', value: 'ministry' },
									{ label: 'Deacon', value: 'deacon' },
								]}
								placeholder="Select Current Status"
								name="currentStatus"
								error={errors.currentStatus?.message}
							/>

							<CustomFormInput
								control={control}
								name="placeName"
								placeholder="Enter Place Name"
								error={errors.placeName?.message}
							/>
							<CustomFormInput
								control={control}
								name="vocationRemarks"
								placeholder="Remarks (if any)"
								error={errors.vocationRemarks?.message}
							/>
						</>
					)}

					<Label className="text-xs font-bold">Sacraments Receiving Details</Label>

					<CustomFormInput
						control={control}
						name="godFatherName"
						label="God Father Name (Optional)"
						placeholder="Enter God Father Name"
						error={errors.godFatherName?.message}
					/>

					<CustomFormInput
						control={control}
						name="godMotherName"
						label="God Mother Name (Optional)"
						placeholder="Enter God Mother Name"
						error={errors.godMotherName?.message}
					/>

					<ControlledRadioGroup
						label="Date of Birth"
						name="dateOfBirth"
						control={control}
						options={[
							{ label: 'Known', value: 'known' },
							{ label: 'Unknown', value: 'unknown' },
						]}
						error={errors.dateOfBirth?.message}
					/>
					<div className="flex gap-5 items-center">
						{dateOfBirth === 'known' ? (
							<ControlledDateInputField
								control={control}
								name="dob"
								placeholder="dd/mm/yyyy"
								error={errors.dob?.message}
								type="date"
							/>
						) : (
							<CustomFormInput
								control={control}
								name="dobRemarks"
								placeholder="Enter Remarks"
								error={errors.dobRemarks?.message}
							/>
						)}
						<FormButton className="mb-4" type="button" label="Edit" onClick={() => {}} />
					</div>

					<ControlledRadioGroup
						label="Baptism Date"
						name="baptismDate"
						control={control}
						options={[
							{ label: 'Known', value: 'known' },
							{ label: 'Unknown', value: 'unknown' },
						]}
						error={errors.baptismDate?.message}
					/>
					<div className="flex gap-5 items-center">
						{baptismDate === 'known' ? (
							<ControlledDateInputField
								control={control}
								name="baptismDateKnown"
								placeholder="dd/mm/yyyy"
								error={errors.baptismDateKnown?.message}
								type="date"
							/>
						) : (
							<CustomFormInput
								control={control}
								name="baptismRemarks"
								placeholder="Enter Remarks"
								error={errors.baptismRemarks?.message}
							/>
						)}
						<FormButton className="mb-4" type="button" label="Edit" onClick={() => {}} />
					</div>

					<ControlledRadioGroup
						label="Holy Communion Date"
						name="holyCommunionDate"
						control={control}
						options={[
							{ label: 'Received', value: 'received' },
							{ label: 'NotYet', value: 'not_yet' },
							{ label: 'Unknown', value: 'unknown' },
						]}
						error={errors.holyCommunionDate?.message}
					/>
					<div className="flex gap-5 items-center">
						{holyCommunionDate === 'received' ? (
							<ControlledDateInputField
								control={control}
								name="holyCommunionDateKnown"
								placeholder="dd/mm/yyyy"
								error={errors.holyCommunionDateKnown?.message}
								type="date"
							/>
						) : (
							<CustomFormInput
								control={control}
								name="holyCommunionRemarks"
								placeholder="Enter Remarks"
								error={errors.holyCommunionRemarks?.message}
							/>
						)}
						<FormButton
							className="mb-4"
							type="button"
							label="Edit"
							onClick={() => {
								if (editRow) {
									navigate(
										`/sacraments/holy_communion/${editRow?.sub_station_id}/${editRow?.anbiam_id}/${editRow?.unique_family_id}/${editRow?.unique_member_id}`
									);
									handleEditAccountingName(editRow);
								}
							}}
						/>
					</div>

					<ControlledRadioGroup
						label="Confirmation Date"
						name="confirmationDate"
						control={control}
						options={[
							{ label: 'Received', value: 'received' },
							{ label: 'NotYet', value: 'not_yet' },
							{ label: 'Unknown', value: 'unknown' },
						]}
						error={errors.confirmationDate?.message}
					/>
					<div className="flex gap-5 items-center">
						{confirmationDate === 'received' ? (
							<ControlledDateInputField
								control={control}
								name="confirmationDateKnown"
								placeholder="dd/mm/yyyy"
								error={errors.confirmationDateKnown?.message}
								type="date"
							/>
						) : (
							<CustomFormInput
								control={control}
								name="confirmationRemarks"
								placeholder="Enter Remarks"
								error={errors.confirmationRemarks?.message}
							/>
						)}
						<FormButton
							className="mb-4"
							type="button"
							label="Edit"
							onClick={() => {
								if (editRow) {
									navigate(
										`/sacraments/confirmations/${editRow?.sub_station_id}/${editRow?.anbiam_id}/${editRow?.unique_family_id}/${editRow?.unique_member_id}`
									);
									handleEditAccountingName(editRow);
								}
							}}
						/>
					</div>

					<ControlledRadioGroup
						label="Communication"
						name="communication"
						control={control}
						options={[
							{ label: 'Same as Family', value: 'same_as_family' },
							{ label: 'Individual', value: 'individual' },
						]}
						error={errors.communication?.message}
					/>
					{communication === 'same_as_family' ? (
						<CustomFormInput
							control={control}
							name="sameMobile"
							placeholder="Enter Same Mobile Number"
							error={errors.sameMobile?.message}
						/>
					) : (
						<CustomFormInput
							control={control}
							name="mobileNumber"
							placeholder="Enter Mobile Number (Optional)"
							error={errors.mobileNumber?.message}
						/>
					)}

					<CustomFormInput
						control={control}
						name="email"
						placeholder="Email ID (Optional)"
						error={errors.email?.message}
					/>
					<CustomFormInput
						control={control}
						name="aadhaar"
						placeholder="Aadhaar Number (Optional)"
						error={errors.aadhaar?.message}
					/>

					<CustomFormInput
						label="Qualification"
						control={control}
						name="qualification"
						placeholder="Enter Qualification"
						error={errors.qualification?.message}
					/>

					<ControlledRadioGroup
						label="Category of Qualification"
						name="qualificationCategory"
						control={control}
						options={[
							{ label: 'Completed', value: 'completed' },
							{ label: 'Studying', value: 'studying' },
						]}
						error={errors.qualificationCategory?.message}
					/>

					{qualificationCategory === 'completed' ? (
						<SingleSelectDropdown
							control={control}
							options={qualificationOptions}
							placeholder="Select Qualification"
							name="completedQualification"
							error={errors.completedQualification?.message}
						/>
					) : (
						<>
							<ControlledRadioGroup
								label="Education"
								name="education"
								control={control}
								options={[
									{ label: 'In School', value: 'school' },
									{ label: 'In College', value: 'college' },
								]}
								error={errors.education?.message}
							/>

							{education === 'school' ? (
								<>
									<SingleSelectDropdown
										control={control}
										options={studyingClassOptions}
										placeholder="Select Class"
										name="schoolClass"
										error={errors.schoolClass?.message}
									/>
									<SingleSelectDropdown
										control={control}
										options={studyingBoardOptions}
										placeholder="Select School Board"
										name="schoolBoard"
										error={errors.schoolBoard?.message}
									/>
									<CustomFormInput
										label="School Name"
										control={control}
										name="schoolName"
										placeholder="Enter School Name"
										error={errors.schoolName?.message}
									/>
									<CustomFormInput
										label="School Location"
										control={control}
										name="schoolLocation"
										placeholder="Enter School Location"
										error={errors.schoolLocation?.message}
									/>
								</>
							) : (
								<>
									<SingleSelectDropdown
										control={control}
										options={courseTypeOptions}
										placeholder="Select Course Type"
										name="courseType"
										error={errors.courseType?.message}
									/>
									<CustomFormInput
										control={control}
										name="courseName"
										placeholder="Enter Course Name"
										error={errors.courseName?.message}
									/>
									<SingleSelectDropdown
										control={control}
										options={courseYearOptions}
										placeholder="Select Course Year"
										name="courseYear"
										error={errors.courseYear?.message}
									/>
									<CustomFormInput
										control={control}
										name="collegeName"
										placeholder="Enter College Name"
										error={errors.collegeName?.message}
									/>
									<CustomFormInput
										control={control}
										name="collegeLocation"
										placeholder="Enter College Location"
										error={errors.collegeLocation?.message}
									/>
								</>
							)}

							<SingleSelectDropdown
								control={control}
								options={schoolManagementOptions}
								placeholder="Select School Management"
								name="schoolManagement"
								error={errors.schoolManagement?.message}
							/>
						</>
					)}

					<ControlledRadioGroup
						label="Professional Qualification"
						name="profQualificationCategory"
						control={control}
						options={[
							{ label: 'Completed', value: 'completed' },
							{ label: 'Studying', value: 'studying' },
						]}
						error={errors.profQualificationCategory?.message}
					/>

					{profQualificationCategory === 'completed' ? (
						<SingleSelectDropdown
							control={control}
							options={qualificationOptions}
							placeholder="Select Professional Qualification"
							name="profQualification"
							error={errors.profQualification?.message}
						/>
					) : (
						<>
							<CustomFormInput
								control={control}
								name="profCourseName"
								placeholder="Enter Course Name"
								error={errors.profCourseName?.message}
							/>
							<CustomFormInput
								control={control}
								name="profCollegeName"
								placeholder="Enter College Name"
								error={errors.profCollegeName?.message}
							/>
							<CustomFormInput
								control={control}
								name="profCollegeLocation"
								placeholder="Enter College Location"
								error={errors.profCollegeLocation?.message}
							/>
						</>
					)}
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						label="Occupation Sector"
						control={control}
						options={occupationSectorOptions}
						placeholder="Select Occupation Sector"
						name="occupationSector"
						error={errors.occupationSector?.message}
					/>

					<CustomFormInput
						label="Occupation"
						control={control}
						name="occupation"
						placeholder="Enter Occupation"
						error={errors.occupation?.message}
					/>

					<CustomFormInput
						label="Monthly Income"
						control={control}
						name="monthlyIncome"
						placeholder="Enter Monthly Income"
						error={errors.monthlyIncome?.message}
					/>

					<SingleSelectDropdown
						control={control}
						label="Living Status"
						options={livingStatusOptions}
						placeholder="Select Living Status"
						name="livingStatus"
						error={errors.livingStatus?.message}
					/>

					<ControlledRadioGroup
						label="Permanent Address"
						name="permanentAddressStatus"
						control={control}
						options={[
							{ label: 'Same as Family', value: 'same_as_family' },
							{ label: 'Different From Family', value: 'different_from_family' },
						]}
						error={errors.permanentAddressStatus?.message}
					/>
					<CustomFormInput
						control={control}
						name="permanentAddress"
						type="textarea"
						error={errors.permanentAddress?.message}
						placeholder="Enter Permanent Address"
					/>

					<ControlledRadioGroup
						label="Residential Address"
						name="residentialAddressStatus"
						control={control}
						options={[
							{ label: 'Same as Permanent', value: 'same_as_permanent' },
							{ label: 'Different From Permanent', value: 'different_from_permanent' },
						]}
						error={errors.residentialAddressStatus?.message}
					/>
					<CustomFormInput
						control={control}
						name="residentialAddress"
						type="textarea"
						error={errors.residentialAddress?.message}
						placeholder="Enter Residential Address"
					/>
					<CustomFormInput
						control={control}
						name="remarks"
						label="Any Remarks"
						placeholder="Enter Remarks"
						error={errors.remarks?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Activeness"
						options={activenessOptions}
						placeholder="Select Activeness"
						name="activeness"
						error={errors.activeness?.message}
					/>
					<ControlledFileUpload name="image" control={control} label="Image" error={errors.image?.message} />
				</div>
			</div>

			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default FamilyMembersForm;
