import { gql } from '@apollo/client';
export const QUERY = gql`query sendMessage($mobileNumber: String!, $message: String!, $destination: String, $sender: String, $title: String, $imageUrl: String, $reserveDay: String, $reserveTime: String){
    sendMessage(mobileNumber: $mobileNumber, message: $message, destination: $destination, sender: $sender, title: $title, imageUrl: $imageUrl, reserveDay: $reserveDay, reserveTime: $reserveTime){
        messageId
        successCount
        errorCount
        messageType
    }
}`