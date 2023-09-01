import { gql } from '@apollo/client';
export const QUERY = gql`query listEducatorsByPartnerID($partnerId: Float!, $listOption: ListOptionInputSchema){
    listEducatorsByPartnerID(partnerId: $partnerId, listOption: $listOption){
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