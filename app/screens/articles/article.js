import React from 'react';
import {
  ScrollView,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import {
  RkCard,
  RkText,
  RkStyleSheet 
} from 'react-native-ui-kitten';
import {data} from '../../data';
import {Avatar} from '../../components';
import {SocialBar} from '../../components';
let moment = require('moment');




export class Article extends React.Component {
  static navigationOptions = {
    title: 'Haberler'.toUpperCase()
  };

  constructor(props) {
    super(props);
    let {params} = this.props.navigation.state;
    let id = params ? params.id : 1;
    //this.data = data.getArticle(id);
    this.data = params.data_;
  }



  //<RkText rkType='secondary2 hintColor'>{moment().add(this.data.time, 'seconds').fromNow()}</RkText>
  render() {
    return (
      <ScrollView style={styles.root}>
        <RkCard rkType='article'>

          <View rkCardHeader>
            <View>
              <RkText style={styles.title} rkType='header4'>{this.data.header}</RkText>
              <View style={{flexDirection:'row'}}>
                <View style={{alignSelf:'flex-start',flex:1}}>
                <RkText rkType='secondary2 hintColor'>Dakika servisten gelecek</RkText>
                </View>
                <View  style={{justifyContent:'flex-end',flex:1,flexDirection:'row'}}>
                <RkText rkType='secondary2 hintColor'>{this.data.time}</RkText>
                </View>
              </View>

            </View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileV1', {id: this.data.user.id})}>
              <Avatar rkType='circle' img={this.data.user.photo}/>
            </TouchableOpacity>
          </View>
          <Image rkCardImg style={{height:300}} source={{uri:this.data.photo}}/>
          <View rkCardContent>
            <View>
              <RkText rkType='primary3 bigLine'>{this.data.text_}</RkText>
            </View>
          </View>
          <View rkCardFooter>
            
          </View>
        </RkCard>
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