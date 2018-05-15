import React from 'react';
import {
  FlatList,
  Image,
  View,
  TouchableOpacity,StyleSheet, Dimensions
} from 'react-native';
import {
  RkText,RkTabView,
  RkCard, RkStyleSheet,RkTheme
} from 'react-native-ui-kitten';
import {SocialBar,TahminLig} from '../../components';
import {data} from '../../data';
import {FontAwesome} from '../../assets/icons';
import axios from 'axios';


const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;


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

RkTheme.setType('RkText','font14',{
  fontSize: 18
 });

 let self;
export class Canlilar extends React.Component {
  static navigationOptions = {
    title: 'CANLI SONUÇLAR'.toUpperCase(),
  };


  constructor(props) {
    super(props);
    this.renderItem = this._renderItem.bind(this);
    let {params} = this.props.navigation.state;
    let id = params ? params.id : 1;
    //this.data = data.getArticle(id);
    this.data = params.data_;
    this.state = {
      league_id: props.league,
      header: props.header,
      stories:[]
    }
  }
  

  componentWillMount() {
   // this.data =data.getArticles('mainNews');
   self=this;
       // console.log(this.data.ID);
       
        axios.get('https://eduasportin.com//json/listLiveMatchToday.js?criteria=league%20IN('+this.data.ID+')%20AND%20matchDate%20BETWEEN%20%27'+'2018-05-13%2000:00:00'+'%27%20AND%20%27'+'2018-05-13%2023:59:59'+'%27&r='+Math.random())
        .then(function (response) {
         // console.log('burada '+response.data.list);
          let arr=response.data.list;
          arr.unshift({ID:"topGal"});
          self.setState({ stories : arr, isFetching : false });
        
          //this.data=response.data.list;
        })
        .catch(function (error) {

         // console.log(error);
        });
  }
  


  _keyExtractor(post) {
    return post.ID;
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


  _renderItem(info) {
    if(info.item.ID=="topGal"){
        return(
          <View style={styles.container}>
          
      </View>
        )
    }else{
     // let pho="https://v1.eduacdn.com/v01/800x600/"+info.item.newsImageName;
    return (
      <TouchableOpacity
        delayPressIn={70}
        activeOpacity={0.8}
        onPress={() => self.props.navigation.navigate('MatchDetailScreen', {id: info.item.id,data_: info.item})}>
      <View style={{flex:1,flexDirection:'row',height:50,borderBottomWidth:1,borderBottomColor:'#dedede',paddingTop:10}}>
      <View style={{flex:2}}>
          <RkText rkType='font14'>{info.item.minute}</RkText>
        </View>
        <View style={{flex:5}}>
          <RkText rkType='font14'>{info.item.team1}</RkText>
        </View>
        <View style={{flex:1,alignItems:'center'}}>
          <RkText rkType='font14'>{info.item.score}</RkText>
        </View>
        <View style={{flex:5,alignItems:'flex-end'}}>
          <RkText rkType='font14'>{info.item.team2}</RkText>
        </View>
        <View style={{flex:1,alignItems:'flex-end'}}>
          <RkText rkType='awesome' >{FontAwesome.chevronRight }</RkText>
        </View>
      </View>
      </TouchableOpacity>
    )
  }
  }



  
  render() {
    return (
      <View style={styles.container}>
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
    flex:1,
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

