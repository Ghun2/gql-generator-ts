import { gql } from '@apollo/client';
export const QUERY = gql`query listUserUploadContent($listOption: ListOptionInputSchema){
    listUserUploadContent(listOption: $listOption){
        userUploadContent{
            userId
            bookId
            packageId
            bookName
            uploadedTime
            packageCreatedTime
        }
        listLength
    }
}`