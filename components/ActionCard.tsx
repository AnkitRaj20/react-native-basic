import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {

    // Creating Linking function used to to go to that website
    function openWebsite(WebsiteLink:string) {
        Linking.openURL(WebsiteLink) 
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                Whats's new
            </Text>

        </View>
        <Image 
           source={{
            uri: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        }}
        height={380}
        width={360}
        style={styles.cardImage}
        />
        <View >
            {/* Only showing 5 number of lines */}
            <Text numberOfLines={5} style={styles.bodyContainer}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nulla magni amet, ab est id, architecto, mollitia officia quae suscipit iste facere pariatur nostrum beatae illum veniam quas fugit quasi omnis distinctio consequuntur eaque reiciendis! Ducimus quo, odio modi saepe sint exercitationem. Voluptas natus sapiente fugiat doloribus. Recusandae, mollitia. Quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolor tempore aperiam cum repellendus deleniti adipisci, nam dolorum, architecto, maiores voluptatum error ut tenetur quidem quam magni odit a iusto!
            </Text>
        </View>
        <View style={styles.footerContainer}>
            {/* Using to call the function */}
            <TouchableOpacity 
              onPress={() => {
                openWebsite('https://www.youtube.com/')
              }}
            >
                <Text style={styles.readMore}>Read More</Text>
            </TouchableOpacity>

             {/* Using to call the function */}
            <TouchableOpacity 
              onPress={() => {
                openWebsite('https://www.linkedin.com/in/ankit-raj-716781254/')
              }}
            >
                <Text style={styles.socialLink}>Follow Me</Text>
            </TouchableOpacity>
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
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginHorizontal: 16,
        marginVertical: 12,
        borderRadius: 10,
        marginBottom: 10
    },
    elevatedCard:{
        backgroundColor: '#e07c24',
        elevation: 3,
        shadowOffset:{
            height: 1,
            width: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer:{
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText:{
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage:{
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    bodyContainer:{
        color: '#ffffff',
        padding: 10
    },
    footerContainer:{
        color: '#ffffff',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    readMore:{
        color: '#000000',
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius:6
    },
    socialLink:{
        color: '#ffffff',
        backgroundColor: '#000000',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius:6
    }
})