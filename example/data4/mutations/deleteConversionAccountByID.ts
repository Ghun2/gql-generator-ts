import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteConversionAccountByID($accountId: Float!){
    deleteConversionAccountByID(accountId: $accountId)
}`