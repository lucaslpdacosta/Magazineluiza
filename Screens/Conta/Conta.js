import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Conta() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.topBar}></View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Sua Conta</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/Logo_RGB.png')} style={styles.additionalImage} />
      </View>
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <Image source={require('../../assets/ic_lu_login-removebg-preview.png')} style={styles.image} />
        </View>
        <Text style={styles.title}>Acesse sua conta Magalu</Text>
        <Text style={styles.description}>
          Assim vamos conseguir personalizar sua experiência com informações sobre suas compras e benefícios ;)
        </Text>
        <Text style={styles.additionalDescription}>
          Você pode usar seu email, CPF, ou suas Redes sociais para cadastro ou login.
        </Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
          <Text style={styles.buttonText}>Acessar minha conta Magalu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0086FF',
  },
  topBar: {
    height: StatusBar.currentHeight,
    backgroundColor: '#0086FF',
  },
  headerContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 25,
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: 'center',
  },
  additionalImage: {
    width: '100%',
    height: 5,
    resizeMode: 'contain',
  },
  circleContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  circle: {
    width: 95,
    height: 95,
    borderRadius: 49,
    backgroundColor: '#E8F2FC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 110,
    resizeMode: 'contain',
    marginLeft: 10,
    marginTop: 6
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#505050',
    textAlign: 'center',
    marginTop: 20,
  },
  description: {
    fontSize: 12,
    color: '#505050',
    textAlign: 'center',
    marginTop: 10,
    width: '65%',
  },
  additionalDescription: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#505050',
    textAlign: 'center',
    marginTop: 10,
    width: '70%',
  },
  buttonContainer: {
    backgroundColor: '#E8F2FC',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 18,
    marginTop: 20,
    width: '80%',
  },
  buttonText: {
    color: '#278BED',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
