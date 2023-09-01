import { gql } from '@apollo/client';
export const QUERY = gql`query listClassAccountsByClassID($classId: Float!, $listOption: ListOptionInputSchema){
    listClassAccountsByClassID(classId: $classId, listOption: $listOption){
        classAccountList{
            classId
            accountId
            createdTime
            updatedTime
        }
        listLength
    }
}`