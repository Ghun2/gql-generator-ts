import { gql } from '@apollo/client';
export const MUTATION = gql`mutation updateSubject($updateSubjectRequestSchema: UpdateSubjectRequestSchema!){
    updateSubject(updateSubjectRequestSchema: $updateSubjectRequestSchema){
        subject{
            subjectId
            subjectName
            createdTime
            updatedTime
        }
    }
}`