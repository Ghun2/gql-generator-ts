import { gql } from '@apollo/client';
export const QUERY = gql`query listQuizTypes($listOption: ListOptionInputSchema){
    listQuizTypes(listOption: $listOption){
        quizTypeList{
            quizTypeId
            quizTypeName
            createdTime
            updatedTime
        }
        listLength
    }
}`