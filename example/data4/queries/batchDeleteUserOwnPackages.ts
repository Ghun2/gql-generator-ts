import { gql } from '@apollo/client';
export const QUERY = gql`query batchDeleteUserOwnPackages($userIdList: [Float!]!, $packageIdList: [String!]!){
    batchDeleteUserOwnPackages(userIdList: $userIdList, packageIdList: $packageIdList)
}`