import { gql } from '@apollo/client';
export const QUERY = gql`query listSelectorTypes($listOption: ListOptionInputSchema){
    listSelectorTypes(listOption: $listOption){
        selectorTypeList{
            selectorTypeId
            selectorTypeName
            createdTime
            updatedTime
        }
        listLength
    }
}`