import {FontIcons} from '../../assets/icons';
import * as Screens from '../../screens/index';
import _ from 'lodash';


export const MainRoutes = [
  {
    id: 'LoginMenu',
    title: 'Anasayfa',
    icon:  FontIcons.profile,
    screen: Screens.Articles4,
    children: []
  },
  {
    id: 'SocialMenu',
    title: 'Haberler',
    icon: FontIcons.profile,
    screen: Screens.Articles4,
    children: [{
        id: 'Article',
        title: 'Article View',
        screen: Screens.Article,
        children: []
      },{
        id: 'Article',
        title: 'Article View',
        screen: Screens.Article,
        children: []
      }]
  },
  {
    id: 'ArticlesMenu',
    title: 'Tahminler',
    icon: FontIcons.profile,
    screen: Screens.Tahminler,
    children: [{
      id: 'TahminScreen',
      title: 'Article View',
      screen: Screens.TahminScreen,
      children: []
    }]
  },
  {
    id: 'CanliSonuclar',
    title: 'Canli Sonuclar',
    icon: FontIcons.profile,
    screen: Screens.CanliSonuclar,
    children: []
  },
  {
    id: 'DashboardsMenu',
    title: 'İstatistikler',
    icon: FontIcons.profile,
    screen: Screens.Istatistikler,
    children: []
  },
  
];





let menuRoutes = _.cloneDeep(MainRoutes);
menuRoutes.unshift({
  id: 'Articles4',
  title: 'Article List V4',
  screen: Screens.Articles4,
  children: []
},);

export const MenuRoutes = menuRoutes;
