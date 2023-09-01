import { gql } from '@apollo/client';
export const QUERY = gql`query getClassExternalContents($classId: Float!){
    getClassExternalContents(classId: $classId){
        classExternalContents{
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
    }
}`