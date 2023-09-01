import { gql } from '@apollo/client';
export const QUERY = gql`query listElements($listOption: ListOptionInputSchema){
    listElements(listOption: $listOption){
        elementList{
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
        listLength
    }
}`