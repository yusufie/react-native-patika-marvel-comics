import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.darkgray,
    flexDirection: 'row',
  },
  characters_container: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: 'white',
    marginHorizontal: 10,
    width: 150,
    marginLeft: 25,
    elevation: 5,
  },
  characters_image: {
    width: 125,
    height: 150,
    borderRadius: 5,
  },
  characters_title: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
});
