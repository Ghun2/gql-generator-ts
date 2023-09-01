import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteAppVersionControl($appVersionControlId: Float!){
    deleteAppVersionControl(appVersionControlId: $appVersionControlId){
        appVersionControlId
    }
}`