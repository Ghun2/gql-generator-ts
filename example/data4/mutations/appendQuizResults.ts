import { gql } from '@apollo/client';
export const MUTATION = gql`mutation appendQuizResults($AppendQuizResultsRequestSchema: AppendQuizResultsRequestSchema!){
    appendQuizResults(AppendQuizResultsRequestSchema: $AppendQuizResultsRequestSchema){
        quizResultList{
            userId
            quizId
            bookId
            packageId
            userAnswer
            correct
            elapsedSeconds
            round
            periodNumber
            createdTime
            updatedTime
        }
    }
}`