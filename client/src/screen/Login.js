import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, ScrollView, Alert } from 'react-native'
import { useState, useEffect } from 'react'
import axios from 'axios'

const initUser = {    
  username:'',
  password:''
}
function Login({ navigation }) {
  const [user, setUser] = useState(initUser)


  const handlePress =()=>{
    console.log(user);

    axios.post('http://192.168.1.10:5000/api/login', user)
    .then((response) => {
      console.log(response);
      navigation.navigate('Calculator')
    })
    .catch((error)=>{
      createAlert()
      console.log(error);
    });
  }
  
  const createAlert = () =>
  Alert.alert('Error', 'invalid username or password', [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);

  return (
    <View style={style.container}>
      <View>
        <Text style={style.title}>Login</Text>
      </View>
      <View>
        <Text style={style.text}>Username</Text>
        <TextInput 
          style={style.input} 
          onChangeText={
            (val)=> setUser({...user,username:val})
          }
        />
        <Text style={style.text}>Password</Text>
        <TextInput 
          onChangeText={(val)=> setUser({...user, password:val})} 
          secureTextEntry={true}  
          style={style.input} />
      </View>
      <View>
        <Text style = {style.signgUpText}>
          <Pressable onPress={()=> navigation.navigate('Register')}>
            <Text style ={style.signUpButton}>Sign up</Text>
          </Pressable> 
          if you don't have account
        </Text>
      </View>
      <View>
        <Pressable onPress={handlePress} style={style.button}>
          <Text style ={ style.buttonText}>
            Login
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#2f2f2f",
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    marginTop: 30,
    color: '#fff',
    fontSize: 45,
    fontWeight: '600',
    marginBottom: 80
  },
  text: {
    fontSize: 30,
    color: '#fff',
  },
  input: {
    backgroundColor: '#ffff',
    marginTop: 10,
    width: 300,
    height: 50,
    borderRadius: 10
  },
  button : {
    marginTop:50,
    width:200,
    height:40,
    backgroundColor:'#fff',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
  },
  buttonText:{
    color:'#2f2f2f',
    fontSize:20,
    fontWeight:"800"
  },
  signUpButton:{
    marginTop:8,
    color:'#4B56D2',
    marginRight:5,
    fontWeight:'500',

  },
  signgUpText:{
    color:'#fff'
  }
})

export default Login