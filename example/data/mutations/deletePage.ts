import { gql } from '@apollo/client';
export const DELETE_PAGE = gql`mutation deletePage($DeletePageRequestSchema: DeletePageRequestSchema!){
    deletePage(DeletePageRequestSchema: $DeletePageRequestSchema){
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