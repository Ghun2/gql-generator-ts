import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteUserOwnSolution($userId: Float!, $solutionId: String!){
    deleteUserOwnSolution(userId: $userId, solutionId: $solutionId)
}`