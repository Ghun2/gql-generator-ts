import { gql } from '@apollo/client';
export const QUERY = gql`query appendUserOwnPackage($userOwnPackage: UserOwnPackageInputSchema){
    appendUserOwnPackage(userOwnPackage: $userOwnPackage){
        userOwnPackage{
            userId
            packageId
            createdTime
            updatedTime
        }
    }
}`