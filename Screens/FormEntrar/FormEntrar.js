import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function FormEntrar() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleContinue = () => {
    navigation.navigate('Conta');
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.topBar}></View>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.leftContainer} onPress={handleGoBack}>
            <Image source={require('../../assets/white-arrow-icon-png-4.png')} style={styles.arrowIcon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Email ou CPF</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/Logo_RGB.png')} style={styles.additionalImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Entre com seu email ou CPF, ou crie sua conta no magalu.com
        </Text>
        <Text style={styles.subText}>
          Email ou CPF
        </Text>
        <TextInput
          style={styles.input}
          placeholder="  Digite seu email ou número do CPF"
          placeholderTextColor="#959595"
          underlineColorAndroid="#2283D0"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continuar</Text>
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
  leftContainer: {
    paddingHorizontal: 10,
  },
  arrowIcon: {
    width: 25,
    height: 28,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginLeft: 10,
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
  textContainer: {
    alignItems: 'flex-start',
    marginTop: 40,
  },
  text: {
    marginTop: 70,
    color: '#959595',
    fontSize: 14,
    width: '85%',
    textAlign: 'left',
    marginLeft: '5%',
  },
  subText: {
    marginTop: 10,
    color: '#0188FA',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'left',
    marginLeft: '5%',
  },
  input: {
    height: 40,
    width: '90%',
    color: '#000000',
    fontSize: 14,
    marginTop: 10,
    marginLeft: '5%',
  },
  buttonContainer: {
    backgroundColor: '#C6C6C6',
    borderRadius: 2,
    paddingVertical: 12,
    width: '95%',
    paddingVertical: 15,
    marginTop: 50,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
  },
});
