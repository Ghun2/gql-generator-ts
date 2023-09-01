import { gql } from '@apollo/client';
export const MUTATION = gql`mutation updateSchool($UpdateSchoolRequestSchema: UpdateSchoolRequestSchema!){
    updateSchool(UpdateSchoolRequestSchema: $UpdateSchoolRequestSchema){
        school{
            schoolId
            schoolCode
            schoolName
            schoolType
            establish
            postalCode
            address
            telephone
            homepage
            highSchoolClassification
            establishmentDate
            schoolAnniversary
            createdTime
            updatedTime
        }
    }
}`