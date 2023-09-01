import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteEducatorAccessiblePartner($partnerId: Float!, $educatorId: Float!){
    deleteEducatorAccessiblePartner(partnerId: $partnerId, educatorId: $educatorId)
}`