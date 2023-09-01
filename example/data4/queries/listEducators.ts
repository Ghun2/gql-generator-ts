import { gql } from '@apollo/client';
export const QUERY = gql`query listEducators($listOption: ListOptionInputSchema){
    listEducators(listOption: $listOption){
        educatorList{
            educatorId
            email
            educatorStatus
            educatorAccessiblePartnerList{
                educatorId
                partnerId
                createdTime
                updatedTime
            }
            createdTime
            updatedTime
        }
        listLength
    }
}`