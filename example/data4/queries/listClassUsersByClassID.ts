import { gql } from '@apollo/client';
export const QUERY = gql`query listClassUsersByClassID($classId: Float!, $listOption: ListOptionInputSchema){
    listClassUsersByClassID(classId: $classId, listOption: $listOption){
        classUserList{
            classId
            userId
            createdTime
            updatedTime
        }
        listLength
    }
}`