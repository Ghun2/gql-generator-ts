import { gql } from '@apollo/client';
export const QUERY = gql`query getSubject($subjectId: Float!){
    getSubject(subjectId: $subjectId){
        subject{
            subjectId
            subjectName
            createdTime
            updatedTime
        }
    }
}`