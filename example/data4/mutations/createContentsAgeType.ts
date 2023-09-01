import { gql } from '@apollo/client';
export const MUTATION = gql`mutation createContentsAgeType($createContentsAgeTypeSchema: CreateContentsAgeTypeRequestSchema!){
    createContentsAgeType(createContentsAgeTypeSchema: $createContentsAgeTypeSchema){
        contentsAgeType{
            contentsAgeTypeId
            contentsAgeTypeName
            createdTime
            updatedTime
        }
    }
}`