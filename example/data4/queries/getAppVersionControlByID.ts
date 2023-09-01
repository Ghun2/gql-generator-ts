import { gql } from '@apollo/client';
export const QUERY = gql`query getAppVersionControlByID($appVersionControlId: Float!){
    getAppVersionControlByID(appVersionControlId: $appVersionControlId){
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