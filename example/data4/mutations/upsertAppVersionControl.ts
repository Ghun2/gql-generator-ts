import { gql } from '@apollo/client';
export const MUTATION = gql`mutation upsertAppVersionControl($appVersionControl: AppVersionControlInputSchema){
    upsertAppVersionControl(appVersionControl: $appVersionControl){
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