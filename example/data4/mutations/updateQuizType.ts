import { gql } from '@apollo/client';
export const MUTATION = gql`mutation updateQuizType($updateQuizTypeRequestSchema: UpdateQuizTypeRequestSchema!){
    updateQuizType(updateQuizTypeRequestSchema: $updateQuizTypeRequestSchema){
        quizType{
            quizTypeId
            quizTypeName
            createdTime
            updatedTime
        }
    }
}`