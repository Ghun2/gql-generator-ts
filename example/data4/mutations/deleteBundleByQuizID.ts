import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteBundleByQuizID($quizId: String!){
    deleteBundleByQuizID(quizId: $quizId)
}`