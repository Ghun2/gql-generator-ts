import { gql } from '@apollo/client';
export const QUERY = gql`query getAppVersionControlByTarget($appVersion: String!){
    getAppVersionControlByTarget(appVersion: $appVersion){
        appVersionControl{
            appVersionControlId
            startVersion
            endVersion
            message
            isForced
            createdTime
            updatedTime
        }
    }
}`