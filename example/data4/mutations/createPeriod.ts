import { gql } from '@apollo/client';
export const MUTATION = gql`mutation createPeriod($CreatePeriodRequestSchema: CreatePeriodRequestSchema!){
    createPeriod(CreatePeriodRequestSchema: $CreatePeriodRequestSchema)
}`