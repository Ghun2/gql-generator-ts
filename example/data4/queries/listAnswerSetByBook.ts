import { gql } from '@apollo/client';
export const QUERY = gql`query listAnswerSetByBook($bookId: Float!, $listOption: ListOptionInputSchema){
    listAnswerSetByBook(bookId: $bookId, listOption: $listOption){
        answerSetList{
            answerSetId
            bookId
            pageIndex
            answerSetName
            answerSetItemList{
                name
                answer
            }
            createdTime
            updatedTime
        }
        listLength
    }
}`