import { gql } from '@apollo/client';
export const QUERY = gql`query listUserOwnSolutions($listOption: ListOptionInputSchema){
    listUserOwnSolutions(listOption: $listOption){
        userOwnSolutionList{
            userId
            solutionId
            createdTime
            updatedTime
        }
        listLength
    }
}`