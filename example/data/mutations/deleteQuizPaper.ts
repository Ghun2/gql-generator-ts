import { gql } from '@apollo/client';
export const DELETE_QUIZ_PAPER = gql`mutation deleteQuizPaper($DeleteQuizPaperRequestSchema: DeleteQuizPaperRequestSchema!){
    deleteQuizPaper(DeleteQuizPaperRequestSchema: $DeleteQuizPaperRequestSchema)
}`