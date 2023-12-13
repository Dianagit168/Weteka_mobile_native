import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import HeaderBar from "../components/header_bar";
import Search from "../components/search";
import brandingColor from "../components/branding_color";
import { Bold, Heart, Rotate3D, X } from "lucide-react-native";
import { Star } from "lucide-react-native";
import { Forward } from "lucide-react-native";
import { MessageCircle } from "lucide-react-native";
import { AudioLines } from "lucide-react-native";
import ChannelOrg from "../components/channel_org";

import SemiBoldText from "../components/semi_bold_text";
import { transform } from "typescript";

export default function DetailVideoScreen() {
  return (
    <SafeAreaView style={{ marginHorizontal: 10 }}>
      <ScrollView>
        <View style={styleForVideoDetail.videoContainer}></View>

        <View
          style={{
            marginTop: 7,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
            #Content Video
          </Text>
        </View>
        <View style={{ marginTop: 10, flexDirection: "row" }}>
          <Text> 1M Views</Text>
          <Text> - 2days ago</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <ChannelOrg />

          <View>
            <TouchableOpacity style={styleForVideoDetail.subscribeContainer}>
              <Text style={styleForVideoDetail.subscribetxt}>SUBSCRIBE</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styleForVideoDetail.view1}>
          <View style={styleForVideoDetail.backConOfIcon}>
            <Heart color="black" size={17} strokeWidth={3.5} />
            <Text style={{ marginLeft: 5, fontWeight: "500" }}>Like</Text>
          </View>
          <View style={styleForVideoDetail.backConOfIcon}>
            <MessageCircle color="black" size={17} strokeWidth={3.5} />
            <Text style={{ marginLeft: 5, fontWeight: "500" }}>Comment</Text>
          </View>
          <View style={styleForVideoDetail.backConOfIcon}>
            <Forward color="black" size={17} strokeWidth={3.5} />
            <Text style={{ marginLeft: 5, fontWeight: "500" }}>Share</Text>
          </View>
          <View style={styleForVideoDetail.backConOfIcon}>
            <Star color="black" size={17} strokeWidth={3.5} />
            <Text style={{ marginLeft: 5, fontWeight: "500" }}>Star</Text>
          </View>
        </View>
        <ListVideo />
        <ListVideo />
        <ListVideo />
        <ListVideo />
        <ListVideo />
      </ScrollView>
    </SafeAreaView>
  );
}

function ListVideo({ isAudio: boolean = true }) {
  return (
    <View style={styleForVideoDetail.backSubVideo}>
      <View style={styleForVideoDetail.subVideoContainer}>
        <SemiBoldText
          contentT={"KOOMPI"}
          fontSizeT={14}
          colorT={brandingColor.white}
        />
      </View>
      <View
        style={{
          width: "47%",
          marginLeft: 15,
          marginRight: 15,
        }}
      >
        <SemiBoldText
          contentT={"How to crush..."}
          fontSizeT={19}
          colorT={brandingColor.blueBlack100}
        />
        <SemiBoldText
          contentT={"#Chapter 1"}
          fontSizeT={16}
          colorT={brandingColor.blueBlack60}
        />
      </View>
      <View style={{ width: 18 }}>
        <AudioLines color="black" size={17} strokeWidth={2.7} />
      </View>
      <View style={styleForVideoDetail.backLesson}>
        <SemiBoldText contentT={"Lesson 1"} fontSizeT={11} colorT={"white"} />
      </View>
    </View>
  );
}
const styleForVideoDetail = StyleSheet.create({
  videoContainer: {
    height: 300,
    backgroundColor: brandingColor.blueBlack30,
    justifyContent: "center",
    alignItems: "center",
  },
  subscribeContainer: {
    backgroundColor: "red",
    justifyContent: "center",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  subscribetxt: {
    fontWeight: "bold",
    color: brandingColor.white,
  },
  view1: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-around",
  },
  backConOfIcon: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    paddingVertical: 4,
    paddingHorizontal: 8,

    backgroundColor: brandingColor.blueBlack3,

    alignItems: "center",
    borderRadius: 16,
  },
  backSubVideo: {
    flexDirection: "row",
    marginTop: 10,
    height: 80,
    width: "97%",
    paddingVertical: 4,
    paddingHorizontal: 8,

    backgroundColor: brandingColor.blueBlack3,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 16,
  },
  subVideoContainer: {
    height: 65,
    width: 65,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: brandingColor.blueBlack100,

    borderRadius: 16,
  },
  backLesson: {
    marginBottom: 35,
    marginHorizontal: 20,

    paddingVertical: 4,
    paddingHorizontal: 15,
    transform: [{ rotate: "40deg" }],
    backgroundColor: "#a31515",

    borderRadius: 16,
  },
});
