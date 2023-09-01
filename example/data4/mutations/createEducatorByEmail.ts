import { gql } from '@apollo/client';
export const MUTATION = gql`mutation createEducatorByEmail($email: String!){
    createEducatorByEmail(email: $email){
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