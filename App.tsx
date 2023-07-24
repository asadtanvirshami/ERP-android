import React, {useEffect, useRef, useState} from 'react';
import {Text, useColorScheme, View, SafeAreaView} from 'react-native';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
//Navigation Import
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//Screens Import
import Auth from './src/components/screens/Auth/index';
import Dashboard from './src/components/screens/Dashboard/index';
import Tasks from './src/components/screens/Tasks/index';
import Sales from './src/components/screens/Sales/index';
import Profile from './src/components/screens/Profile/index';

import {userVerification} from './src/functions/UserVerification';

import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {useSelector} from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from './src/components/shared/LoadingTheme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

const RootStackScreen = () => (
  <RootStack.Navigator initialRouteName="Auth">
    <RootStack.Screen
      name="Auth"
      component={Auth}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="App"
      component={AppStack}
      options={{headerShown: false, gestureEnabled: true}}
    />
  </RootStack.Navigator>
);

const DashboardStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Main"
      options={{headerShown: false, gestureEnabled: true}}
      component={Dashboard}
    />
    <Stack.Screen
      name="Task"
      options={{headerShown: false, gestureEnabled: true}}
      component={Tasks}
    />
    <Stack.Screen
      name="Sales"
      options={{headerShown: false, gestureEnabled: true}}
      component={Sales}
    />
  </Stack.Navigator>
);

const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: 'gray',
          paddingTop: 15,
          borderWidth: 0,
          position: 'absolute',
          // backgroundColor: 'white',
          elevation: 0,
        },
        tabBarButton: ['Auth', 'Tasks'].includes(route.name)
          ? () => {
              return null;
            }
          : undefined,
      })}>
      <Tab.Screen
        name="Dashboard"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  color: `${focused ? '#1f2937' : '#ED213A'}`,
                  fontSize: 13,
                  marginTop: 2,
                  fontWeight: '600',
                }}>
                Home
              </Text>
            </View>
          ),
        }}
        component={DashboardStack}
      />
      <Tab.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  color: `${focused ? '#1f2937' : '#E2E2E2'}`,
                  fontSize: 13,
                  marginTop: 2,
                  fontWeight: '600',
                }}>
                Home
              </Text>
            </View>
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

type RootNavigationParamList = {
  App: {screen: string};
  Auth: undefined;
};

const AppNavigation = () => {
  const [loading, setLoading] = useState(true);

  const navigationRef =
    useRef<NavigationContainerRef<RootNavigationParamList>>(null);
  const currentUser = useSelector((state: any) => state.user.user);

  console.log(currentUser);
  // Use an effect to subscribe to changes to the user's authentication status
  useEffect(() => {
    async function VerifyUser() {
      let token = (await AsyncStorage.getItem('@token')) || '';
      userVerification(token).then((r: any) => {
        //customer verification
        if (r?.isLoggedIn === true) {
          navigationRef.current?.navigate('App', {screen: 'Dashboard'});
        } else {
          navigationRef.current?.navigate('Auth');
        }
      });
    }
    VerifyUser();
    setLoading(false); 
  }, [currentUser]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <NavigationContainer ref={navigationRef}>
          <RootStackScreen />
        </NavigationContainer>
      )}
    </>
  );
};

const App = () => {
  return (
    <>
      <>
        <SafeAreaProvider>
          <GestureHandlerRootView style={{flex: 1}}>
            <Provider store={store}>
              <PersistGate
                loading={<Text>Loading...</Text>}
                persistor={persistor}>
                <AppNavigation />
              </PersistGate>
            </Provider>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </>
    </>
  );
};
export default App;
