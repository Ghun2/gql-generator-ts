import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteClass($classId: Float!){
    deleteClass(classId: $classId)
}`