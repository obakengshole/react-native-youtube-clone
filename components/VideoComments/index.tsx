import React from 'react'
import { View } from 'react-native'
import { BottomSheetFlatList } from '@gorhom/bottom-sheet'

import comments from '../../assets/data/comments.json'
import VideoComment from '../VideoComment'

// interface VideoCommentsProps {
//     comments: Comment[],
//     videoID: string
// }

const VideoComments = () => {
    return (
        <View style={{ backgroundColor: '#141414', flex: 1}}>
            <BottomSheetFlatList data={comments} renderItem={( {item} ) => <VideoComment comment={item} />} />
        </View>
    )
}

export default VideoComments
