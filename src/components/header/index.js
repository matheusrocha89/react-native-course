import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';


const styles = {
  textStyles: {
    fontSize: 20,
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
};

const Header = (props) => {
  const { textStyles, viewStyle } = styles;
  const { headerText } = props;

  return (
    <View style={viewStyle}>
      <Text style={textStyles}>{headerText}</Text>
    </View>
  );
};

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
};

export default Header;
