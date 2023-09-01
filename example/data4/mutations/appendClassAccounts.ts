import { gql } from '@apollo/client';
export const MUTATION = gql`mutation appendClassAccounts($classAccountList: [ClassAccountInputSchema!]!){
    appendClassAccounts(classAccountList: $classAccountList){
        classAccountList{
            classId
            accountId
            createdTime
            updatedTime
        }
    }
}`