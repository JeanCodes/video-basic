import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return(
            <div class="ui segment">
                <p>Loading....</p>
                <div class="ui active dimmer">
                <div class="ui loader"></div>
            </div>
        </div>
        );
    };

    const videoSrc=`https://youtube.com/embed/${video.id.videoId}`;
    return(
    <div>
        <div className="ui embed">
            <iframe title="videoPlayer" src={videoSrc} />
        </div>
        <div className="ui segment">
            <h4 className="header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
    </div>
    );
};

export default VideoDetail;