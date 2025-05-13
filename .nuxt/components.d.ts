
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'GlobalSection': typeof import("../components/GlobalSection.vue")['default']
    'InvestorsAnnualReports': typeof import("../components/Investors/annualReports.vue")['default']
    'InvestorsDetails': typeof import("../components/Investors/investorsDetails.vue")['default']
    'InvestorsQuarterlyResults': typeof import("../components/Investors/quarterlyResults.vue")['default']
    'InvestorsShareholdersInfo': typeof import("../components/Investors/shareholdersInfo.vue")['default']
    'InvestorsStockPrice': typeof import("../components/Investors/stockPrice.vue")['default']
    'SideNav': typeof import("../components/SideNav/SideNav.vue")['default']
    'VerticalsMajorMinerals': typeof import("../components/Verticals/majorMinerals.vue")['default']
    'VerticalsMiningEquipment': typeof import("../components/Verticals/miningEquipment.vue")['default']
    'VerticalsMinorMinerals': typeof import("../components/Verticals/minorMinerals.vue")['default']
    'AboutArea': typeof import("../components/about/aboutArea.vue")['default']
    'AboutAccomplishMent': typeof import("../components/about/accomplishMent.vue")['default']
    'AboutDirectorDesk': typeof import("../components/about/directorDesk.vue")['default']
    'AboutManagementTeam': typeof import("../components/about/managementTeam.vue")['default']
    'AboutMaxearthAdvantage': typeof import("../components/about/maxearthAdvantage.vue")['default']
    'AboutVisionNmission': typeof import("../components/about/visionNmission.vue")['default']
    'AdminAnnualReportsFrm': typeof import("../components/admin/annualReportsFrm.vue")['default']
    'AdminContactdetailsUpdateFrm': typeof import("../components/admin/contactdetailsUpdateFrm.vue")['default']
    'AdminLatestNewsupdateFrm': typeof import("../components/admin/latestNewsupdateFrm.vue")['default']
    'AdminMediaAnnounceFrm': typeof import("../components/admin/mediaAnnounceFrm.vue")['default']
    'AdminQuarterlyUpdatesFrm': typeof import("../components/admin/quarterlyUpdatesFrm.vue")['default']
    'AdminShareholdersDetailsFrm': typeof import("../components/admin/shareholdersDetailsFrm.vue")['default']
    'AdminSocialMedialinksFrm': typeof import("../components/admin/socialMedialinksFrm.vue")['default']
    'AdminStockPricepdateFrm': typeof import("../components/admin/stockPricepdateFrm.vue")['default']
    'ContactUsMapSection': typeof import("../components/contactUs/MapSection.vue")['default']
    'ContactUsGetTouchCard': typeof import("../components/contactUs/getTouchCard.vue")['default']
    'FaqPageFaqArea': typeof import("../components/faqPage/FaqArea.vue")['default']
    'HomePageAboutArea': typeof import("../components/homePage/AboutArea.vue")['default']
    'HomePageAboutServices': typeof import("../components/homePage/AboutServices.vue")['default']
    'HomePageBlogArea': typeof import("../components/homePage/BlogArea.vue")['default']
    'HomePageCarouselSlide': typeof import("../components/homePage/CarouselSlide.vue")['default']
    'HomePageClientSays': typeof import("../components/homePage/ClientSays.vue")['default']
    'HomePageCounterSection': typeof import("../components/homePage/CounterSection.vue")['default']
    'HomePageOurVision': typeof import("../components/homePage/OurVision.vue")['default']
    'HomePagePartnerArea': typeof import("../components/homePage/PartnerArea.vue")['default']
    'HomePageSafetyPolicy': typeof import("../components/homePage/SafetyPolicy.vue")['default']
    'HomePageTeamArea': typeof import("../components/homePage/TeamArea.vue")['default']
    'HomePageVideoArea': typeof import("../components/homePage/VideoArea.vue")['default']
    'LatestNewsFormInput': typeof import("../components/latestNews/FormInput.vue")['default']
    'LatestNewsCard': typeof import("../components/latestNews/NewsCard.vue")['default']
    'LatestNewsPortFolio': typeof import("../components/latestNews/PortFolio.vue")['default']
    'LatestNewsProcessSection': typeof import("../components/latestNews/ProcessSection.vue")['default']
    'LatestNews': typeof import("../components/latestNews/latestNews.vue")['default']
    'LatestNewsNewAnnouncements': typeof import("../components/latestNews/newAnnouncements.vue")['default']
    'MiningProjectsOngoingProjects': typeof import("../components/miningProjects/ongoingProjects.vue")['default']
    'PageFooter': typeof import("../components/pageFooter/Footer.vue")['default']
    'PageHeader': typeof import("../components/pageHeader/Header.vue")['default']
    'PageHeaderTop': typeof import("../components/pageHeader/HeaderTop.vue")['default']
    'PageHeaderMainNav': typeof import("../components/pageHeader/MainNav.vue")['default']
    'PageLoader': typeof import("../components/pageLoader/PageLoader.vue")['default']
    'PopupAlert': typeof import("../components/popupAlert/Alert.vue")['default']
    'PopupAlertPopup': typeof import("../components/popupAlert/AlertPopup.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyGlobalSection': LazyComponent<typeof import("../components/GlobalSection.vue")['default']>
    'LazyInvestorsAnnualReports': LazyComponent<typeof import("../components/Investors/annualReports.vue")['default']>
    'LazyInvestorsDetails': LazyComponent<typeof import("../components/Investors/investorsDetails.vue")['default']>
    'LazyInvestorsQuarterlyResults': LazyComponent<typeof import("../components/Investors/quarterlyResults.vue")['default']>
    'LazyInvestorsShareholdersInfo': LazyComponent<typeof import("../components/Investors/shareholdersInfo.vue")['default']>
    'LazyInvestorsStockPrice': LazyComponent<typeof import("../components/Investors/stockPrice.vue")['default']>
    'LazySideNav': LazyComponent<typeof import("../components/SideNav/SideNav.vue")['default']>
    'LazyVerticalsMajorMinerals': LazyComponent<typeof import("../components/Verticals/majorMinerals.vue")['default']>
    'LazyVerticalsMiningEquipment': LazyComponent<typeof import("../components/Verticals/miningEquipment.vue")['default']>
    'LazyVerticalsMinorMinerals': LazyComponent<typeof import("../components/Verticals/minorMinerals.vue")['default']>
    'LazyAboutArea': LazyComponent<typeof import("../components/about/aboutArea.vue")['default']>
    'LazyAboutAccomplishMent': LazyComponent<typeof import("../components/about/accomplishMent.vue")['default']>
    'LazyAboutDirectorDesk': LazyComponent<typeof import("../components/about/directorDesk.vue")['default']>
    'LazyAboutManagementTeam': LazyComponent<typeof import("../components/about/managementTeam.vue")['default']>
    'LazyAboutMaxearthAdvantage': LazyComponent<typeof import("../components/about/maxearthAdvantage.vue")['default']>
    'LazyAboutVisionNmission': LazyComponent<typeof import("../components/about/visionNmission.vue")['default']>
    'LazyAdminAnnualReportsFrm': LazyComponent<typeof import("../components/admin/annualReportsFrm.vue")['default']>
    'LazyAdminContactdetailsUpdateFrm': LazyComponent<typeof import("../components/admin/contactdetailsUpdateFrm.vue")['default']>
    'LazyAdminLatestNewsupdateFrm': LazyComponent<typeof import("../components/admin/latestNewsupdateFrm.vue")['default']>
    'LazyAdminMediaAnnounceFrm': LazyComponent<typeof import("../components/admin/mediaAnnounceFrm.vue")['default']>
    'LazyAdminQuarterlyUpdatesFrm': LazyComponent<typeof import("../components/admin/quarterlyUpdatesFrm.vue")['default']>
    'LazyAdminShareholdersDetailsFrm': LazyComponent<typeof import("../components/admin/shareholdersDetailsFrm.vue")['default']>
    'LazyAdminSocialMedialinksFrm': LazyComponent<typeof import("../components/admin/socialMedialinksFrm.vue")['default']>
    'LazyAdminStockPricepdateFrm': LazyComponent<typeof import("../components/admin/stockPricepdateFrm.vue")['default']>
    'LazyContactUsMapSection': LazyComponent<typeof import("../components/contactUs/MapSection.vue")['default']>
    'LazyContactUsGetTouchCard': LazyComponent<typeof import("../components/contactUs/getTouchCard.vue")['default']>
    'LazyFaqPageFaqArea': LazyComponent<typeof import("../components/faqPage/FaqArea.vue")['default']>
    'LazyHomePageAboutArea': LazyComponent<typeof import("../components/homePage/AboutArea.vue")['default']>
    'LazyHomePageAboutServices': LazyComponent<typeof import("../components/homePage/AboutServices.vue")['default']>
    'LazyHomePageBlogArea': LazyComponent<typeof import("../components/homePage/BlogArea.vue")['default']>
    'LazyHomePageCarouselSlide': LazyComponent<typeof import("../components/homePage/CarouselSlide.vue")['default']>
    'LazyHomePageClientSays': LazyComponent<typeof import("../components/homePage/ClientSays.vue")['default']>
    'LazyHomePageCounterSection': LazyComponent<typeof import("../components/homePage/CounterSection.vue")['default']>
    'LazyHomePageOurVision': LazyComponent<typeof import("../components/homePage/OurVision.vue")['default']>
    'LazyHomePagePartnerArea': LazyComponent<typeof import("../components/homePage/PartnerArea.vue")['default']>
    'LazyHomePageSafetyPolicy': LazyComponent<typeof import("../components/homePage/SafetyPolicy.vue")['default']>
    'LazyHomePageTeamArea': LazyComponent<typeof import("../components/homePage/TeamArea.vue")['default']>
    'LazyHomePageVideoArea': LazyComponent<typeof import("../components/homePage/VideoArea.vue")['default']>
    'LazyLatestNewsFormInput': LazyComponent<typeof import("../components/latestNews/FormInput.vue")['default']>
    'LazyLatestNewsCard': LazyComponent<typeof import("../components/latestNews/NewsCard.vue")['default']>
    'LazyLatestNewsPortFolio': LazyComponent<typeof import("../components/latestNews/PortFolio.vue")['default']>
    'LazyLatestNewsProcessSection': LazyComponent<typeof import("../components/latestNews/ProcessSection.vue")['default']>
    'LazyLatestNews': LazyComponent<typeof import("../components/latestNews/latestNews.vue")['default']>
    'LazyLatestNewsNewAnnouncements': LazyComponent<typeof import("../components/latestNews/newAnnouncements.vue")['default']>
    'LazyMiningProjectsOngoingProjects': LazyComponent<typeof import("../components/miningProjects/ongoingProjects.vue")['default']>
    'LazyPageFooter': LazyComponent<typeof import("../components/pageFooter/Footer.vue")['default']>
    'LazyPageHeader': LazyComponent<typeof import("../components/pageHeader/Header.vue")['default']>
    'LazyPageHeaderTop': LazyComponent<typeof import("../components/pageHeader/HeaderTop.vue")['default']>
    'LazyPageHeaderMainNav': LazyComponent<typeof import("../components/pageHeader/MainNav.vue")['default']>
    'LazyPageLoader': LazyComponent<typeof import("../components/pageLoader/PageLoader.vue")['default']>
    'LazyPopupAlert': LazyComponent<typeof import("../components/popupAlert/Alert.vue")['default']>
    'LazyPopupAlertPopup': LazyComponent<typeof import("../components/popupAlert/AlertPopup.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const GlobalSection: typeof import("../components/GlobalSection.vue")['default']
export const InvestorsAnnualReports: typeof import("../components/Investors/annualReports.vue")['default']
export const InvestorsDetails: typeof import("../components/Investors/investorsDetails.vue")['default']
export const InvestorsQuarterlyResults: typeof import("../components/Investors/quarterlyResults.vue")['default']
export const InvestorsShareholdersInfo: typeof import("../components/Investors/shareholdersInfo.vue")['default']
export const InvestorsStockPrice: typeof import("../components/Investors/stockPrice.vue")['default']
export const SideNav: typeof import("../components/SideNav/SideNav.vue")['default']
export const VerticalsMajorMinerals: typeof import("../components/Verticals/majorMinerals.vue")['default']
export const VerticalsMiningEquipment: typeof import("../components/Verticals/miningEquipment.vue")['default']
export const VerticalsMinorMinerals: typeof import("../components/Verticals/minorMinerals.vue")['default']
export const AboutArea: typeof import("../components/about/aboutArea.vue")['default']
export const AboutAccomplishMent: typeof import("../components/about/accomplishMent.vue")['default']
export const AboutDirectorDesk: typeof import("../components/about/directorDesk.vue")['default']
export const AboutManagementTeam: typeof import("../components/about/managementTeam.vue")['default']
export const AboutMaxearthAdvantage: typeof import("../components/about/maxearthAdvantage.vue")['default']
export const AboutVisionNmission: typeof import("../components/about/visionNmission.vue")['default']
export const AdminAnnualReportsFrm: typeof import("../components/admin/annualReportsFrm.vue")['default']
export const AdminContactdetailsUpdateFrm: typeof import("../components/admin/contactdetailsUpdateFrm.vue")['default']
export const AdminLatestNewsupdateFrm: typeof import("../components/admin/latestNewsupdateFrm.vue")['default']
export const AdminMediaAnnounceFrm: typeof import("../components/admin/mediaAnnounceFrm.vue")['default']
export const AdminQuarterlyUpdatesFrm: typeof import("../components/admin/quarterlyUpdatesFrm.vue")['default']
export const AdminShareholdersDetailsFrm: typeof import("../components/admin/shareholdersDetailsFrm.vue")['default']
export const AdminSocialMedialinksFrm: typeof import("../components/admin/socialMedialinksFrm.vue")['default']
export const AdminStockPricepdateFrm: typeof import("../components/admin/stockPricepdateFrm.vue")['default']
export const ContactUsMapSection: typeof import("../components/contactUs/MapSection.vue")['default']
export const ContactUsGetTouchCard: typeof import("../components/contactUs/getTouchCard.vue")['default']
export const FaqPageFaqArea: typeof import("../components/faqPage/FaqArea.vue")['default']
export const HomePageAboutArea: typeof import("../components/homePage/AboutArea.vue")['default']
export const HomePageAboutServices: typeof import("../components/homePage/AboutServices.vue")['default']
export const HomePageBlogArea: typeof import("../components/homePage/BlogArea.vue")['default']
export const HomePageCarouselSlide: typeof import("../components/homePage/CarouselSlide.vue")['default']
export const HomePageClientSays: typeof import("../components/homePage/ClientSays.vue")['default']
export const HomePageCounterSection: typeof import("../components/homePage/CounterSection.vue")['default']
export const HomePageOurVision: typeof import("../components/homePage/OurVision.vue")['default']
export const HomePagePartnerArea: typeof import("../components/homePage/PartnerArea.vue")['default']
export const HomePageSafetyPolicy: typeof import("../components/homePage/SafetyPolicy.vue")['default']
export const HomePageTeamArea: typeof import("../components/homePage/TeamArea.vue")['default']
export const HomePageVideoArea: typeof import("../components/homePage/VideoArea.vue")['default']
export const LatestNewsFormInput: typeof import("../components/latestNews/FormInput.vue")['default']
export const LatestNewsCard: typeof import("../components/latestNews/NewsCard.vue")['default']
export const LatestNewsPortFolio: typeof import("../components/latestNews/PortFolio.vue")['default']
export const LatestNewsProcessSection: typeof import("../components/latestNews/ProcessSection.vue")['default']
export const LatestNews: typeof import("../components/latestNews/latestNews.vue")['default']
export const LatestNewsNewAnnouncements: typeof import("../components/latestNews/newAnnouncements.vue")['default']
export const MiningProjectsOngoingProjects: typeof import("../components/miningProjects/ongoingProjects.vue")['default']
export const PageFooter: typeof import("../components/pageFooter/Footer.vue")['default']
export const PageHeader: typeof import("../components/pageHeader/Header.vue")['default']
export const PageHeaderTop: typeof import("../components/pageHeader/HeaderTop.vue")['default']
export const PageHeaderMainNav: typeof import("../components/pageHeader/MainNav.vue")['default']
export const PageLoader: typeof import("../components/pageLoader/PageLoader.vue")['default']
export const PopupAlert: typeof import("../components/popupAlert/Alert.vue")['default']
export const PopupAlertPopup: typeof import("../components/popupAlert/AlertPopup.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyGlobalSection: LazyComponent<typeof import("../components/GlobalSection.vue")['default']>
export const LazyInvestorsAnnualReports: LazyComponent<typeof import("../components/Investors/annualReports.vue")['default']>
export const LazyInvestorsDetails: LazyComponent<typeof import("../components/Investors/investorsDetails.vue")['default']>
export const LazyInvestorsQuarterlyResults: LazyComponent<typeof import("../components/Investors/quarterlyResults.vue")['default']>
export const LazyInvestorsShareholdersInfo: LazyComponent<typeof import("../components/Investors/shareholdersInfo.vue")['default']>
export const LazyInvestorsStockPrice: LazyComponent<typeof import("../components/Investors/stockPrice.vue")['default']>
export const LazySideNav: LazyComponent<typeof import("../components/SideNav/SideNav.vue")['default']>
export const LazyVerticalsMajorMinerals: LazyComponent<typeof import("../components/Verticals/majorMinerals.vue")['default']>
export const LazyVerticalsMiningEquipment: LazyComponent<typeof import("../components/Verticals/miningEquipment.vue")['default']>
export const LazyVerticalsMinorMinerals: LazyComponent<typeof import("../components/Verticals/minorMinerals.vue")['default']>
export const LazyAboutArea: LazyComponent<typeof import("../components/about/aboutArea.vue")['default']>
export const LazyAboutAccomplishMent: LazyComponent<typeof import("../components/about/accomplishMent.vue")['default']>
export const LazyAboutDirectorDesk: LazyComponent<typeof import("../components/about/directorDesk.vue")['default']>
export const LazyAboutManagementTeam: LazyComponent<typeof import("../components/about/managementTeam.vue")['default']>
export const LazyAboutMaxearthAdvantage: LazyComponent<typeof import("../components/about/maxearthAdvantage.vue")['default']>
export const LazyAboutVisionNmission: LazyComponent<typeof import("../components/about/visionNmission.vue")['default']>
export const LazyAdminAnnualReportsFrm: LazyComponent<typeof import("../components/admin/annualReportsFrm.vue")['default']>
export const LazyAdminContactdetailsUpdateFrm: LazyComponent<typeof import("../components/admin/contactdetailsUpdateFrm.vue")['default']>
export const LazyAdminLatestNewsupdateFrm: LazyComponent<typeof import("../components/admin/latestNewsupdateFrm.vue")['default']>
export const LazyAdminMediaAnnounceFrm: LazyComponent<typeof import("../components/admin/mediaAnnounceFrm.vue")['default']>
export const LazyAdminQuarterlyUpdatesFrm: LazyComponent<typeof import("../components/admin/quarterlyUpdatesFrm.vue")['default']>
export const LazyAdminShareholdersDetailsFrm: LazyComponent<typeof import("../components/admin/shareholdersDetailsFrm.vue")['default']>
export const LazyAdminSocialMedialinksFrm: LazyComponent<typeof import("../components/admin/socialMedialinksFrm.vue")['default']>
export const LazyAdminStockPricepdateFrm: LazyComponent<typeof import("../components/admin/stockPricepdateFrm.vue")['default']>
export const LazyContactUsMapSection: LazyComponent<typeof import("../components/contactUs/MapSection.vue")['default']>
export const LazyContactUsGetTouchCard: LazyComponent<typeof import("../components/contactUs/getTouchCard.vue")['default']>
export const LazyFaqPageFaqArea: LazyComponent<typeof import("../components/faqPage/FaqArea.vue")['default']>
export const LazyHomePageAboutArea: LazyComponent<typeof import("../components/homePage/AboutArea.vue")['default']>
export const LazyHomePageAboutServices: LazyComponent<typeof import("../components/homePage/AboutServices.vue")['default']>
export const LazyHomePageBlogArea: LazyComponent<typeof import("../components/homePage/BlogArea.vue")['default']>
export const LazyHomePageCarouselSlide: LazyComponent<typeof import("../components/homePage/CarouselSlide.vue")['default']>
export const LazyHomePageClientSays: LazyComponent<typeof import("../components/homePage/ClientSays.vue")['default']>
export const LazyHomePageCounterSection: LazyComponent<typeof import("../components/homePage/CounterSection.vue")['default']>
export const LazyHomePageOurVision: LazyComponent<typeof import("../components/homePage/OurVision.vue")['default']>
export const LazyHomePagePartnerArea: LazyComponent<typeof import("../components/homePage/PartnerArea.vue")['default']>
export const LazyHomePageSafetyPolicy: LazyComponent<typeof import("../components/homePage/SafetyPolicy.vue")['default']>
export const LazyHomePageTeamArea: LazyComponent<typeof import("../components/homePage/TeamArea.vue")['default']>
export const LazyHomePageVideoArea: LazyComponent<typeof import("../components/homePage/VideoArea.vue")['default']>
export const LazyLatestNewsFormInput: LazyComponent<typeof import("../components/latestNews/FormInput.vue")['default']>
export const LazyLatestNewsCard: LazyComponent<typeof import("../components/latestNews/NewsCard.vue")['default']>
export const LazyLatestNewsPortFolio: LazyComponent<typeof import("../components/latestNews/PortFolio.vue")['default']>
export const LazyLatestNewsProcessSection: LazyComponent<typeof import("../components/latestNews/ProcessSection.vue")['default']>
export const LazyLatestNews: LazyComponent<typeof import("../components/latestNews/latestNews.vue")['default']>
export const LazyLatestNewsNewAnnouncements: LazyComponent<typeof import("../components/latestNews/newAnnouncements.vue")['default']>
export const LazyMiningProjectsOngoingProjects: LazyComponent<typeof import("../components/miningProjects/ongoingProjects.vue")['default']>
export const LazyPageFooter: LazyComponent<typeof import("../components/pageFooter/Footer.vue")['default']>
export const LazyPageHeader: LazyComponent<typeof import("../components/pageHeader/Header.vue")['default']>
export const LazyPageHeaderTop: LazyComponent<typeof import("../components/pageHeader/HeaderTop.vue")['default']>
export const LazyPageHeaderMainNav: LazyComponent<typeof import("../components/pageHeader/MainNav.vue")['default']>
export const LazyPageLoader: LazyComponent<typeof import("../components/pageLoader/PageLoader.vue")['default']>
export const LazyPopupAlert: LazyComponent<typeof import("../components/popupAlert/Alert.vue")['default']>
export const LazyPopupAlertPopup: LazyComponent<typeof import("../components/popupAlert/AlertPopup.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
