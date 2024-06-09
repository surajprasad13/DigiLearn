import React, {PropsWithChildren, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Video, {VideoRef} from 'react-native-video';
import {appStyles, colors, Icon} from '../theme';
import {ProgressBar} from 'react-native-paper';

type VideoPlayerProp = PropsWithChildren<{}>;

const VideoPlayer = ({}: VideoPlayerProp): React.JSX.Element => {
  const videoRef = useRef<VideoRef>(null);

  return (
    <View style={{}}>
      <Video
        source={{
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        }}
        ref={videoRef}
        style={styles.backgroundVideo}
      />

      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Icon.Entypo name="controller-play" size={20} />

        <View style={[appStyles.rowBetween, {gap: 15}]}>
          <Text>6:43</Text>
          <ProgressBar
            style={{width: 100}}
            visible
            progress={0.5}
            color={colors.darkBlue}
          />
          <Text>10:43</Text>
        </View>

        <View style={[appStyles.rowBetween, {gap: 15}]}>
          <Icon.MaterialIcon name="closed-caption" size={20} />
          <Icon.AntDesign name="sound" size={20} />
          <Icon.FontAwesome5 name="expand" size={20} />
          <Icon.Octicons name="gear" size={20} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    width: 'auto',
    height: 200,
    backgroundColor: colors.background,
  },
});

export default VideoPlayer;
