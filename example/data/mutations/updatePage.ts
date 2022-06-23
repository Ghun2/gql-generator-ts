import { gql } from '@apollo/client';
export const UPDATE_PAGE = gql`mutation updatePage($UpdatePageRequestSchema: UpdatePageRequestSchema!){
    updatePage(UpdatePageRequestSchema: $UpdatePageRequestSchema){
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