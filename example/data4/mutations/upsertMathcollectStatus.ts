import { gql } from '@apollo/client';
export const MUTATION = gql`mutation upsertMathcollectStatus($UpsertMathcollectStatusSchema: UpsertMathcollectStatusSchema!){
    upsertMathcollectStatus(UpsertMathcollectStatusSchema: $UpsertMathcollectStatusSchema){
        bookId
        itemId
        itemType
        isComplete
        updatedTime
    }
}`