import { gql } from '@apollo/client';
export const QUERY = gql`query getQuizType($quizTypeId: String!){
    getQuizType(quizTypeId: $quizTypeId){
        quizType{
            quizTypeId
            quizTypeName
            createdTime
            updatedTime
        }
    }
}`