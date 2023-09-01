import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteBookCategory($deleteBookCategoryRequestSchema: DeleteBookCategoryRequestSchema!){
    deleteBookCategory(deleteBookCategoryRequestSchema: $deleteBookCategoryRequestSchema)
}`