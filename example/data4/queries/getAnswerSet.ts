import { gql } from '@apollo/client';
export const QUERY = gql`query getAnswerSet($answerSetId: String!){
    getAnswerSet(answerSetId: $answerSetId){
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