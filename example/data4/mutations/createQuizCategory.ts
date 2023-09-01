import { gql } from '@apollo/client';
export const MUTATION = gql`mutation createQuizCategory($createQuizCategoryRequestSchema: CreateQuizCategoryRequestSchema!){
    createQuizCategory(createQuizCategoryRequestSchema: $createQuizCategoryRequestSchema){
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