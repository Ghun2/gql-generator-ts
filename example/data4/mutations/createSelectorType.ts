import { gql } from '@apollo/client';
export const MUTATION = gql`mutation createSelectorType($createSelectorTypeRequestSchema: CreateSelectorTypeRequestSchema!){
    createSelectorType(createSelectorTypeRequestSchema: $createSelectorTypeRequestSchema){
        selectorType{
            selectorTypeId
            selectorTypeName
            createdTime
            updatedTime
        }
    }
}`