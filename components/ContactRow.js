import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet, StatusBar, Image} from 'react-native';
import {Ioicons} from '@expo/vector-icons';

function ContactRow() {
  return (
    <TouchableOpacity style={styles.row}>
    <View style={styles.avatar}>
        <Text style={styles.avatarLabel}>UN</Text>
    </View>
    <View style={styles.textsContainer}>
       <Text style={styles.name}>User Name </Text>
       <Text style={styles.subtitle}>Hi, I am waiting for you for dinner</Text>
    </View>
    <Image style={{ width: 20, height: 20}}
                source={require('../assets/right-arrow.png')}
                resizeMode="contain"
                /> 
    {/* <Ionicons name="chevron-forward-outline" size={20}/>  */}
</TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:StatusBar.currentHeight
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    avatar: {
      width: 56,
      height: 56,
      backgroundColor: '#2196f3',
      borderRadius: 28,
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatarLabel: {
      fontSize: 20,
      color: 'white',
    },
    textsContainer: {
        backgroundColor: 'red',
        flex: 1,
        marginStart: 16,
    },
    name: {
        fontSize: 16 
    },
    subtitle: {
        marginTop: 2,
        color: '#565656',
    },
});
export default ContactRow