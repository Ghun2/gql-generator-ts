import { gql } from '@apollo/client';
export const MUTATION = gql`mutation updateBannerArea($updateBannerAreaRequestSchema: UpdateBannerAreaRequestSchema!){
    updateBannerArea(updateBannerAreaRequestSchema: $updateBannerAreaRequestSchema){
        bannerArea{
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
    }
}`