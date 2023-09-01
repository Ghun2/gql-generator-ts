import { gql } from '@apollo/client';
export const MUTATION = gql`mutation updateSelectorType($updateSelectorTypeRequestSchema: UpdateSelectorTypeRequestSchema!){
    updateSelectorType(updateSelectorTypeRequestSchema: $updateSelectorTypeRequestSchema){
        selectorType{
            selectorTypeId
            selectorTypeName
            createdTime
            updatedTime
        }
    }
}`