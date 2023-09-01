import { gql } from '@apollo/client';
export const MUTATION = gql`mutation appendStarredQuizzes($AppendStarredQuizzesRequestSchema: AppendStarredQuizzesRequestSchema!){
    appendStarredQuizzes(AppendStarredQuizzesRequestSchema: $AppendStarredQuizzesRequestSchema){
        starredQuizList{
            userId
            quizId
            packageId
            createdTime
            updatedTime
        }
    }
}`