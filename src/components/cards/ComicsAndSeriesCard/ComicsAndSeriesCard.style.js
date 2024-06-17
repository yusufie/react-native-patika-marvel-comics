import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
    width: 180,
    height: 240,
    padding: 10,
  },
  image: {
    width: 130,
    height: 170,
    borderRadius: 5,
    marginBottom: 3,
  },
  title: {
    marginTop: 10,
    fontWeight: 'bold',
    flex: 1,
    width: '100%',
    textAlign: 'center',
    color: colors.darkgray,
  },
});
