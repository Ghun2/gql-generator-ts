import { gql } from '@apollo/client';
export const MUTATION = gql`mutation appendClassPackages($classPackageList: [ClassPackageInputSchema!]!){
    appendClassPackages(classPackageList: $classPackageList){
        classPackageList{
            classId
            packageId
            createdTime
            updatedTime
        }
    }
}`