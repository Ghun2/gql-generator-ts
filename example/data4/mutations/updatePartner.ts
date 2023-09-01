import { gql } from '@apollo/client';
export const MUTATION = gql`mutation updatePartner($updatePartnerRequestSchema: UpdatePartnerRequestSchema!){
    updatePartner(updatePartnerRequestSchema: $updatePartnerRequestSchema){
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