import { gql } from '@apollo/client';
export const MUTATION = gql`mutation createQuiz($CreateQuizRequestSchema: CreateQuizRequestSchema!){
    createQuiz(CreateQuizRequestSchema: $CreateQuizRequestSchema){
        quiz{
            quizId
            bookId
            pageIndex
            quizName
            answer
            score
            contentsAgeTypeId
            contentsAgeType{
                contentsAgeTypeId
                contentsAgeTypeName
                createdTime
                updatedTime
            }
            subjectId
            subject{
                subjectId
                subjectName
                createdTime
                updatedTime
            }
            quizCategoryId
            quizCategory{
                quizCategoryId
                parentQuizCategoryId
                subjectId
                quizCategoryName
                createdTime
                updatedTime
            }
            quizTypeId
            quizType{
                quizTypeId
                quizTypeName
                createdTime
                updatedTime
            }
            quizAnswerTypeId
            quizAnswerType{
                quizAnswerTypeId
                quizAnswerTypeName
                createdTime
                updatedTime
            }
            quizElement{
                quizId
                text
                lSize{
                    height
                    width
                }
                hSize{
                    height
                    width
                }
                lPageRectCoordsList{
                    columnIndex
                    coords
                    fragmentOrder
                    pageIndex
                }
                hPageRectCoordsList{
                    columnIndex
                    coords
                    fragmentOrder
                    pageIndex
                }
                answerBoxElement{
                    quizId
                    lSize{
                        height
                        width
                    }
                    hSize{
                        height
                        width
                    }
                    lRectCoords{
                        coords
                        fragmentOrderNumber
                        fragmentCoords{
                            coords
                            fragmentOrderNumber
                        }
                    }
                    hRectCoords{
                        coords
                        fragmentOrderNumber
                        fragmentCoords{
                            coords
                            fragmentOrderNumber
                        }
                    }
                    lPageRectCoordsList{
                        columnIndex
                        coords
                        fragmentOrder
                        pageIndex
                    }
                    hPageRectCoordsList{
                        columnIndex
                        coords
                        fragmentOrder
                        pageIndex
                    }
                    selectorTypeId
                    selectorType{
                        selectorTypeId
                        selectorTypeName
                        createdTime
                        updatedTime
                    }
                    answerSelectorElementList{
                        quizId
                        lSize{
                            height
                            width
                        }
                        hSize{
                            height
                            width
                        }
                        lRectCoords{
                            coords
                            fragmentOrderNumber
                        }
                        hRectCoords{
                            coords
                            fragmentOrderNumber
                        }
                        selectorNumber
                        selectorText
                        text
                        createdTime
                        updatedTime
                    }
                    targetFragmentOrder
                    createdTime
                    updatedTime
                }
                elementList{
                    elementId
                    elementType
                    elementValue
                    ownerId
                    ownerType
                    size{
                        height
                        width
                    }
                    rectCoords{
                        coords
                        fragmentOrderNumber
                        fragmentCoords{
                            coords
                            fragmentOrderNumber
                        }
                    }
                    createdTime
                    updatedTime
                }
                orderInPage
                createdTime
                updatedTime
            }
            quizPaperList{
                quizPaperId
                bookId
                pageIndex
                contentsAgeTypeId
                contentsAgeType{
                    contentsAgeTypeId
                    contentsAgeTypeName
                    createdTime
                    updatedTime
                }
                subjectId
                subject{
                    subjectId
                    subjectName
                    createdTime
                    updatedTime
                }
                quizPaperElement{
                    quizPaperId
                    text
                    lSize{
                        height
                        width
                    }
                    hSize{
                        height
                        width
                    }
                    lPageRectCoordsList{
                        columnIndex
                        coords
                        fragmentOrder
                        pageIndex
                    }
                    hPageRectCoordsList{
                        columnIndex
                        coords
                        fragmentOrder
                        pageIndex
                    }
                    elementList{
                        elementId
                        elementType
                        elementValue
                        ownerId
                        ownerType
                        createdTime
                        updatedTime
                    }
                    orderInPage
                    createdTime
                    updatedTime
                }
                createdTime
                updatedTime
            }
            solutionList{
                solutionId
                bookId
                pageIndex
                solutionName
                answer
                solutionElement{
                    solutionId
                    text
                    lSize{
                        height
                        width
                    }
                    hSize{
                        height
                        width
                    }
                    lPageRectCoordsList{
                        columnIndex
                        coords
                        fragmentOrder
                        pageIndex
                    }
                    hPageRectCoordsList{
                        columnIndex
                        coords
                        fragmentOrder
                        pageIndex
                    }
                    elementList{
                        elementId
                        elementType
                        elementValue
                        ownerId
                        ownerType
                        createdTime
                        updatedTime
                    }
                    orderInPage
                    createdTime
                    updatedTime
                }
                createdTime
                updatedTime
            }
            book{
                bookId
                bookName
                displayName
                bookCategoryId
                bookCategory{
                    bookCategoryId
                    parentBookCategoryId
                    bookCategoryName
                    createdTime
                    updatedTime
                }
                subjectId
                subject{
                    subjectId
                    subjectName
                    createdTime
                    updatedTime
                }
                isbn
                issn
                pubDate
                pubEdition
                numOfPages
                author
                publisher
                description
                size{
                    height
                    width
                }
                bookStatus
                contentsAgeTypeId
                contentsAgeType{
                    contentsAgeTypeId
                    contentsAgeTypeName
                    createdTime
                    updatedTime
                }
                bookType
                bookTableOfContentsList{
                    bookTableOfContentsId
                    bookId
                    parentBookTableOfContentsId
                    order
                    tableOfContentsName
                    pageName
                    createdTime
                    updatedTime
                }
                pageList{
                    bookId
                    pageIndex
                    pageId
                    pageName
                    pageElement{
                        bookId
                        pageIndex
                        lSize{
                            height
                            width
                        }
                        hSize{
                            height
                            width
                        }
                        elementList{
                            elementId
                            elementType
                            elementValue
                            ownerId
                            ownerType
                            createdTime
                            updatedTime
                        }
                        createdTime
                        updatedTime
                    }
                    createdTime
                    updatedTime
                }
                bookUploaderList{
                    bookId
                    uploaderType
                    uploaderId
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