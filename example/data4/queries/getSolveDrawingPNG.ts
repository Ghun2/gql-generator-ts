import { gql } from '@apollo/client';
export const QUERY = gql`query getSolveDrawingPNG($userId: Float!, $id: String!){
    getSolveDrawingPNG(userId: $userId, id: $id){
        solveDrawingPNG{
            userId
            id
            base64
            size{
                height
                width
            }
            createdTime
            updatedTime
        }
    }
}`