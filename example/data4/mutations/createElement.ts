import { gql } from '@apollo/client';
export const MUTATION = gql`mutation createElement($CreateElementRequestSchema: CreateElementRequestSchema!){
    createElement(CreateElementRequestSchema: $CreateElementRequestSchema){
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