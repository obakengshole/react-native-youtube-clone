import React from 'react'
import { View, Image, Text,StyleSheet } from 'react-native'

const HomeScreen = () => {
    return (
        <View>
            {/* Video component */}
            <View style={ styles.videoCard }>
                {/* Thumbnail */}
                <View>
                    <Image style={ styles.thumbnail } source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail1.jpeg' }} />
                    <View style={ styles.timeContainer }>
                        <Text style={ styles.time }>15:23</Text>
                    </View>
                </View>
                {/* Title row */} 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    videoCard: {},
    thumbnail: {
        width: '100%',
        aspectRatio: 16/9
    },
    timeContainer: {
        backgroundColor: '#00000099',
        height: 25,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        position: 'absolute',
        right: 5,
        bottom: 5
    },
    time: {
        color: 'white',
        fontWeight: 'bold'
    }
})

export default HomeScreen