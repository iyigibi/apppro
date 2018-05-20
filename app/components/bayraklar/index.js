import React from 'react';
import {
  RkText,RkTabView,
  RkCard, RkStyleSheet,RkTheme,
  RkComponent
} from 'react-native-ui-kitten';
import axios from 'axios';
import {
  Image,
  View,StyleSheet,TouchableOpacity
} from 'react-native';
import {ulkeler} from '../../utils/ulkeIsim'
import _ from 'lodash'
import SvgUri from 'react-native-svg-uri';
import {Canlilar} from '../../screens/canlilar'
RkTheme.setType('RkText','baslik',{
  fontSize: 22
 });

export class Bayraklar extends RkComponent {

  constructor(props) {
    super(props);
    
  }

render()
  {
    let a_=this.props.item.country;
    let i_=_.findIndex(ulkeler, function(o) { return o.Name == a_});
    if(i_<0){
      i_=0;
    }



    let ulke=ulkeler[i_].Code;
    //let i_=_.findIndex(ulkeler, { 'name': this.props.name });
    //console.log();
    let params={id: this.props.item.ID,data_: this.props.item,date_str:this.props.date_str};

    return (
      <TouchableOpacity
        delayPressIn={70}
        activeOpacity={0.8}
        onPress={() => this.props.navigation.navigate('Canlilar', {id: this.props.item.ID,data_: this.props.item,date_str:this.props.date_str})}>
      <View style={{flexDirection:'row',paddingVertical:15}}>
  
        <View style={{flexDirection:'row',alignItems:'center',flex:1,borderBottomWidth:1,borderBottomColor:'#dedede'}}>
          <View style={{backgroundColor:'#ff4444',margin:10,marginRight:0,padding:3}}>
           <RkText rkType='baslik'>{this.props.item.country+':'+this.props.item.name}</RkText>
          </View>
          <Image  style={{flex:1,height:10}} source={require('../../assets/images/linetexturetile.jpg')} />
        </View>
        <View style={{alignSelf:'flex-end',backgroundColor:'#ff4433',borderRadius:5,paddingHorizontal:5,marginRight:5}}>
          <RkText>{this.props.item.sayi}</RkText>
        </View>
      </View>
      <Canlilar navigation={this.props.navigation} datak={{params}}></Canlilar>
      </TouchableOpacity>
    )
  }
}







let styles = RkStyleSheet.create(theme => ({
  kutu: {
    backgroundColor: '#ff00ff',
    width:30,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },
}));



