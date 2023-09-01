import { gql } from '@apollo/client';
export const MUTATION = gql`mutation appendUserOwnBook($AppendUserOwnBookRequestSchema: AppendUserOwnBookRequestSchema!){
    appendUserOwnBook(AppendUserOwnBookRequestSchema: $AppendUserOwnBookRequestSchema)
}`