import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteUser($DeleteUserByIDRequestSchema: DeleteUserByIDRequestSchema!){
    deleteUser(DeleteUserByIDRequestSchema: $DeleteUserByIDRequestSchema)
}`