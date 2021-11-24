import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from './styles'

type VideoListItemProps = {
  video: {
    id: string,
    createdAt: string,
    title: string,
    thumbnail: string,
    videoUrl: string,
    duration: number,
    views: number,
    user: {
      name: string,
      image?: string
    }
  }
}

const VideoListItem = (props: VideoListItemProps) => {
    const { video } = props

  return (
    <View style={styles.videoCard}>
      {/* Thumbnail */}
      <View>
        <Image
          style={styles.thumbnail}
          source={{
            uri: video.thumbnail
          }}
        />
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{video.duration}</Text>
        </View>
      </View>

      {/* Title row */}
      <View style={styles.titleRow}>
        {/* Avatar */}
        <Image
          style={styles.avatar}
          source={{
            // uri: "https://trendsinusa.com/wp-content/uploads/2018/01/Anonymous-hacker-profile-picture.jpg",
            uri: video.user.image,
          }}
        />

        {/* Middle container: Title, subtitle, etc */}
        <View style={styles.middleContainer}>
          <Text style={styles.title}>
            {video.title}
          </Text>
          <Text style={styles.subtitle}>{video.user.name}   {video.views} views   {video.createdAt}</Text>
        </View>
        {/* Icon */}
        <Entypo name="dots-three-vertical" size={16} color="white" />
      </View>
    </View>
  );
};

export default VideoListItem;
