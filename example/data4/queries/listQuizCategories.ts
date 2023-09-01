import { gql } from '@apollo/client';
export const QUERY = gql`query listQuizCategories($listOption: ListOptionInputSchema){
    listQuizCategories(listOption: $listOption){
        quizCategoryList{
            quizCategoryId
            parentQuizCategoryId
            subjectId
            quizCategoryName
            createdTime
            updatedTime
        }
        listLength
    }
}`