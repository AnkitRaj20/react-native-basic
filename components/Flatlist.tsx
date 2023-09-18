import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Flatlist() {
  return (
    <View>
      <Text style={styles.headingText}>Flat list</Text>

      <View style={styles.container}>
            <View style={[styles.card,styles.cardOne]}>
                <Text>Red</Text>
            </View>
            <View style={[styles.card,styles.cardTwo]}>
                <Text>Green</Text>
            </View>
            <View style={[styles.card,styles.cardThree]}>
                <Text>Blue</Text>
            </View>
            <View style={[styles.card,styles.cardOne]}>
                <Text>Red</Text>
            </View>
            <View style={[styles.card,styles.cardTwo]}>
                <Text>Green</Text>
            </View>
            <View style={[styles.card,styles.cardThree]}>
                <Text>Blue</Text>
            </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    container: {
        flexDirection: 'row'
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 5
    },
    cardOne: {
        backgroundColor: '#ef5354'
    },
    cardTwo: {
        backgroundColor: '#50dbba'
    },
    cardThree: {
        backgroundColor: '#5da3fa'
    }
})