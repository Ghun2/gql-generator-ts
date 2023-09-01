import { gql } from '@apollo/client';
export const QUERY = gql`query listClassPackagesByClassID($classId: Float!, $listOption: ListOptionInputSchema){
    listClassPackagesByClassID(classId: $classId, listOption: $listOption){
        classPackageList{
            classId
            packageId
            createdTime
            updatedTime
        }
        listLength
    }
}`