import React, { useRef } from "react";
import {
  SafeAreaView,
  Text,
  Image,
  View,
  ScrollView,
  FlatList,
  Pressable
} from "react-native";
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import styles from "./styles";
import VideoListItem from "../../components/VideoListItem";
import VideoPlayer from "../../components/VideoPlayer";

import video from "../../assets/data/video.json";
import videos from "../../assets/data/videos.json";
import { AntDesign } from "@expo/vector-icons";
import VideoComment from "../../components/VideoComment";

import comments from '../../assets/data/comments.json'
import VideoComments from "../../components/VideoComments";

const VideoScreen = () => {

  const commentsSheetRef = useRef<BottomSheetModal>(null)
  // const commentsSheetRef = useRef(null)

  let viewsString = video.views.toString();
  if (video.views > 1000000) {
    viewsString = (video.views / 1000000).toFixed(1) + "m";
  } else if (video.views > 1000) {
    viewsString = (video.views / 1000).toFixed(1) + "k";
  }

  const openComments = () => {
    commentsSheetRef.current?.present()
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#141414", flex: 1 }}>
      {/* Video Player */}
      <VideoPlayer videoURI={video.videoUrl} thumbnailURI={video.thumbnail} />

      <View style={{ flex: 1 }}>
        {/* <Image style={styles.videoPlayer} source={{ uri: video.thumbnail }} /> */}

        {/* Video Info */}
        <View style={styles.videoInfoContainer}>
          <Text style={styles.tags}>{video.tags}</Text>
          <Text style={styles.title}>{video.title}</Text>
          <Text style={styles.subtitle}>
            {video.user.name} {viewsString} views {video.createdAt}
          </Text>
        </View>

        {/* Action list */}
        <View style={styles.actionListContainer}>
          <ScrollView horizontal showHorizontalScrollIndicator={false}>
            <View style={styles.actionListItem}>
              <AntDesign name="like1" size={30} color="lightgrey" />
              <Text style={styles.actionText}>{video.likes}</Text>
            </View>

            <View style={styles.actionListItem}>
              <AntDesign name="dislike2" size={30} color="lightgrey" />
              <Text style={styles.actionText}>{video.dislikes}</Text>
            </View>

            <View style={styles.actionListItem}>
              <AntDesign name="export" size={30} color="lightgrey" />
              <Text style={styles.actionText}>{video.dislikes}</Text>
            </View>

            <View style={styles.actionListItem}>
              <AntDesign name="download" size={30} color="lightgrey" />
              <Text style={styles.actionText}>{video.dislikes}</Text>
            </View>
          </ScrollView>
        </View>

        {/* User Info */}
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
        >
          <Image style={styles.avatar} source={{ uri: video.user.image }} />

          <View style={{ marginHorizontal: 10, flex: 1 }}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              {video.user.name}
            </Text>
            <Text style={{ color: "grey", fontSize: 18 }}>
              {video.user.subscribers}
            </Text>
          </View>

          <Text
            style={{
              color: "red",
              fontSize: 18,
              fontWeight: "bold",
              padding: 10,
            }}
          >
            Subscribe
          </Text>
        </View>

        {/* Comments */}
        <Pressable onPress={openComments} style={{ padding: 10, marginVertical: 10 }}>
          <Text style={{ color: "white" }}>Comments 333</Text>
          {comments.length > 0 && <VideoComment comment={comments[0]} /> }
        </Pressable>
        <BottomSheetModal
          ref={commentsSheetRef}
          snapPoints={['25%', '50%']}
          index={1}
          backgroundComponent={({ style }) => (
            <View style={[style, { backgroundColor: "#4d4d4d" }]} />
          )}
        >
          <VideoComments />
        </BottomSheetModal>

          {/* 
      <BottomSheet 
        ref={commentsSheetRef} 
        snapPoints={[0, '100%']} 
        index={-1}
        style={{ backgroundColor: 'red'}} 
        enablePanDownToClose={false}
      >
            <VideoComments />
      </BottomSheet> */}
      </View>

      {/* Recommended videos */}
    </SafeAreaView>
  );
};

const VideoScreenWithRecommendations = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#141414", flex: 1 }}>
      <BottomSheetModalProvider>
        <FlatList
          data={videos}
          renderItem={({ item }) => <VideoListItem video={item} />}
          ListHeaderComponent={VideoScreen}
        />
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
};

export default VideoScreenWithRecommendations;
