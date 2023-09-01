import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteQuizCategory($deleteQuizCategoryRequestSchema: DeleteQuizCategoryRequestSchema!){
    deleteQuizCategory(deleteQuizCategoryRequestSchema: $deleteQuizCategoryRequestSchema)
}`