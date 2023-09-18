import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ImagesCard() {
  return (
    <View>
      <Text style={styles.headingText}>Places To Vist</Text>

      <View style={[styles.card, styles.cardElevated]}>
        <Image
            source={{
                uri: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
            }}
            height={380}
            width={360}
            style={styles.cardImage}
        />
    <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Manali</Text>
            <Text style={styles.cardLabel}>Kullu, Himachal Pradesh</Text>
            <Text style={styles.cardDescription}>Manali is a town, near Kullu town in Kullu district in the Indian state of Himachal Pradesh.[2] It is situated in the northern end of the Kullu Valley, formed by the Beas River. The town is located in the Kullu district, approximately 270 kilometres (170 mi) north of the state capital of Shimla and 544 kilometres (338 mi) northeast of the national capital of New Delhi</Text>
            <Text style={styles.cardFooter}>270Km away</Text>
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
    card:{
        marginHorizontal: 16,
        marginVertical: 12,
        borderRadius: 10,
        marginBottom: 10
    },
    cardElevated:{
        backgroundColor: '#ffffff',
        elevation: 3,
        shadowOffset:{
            height: 1,
            width: 1
        }
    },
    cardImage:{
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal: 12
    },
    cardTitle:{
        color: '#000000',
        fontSize:22,
        fontWeight: 'bold',
        marginBottom: 5
    },
    cardLabel:{
        color: '#000000',
        fontSize:18,
    },
    cardDescription:{
        color: '#2F4F4F',
        fontSize:15,
        marginBottom: 10,
        marginTop: 5
    },
    cardFooter:{
        color: 'grey',
       textAlign: 'right'
    }
})