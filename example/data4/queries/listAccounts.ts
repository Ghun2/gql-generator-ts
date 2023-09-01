import { gql } from '@apollo/client';
export const QUERY = gql`query listAccounts($listOption: ListOptionInputSchema){
    listAccounts(listOption: $listOption){
        accountList{
            accountId
            partnerId
            partner{
                partnerId
                partnerCode
                partnerType
                partnerName
                displayName
                partnerBasicInfo{
                    partnerId
                    address
                    officeNumber
                    businessRegistrationNumber
                    website
                    createdTime
                    updatedTime
                }
                partnerElementInfo{
                    partnerId
                    thumbnail
                    createdTime
                    updatedTime
                }
                createdTime
                updatedTime
            }
            accountEmail
            accountPassword
            personalName
            mobileNumber
            role
            createdTime
            updatedTime
        }
        listLength
    }
}`