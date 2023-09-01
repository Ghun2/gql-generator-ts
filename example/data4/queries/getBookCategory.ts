import { gql } from '@apollo/client';
export const QUERY = gql`query getBookCategory($bookCategoryId: Float!){
    getBookCategory(bookCategoryId: $bookCategoryId){
        bookCategory{
            bookCategoryId
            parentBookCategoryId
            bookCategoryName
            createdTime
            updatedTime
        }
    }
}`