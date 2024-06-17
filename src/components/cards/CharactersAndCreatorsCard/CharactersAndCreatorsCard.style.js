import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
    width: 180,
    height: 220,
  },
  image: {
    width: 130,
    height: 170,
    borderRadius: 5,
  },
  title_character: {
    fontWeight: 'bold',
    flex: 1,
    width: '100%',
    textAlign: 'center',
    color: colors.darkgray,
    marginTop: 10,
  },
  title_creator: {
    fontWeight: 'bold',
    flex: 1,
    width: '100%',
    textAlign: 'center',
    color: colors.darkgray,
    marginTop: -35,
  },
});
