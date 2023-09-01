import { gql } from '@apollo/client';
export const MUTATION = gql`mutation createOperatingActionRecord($operatingActionRecord: OperatingActionRecordInputSchema){
    createOperatingActionRecord(operatingActionRecord: $operatingActionRecord){
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