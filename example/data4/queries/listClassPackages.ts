import { gql } from '@apollo/client';
export const QUERY = gql`query listClassPackages($listOption: ListOptionInputSchema){
    listClassPackages(listOption: $listOption){
        classPackageList{
            classId
            packageId
            createdTime
            updatedTime
        }
        listLength
    }
}`