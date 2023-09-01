import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteElementById($DeleteElementByIdRequestSchema: DeleteElementByIdRequestSchema!){
    deleteElementById(DeleteElementByIdRequestSchema: $DeleteElementByIdRequestSchema)
}`