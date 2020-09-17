import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Weather(props) {

  return (
    <View  style={styles.container} >
      <Text style={{ fontSize: 20 }}> Weather  {props.zipCode} </Text>
      <View style={{width: 20, height: 20, backgroundColor: 'red'}}></View>     
      <View style={{width: 20, height: 20, backgroundColor: 'blue'}}></View>     
      <View style={{width: 20, height: 20, backgroundColor: 'green'}}></View>           
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',   
    alignItems: 'center' ,
    borderWidth: 5,
    borderColor: 'red',    
  }
})