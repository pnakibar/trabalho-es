import React, { PropTypes } from 'react';
import Photo from './Photo';

const PhotoList = ({ photos }) => (
  <ul>
    {photos.map(photo =>
      <Photo
        {...photo}
        key={photo.id}
      />
    )}
  </ul>
);

PhotoList.propTypes = {
  photos: PropTypes.object.isRequired,
};

export default PhotoList;
