import React, { useEffect, useState } from 'react'
import VideoCard, { AdVideo } from './VideoCard';
import { Link } from 'react-router-dom';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const videoData = await fetch(YOUTUBE_VIDEOS_API);
    const videoList = await videoData.json();
    setVideos(videoList.items);
  }

  if (!videos.length > 0) return null;

  return (
    <div className='flex flex-wrap cursor-pointer'>
      {videos[6] && <AdVideo videoInfo={videos[6]} />}
      {videos.map(video =>
        <Link key={video.id} to={'watch?v=' + video.id}>
          <VideoCard videoInfo={video} />
        </Link>
      )}
    </div>
  )
}

export default VideoContainer;