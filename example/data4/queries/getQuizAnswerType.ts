import { gql } from '@apollo/client';
export const QUERY = gql`query getQuizAnswerType($quizAnswerTypeId: String!){
    getQuizAnswerType(quizAnswerTypeId: $quizAnswerTypeId){
        quizAnswerType{
            quizAnswerTypeId
            quizAnswerTypeName
            createdTime
            updatedTime
        }
    }
}`