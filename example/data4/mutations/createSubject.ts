import { gql } from '@apollo/client';
export const MUTATION = gql`mutation createSubject($createSubjectRequestSchema: CreateSubjectRequestSchema!){
    createSubject(createSubjectRequestSchema: $createSubjectRequestSchema){
        subject{
            subjectId
            subjectName
            createdTime
            updatedTime
        }
    }
}`