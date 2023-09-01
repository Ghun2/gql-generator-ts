import { gql } from '@apollo/client';
export const QUERY = gql`query listUserOwnPackages($listOption: ListOptionInputSchema){
    listUserOwnPackages(listOption: $listOption){
        userOwnPackageList{
            userId
            packageId
            createdTime
            updatedTime
        }
        listLength
    }
}`