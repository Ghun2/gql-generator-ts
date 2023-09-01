import { gql } from '@apollo/client';
export const QUERY = gql`query listClassUsers($listOption: ListOptionInputSchema){
    listClassUsers(listOption: $listOption){
        classUserList{
            classId
            userId
            createdTime
            updatedTime
        }
        listLength
    }
}`