import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteClassExternalContents($classId: Float!){
    deleteClassExternalContents(classId: $classId)
}`