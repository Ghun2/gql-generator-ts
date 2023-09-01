import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteStarredQuizzesOfUser($DeleteStarredQuizzesOfUserRequestSchema: DeleteStarredQuizzesOfUserRequestSchema!){
    deleteStarredQuizzesOfUser(DeleteStarredQuizzesOfUserRequestSchema: $DeleteStarredQuizzesOfUserRequestSchema)
}`