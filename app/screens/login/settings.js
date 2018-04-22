import React from 'react';
import {
  ScrollView,
  Image,
  View,
  TouchableOpacity,Dimensions
} from 'react-native';
import {
  RkCard,
  RkText,
  RkStyleSheet ,RkTextInput,RkTheme
} from 'react-native-ui-kitten';
import {data} from '../../data';
import {Avatar} from '../../components';
import {SocialBar} from '../../components';
let moment = require('moment');
import {GradientButton} from '../../components/';

import * as Progress from 'react-native-progress';

const WindowWidth = Dimensions.get('window').width*0.5;


RkTheme.setType('RkTextInput','bgColor',{
  backgroundColor:'#dedede'
 });



export class Settings extends React.Component {
  static navigationOptions = {
    title: 'Ayarlar'.toUpperCase()
  };

  constructor(props) {
    super(props);
    let {params} = this.props.navigation.state;
    let id = params ? params.id : 1;
    //this.data = data.getArticle(id);
  }



  //<RkText rkType='secondary2 hintColor'>{moment().add(this.data.time, 'seconds').fromNow()}</RkText>



  render() {
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
      <GradientButton style={styles.save} rkType='medium' text='KAYDET' onPress={() => {
              this.props.navigation.goBack()
            }}/>
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