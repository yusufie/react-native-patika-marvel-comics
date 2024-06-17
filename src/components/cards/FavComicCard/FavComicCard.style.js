import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkgray,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    paddingRight: 20,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 120,
    borderRadius: 5,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 15,
    marginRight: 15,
    flex: 1,
  },
});
