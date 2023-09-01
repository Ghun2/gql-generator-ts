import { gql } from '@apollo/client';
export const QUERY = gql`query getSelectorType($selectorTypeId: Float!){
    getSelectorType(selectorTypeId: $selectorTypeId){
        selectorType{
            selectorTypeId
            selectorTypeName
            createdTime
            updatedTime
        }
    }
}`