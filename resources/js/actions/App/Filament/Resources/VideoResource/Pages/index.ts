import ListVideos from './ListVideos'
import CreateVideo from './CreateVideo'
import EditVideo from './EditVideo'
const Pages = {
    ListVideos: Object.assign(ListVideos, ListVideos),
CreateVideo: Object.assign(CreateVideo, CreateVideo),
EditVideo: Object.assign(EditVideo, EditVideo),
}

export default Pages