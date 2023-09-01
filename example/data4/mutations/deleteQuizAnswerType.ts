import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteQuizAnswerType($deleteQuizAnswerTypeRequestSchema: DeleteQuizAnswerTypeRequestSchema!){
    deleteQuizAnswerType(deleteQuizAnswerTypeRequestSchema: $deleteQuizAnswerTypeRequestSchema)
}`