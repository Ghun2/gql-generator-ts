import { gql } from '@apollo/client';
export const QUERY = gql`query listMathcollectStatuses($bookId: Float!){
    listMathcollectStatuses(bookId: $bookId){
        bookId
        itemId
        itemType
        isComplete
        updatedTime
    }
}`