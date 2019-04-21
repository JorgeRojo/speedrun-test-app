import React from 'react';

const VideoBtn = ({ videoLink }) => (
    <a href={videoLink}
        target="_blank"
        className="btn btn-danger float-right mt-3 mr-2"
    >
        Show video
    </a>
);

export default VideoBtn;