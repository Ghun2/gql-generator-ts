import { gql } from '@apollo/client';
export const MUTATION = gql`mutation resetBundlesByPackageID($packageId: String!){
    resetBundlesByPackageID(packageId: $packageId)
}`