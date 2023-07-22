import React, {useEffect, useRef} from 'react';
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
import SignUp from './src/components/screens/Auth/SignUp';
import Login from './src/components/screens/Auth/Login';
import {userVerification} from './src/functions/UserVerification'

import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {useSelector} from 'react-redux';

import Dashboard from './src/components/screens/Dashboard/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Admin from './src/components/screens/Dashboard/Admin';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

const RootStackScreen = () => (
  <RootStack.Navigator initialRouteName="Auth">
    <RootStack.Screen
      name="Auth"
      component={AuthStack}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="App"
      component={AppStack}
      options={{headerShown: false, gestureEnabled:true}}
    />
  </RootStack.Navigator>
);

const AuthStack = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          gestureEnabled: false, // Disable the swipe gesture on this screen
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

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
        tabBarButton: ["Auth","Admin"].includes(route.name)
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
        component={Dashboard}
      />
      <Tab.Screen
        name="Admin"
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
        component={Admin}
      />
      {/* <Tab.Screen
    name="ShiftView"
    options={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarIcon: ({ focused }) => (
        <View style={{ alignItems: 'center' }}>
          <CalendarIcon
            height={28}
            width={28}
            stroke={`${focused ? '#202938' : '#E2E2E2'}`}
          />
          <Text
            style={{
              color: `${focused ? '#202938' : '#E2E2E2'}`,
              fontSize: 13,
              marginTop: 5,
              fontWeight: '600',
            }}
          >
            Shifts
          </Text>
        </View>
      ),
    }}
    component={ShiftViewScreen}
  />
  <Tab.Screen
    name="BlockingPoints"
    options={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarIcon: ({ focused }) => (
        <View style={{ alignItems: 'center' }}>
          <GridIcon
            height={28}
            width={28}
            stroke={`${focused ? '#202938' : '#E2E2E2'}`}
          />
          <Text
            style={{
              color: `${focused ? '#202938' : '#E2E2E2'}`,
              fontSize: 13,
              marginTop: 5,
              fontWeight: '600',
            }}
          >
            Library
          </Text>
        </View>
      ),
    }}
    component={BlockingPointsPackScreen}
  /> */}
      {/* <Tab.Screen
        name="Settings"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <UserIcon
                height={28}
                width={28}
                stroke={`${focused ? '#1f2937' : '#E2E2E2'}`}
              />
              <Text
                style={{
                  color: `${focused ? '#1f2937' : '#E2E2E2'}`,
                  fontSize: 13,
                  marginTop: 2,
                  fontWeight: '600',
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
        component={SettingsScreen}
      /> */}
    </Tab.Navigator>
  );
};
type RootNavigationParamList = {
  App: {screen: string};
  Auth: undefined;
};

const AppNavigation = () => {
  const navigationRef =
    useRef<NavigationContainerRef<RootNavigationParamList>>(null);
  const currentUser = useSelector((state: any) => state.user.user);

  console.log(currentUser);
  // Use an effect to subscribe to changes to the user's authentication status
  useEffect(() => {
    async function VerifyUser() {
      let token = await AsyncStorage.getItem('@token') || '';
      userVerification(token).then((r:any) => {
        //customer verification
        if (r?.isLoggedIn === true) {
          navigationRef.current?.navigate('App', {screen: 'Dashboard'});
        } else {
          navigationRef.current?.navigate('Auth');
        }
      });
    }
    VerifyUser();
  }, [currentUser]);

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStackScreen />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <>
      <>
        {/* <Provider store={store}>
          <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}> */}
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

        {/* </PersistGate>
        </Provider> */}
      </>
    </>
  );
};
export default App;
