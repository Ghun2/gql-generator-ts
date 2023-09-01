import { gql } from '@apollo/client';
export const QUERY = gql`query getMathcollectStatusByItemId($bookId: Float!, $itemId: String!){
    getMathcollectStatusByItemId(bookId: $bookId, itemId: $itemId){
        bookId
        itemId
        itemType
        isComplete
        updatedTime
    }
}`