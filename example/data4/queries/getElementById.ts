import { gql } from '@apollo/client';
export const QUERY = gql`query getElementById($elementId: Float!){
    getElementById(elementId: $elementId){
        element{
            elementId
            elementType
            elementValue
            ownerId
            ownerType
            size{
                height
                width
            }
            rectCoords{
                coords
                fragmentOrderNumber
                fragmentCoords{
                    coords
                    fragmentOrderNumber
                }
            }
            createdTime
            updatedTime
        }
    }
}`