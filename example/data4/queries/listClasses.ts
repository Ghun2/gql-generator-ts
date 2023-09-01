import { gql } from '@apollo/client';
export const QUERY = gql`query listClasses($listOption: ListOptionInputSchema){
    listClasses(listOption: $listOption){
        classes{
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
        listLength
    }
}`