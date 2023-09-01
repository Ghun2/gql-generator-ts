import { gql } from '@apollo/client';
export const QUERY = gql`query getSolverByUserId($userId: Float!){
    getSolverByUserId(userId: $userId){
        userId
        name
        mobileNumber
        solverInfo
        createdTime
        updatedTime
    }
}`