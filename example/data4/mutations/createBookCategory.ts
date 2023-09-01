import { gql } from '@apollo/client';
export const MUTATION = gql`mutation createBookCategory($createBookCategoryRequestSchema: CreateBookCategoryRequestSchema!){
    createBookCategory(createBookCategoryRequestSchema: $createBookCategoryRequestSchema){
        bookCategory{
            bookCategoryId
            parentBookCategoryId
            bookCategoryName
            createdTime
            updatedTime
        }
    }
}`