import { gql } from '@apollo/client';
export const QUERY = gql`query getBanner($bannerId: Float!){
    getBanner(bannerId: $bannerId){
        banner{
            bannerId
            bannerAreaId
            bannerType
            imageUrl
            priorityNumber
            startTime
            endTime
            bannerText
            bannerAltText
            landingTarget
            webUrl
            bannerTargetPlatformList{
                bannerId
                targetPlatform
                createdTime
                updatedTime
            }
            createdTime
            updatedTime
        }
    }
}`