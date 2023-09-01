import { gql } from '@apollo/client';
export const MUTATION = gql`mutation createSchool($CreateBookRequestSchema: CreateSchoolRequestSchema!){
    createSchool(CreateBookRequestSchema: $CreateBookRequestSchema){
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