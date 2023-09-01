import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deletePartnerOwnPackage($partnerId: Float!, $packageId: String!){
    deletePartnerOwnPackage(partnerId: $partnerId, packageId: $packageId)
}`