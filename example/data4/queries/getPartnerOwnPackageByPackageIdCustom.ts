import { gql } from '@apollo/client';
export const QUERY = gql`query getPartnerOwnPackageByPackageIdCustom($packageId: String!){
    getPartnerOwnPackageByPackageIdCustom(packageId: $packageId){
        packageId
        partnerId
    }
}`