import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header_text: {
    padding: 10,
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: colors.darkgray,
  },
  menu_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
    marginHorizontal: 5,
  },
  menu_title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.darkgray,
    padding: 2,
  },
  menu_title_selected: {
    borderBottomWidth: 4,
    borderColor: colors.darkgray,
  },
  no_favorites_text: {
    marginTop: 10,
    textAlign: 'center',
  },
});
