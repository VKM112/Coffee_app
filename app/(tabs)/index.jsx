import {View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native'
import {Link} from 'expo-router'

import coffeeImg from "@/assets/images/coffee_wall.jpg"

const index =()=>{
  return (
    <View style={styles.container}>
      <ImageBackground
      source={coffeeImg}
      resizeMode='cover'
      style={styles.image}
      >
        <Text style={styles.title}>Coffee Shop</Text>

        <Link href="/contact" style={{marginHorizontal: 'auto'}} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </Pressable>
        </Link>

      </ImageBackground>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
  },
  image:{
    width:'100%',
    height:'100%',
    flex: 1,
    resizeMode:'cover',
    justifyContent:'center',
  },
  title:{
    color:'white',
    fontSize:42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor:'rgba(0,0,0,0.5)',
    marginBottom:120,
  },
  Link:{
    color:'white',
    fontSize:42,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine:"underline",
    backgroundColor:'rgba(0,0,0,0.5)',
    padding:4,
  },
  buttonText:{
    color:'white',
    fontSize:16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding:4,
  },
  button:{
    height:60,
    borderRadius:20,
    justifyContent:'center',
    backgroundColor:'rgba(0,0,0,0.75)',
    padding:6,
  }
})