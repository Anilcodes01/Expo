import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import bgImg from '@/assets/images/grid.webp'
import { Link } from 'expo-router'

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImg} style={styles.image}>
        <Text style={styles.text}>NoteBooks</Text>

        <Link href="/explore" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Explore</Text>
          </Pressable>
        </Link>
        <Link href="/books" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Books</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  text: {
    fontSize: 42,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'black', 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  }, 
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  }
})

export default App
