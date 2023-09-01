import { gql } from '@apollo/client';
export const QUERY = gql`query listClassExternalContents($listOption: ListOptionInputSchema){
    listClassExternalContents(listOption: $listOption){
        classExternalContentsList{
            classId
            partnerId
            externalContentsName
            externalContentsItemList{
                classId
                externalContentsId
                createdTime
                updatedTime
            }
            createdTime
            updatedTime
        }
        listLength
    }
}`