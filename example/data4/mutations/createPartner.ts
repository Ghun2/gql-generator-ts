import { gql } from '@apollo/client';
export const MUTATION = gql`mutation createPartner($createPartnerRequestSchema: CreatePartnerRequestSchema!){
    createPartner(createPartnerRequestSchema: $createPartnerRequestSchema){
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