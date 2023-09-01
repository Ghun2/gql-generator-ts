import { gql } from '@apollo/client';
export const QUERY = gql`query listBookCountsPerSubject($listOption: ListOptionInputSchema){
    listBookCountsPerSubject(listOption: $listOption){
        bookCountPerSubject{
            subjectId
            count
        }
    }
}`