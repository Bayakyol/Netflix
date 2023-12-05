import { ArrowBackOutlined } from '@mui/icons-material'
import "./watch.scss"

export default function Watch() {
  return (
    <div className='watch'>
      <div className='back'>
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://player.vimeo.com/external/362003850.sd.mp4?s=ac29ab4fa3ee80ea4533ffd4d4910c870f9b778d&profile_id=164&oauth2_token_id=57447761"
      />
    </div>
  );
}
