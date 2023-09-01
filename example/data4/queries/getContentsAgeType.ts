import { gql } from '@apollo/client';
export const QUERY = gql`query getContentsAgeType($contentsAgeTypeId: Float!){
    getContentsAgeType(contentsAgeTypeId: $contentsAgeTypeId){
        contentsAgeType{
            contentsAgeTypeId
            contentsAgeTypeName
            createdTime
            updatedTime
        }
    }
}`