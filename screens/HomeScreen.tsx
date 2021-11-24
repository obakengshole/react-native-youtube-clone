import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import VideoListItem from '../components/VideoListItem'
import videos from '../assets/data/videos.json'

//FlatList helps us render lists of items vertical or horizontal. It is well optimized. Smartly hides top items to not render them.

const HomeScreen = () => {
    return (
        <View>
            <FlatList data={videos} renderItem={({ item }) => <VideoListItem video={item} />} />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default HomeScreen