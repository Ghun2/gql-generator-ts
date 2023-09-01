import { gql } from '@apollo/client';
export const QUERY = gql`query listAppVersionControl($listOption: ListOptionInputSchema){
    listAppVersionControl(listOption: $listOption){
        appVersionControlList{
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