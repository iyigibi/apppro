import React from 'react';
import {
  ScrollView,
  Image,
  View,
  TouchableOpacity,Dimensions,AsyncStorage
} from 'react-native';
import {
  RkCard,
  RkText,
  RkStyleSheet ,RkTextInput,RkTheme,RkButton
} from 'react-native-ui-kitten';
import {data} from '../../data';
import {Avatar} from '../../components';
import {SocialBar} from '../../components';
let moment = require('moment');
import {FontAwesome} from '../../assets/icons';
import {NavigationActions} from 'react-navigation';

import * as Progress from 'react-native-progress';

const WindowWidth = Dimensions.get('window').width*0.5;




RkTheme.setType('RkTextInput','bgColor',{
  backgroundColor:'#dedede'
 });
 RkTheme.setType('RkButton', 'dark', {
  backgroundColor: '#ff0000',
  borderRadius: 5,
  width:WindowWidth,
});


let self;


export class Settings extends React.Component {
  static navigationOptions = {
    title: 'Ayarlar'.toUpperCase()
  };

  constructor(props) {
    super(props);
    let {params} = this.props.navigation.state;
    let id = params ? params.id : 1;
    self=this;
    //this.data = data.getArticle(id);
  }



  //<RkText rkType='secondary2 hintColor'>{moment().add(this.data.time, 'seconds').fromNow()}</RkText>


  render() {
    function logOut(){
     AsyncStorage.removeItem('@eduadisc8:token');
     let toHome = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'SignUP'})]
    });
    self.props.navigation.dispatch(toHome)
    }
    return (
      <ScrollView style={styles.root}>
      <View style={{flexDirection:'row',paddingTop:30,paddingBottom:20,alignItems:'center',alignSelf:'center'}}>
      <View>
       <Progress.Bar progress={0.7} width={WindowWidth} color='#ff0000' />
       </View>
        <RkText rkType='f12'>%70 tamam</RkText>
      </View>
      <Avatar  img={require('../../data/img/avatars/Image6.png')}  rkType='big'></Avatar>
      <View style={{width:WindowWidth,alignSelf:'center'}}>
      <RkTextInput rkType='bordered bgColor' placeholder='Nick name' onChangeText={(firstname) => this.setState({firstname})}/>
      <RkTextInput rkType='bordered bgColor' placeholder='Date of birth' onChangeText={(firstname) => this.setState({firstname})}/>
      <RkTextInput rkType='bordered bgColor' placeholder='Phone number' onChangeText={(firstname) => this.setState({firstname})}/>
      <RkButton rkType='dark'  onPress={() => {
              alert('Servisten gelecek');
            }}>KAYDET</RkButton>

        
      </View>
      <View style={{marginTop:10,marginBottom:10, padding:1,backgroundColor:'#ff0000'}}>
          
        </View>
        <View style={{width:WindowWidth,alignSelf:'center'}}>
        <RkButton rkType='dark'  onPress={() => {
              logOut();
            }}>LOGOUT</RkButton>
            </View>
      </ScrollView>
    )
  }
}







let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base
  },
  title: {
    marginBottom: 5
  },

}));