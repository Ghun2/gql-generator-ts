import { gql } from '@apollo/client';
export const MUTATION = gql`mutation createQuizAnswerType($createQuizAnswerTypeRequestSchema: CreateQuizAnswerTypeRequestSchema!){
    createQuizAnswerType(createQuizAnswerTypeRequestSchema: $createQuizAnswerTypeRequestSchema){
        quizAnswerType{
            quizAnswerTypeId
            quizAnswerTypeName
            createdTime
            updatedTime
        }
    }
}`