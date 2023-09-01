import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteUserUniqueDeviceByUserID($userId: Float!){
    deleteUserUniqueDeviceByUserID(userId: $userId)
}`