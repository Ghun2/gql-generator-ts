import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteContentsAgeType($deleteContentsAgeTypeSchema: DeleteContentsAgeTypeRequestSchema!){
    deleteContentsAgeType(deleteContentsAgeTypeSchema: $deleteContentsAgeTypeSchema)
}`