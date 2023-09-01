import { gql } from '@apollo/client';
export const QUERY = gql`query getEducatorByEmail($email: String!){
    getEducatorByEmail(email: $email){
        educator{
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
    }
}`