import { gql } from '@apollo/client';
export const MUTATION = gql`mutation updatePeriod($UpdatePeriodRequestSchema: UpdatePeriodRequestSchema!){
    updatePeriod(UpdatePeriodRequestSchema: $UpdatePeriodRequestSchema){
        period{
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
    }
}`