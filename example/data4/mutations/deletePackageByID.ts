import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deletePackageByID($packageId: String!){
    deletePackageByID(packageId: $packageId)
}`