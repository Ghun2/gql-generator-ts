import { gql } from '@apollo/client';
export const MUTATION = gql`mutation detachSolutionFromBundle($quizId: String!, $solutionId: String!){
    detachSolutionFromBundle(quizId: $quizId, solutionId: $solutionId){
        bundle{
            quizId
            pbQuiz{
                quizId
                bookId
                pageIndex
                quizName
                answer
                score
                contentsAgeTypeId
                subjectId
                quizTypeId
                quizAnswerTypeId
                createdTime
                updatedTime
            }
            pbQuizPaperList{
                quizPaperId
                createdTime
                updatedTime
            }
            pbSolutionList{
                solutionId
                solutionName
                answer
                createdTime
                updatedTime
            }
            attachmentList{
                attachmentId
                attachmentTypeId
                createdTime
                updatedTime
            }
            source{
                packageId
                pageId
                binderId
                packageIndex
            }
        }
    }
}`