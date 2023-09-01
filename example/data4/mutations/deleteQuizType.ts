import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteQuizType($deleteQuizTypeRequestSchema: DeleteQuizTypeRequestSchema!){
    deleteQuizType(deleteQuizTypeRequestSchema: $deleteQuizTypeRequestSchema)
}`