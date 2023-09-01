import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteBookTableOfContents($bookTableOfContentsId: String!, $bookId: Float!){
    deleteBookTableOfContents(bookTableOfContentsId: $bookTableOfContentsId, bookId: $bookId)
}`