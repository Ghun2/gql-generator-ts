import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteClassAccount($classId: Float!, $accountId: Float!){
    deleteClassAccount(classId: $classId, accountId: $accountId)
}`