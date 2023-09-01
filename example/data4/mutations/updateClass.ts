import { gql } from '@apollo/client';
export const MUTATION = gql`mutation updateClass($class: ClassInputSchema){
    updateClass(class: $class){
        class{
            classId
            className
            classManagerId
            partnerId
            classUserList{
                classId
                userId
                createdTime
                updatedTime
            }
            classAccountList{
                classId
                accountId
                createdTime
                updatedTime
            }
            classPackageList{
                classId
                packageId
                createdTime
                updatedTime
            }
            createdTime
            updatedTime
        }
    }
}`