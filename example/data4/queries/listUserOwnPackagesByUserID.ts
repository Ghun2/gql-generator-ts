import { gql } from '@apollo/client';
export const QUERY = gql`query listUserOwnPackagesByUserID($userId: Float!, $listOption: ListOptionInputSchema){
    listUserOwnPackagesByUserID(userId: $userId, listOption: $listOption){
        userOwnPackageList{
            userId
            packageId
            createdTime
            updatedTime
        }
        listLength
    }
}`