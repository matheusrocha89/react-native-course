import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';


const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#DDDDDD',
    position: 'relative',
  },
};

const CardSection = props => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
);

CardSection.propTypes = {
  children: PropTypes.node.isRequired,
};


export default CardSection;
