import { gql } from '@apollo/client';
export const QUERY = gql`query listPackageCountsCustom{
    listPackageCountsCustom{
        packageId
        count
        createdTime
        updatedTime
    }
}`