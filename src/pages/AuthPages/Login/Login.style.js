import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../styles/colors/colors';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: colors.darkgray,
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  logo: {
    width: 300,
    height: 150,
    marginTop: 40,
  },
  input_container: {
    marginTop: 20,
  },
  input: {
    backgroundColor: '#eceff1',
    margin: 5,
    marginTop: 10,
    borderRadius: 5,
    width: deviceSize.width / 1.1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  register_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  register_title: {
    color: 'white',
    fontSize: 15,
  },
  register_button: {
    color: colors.red,
    fontSize: 17,
    fontWeight: 'bold',
  },
});
