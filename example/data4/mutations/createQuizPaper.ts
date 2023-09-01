import { gql } from '@apollo/client';
export const MUTATION = gql`mutation createQuizPaper($CreateQuizPaperRequestSchema: CreateQuizPaperRequestSchema!){
    createQuizPaper(CreateQuizPaperRequestSchema: $CreateQuizPaperRequestSchema){
        quizPaper{
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
            createdTime
            updatedTime
        }
    }
}`