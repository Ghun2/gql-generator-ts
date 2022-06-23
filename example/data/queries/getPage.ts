import { gql } from '@apollo/client';
export const GET_PAGE = gql`query getPage($bookId: Float!, $pageIndex: Float!){
    getPage(bookId: $bookId, pageIndex: $pageIndex){
        bookId
        createdTime
        pageElement{
            bookId
            createdTime
            lSize{
                height
                width
            }
            hSize{
                height
                width
            }
            pageIndex
            updatedTime
        }
        pageIndex
        pageName
        updatedTime
    }
}`