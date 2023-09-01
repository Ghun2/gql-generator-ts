import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteBookById($DeleteBookByIdRequestSchema: DeleteBookByIdRequestSchema!){
    deleteBookById(DeleteBookByIdRequestSchema: $DeleteBookByIdRequestSchema)
}`