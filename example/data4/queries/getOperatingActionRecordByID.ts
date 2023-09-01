import { gql } from '@apollo/client';
export const QUERY = gql`query getOperatingActionRecordByID($recordId: Float){
    getOperatingActionRecordByID(recordId: $recordId){
        operatingActionRecord{
            recordId
            accountId
            partnerId
            resourceType
            actionType
            data
            createdTime
            updatedTime
        }
    }
}`