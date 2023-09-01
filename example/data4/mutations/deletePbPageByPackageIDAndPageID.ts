import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deletePbPageByPackageIDAndPageID($packageId: String!, $pageId: String!){
    deletePbPageByPackageIDAndPageID(packageId: $packageId, pageId: $pageId)
}`