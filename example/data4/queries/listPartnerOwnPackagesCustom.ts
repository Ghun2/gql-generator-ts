import { gql } from '@apollo/client';
export const QUERY = gql`query listPartnerOwnPackagesCustom{
    listPartnerOwnPackagesCustom{
        packageId
        partnerId
        createdTime
        updatedTime
    }
}`