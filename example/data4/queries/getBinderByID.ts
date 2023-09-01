import { gql } from '@apollo/client';
export const QUERY = gql`query getBinderByID($binderId: String!){
    getBinderByID(binderId: $binderId){
        binder{
            binderId
            bundleList{
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
            binderElement{
                binderId
                makerUserId
                description
                binderLikeList{
                    binderId
                    userId
                    createdTime
                    updatedTime
                }
                createdTime
                updatedTime
            }
            createdTime
            updatedTime
        }
    }
}`