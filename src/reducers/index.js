import { combineReducers } from "redux";

const songsReducer = () => {
    return[
        {title: 'Lalii', duration: '4:05'},
        {title: 'El Bahr', duration: '3:00'},
        {title: 'Masaken Shabia', duration: '5:00'},
        {title: 'Awat Ya Donia', duration: '2:30'},
    ];
};

const selectedSongReducer = (selectedSong = null , action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});