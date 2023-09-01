import { gql } from '@apollo/client';
export const QUERY = gql`query listClassPackagesByPackageID($packageId: String!, $listOption: ListOptionInputSchema){
    listClassPackagesByPackageID(packageId: $packageId, listOption: $listOption){
        classPackageList{
            classId
            packageId
            createdTime
            updatedTime
        }
        listLength
    }
}`