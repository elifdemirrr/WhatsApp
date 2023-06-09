import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity  } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import ContactRow from '../components/ContactRow';

function Chat() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <ContactRow />
      <View style={styles.serprator}></View>
      <ContactRow />
      </View>
     
        {/* <TouchableOpacity style={styles.row}>
            <View style={styles.avatar}>
                <Text style={styles.avatarLabel}>UN</Text>
            </View>
            <View style={styles.textsContainer}>
          <Text style={styles.name}>User Name </Text>
            <Text style={styles.subtitle}>Hi, I am waiting for you for dinner</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={20}/> 
        </TouchableOpacity>
        <View style={styles.serprator}/>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.name}>User Name </Text>
            <Text style={styles.subtitle}>Hi, I am waiting for you for dinner</Text>
        </TouchableOpacity>
        <View style={styles.serprator}/>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.name}>User Name </Text>
            <Text style={styles.subtitle}>Hi, I am waiting for you for dinner</Text>
        </TouchableOpacity>
        <View style={styles.serprator}/>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.name}>User Name </Text>
            <Text style={styles.subtitle}>Hi, I am waiting for you for dinner</Text>
        </TouchableOpacity> */}
    </SafeAreaView>
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
    serprator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#E2E2E2',
        marginStart: 16,
    },

});
export default Chat