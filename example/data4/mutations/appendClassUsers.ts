import { gql } from '@apollo/client';
export const MUTATION = gql`mutation appendClassUsers($classUserList: [ClassUserInputSchema!]!){
    appendClassUsers(classUserList: $classUserList){
        classUserList{
            classId
            userId
            createdTime
            updatedTime
        }
    }
}`