import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteSubject($deleteSubjectRequestSchema: DeleteSubjectRequestSchema!){
    deleteSubject(deleteSubjectRequestSchema: $deleteSubjectRequestSchema)
}`