import { gql } from '@apollo/client';
export const MUTATION = gql`mutation createClassExternalContents($classExternalContents: ClassExternalContentsInputSchema!){
    createClassExternalContents(classExternalContents: $classExternalContents){
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