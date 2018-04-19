import React from 'react';
import {
  RkText,RkTabView,
  RkCard, RkStyleSheet,RkTheme,
  RkComponent
} from 'react-native-ui-kitten';
import axios from 'axios';
import {
  FlatList,
  Image,
  View,
  TouchableOpacity,StyleSheet, Dimensions
} from 'react-native';
import {FontAwesome} from '../../assets/icons';


RkTheme.setType('RkCard','ligTahmin', {
  img: {
    height: 10,
    opacity: 0.7
  },
  header: {
    alignSelf: 'center'
  },
  content:{
    alignSelf:'center',
    //paddingVertical:10,
  },
  container :{
    paddingVertical:10,
  }
});





export class TahminLig extends RkComponent {

  constructor(props) {
    super(props);
    this.renderItem = this._renderItem.bind(this);
    this.state = {
      league_id: props.league,
      header: props.header,
      stories:[]
    }
  }


  componentWillMount() {
    // this.data =data.getArticles('mainNews');
    let self=this;
    
         axios.get('https://eduasportin.com//json/listPredictionGame.js?r='+Math.random()+'&league_id='+this.state.league_id)
         .then(function (response) {
           console.log(response.data.list);
           let arr=response.data.list;
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

  _renderItem(info) {
    
  
    return (
      <TouchableOpacity
        delayPressIn={70}
        activeOpacity={0.8}
        onPress={() => this.props.navigation.navigate('TahminScreen', {id: info.item.ID,data_: info.item})}>
      <View>
        <RkCard rkType='ligTahmin' style={styles.card}>
        <View  style={styles.overlap}>
            <RkText numberOfLines={1} rkType='header6'>{info.item.date}</RkText>
        </View>
        <View style={styles.back}>
            <RkText numberOfLines={1} rkType='header6'  style={{textAlign:'right'}}>{info.item.homeTeam}</RkText>
        </View>
        <View>
            <RkText numberOfLines={1} rkType='header6'  style={{textAlign:'center',paddingHorizontal:20}}>vs</RkText>
        </View>
        <View style={styles.back}>
            <RkText numberOfLines={1} rkType='header6'  style={{textAlign:'left'}}>{info.item.awayTeam}</RkText>
        </View>
        <View style={styles.overlapRigth}>
        <RkText rkType='awesome' >{FontAwesome.info}</RkText>
        </View>
        
        </RkCard>
      </View>
      </TouchableOpacity>
    )
  }




  
render() {

 if(this.state.stories.length==0)
 return null;

    return (
      <View>
        
        <RkText numberOfLines={1} rkType='header6'>{this.state.header}</RkText>
          <FlatList
            data={this.state.stories}
            renderItem={this.renderItem}
            keyExtractor={this._keyExtractor}
          >
              
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
    bottom: 10,
  },overlapRigth: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  back: {
    flex:1
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
    marginVertical: 0,
    flexDirection: 'row'
  },
  post: {
    marginTop: 13
  }
}));




