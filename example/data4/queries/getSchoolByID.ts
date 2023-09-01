import { gql } from '@apollo/client';
export const QUERY = gql`query getSchoolByID($schoolId: Float!){
    getSchoolByID(schoolId: $schoolId){
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