import UserResource from './UserResource'
import VideoResource from './VideoResource'
const Resources = {
    UserResource: Object.assign(UserResource, UserResource),
VideoResource: Object.assign(VideoResource, VideoResource),
}

export default Resources