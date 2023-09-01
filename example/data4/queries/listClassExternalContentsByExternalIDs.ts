import { gql } from '@apollo/client';
export const QUERY = gql`query listClassExternalContentsByExternalIDs($externalContentsIdList: [String!]!, $listOption: ListOptionInputSchema){
    listClassExternalContentsByExternalIDs(externalContentsIdList: $externalContentsIdList, listOption: $listOption){
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