import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.darkgray,
    flex: 1,
  },
  header_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header_text: {
    padding: 10,
    color: 'white',
    fontWeight: '500',
    fontSize: 17,
    marginLeft: 150,
  },
  header_icon: {
    marginRight: 10,
  },
});
