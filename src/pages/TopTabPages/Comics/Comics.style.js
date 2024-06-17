import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.darkgray,
    flex: 1,
  },
  comic_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 5,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'white',
    marginHorizontal: 15,
  },
  comic_image: {
    width: 100,
    height: 125,
    marginRight: 10,
    borderRadius: 5,
  },
  comic_title: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    color: 'white',
  },
  loading: {
    marginTop: 50,
  },
});
