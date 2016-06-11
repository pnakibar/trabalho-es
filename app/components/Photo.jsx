import React, { PropTypes } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const style = {
  marginBottom: '10px',
};
const Photo = ({ user, dateAdded, likes, comments, photo, title, place }) => (
  <Card style={style}>
    <CardHeader
      title={user.name}
      avatar={user.avatar}
      subtitle={place || ''}
    />
    <CardMedia>
      <img src={photo} role="presentation" />
    </CardMedia>
    <CardTitle title={title} />
    <CardActions>
      <FlatButton label={`Comments: ${comments}`} />
      <FlatButton label={`Likes: ${likes}`} />
      <FlatButton label={`Date Added: ${dateAdded.toString()}`} />
    </CardActions>
  </Card>
);
Photo.propTypes = {
  user: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  dateAdded: PropTypes.object.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  place: PropTypes.string,
};

export default Photo;
