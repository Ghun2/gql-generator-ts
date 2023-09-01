import { gql } from '@apollo/client';
export const QUERY = gql`query getConversionAccountByID($accountId: Float){
    getConversionAccountByID(accountId: $accountId){
        conversionAccount{
            accountId
            partnerId
            role
            createdTime
            updatedTime
        }
    }
}`