import { gql } from '@apollo/client';
export const QUERY = gql`query getPartnerById($partnerId: Float!){
    getPartnerById(partnerId: $partnerId){
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
    }
}`