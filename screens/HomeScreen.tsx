import React from 'react'
import { View, Image, Text,StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons';

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
                <View style={ styles.titleRow }>
                    {/* Avatar */}
                    <Image style={ styles.avatar } source={{ uri: 'https://trendsinusa.com/wp-content/uploads/2018/01/Anonymous-hacker-profile-picture.jpg' }}/>


                    {/* Middle container: Title, subtitle, etc */}
                    <View style={ styles.middleContainer }>
                        <Text style={ styles.title }>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
                        <Text style={ styles.subtitle }>Obakeng  1.5m  2 months ago</Text>
                    </View>
                    {/* Icon */}
                    <Entypo name="dots-three-vertical" size={16} color="white" />
                </View>
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
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    titleRow: {
        flexDirection: 'row',
        padding: 10,
        borderColor: 'red',
        borderWidth: 5
    },
    middleContainer: {
        marginHorizontal: 10,
        flex: 1
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 5
    },
    subtitle: {
        color: 'grey',
        fontSize: 14,
        fontWeight: "500"
    }
    })

export default HomeScreen