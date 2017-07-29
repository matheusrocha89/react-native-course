import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import Card from '../card';
import CardSection from '../card-section';


const AlbumDetail = props => (
  <Card>
    <CardSection>
      <Text>{props.album.title}</Text>
    </CardSection>
  </Card>
);

AlbumDetail.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string,
    artist: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string,
    thumbnail_image: PropTypes.string,
  }),
};

AlbumDetail.defaultProps = {
  album: {},
};

export default AlbumDetail;
