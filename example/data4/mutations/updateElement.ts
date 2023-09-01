import { gql } from '@apollo/client';
export const MUTATION = gql`mutation updateElement($UpdateElementRequestSchema: UpdateElementRequestSchema!){
    updateElement(UpdateElementRequestSchema: $UpdateElementRequestSchema){
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