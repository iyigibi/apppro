import React from 'react';
import {
  FlatList,
  Image,
  View,
  TouchableOpacity,StyleSheet, Dimensions,AsyncStorage
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


export class Articles4 extends React.Component {
  static navigationOptions = {
    title: 'eduasportin'.toUpperCase(),
  };

  constructor(props) {
    super(props);
    this.data=null;
    this.renderItem = this._renderItem.bind(this);
    this.setNewsCatagory = this._setNewsCatagory.bind(this);
    this.CallService = this._CallService.bind(this);
   // this.char_convert = this.char_convert.bind(this);
    this.state = {
      stories: [],
      carouselItems:[],
      isFetching: false,
    };
  }




  componentWillMount() {


    console.log("anasayfa istendi");
    this.CallService();
  }

  _CallService(newsCategoryStateName=futbol){
   let self=this;
        axios.get('https://eduasportin.com/json/listNewsCategoryApi.js?r='+Math.random()+'&criteria=category.slugName%20IN('+newsCategoryStateName+')%20and%20news.isHeadlineNews=0&nTop=20')
        .then(function (response) {
          let arr=response.data.list;
          arr.unshift({ID:"topGal"});
          self.setState({ stories : arr, isFetching : false ,carouselItems: arr.slice(1,5)});
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  

  char_convert(in_str) {
    var chars = ["'","“","”","©","Û","®","ž","Ü","Ÿ","Ý","$","Þ","%","¡","ß","¢","à","£","á","À","¤","â","Á","¥","ã","Â","¦","ä","Ã","§","å","Ä","¨","æ","Å","©","ç","Æ","ª","è","Ç","«","é","È","¬","ê","É","­","ë","Ê","®","ì","Ë","¯","í","Ì","°","î","Í","±","ï","Î","²","ð","Ï","³","ñ","Ð","´","ò","Ñ","µ","ó","Õ","¶","ô","Ö","·","õ","Ø","¸","ö","Ù","¹","÷","Ú","º","ø","Û","»","ù","Ü","@","¼","ú","Ý","½","û","Þ","€","¾","ü","ß","¿","ý","à","‚","À","þ","á","ƒ","Á","ÿ","å","„","Â","æ","…","Ã","ç","†","Ä","è","‡","Å","é","ˆ","Æ","ê","‰","Ç","ë","Š","È","ì","‹","É","í","Œ","Ê","î","Ë","ï","Ž","Ì","ð","Í","ñ","Î","ò","‘","Ï","ó","’","Ð","ô","“","Ñ","õ","”","Ò","ö","•","Ó","ø","–","Ô","ù","—","Õ","ú","˜","Ö","û","™","×","ý","š","Ø","þ","›","Ù","ÿ","œ","Ú"]; 
    var codes = ["&#39;","&ldquo;","&rdquo;","&copy;","&#219;","&reg;","&#158;","&#220;","&#159;","&#221;","&#36;","&#222;","&#37;","&#161;","&#223;","&#162;","&#224;","&#163;","&#225;","&Agrave;","&#164;","&#226;","&Aacute;","&#165;","&#227;","&Acirc;","&#166;","&#228;","&Atilde;","&#167;","&#229;","&Auml;","&#168;","&#230;","&Aring;","&#169;","&#231;","&AElig;","&#170;","&#232;","&Ccedil;","&#171;","&#233;","&Egrave;","&#172;","&#234;","&Eacute;","&#173;","&#235;","&Ecirc;","&#174;","&#236;","&Euml;","&#175;","&#237;","&Igrave;","&#176;","&#238;","&Iacute;","&#177;","&#239;","&Icirc;","&#178;","&#240;","&Iuml;","&#179;","&#241;","&ETH;","&#180;","&#242;","&Ntilde;","&#181;","&#243;","&Otilde;","&#182;","&#244;","&Ouml;","&#183;","&#245;","&Oslash;","&#184;","&#246;","&Ugrave;","&#185;","&#247;","&Uacute;","&#186;","&#248;","&Ucirc;","&#187;","&#249;","&Uuml;","&#64;","&#188;","&#250;","&Yacute;","&#189;","&#251;","&THORN;","&#128;","&#190;","&#252","&szlig;","&#191;","&#253;","&agrave;","&#130;","&#192;","&#254;","&aacute;","&#131;","&#193;","&#255;","&aring;","&#132;","&#194;","&aelig;","&#133;","&#195;","&ccedil;","&#134;","&#196;","&egrave;","&#135;","&#197;","&eacute;","&#136;","&#198;","&ecirc;","&#137;","&#199;","&euml;","&#138;","&#200;","&igrave;","&#139;","&#201;","&iacute;","&#140;","&#202;","&icirc;","&#203;","&iuml;","&#142;","&#204;","&eth;","&#205;","&ntilde;","&#206;","&ograve;","&#145;","&#207;","&oacute;","&#146;","&#208;","&ocirc;","&#147;","&#209;","&otilde;","&#148;","&#210;","&ouml;","&#149;","&#211;","&oslash;","&#150;","&#212;","&ugrave;","&#151;","&#213;","&uacute;","&#152;","&#214;","&ucirc;","&#153;","&#215;","&yacute;","&#154;","&#216;","&thorn;","&#155;","&#217;","&yuml;","&#156;","&#218;"];
  
      for(x=0; x<codes.length; x++){
        var re = new RegExp(codes[x],"g");
        in_str = in_str.replace(re, chars[x]);
      }
    
      return in_str;
  }

  _keyExtractor(post) {
    return post.ID;
  }

  renderPage(image, index) {
   // console.log(image);
    return (
      
        <View key={index} >
            <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: "https://v1.eduacdn.com/v01/800x600/"+image.newsImageName }} />
            <View style={styles.overlap}>
              <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
                <RkText rkType='primary3 big' numberOfLines={1} style={{backgroundColor:'#b8222e', color:'#ffffff',
                alignSelf: 'flex-start', paddingHorizontal: 5, paddingVertical: -1}}>{User.getCurrentUser()+this.state.carouselItems[index].newsCategory}</RkText>
                <RkText rkType='header' numberOfLines={2} style={{ color:'#ffffff'}}>{this.state.carouselItems[index].newsHeader}</RkText>
              </View>
              <View style={{backgroundColor:'#aaaaaa88', height:20, width: BannerWidth}}></View>
            </View>
        </View>
    );
}






renderTab = (isSelected, title,first=false) => {
  let backgroundColor = isSelected ? '#b8222e' : 'white';
  let color = (!isSelected) ? '#b8222e' : 'white';
  let borderLeftWidth = first ? 0 : 1;
  return (
    <View
      style={{
        backgroundColor,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 0,
        paddingVertical: 10,
        borderLeftWidth,
        borderColor:'#b8222e'
      }}>
      <RkText rkType='f12' style={{color, marginLeft: 0}}>{title}</RkText>
    </View>);
 };

 
  _setNewsCatagory(index){
    console.log(this.state);
    if(index==0){
      this.CallService(futbol);
    }else if(index==1){
      this.CallService(basket);
    }else if(index==2){
      this.CallService(diger);
    }else if(index==3){
      this.CallService(diger);
    }
  }
  _renderItem(info) {
    if(info.item.ID=="topGal"){
        return(
          <View style={styles.container}>
          
          <TouchableOpacity style={styles.container2}>
          <RkTabView  rkType='rounded' onTabChanged={(index) => this.setNewsCatagory(index)}>
              <RkTabView.Tab title={(selected) => {
                return this.renderTab(selected, 'Futbol',true);
              }}/>
              <RkTabView.Tab title={(selected) => {
                return this.renderTab(selected, 'Basketbol');
              }}/>
              <RkTabView.Tab title={(selected) => {
                return this.renderTab(selected, 'Eğlence');
              }}/>
              <RkTabView.Tab title={(selected) => {
                return this.renderTab(selected, 'Diğer');
              }}/>
          </RkTabView>
          </TouchableOpacity>
          <Carousel
              autoplay
              autoplayTimeout={5000}
              loop
              index={0}
              pageSize={BannerWidth}
          >
              {this.state.carouselItems.map((image, index) => this.renderPage(image, index))}
          </Carousel>
      </View>
              

        )
    }else{
      let pho="https://v1.eduacdn.com/v01/800x600/"+info.item.newsImageName;
      info.item.newsHeader=this.char_convert(info.item.newsHeader);
      info.item.newsSummaryFull=this.char_convert(info.item.newsSummaryFull);
      info.item.newsShortTitle=this.char_convert(info.item.newsShortTitle);
    return (
      
      
      <TouchableOpacity
        delayPressIn={70}
        activeOpacity={0.8}
        onPress={() => this.props.navigation.navigate('Article', {id: info.item.id,data_: {
          'id': 2,
          'photo': pho,
          'type': 'article',
          'time': info.item.newsDate,
          'header': info.item.newsHeader,
          'text_': info.item.newsSummaryFull,
          'comments': [],
          user:{
            'photo':null,
            'id':0
          }
        }
        })}>
      	<RkCard rkType='horizontal' style={styles.card}>
          <Image
          rkCardImg
          source={{uri: pho}}
        />

          <View rkCardContent>
            <RkText numberOfLines={1} rkType='header6'>{info.item.newsShortTitle}</RkText>
            <RkText numberOfLines={2} style={styles.post} rkType='secondary1'>{info.item.newsHeader}</RkText>
          </View>
          <View rkCardRigth >
          <View style={styles.content}>
            <RkText rkType='awesome secondaryColor small' >{FontAwesome.chevronRight}</RkText>
            </View >
          </View >
        </RkCard>
      </TouchableOpacity>
    )
  }
  }


  
  render() {
    return (
      <View>
        
        <FlatList
          data={this.state.stories}
          renderItem={this.renderItem}
          keyExtractor={this._keyExtractor}
          style={styles.container}>
              
          </FlatList>
      </View>
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
    overflow:'hidden'
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

