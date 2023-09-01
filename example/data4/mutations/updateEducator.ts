import { gql } from '@apollo/client';
export const MUTATION = gql`mutation updateEducator($educator: EducatorInputSchema){
    updateEducator(educator: $educator){
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