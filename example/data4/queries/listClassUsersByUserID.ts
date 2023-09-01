import { gql } from '@apollo/client';
export const QUERY = gql`query listClassUsersByUserID($userId: Float!, $listOption: ListOptionInputSchema){
    listClassUsersByUserID(userId: $userId, listOption: $listOption){
        classUserList{
            classId
            userId
            createdTime
            updatedTime
        }
        listLength
    }
}`