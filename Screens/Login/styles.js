import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer: {
    flex: 1,
    backgroundColor: '#0086FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  welcomeText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginBottom: 5,
    textAlign: 'center',
    width: '50%'
  },
  bottomText: {
    color: '#949494',
    fontSize: 16,
    marginBottom: 20,
  },
  imagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  image1: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 15,
  },
  image2: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginLeft: 15,
  },
  privacyText: {
    color: '#949494',
    fontSize: 12,
    marginTop: 20,
    textAlign: 'center',
    width: '90%',
  },
  privacyHighlight: {
    color: '#90BECC',
  },
  buttonContainer: {
    backgroundColor: '#0086FF',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
    paddingTop: 12,
    paddingBottom: 12,
    width: '90%'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
  },
});
