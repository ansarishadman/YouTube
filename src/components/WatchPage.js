import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
  const [searchParams] = useSearchParams()
  const videoId = searchParams.get('v');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className='px-5'>
      <iframe width="1000"
        height="500"
        src={ `https://www.youtube.com/embed/${videoId}?playsinline=1&iv_load_policy=3&rel=0&showinfo=0&controls=1&fs=0&start=${0}&autoplay=1&enablejsapi=1&widgetid=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage