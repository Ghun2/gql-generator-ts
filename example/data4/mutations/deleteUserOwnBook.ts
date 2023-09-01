import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteUserOwnBook($DeleteUserOwnBookRequestSchema: DeleteUserOwnBookRequestSchema!){
    deleteUserOwnBook(DeleteUserOwnBookRequestSchema: $DeleteUserOwnBookRequestSchema)
}`