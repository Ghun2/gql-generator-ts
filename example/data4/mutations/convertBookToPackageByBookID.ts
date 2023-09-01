import { gql } from '@apollo/client';
export const MUTATION = gql`mutation convertBookToPackageByBookID($bookId: Float!, $partnerId: Float){
    convertBookToPackageByBookID(bookId: $bookId, partnerId: $partnerId){
        package{
            packageId
            packageType
            useMode
            packageStatus
            packageName
            displayName
            subjectId
            pubDate
            numOfPages
            author
            publisher
            description
            contentsAgeTypeId
            pbPageList{
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