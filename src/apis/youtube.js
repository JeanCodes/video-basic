import axios from 'axios';
const KEY = 'AIzaSyAcdezgK6HCL4O1h182dph0etTT5jKDXKk';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
    ,params: {
        part: 'snippet'
        ,maxResults: 5
        ,type: 'video'
        ,key: `${KEY}`
    }
});