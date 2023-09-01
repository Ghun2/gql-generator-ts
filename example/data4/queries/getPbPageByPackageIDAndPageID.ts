import { gql } from '@apollo/client';
export const QUERY = gql`query getPbPageByPackageIDAndPageID($packageId: String!, $pageId: String!){
    getPbPageByPackageIDAndPageID(packageId: $packageId, pageId: $pageId){
        pbPage{
            pageId
            packageId
            packageIndex
            lSize{
                height
                width
            }
            hSize{
                height
                width
            }
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
            attachmentList{
                attachmentId
                attachmentTypeId
                createdTime
                updatedTime
            }
            createdTime
            updatedTime
        }
    }
}`