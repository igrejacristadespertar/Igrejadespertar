import React from 'react';
import {View, 
  Text, 
  StyleSheet, 
  KeyboardAvoidingView, 
  TextInput, 
  TouchableOpacity, 
  Image,
  } from 'react-native';

export default function App(){
return (

 <KeyboardAvoidingView style={styles.tela}>

   <View style={styles.container}>
     
   <Image style={styles.image} source={require('../igrejaICD/assets/icd.png')}/>

    <TextInput
    style={styles.btninput}
    placeholder="Usuario"
    autoCorrect= {false}
    onChangeText={()=> {}}
    />
     <TextInput
    style={styles.btninput}
    placeholder="Senha"
    autoCorrect= {false}
    onChangeText={()=> {}}
    />

    <TouchableOpacity style={styles.btn}>
      <Text style={styles.btntext}>Entrar</Text>
    </TouchableOpacity>
     
    <TouchableOpacity style={styles.criarconta}>
      <Text style={styles.criarcontatext}>Criar Conta</Text>
    </TouchableOpacity>

   </View>

 </KeyboardAvoidingView>
);}
const styles = StyleSheet.create({
  tela:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919'
  },

  container:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    width: '90%'
  },

  btninput:{
    backgroundColor:'#fff',
    width: '70%',
    marginBottom:15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding:7
  },
  btn:{
    backgroundColor: '#00688B',
    width:'70%',
    height: 40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7
  },
  btntext:{
    color: 'white',
    fontSize: 18
  },
  criarconta:{
    marginTop:10
  },
  criarcontatext:{
    color:'white'
  },
  image:{

    width:100,
    height: 100,
    marginBottom: 40
  },
  background:{
  flex:1
  }
});
