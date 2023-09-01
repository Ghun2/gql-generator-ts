import { gql } from '@apollo/client';
export const QUERY = gql`query listSchools($listOption: ListOptionInputSchema){
    listSchools(listOption: $listOption){
        schoolList{
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
        listLength
    }
}`