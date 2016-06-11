import { connect } from 'react-redux';
import pics from '../mockup';
import PhotoList from '../components/PhotoList';

const mapStateToProps = (state) => {
  return {
    photos: state.get('pics'),
  };
};

const VisiblePhotos = connect(
  mapStateToProps
)(PhotoList);

export default VisiblePhotos;
