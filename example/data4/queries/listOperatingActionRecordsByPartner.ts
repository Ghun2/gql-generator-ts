import { gql } from '@apollo/client';
export const QUERY = gql`query listOperatingActionRecordsByPartner($partnerId: Float, $listOption: ListOptionInputSchema){
    listOperatingActionRecordsByPartner(partnerId: $partnerId, listOption: $listOption){
        operatingActionRecordList{
            recordId
            accountId
            partnerId
            resourceType
            actionType
            data
            createdTime
            updatedTime
        }
        listLength
    }
}`