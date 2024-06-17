import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../styles/colors/colors';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  comic_container: {
    backgroundColor: colors.darkgray,
    marginBottom: 10,
  },
  comic_image: {
    width: deviceSize.width / 1,
    height: 300,
  },
  comic_name: {
    color: colors.red,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  comic_description: {
    margin: 10,
    marginTop: 5,
    textAlign: 'center',
    flex: 1,
    color: 'white',
  },
  icon: {
    textAlign: 'center',
    color: colors.red,
    marginBottom: 10,
  },
  titles: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.darkgray,
    textAlign: 'center',
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 10,
    marginHorizontal: 100,
  },
});
