import { gql } from '@apollo/client';
export const QUERY = gql`query listConversionAccountsByPartner($partnerId: Float, $listOption: ListOptionInputSchema){
    listConversionAccountsByPartner(partnerId: $partnerId, listOption: $listOption){
        conversionAccountList{
            accountId
            partnerId
            role
            createdTime
            updatedTime
        }
        listLength
    }
}`