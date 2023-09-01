import { gql } from '@apollo/client';
export const MUTATION = gql`mutation updateBookCategory($updateBookCategoryRequestSchema: UpdateBookCategoryRequestSchema!){
    updateBookCategory(updateBookCategoryRequestSchema: $updateBookCategoryRequestSchema){
        bookCategory{
            bookCategoryId
            parentBookCategoryId
            bookCategoryName
            createdTime
            updatedTime
        }
    }
}`