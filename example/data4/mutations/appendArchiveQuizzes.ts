import { gql } from '@apollo/client';
export const MUTATION = gql`mutation appendArchiveQuizzes($AppendArchiveQuizzesRequestSchema: AppendArchiveQuizzesRequestSchema!){
    appendArchiveQuizzes(AppendArchiveQuizzesRequestSchema: $AppendArchiveQuizzesRequestSchema){
        archiveQuizList{
            userId
            quizId
            createdTime
            updatedTime
        }
    }
}`