import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteUserOwnPackage($userId: Float!, $packageId: String!){
    deleteUserOwnPackage(userId: $userId, packageId: $packageId)
}`