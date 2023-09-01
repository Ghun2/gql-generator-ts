import { gql } from '@apollo/client';
export const QUERY = gql`query sendMassMessage($receiverList: [MessageReceiverInputSchema!]!, $sender: String, $title: String, $imageUrl: String, $reserveDay: String, $reserveTime: String){
    sendMassMessage(receiverList: $receiverList, sender: $sender, title: $title, imageUrl: $imageUrl, reserveDay: $reserveDay, reserveTime: $reserveTime){
        messageId
        successCount
        errorCount
        messageType
    }
}`