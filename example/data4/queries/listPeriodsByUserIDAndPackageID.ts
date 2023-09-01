import { gql } from '@apollo/client';
export const QUERY = gql`query listPeriodsByUserIDAndPackageID($userId: Float!, $packageId: String!, $listOption: ListOptionInputSchema){
    listPeriodsByUserIDAndPackageID(userId: $userId, packageId: $packageId, listOption: $listOption){
        periodList{
            periodNumber
            userId
            bookId
            packageId
            lastOpenedTime
            solvedTime
            elapsedSeconds
            isExam
            createdTime
            updatedTime
        }
        listLength
    }
}`