import { gql } from '@apollo/client';
export const MUTATION = gql`mutation createQuizType($createQuizTypeRequestSchema: CreateQuizTypeRequestSchema!){
    createQuizType(createQuizTypeRequestSchema: $createQuizTypeRequestSchema){
        quizType{
            quizTypeId
            quizTypeName
            createdTime
            updatedTime
        }
    }
}`