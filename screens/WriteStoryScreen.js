import React from 'react';
import { Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import AppHeader from '../assets/AppHeader';
import db from '../config';

export default class WriteStoryScreen extends React.Component {
    constructor() {
      super();
      this.state = ({
        titleState: '',
        authorState: '',
        storyState: ''
      });
    }

    submitStory = () => {
      var submitMessage = "Story Submitted!";
       db.collection('stories').add({
         'Title': this.state.titleState,
         'Author': this.state.authorState,
         'Story': this.state.storyState
       });
       alert(submitMessage);
       
       //TOAST ANDROID IS GIVING AN ERROR

       //ToastAndroid.show(submitMessage, ToastAndroid.SHORT);
      }

    render() {
      return (
        <KeyboardAvoidingView behavior="padding" enabled>
         <View>
           <AppHeader />

           <TextInput placeholder="Title of Story"
           onChangeText={text => {
             this.setState({
               titleState: text
             })
           }}
           value={this.state.titleState}></TextInput>
           <TextInput placeholder="Author of Story"
            onChangeText={text => {
              this.setState({
                authorState: text
              })
            }}
            value={this.state.authorState}></TextInput>
           <TextInput placeholder="Write your Story" multiline
        numberOfLines={4}
        onChangeText={text => {
          this.setState({
            storyState: text
          })
        }}
        value={this.state.storyState}></TextInput>
        <TouchableOpacity style={{borderColor: 'black', borderWidth: 2, width:50}} onPress={this.submitStory}><Text>Submit</Text></TouchableOpacity>
       </View>
       </KeyboardAvoidingView>
      );
    }
  }