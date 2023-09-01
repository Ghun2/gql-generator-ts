import { gql } from '@apollo/client';
export const MUTATION = gql`mutation upsertAnswerSet($answerSet: AnswerSetInputSchema){
    upsertAnswerSet(answerSet: $answerSet){
        answerSet{
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
    }
}`