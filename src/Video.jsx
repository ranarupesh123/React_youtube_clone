import React from 'react';
import './Video.css';
import Avatar from '@material-ui/core/Avatar';

function Video({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videoCard">
      <img className="video_thumbnail" src={image} alt="image" />
      <div className="video_info">
        <Avatar className="video_avatar" alt={channel} src={channelImage} />
        <div className="video_text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>{views} . {timestamp}</p>
        </div>
      </div>
    </div>
  )
}

export default Video;
