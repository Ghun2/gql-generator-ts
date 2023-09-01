import { gql } from '@apollo/client';
export const MUTATION = gql`mutation appendBannerArea($appendBannerAreaRequestSchema: AppendBannerAreaRequestSchema!){
    appendBannerArea(appendBannerAreaRequestSchema: $appendBannerAreaRequestSchema){
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