import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteAnswerSet($answerSetId: String!){
    deleteAnswerSet(answerSetId: $answerSetId)
}`