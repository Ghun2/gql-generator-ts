import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteSelectorType($deleteSelectorTypeRequestSchema: DeleteSelectorTypeRequestSchema!){
    deleteSelectorType(deleteSelectorTypeRequestSchema: $deleteSelectorTypeRequestSchema)
}`