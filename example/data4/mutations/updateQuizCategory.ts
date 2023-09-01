import { gql } from '@apollo/client';
export const MUTATION = gql`mutation updateQuizCategory($updateQuizCategoryRequestSchema: UpdateQuizCategoryRequestSchema!){
    updateQuizCategory(updateQuizCategoryRequestSchema: $updateQuizCategoryRequestSchema){
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