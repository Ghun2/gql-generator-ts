import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteSolution($DeleteSolutionRequestSchema: DeleteSolutionRequestSchema!){
    deleteSolution(DeleteSolutionRequestSchema: $DeleteSolutionRequestSchema)
}`