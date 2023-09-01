import { gql } from '@apollo/client';
export const QUERY = gql`query appendUserOwnSolution($userOwnSolution: UserOwnSolutionInputSchema){
    appendUserOwnSolution(userOwnSolution: $userOwnSolution){
        userOwnSolution{
            userId
            solutionId
            createdTime
            updatedTime
        }
    }
}`