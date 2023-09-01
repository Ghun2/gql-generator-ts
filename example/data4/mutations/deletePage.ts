import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deletePage($DeletePageRequestSchema: DeletePageRequestSchema!){
    deletePage(DeletePageRequestSchema: $DeletePageRequestSchema)
}`