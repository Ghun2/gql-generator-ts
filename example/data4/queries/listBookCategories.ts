import { gql } from '@apollo/client';
export const QUERY = gql`query listBookCategories($listOption: ListOptionInputSchema){
    listBookCategories(listOption: $listOption){
        bookCategoryList{
            bookCategoryId
            parentBookCategoryId
            bookCategoryName
            createdTime
            updatedTime
        }
        listLength
    }
}`