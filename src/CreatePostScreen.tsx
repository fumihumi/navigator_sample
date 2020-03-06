import React, { useState } from "react";
import styled from "styled-components/native";
import { Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BaseText } from "./atoms";

export const CreatePostScreen = () => {
  const navigation = useNavigation();
  const [postText, setPostText] = useState("");

  return (
    <>
      <CreatePostInput
        multiline
        placeholder="What's on your mind?"
        value={postText}
        onChangeText={setPostText}
      />
      <BaseText>{postText || "please input"}</BaseText>
      <Button
        title="Done"
        onPress={() => {
          if (postText.length === 0) {
            Alert.alert("please input!");
            return;
          }
          navigation.navigate("Home", { post: postText });
        }}
      />
    </>
  );
};

const CreatePostInput = styled.TextInput`
  height: 200px;
  padding: 10px;
  background-color: white;
`;
