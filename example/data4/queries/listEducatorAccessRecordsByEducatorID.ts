import { gql } from '@apollo/client';
export const QUERY = gql`query listEducatorAccessRecordsByEducatorID($educatorId: Float!, $listOption: ListOptionInputSchema){
    listEducatorAccessRecordsByEducatorID(educatorId: $educatorId, listOption: $listOption){
        educatorAccessRecordList{
            educatorAccessRecordId
            educatorId
            ipAddress
            city
            createdTime
            updatedTime
        }
        listLength
    }
}`