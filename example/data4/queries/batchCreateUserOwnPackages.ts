import { gql } from '@apollo/client';
export const QUERY = gql`query batchCreateUserOwnPackages($userOwnPackageList: [UserOwnPackageInputSchema!]!){
    batchCreateUserOwnPackages(userOwnPackageList: $userOwnPackageList){
        userOwnPackageList{
            userId
            packageId
            createdTime
            updatedTime
        }
    }
}`