import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({selectedSong}) => {
    // console.log(props);
    if (!selectedSong) {
        return <div>Select a Song</div>
    }
    return (
        <div>
            <h3>Details For:</h3>
            <p>
                Title: {selectedSong.title}
                <br />
                Duration: {selectedSong.duration}
            </p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{selectedSong: state.selectedSong};
};

export default connect(mapStateToProps)(SongDetail);