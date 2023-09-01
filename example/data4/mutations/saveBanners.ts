import { gql } from '@apollo/client';
export const MUTATION = gql`mutation saveBanners($saveBannersRequestSchema: SaveBannersRequestSchema!){
    saveBanners(saveBannersRequestSchema: $saveBannersRequestSchema){
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
    }
}`