import { gql } from '@apollo/client';
export const MUTATION = gql`mutation upsertBookMD5($UpsertBookMD5RequestSchema: UpsertBookMD5RequestSchema!){
    upsertBookMD5(UpsertBookMD5RequestSchema: $UpsertBookMD5RequestSchema){
        bookMd5{
            bookId
            md5
            createdTime
            updatedTime
        }
    }
}`