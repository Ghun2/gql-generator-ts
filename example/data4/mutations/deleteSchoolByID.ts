import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteSchoolByID($DeleteSchoolByIDRequestSchema: DeleteSchoolByIDRequestSchema!){
    deleteSchoolByID(DeleteSchoolByIDRequestSchema: $DeleteSchoolByIDRequestSchema)
}`