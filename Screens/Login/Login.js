import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Header from '../../Components/Header';

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.topContainer}>
        <Image source={require('../../assets/ic_lu_login.png')} style={styles.image} />
        <Text style={styles.welcomeText}>Bem Vindo!</Text>
        <Text style={styles.subText}>Entre ou crie agora sua conta Magalu</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>Entre com seu social login:</Text>
        <View style={styles.imagesContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Image source={require('../../assets/facebook.png')} style={styles.image1} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image source={require('../../assets/google.png')} style={styles.image2} />
          </TouchableOpacity>
        </View>
        <Text style={styles.privacyText}>
          Seus dados pessoais serão respeitados de acordo com a nossa{' '}
          <Text style={styles.privacyHighlight}>política de privacidade</Text>. Nada será publicado sem sua autorização.
        </Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('FormEntrar')}>
          <Text style={styles.buttonText}>Comece com seu email ou CPF</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
