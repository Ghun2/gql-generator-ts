import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteAccountByID($deleteAccountByIDRequestSchema: DeleteAccountByIDRequestSchema!){
    deleteAccountByID(deleteAccountByIDRequestSchema: $deleteAccountByIDRequestSchema)
}`