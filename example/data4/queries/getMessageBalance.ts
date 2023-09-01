import { gql } from '@apollo/client';
export const QUERY = gql`query getMessageBalance{
    getMessageBalance{
        smsCount
        lmsCount
        mmsCount
    }
}`