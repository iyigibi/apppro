import React from 'react';
import {
  FlatList,
  Image,
  View,
  TouchableOpacity,StyleSheet, Dimensions,AsyncStorage,ScrollView
} from 'react-native';
import {
  RkText,RkTabView,
  RkCard, RkStyleSheet,RkTheme
} from 'react-native-ui-kitten';
import {SocialBar, CardInput} from '../../components';
import {data} from '../../data';
import {FontAwesome} from '../../assets/icons';
import axios from 'axios';
import Carousel from 'react-native-banner-carousel';
import User from '../../data/globals';
import {Articles4,Tahminler,CanliSonuclar} from '../../screens';




const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;
const futbol='%27futbolli%27';
const basket='%27basketbolli%27';
const eglence='';
const diger='%27shendet%27';



RkTheme.setType('RkTabView', 'rounded', {
  backgroundColor: 'transparent',
  color: '#b8222e',
  
  
  tabContainer: {
    
    padding: 0,
    overflow: 'hidden',
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#b8222e',
  },
  content: {
    paddingVertical: 5,
  },
  container: {
    backgroundColor: '#ffffff',
   
  }
});


RkTheme.setType('RkTabView', 'pressed', {
  tabContainer: {
    borderLeftWidth: 2,
  },
});



 RkTheme.setType('RkTabView', 'roundedSelected', {
  backgroundColor: '#b8222e',
  color: 'white',
  //borderColor: '#4a636d'
});

RkTheme.setType('RkText','f12',{
  fontSize: 14
 });


export class Anasayfa extends React.Component {
  static navigationOptions = {
    title: 'eduasportin'.toUpperCase(),
  };

  constructor(props) {
    super(props);
    this.data=null;
   // this.char_convert = this.char_convert.bind(this);
    this.state = {
      stories: [],
      carouselItems:[],
      isFetching: false,
    };
  }


  
  render() {
    return (
      <ScrollView>
        <Articles4 navigation={this.props.navigation}></Articles4>
        <Tahminler navigation={this.props.navigation}></Tahminler>
        <CanliSonuclar navigation={this.props.navigation}></CanliSonuclar>
      </ScrollView>
    )
  }
}


let styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.scroll,
    paddingVertical: 0,
    paddingHorizontal: 0
  },container2: {
    backgroundColor: theme.colors.screen.scroll,
    marginVertical:10,
    marginHorizontal: 20,
    paddingHorizontal:-20,
    borderRadius: 5,
    borderColor:'#b8222e',
    borderWidth: 1,
    overflow: 'hidden',
  },overlap: {
    position: 'absolute',
    bottom: 0
  },
  back: {
    backgroundColor: '#23ee11'
  },
    content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    overflow:'hidden',

  },
  content2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  card: {
    marginVertical: 2,
  },
  post: {
    marginTop: 13
  }
}));

