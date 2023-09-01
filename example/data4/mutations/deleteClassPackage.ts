import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteClassPackage($classId: Float!, $packageId: String!){
    deleteClassPackage(classId: $classId, packageId: $packageId)
}`