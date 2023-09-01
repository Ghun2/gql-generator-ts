import { gql } from '@apollo/client';
export const MUTATION = gql`mutation batchCreateEducatorAccessiblePartners($partnerIdList: [Float!]!, $educatorIdList: [Float!]!){
    batchCreateEducatorAccessiblePartners(partnerIdList: $partnerIdList, educatorIdList: $educatorIdList){
        educatorAccessiblePartnerList{
            educatorId
            partnerId
            createdTime
            updatedTime
        }
    }
}`