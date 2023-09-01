import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteBookMD5($DeleteBookMD5RequestSchema: DeleteBookMD5RequestSchema!){
    deleteBookMD5(DeleteBookMD5RequestSchema: $DeleteBookMD5RequestSchema)
}`