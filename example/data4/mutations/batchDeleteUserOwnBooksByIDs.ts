import { gql } from '@apollo/client';
export const MUTATION = gql`mutation batchDeleteUserOwnBooksByIDs($BatchDeleteUserOwnBooksByIDsRequestSchema: BatchDeleteUserOwnBooksByIDsRequestSchema!){
    batchDeleteUserOwnBooksByIDs(BatchDeleteUserOwnBooksByIDsRequestSchema: $BatchDeleteUserOwnBooksByIDsRequestSchema)
}`