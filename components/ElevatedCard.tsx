import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Card</Text>
      
         <ScrollView horizontal style={styles.container}>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>Tap</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>me</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>to</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>scroll</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>more</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>....</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>u rdone</Text>
            </View>
         </ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    container:{
        padding: 8,
        flex:1
    },
    card:{
        flex:1,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 5
    },
    cardElevated:{
        backgroundColor: '#cad',
        elevation: 4,

        // shadow
        shadowOffset: {
            width: 1,
            height: 1
        },

        shadowColor: '#fff',
        shadowOpacity: 0.5,
        shadowRadius: 2

    }
})