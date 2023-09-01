import { gql } from '@apollo/client';
export const QUERY = gql`query getClassByID($classId: Float!){
    getClassByID(classId: $classId){
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