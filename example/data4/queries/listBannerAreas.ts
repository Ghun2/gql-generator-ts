import { gql } from '@apollo/client';
export const QUERY = gql`query listBannerAreas($listOption: ListOptionInputSchema){
    listBannerAreas(listOption: $listOption){
        bannerAreaList{
            bannerAreaId
            bannerAreaName
            size{
                height
                width
            }
            createdTime
            updatedTime
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
        listLength
    }
}`