import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors/colors';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  button_container: {
    backgroundColor: colors.red,
    padding: 12,
    marginTop: 10,
    width: deviceSize.width / 1.1,
    borderRadius: 5,
    alignItems: 'center',
  },
  button_text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
});
