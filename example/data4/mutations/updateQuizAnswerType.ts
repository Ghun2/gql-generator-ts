import { gql } from '@apollo/client';
export const MUTATION = gql`mutation updateQuizAnswerType($updateQuizAnswerTypeRequestSchema: UpdateQuizAnswerTypeRequestSchema!){
    updateQuizAnswerType(updateQuizAnswerTypeRequestSchema: $updateQuizAnswerTypeRequestSchema){
        quizAnswerType{
            quizAnswerTypeId
            quizAnswerTypeName
            createdTime
            updatedTime
        }
    }
}`