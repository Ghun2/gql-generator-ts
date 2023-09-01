import { gql } from '@apollo/client';
export const QUERY = gql`query listBanners($listOption: ListOptionInputSchema){
    listBanners(listOption: $listOption){
        bannerList{
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
        listLength
    }
}`