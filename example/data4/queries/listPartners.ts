import { gql } from '@apollo/client';
export const QUERY = gql`query listPartners($listOption: ListOptionInputSchema){
    listPartners(listOption: $listOption){
        partnerList{
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
        listLength
    }
}`