import React from 'react'
import ReactPlayer from 'react-player'

const MusicVideo = ({videoInfo}) => {
 
   
   
    
    
    
    return (
        <div>
        <ReactPlayer url= {videoInfo.strMusicVid} />
       {videoInfo.strDescriptionEN}
        </div>
    )
}

export default MusicVideo;