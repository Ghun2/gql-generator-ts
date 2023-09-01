import { gql } from '@apollo/client';
export const QUERY = gql`query listSolvers{
    listSolvers{
        userId
        name
        mobileNumber
        solverInfo
        createdTime
        updatedTime
    }
}`