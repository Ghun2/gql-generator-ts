import { gql } from '@apollo/client';
export const QUERY = gql`query listQuizAnswerTypes($listOption: ListOptionInputSchema){
    listQuizAnswerTypes(listOption: $listOption){
        quizAnswerTypeList{
            quizAnswerTypeId
            quizAnswerTypeName
            createdTime
            updatedTime
        }
        listLength
    }
}`