import { gql } from '@apollo/client';
export const MUTATION = gql`mutation updateContentsAgeType($updateContentsAgeTypeSchema: UpdateContentsAgeTypeRequestSchema!){
    updateContentsAgeType(updateContentsAgeTypeSchema: $updateContentsAgeTypeSchema){
        contentsAgeType{
            contentsAgeTypeId
            contentsAgeTypeName
            createdTime
            updatedTime
        }
    }
}`