import { gql } from '@apollo/client';
export const QUERY = gql`query getQuizCategory($quizCategoryId: Float!){
    getQuizCategory(quizCategoryId: $quizCategoryId){
        quizCategory{
            quizCategoryId
            parentQuizCategoryId
            subjectId
            quizCategoryName
            createdTime
            updatedTime
        }
    }
}`