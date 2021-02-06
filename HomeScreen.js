import React from 'react';
import {View,StyleSheet,TextInput,Text,TouchableOpacity} from 'react-native';
import dictionary from './database';

export default class HomeScreen extends React.Component {
  constructor () {
    super();
    this.state = {
      text:"",
      isSearchPressed:false,
      word:"",
      lexicalCategory : '',
      examples: [],
      definition: ""
    }
  } 

  getWord = (word) => {
    var searchKeyword = word.toLowerCase();
     var url = "https://rupinwhitehatjr.github.io/dictionary/" + searchKeyword + ".json";
     return fetch (url)
     .then((data) => {
       if(data.status === 200) {
        return data.json()
       }  else {
           return null;
       }
     })
     .then((response) => {
         var responseObject = response;
         
         if(responseObject) {
           var wordData = dictionary[text]["word"]
           var definition = dictionary[text]["definition"]
           var lexicalCategory = dictionary[text]["lexicalCategory"]
           
           this.setState({
             "word" : this.state.text,
             "defintion":definition,
             "lexicalCategory" : lexicalCategory,
           })   
        }
         else {
               this.setState({
                 "word":this.state.text,
                 "definition":"Not Available"
               });
           }
     })
  }

 render() {
  return(
 <View>
  <TextInput
   onChangeText = {text => {
    this.setState({
        text:text,
        isSearchPressed:false,
        word:"Loading..."
    })
    value = this.state.text
   }}
  />

  <TouchableOpacity style = {styles.touchableOpacity} onPress = {() => {
    this.getWord()
  }}>
    <Text> Find Definition </Text>
  </TouchableOpacity>
  </View>
  ) 
}
}

const styles = StyleSheet.create({
  touchableOpacity:{
    backgroundColor:'yellow',
    width:300,
    height:100
  }
})