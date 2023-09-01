import { gql } from '@apollo/client';
export const MUTATION = gql`mutation updateClassExternalContents($classExternalContents: ClassExternalContentsInputSchema!){
    updateClassExternalContents(classExternalContents: $classExternalContents){
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