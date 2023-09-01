import { gql } from '@apollo/client';
export const QUERY = gql`query listContentsAgeTypes($listOption: ListOptionInputSchema){
    listContentsAgeTypes(listOption: $listOption){
        contentsAgeTypeList{
            contentsAgeTypeId
            contentsAgeTypeName
            createdTime
            updatedTime
        }
        listLength
    }
}`