import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteConversionIssue($issueId: Float!){
    deleteConversionIssue(issueId: $issueId)
}`