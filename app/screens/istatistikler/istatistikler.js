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
import {SocialBar,Bayraklar} from '../../components';
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

RkTheme.setType('RkText','f12',{
  fontSize: 14
 });


export class Istatistikler extends React.Component {
  static navigationOptions = {
    title: 'İSTATİSTİKLER'.toUpperCase(),
  };


  constructor(props) {
    super(props);
    this.data=null;
    this.renderItem = this._renderItem.bind(this);
    this.state = {
      stories: [],
      leaguesArr: [],
      isFetching: false,
    };
  }



  
  componentWillMount() {
   // this.data =data.getArticles('mainNews');
   let self=this;
   
        axios.get('http://eduasportin.com/json/listActiveMatchLeages.js?r='+Math.random())
        .then(function (response) {
          console.log(response.data.list);
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
 _SetStats(index){
  if(index>0){
    alert('Servisten gelecek');
  }
}

  _renderItem(info) {
    if(info.item.ID=="topGal"){
        return(
          <View style={styles.container}>
          
          <TouchableOpacity style={styles.container2}>
          <RkTabView  rkType='rounded'   onTabChanged={(index) => this._SetStats(index)}>
              <RkTabView.Tab title={(selected) => {
                return this.renderTab(selected, 'Sonuçlar',true);
              }}/>
              <RkTabView.Tab title={(selected) => {
                return this.renderTab(selected, 'Paun Durumu');
              }}/>
              <RkTabView.Tab title={(selected) => {
                return this.renderTab(selected, 'Oyuncular');
              }}/>
          </RkTabView>
          </TouchableOpacity>
      </View>
      
           
        )
    }else{
      let pho="https://v1.eduacdn.com/v01/800x600/"+info.item.newsImageName;
    return (
      

      <View>
        <Bayraklar item={info.item} navigation={this.props.navigation} /> 
      	
        </View>
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

