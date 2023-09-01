import { gql } from '@apollo/client';
export const MUTATION = gql`mutation updateConversionAccount($conversionAccount: ConversionAccountInputSchema){
    updateConversionAccount(conversionAccount: $conversionAccount){
        conversionAccount{
            accountId
            partnerId
            role
            createdTime
            updatedTime
        }
    }
}`