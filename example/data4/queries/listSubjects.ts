import { gql } from '@apollo/client';
export const QUERY = gql`query listSubjects($listOption: ListOptionInputSchema){
    listSubjects(listOption: $listOption){
        subjectList{
            subjectId
            subjectName
            createdTime
            updatedTime
        }
        listLength
    }
}`