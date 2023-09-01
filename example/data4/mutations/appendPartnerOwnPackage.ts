import { gql } from '@apollo/client';
export const MUTATION = gql`mutation appendPartnerOwnPackage($partnerOwnPackage: PartnerOwnPackageInputSchema!){
    appendPartnerOwnPackage(partnerOwnPackage: $partnerOwnPackage){
        partnerOwnPackage{
            packageId
            partnerId
            createdTime
            updatedTime
        }
    }
}`