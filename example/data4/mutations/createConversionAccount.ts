import { gql } from '@apollo/client';
export const MUTATION = gql`mutation createConversionAccount($conversionAccount: ConversionAccountInputSchema){
    createConversionAccount(conversionAccount: $conversionAccount){
        conversionAccount{
            accountId
            partnerId
            role
            createdTime
            updatedTime
        }
    }
}`