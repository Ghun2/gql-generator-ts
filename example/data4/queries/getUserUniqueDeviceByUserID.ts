import { gql } from '@apollo/client';
export const QUERY = gql`query getUserUniqueDeviceByUserID($userId: Float!){
    getUserUniqueDeviceByUserID(userId: $userId){
        userUniqueDevice{
            userId
            uniqueId
            createdTime
            updatedTime
        }
    }
}`