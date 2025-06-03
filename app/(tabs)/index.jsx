import {View, Text, StyleSheet, ImageBackground} from 'react-native'
import coffeeImg from "@/assets/images/coffee_wall.jpg"

const index =()=>{
  return (
    <View style={styles.container}>
      <ImageBackground
      source={coffeeImg}
      resizeMode='cover'
      style={styles.image}
      >
      <Text style={styles.text}>Coffee Shop</Text>
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
  text:{
    color:'white',
    fontSize:42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor:'rgba(0,0,0,0.5)',
  }
})