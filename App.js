import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button,TextInput, Pressable} from 'react-native';
import {useState} from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);

const PlaceholderImage = require('./assets/images/concert.png');

export default function App() {
  const [show, setShow] = useState(true);
  const [text, setText] = useState(text);
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ticket Vault</Text>
      <TextInput
        style={styles.input}
        placeholder="Number of Tickets"
        onChangeText={newText => {setText(newText); setShow(true);}}
        />
        <Pressable style={styles.button}
        onPress={() => {setText((text * 99.99).toFixed(2)); setShow(false); }}>
        <Text style={styles.text}>Find the Cost</Text>
        </Pressable>
        <Text style={styles.displayText}>
        {show ? '' : 'Ticket Cost: $' + text }
      </Text>
      <View style={styles.imageContainer}>
      <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontSize: 100,
    fontWeight: 'bold',
    marginTop: 50,
  },
  imageContainer: {
    flex: 0,
    paddingTop: 58,
  },
  image: {
    width: 400,
    height: 200,
    justifyContent: 'space-around',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#f98b88',
    height: 100
  },
  text: {
    fontSize: 42,
    lineHeight: 70,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  displayText: {
    fontSize: 30,
    lineHeight: 60,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  input : {
    height: 70,
    width: 250,
    borderColor: 'grey',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 28,
    lineHeight: 30,
    fontWeight: 'bold',
  }
});
