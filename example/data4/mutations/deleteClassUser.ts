import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteClassUser($classId: Float!, $userId: Float!){
    deleteClassUser(classId: $classId, userId: $userId)
}`