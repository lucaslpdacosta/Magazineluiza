import React from 'react';
import { StyleSheet, View, Image, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      Alert.alert('Calma lá, meu patrão...', 'Não há mais telas além desta para voltar.');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#0086FF" barStyle="light-content" />
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBackButtonPress}>
          <Image source={require('../assets/white-arrow-icon-png-4.png')} style={styles.leftImage} />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/23.png')} style={styles.logo} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0086FF',
    paddingTop: StatusBar.currentHeight,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#0086FF',
    paddingHorizontal: 10,
  },
  leftImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 110,
    height: 30,
    marginRight: 15,
    resizeMode: 'contain',
  },
});