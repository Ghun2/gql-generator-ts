import { gql } from '@apollo/client';
export const MUTATION = gql`mutation batchCreateOperatingActionRecords($operatingActionRecordList: [OperatingActionRecordInputSchema!]!){
    batchCreateOperatingActionRecords(operatingActionRecordList: $operatingActionRecordList){
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
    }
}`