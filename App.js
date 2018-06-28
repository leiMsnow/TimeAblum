import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';

import {configureStore} from './app/store';
import {registerComponents, registerScreenVisibilityListener} from "./app/screens";
import {AppIcons, IconsLoaded} from './app/utils';

const store = configureStore();

registerComponents(store, Provider);
registerScreenVisibilityListener();

class App extends React.Component {

  constructor(props) {
    super(props);
    IconsLoaded.then(() => {
      this.startApp();
    });
  }

  startApp = () => {
    Navigation.startSingleScreenApp({
      screen: {
        label: 'Home',
        screen: 'Home',
        icon: AppIcons['md-home'],
        selectedIcon: AppIcons['md-home'],
        title: 'Home',
      },
      appStyle: {
        tabBarButtonColor: '#969696',
        tabBarSelectedButtonColor: 'black',
        tabBarBackgroundColor: 'white',
        navigationBarColor: 'black',
        statusBarColor: 'white',
        navBarHeight: 50,
        forceTitlesDisplay: true,
        keepStyleAcrossPush: false,
        orientation: 'portrait',
      },
      drawer: {
        left: {
          screen: 'Cover', // unique ID registered with Navigation.registerScreen
          fixedWidth: 500,
        },
        style: { // ( iOS only )
          drawerShadow: true, // optional, add this if you want a side menu cover shadow
          contentOverlayColor: 'rgba(0,0,0,0.25)', // optional, add this if you want a overlay color when cover is open
          leftDrawerWidth: 70, // optional, add this if you want a define left cover width (50=percent)
          shouldStretchDrawer: true // optional, iOS only with 'MMDrawer' type, whether or not the panning gesture will “hard-stop” at the maximum width for a given cover side, default : true
        },
        type: 'MMDrawer', // optional, iOS only, types: 'TheSideBar', 'MMDrawer' default: 'MMDrawer'
        animationType: 'slide-and-scale', //optional, iOS only, for MMDrawer: 'door', 'parallax', 'slide', 'slide-and-scale'
        // for TheSideBar: 'airbnb', 'facebook', 'luvocracy','wunder-list'
        disableOpenGesture: false // optional, can the cover be opened with a swipe instead of button
      }
    });
  }
}

export default App;
