import HomeController from './HomeController'
import VideoController from './VideoController'
import SitemapController from './SitemapController'
import SearchController from './SearchController'
const Controllers = {
    HomeController: Object.assign(HomeController, HomeController),
VideoController: Object.assign(VideoController, VideoController),
SitemapController: Object.assign(SitemapController, SitemapController),
SearchController: Object.assign(SearchController, SearchController),
}

export default Controllers