import { gql } from '@apollo/client';
export const QUERY = gql`query listBookToPackageRecordsRequest($listOption: ListOptionInputSchema){
    listBookToPackageRecordsRequest(listOption: $listOption){
        bookToPackageRecordList{
            bookId
            packageId
            partnerId
            createdTime
            updatedTime
        }
        listLength
    }
}`