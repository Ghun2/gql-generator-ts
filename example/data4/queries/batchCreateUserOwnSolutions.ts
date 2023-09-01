import { gql } from '@apollo/client';
export const QUERY = gql`query batchCreateUserOwnSolutions($userOwnSolutionList: [UserOwnSolutionInputSchema!]!){
    batchCreateUserOwnSolutions(userOwnSolutionList: $userOwnSolutionList){
        userOwnSolutionList{
            userId
            solutionId
            createdTime
            updatedTime
        }
    }
}`