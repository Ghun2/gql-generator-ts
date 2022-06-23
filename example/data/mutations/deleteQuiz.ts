import { gql } from '@apollo/client';
export const DELETE_QUIZ = gql`mutation deleteQuiz($DeleteQuizRequestSchema: DeleteQuizRequestSchema!){
    deleteQuiz(DeleteQuizRequestSchema: $DeleteQuizRequestSchema)
}`