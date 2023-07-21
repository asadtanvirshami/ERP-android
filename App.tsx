import React from 'react';
import {
  Text,
  useColorScheme,
  View,
  SafeAreaView
} from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//Navigation Import
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Screens Import
import SignUp from './src/components/screens/Auth/SignUp';
import Login from './src/components/screens/Auth/Login';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

const RootStackScreen = () => (
  <RootStack.Navigator initialRouteName="Auth">
    <RootStack.Screen
      name="Auth"
      component={AuthStack}
      options={{ headerShown: false }}
    />
    {/* <RootStack.Screen
      name="App"
      component={AppStack}
      options={{ headerShown: false, gestureEnabled: false }}
    /> */}
  </RootStack.Navigator>
);

const AuthStack = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
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
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

// const AppStack = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarHideOnKeyboard: true,
//         tabBarStyle: {
//           backgroundColor: '#2661c7',
//           paddingTop: 15,
//           borderWidth: 0,
//           position: 'absolute',
//           backgroundColor: 'white',
//           elevation: 0,
//         },
//       })}
//     >
//       <Tab.Screen
//         name="HomeStack"
//         options={{
//           headerShown: false,

//           tabBarShowLabel: false,
//           tabBarIcon: ({ focused }) => (
//             <View style={{ alignItems: 'center' }}>
//               <HomeIcon
//                 height={28}
//                 width={28}
//                 stroke={`${focused ? '#1f2937' : '#E2E2E2'}`}
//               />
//               <Text
//                 style={{
//                   color: `${focused ? '#1f2937' : '#E2E2E2'}`,
//                   fontSize: 13,
//                   marginTop: 2,
//                   fontWeight: '600',
//                 }}
//               >
//                 Home
//               </Text>
//             </View>
//           ),
//         }}
//         component={PackStack}
//       />
//       {/* <Tab.Screen
//     name="ShiftView"
//     options={{
//       headerShown: false,
//       tabBarShowLabel: false,
//       tabBarIcon: ({ focused }) => (
//         <View style={{ alignItems: 'center' }}>
//           <CalendarIcon
//             height={28}
//             width={28}
//             stroke={`${focused ? '#202938' : '#E2E2E2'}`}
//           />
//           <Text
//             style={{
//               color: `${focused ? '#202938' : '#E2E2E2'}`,
//               fontSize: 13,
//               marginTop: 5,
//               fontWeight: '600',
//             }}
//           >
//             Shifts
//           </Text>
//         </View>
//       ),
//     }}
//     component={ShiftViewScreen}
//   />
//   <Tab.Screen
//     name="BlockingPoints"
//     options={{
//       headerShown: false,
//       tabBarShowLabel: false,
//       tabBarIcon: ({ focused }) => (
//         <View style={{ alignItems: 'center' }}>
//           <GridIcon
//             height={28}
//             width={28}
//             stroke={`${focused ? '#202938' : '#E2E2E2'}`}
//           />
//           <Text
//             style={{
//               color: `${focused ? '#202938' : '#E2E2E2'}`,
//               fontSize: 13,
//               marginTop: 5,
//               fontWeight: '600',
//             }}
//           >
//             Library
//           </Text>
//         </View>
//       ),
//     }}
//     component={BlockingPointsPackScreen}
//   /> */}
//       <Tab.Screen
//         name="Settings"
//         options={{
//           headerShown: false,
//           tabBarShowLabel: false,
//           tabBarIcon: ({ focused }) => (
//             <View style={{ alignItems: 'center' }}>
//               <UserIcon
//                 height={28}
//                 width={28}
//                 stroke={`${focused ? '#1f2937' : '#E2E2E2'}`}
//               />
//               <Text
//                 style={{
//                   color: `${focused ? '#1f2937' : '#E2E2E2'}`,
//                   fontSize: 13,
//                   marginTop: 2,
//                   fontWeight: '600',
//                 }}
//               >
//                 Profile
//               </Text>
//             </View>
//           ),
//         }}
//         component={SettingsScreen}
//       />
//     </Tab.Navigator>
//   );
// };

const AppNavigation = () => {
  // const navigationRef = useRef();
  // const currentUser = useSelector(getCurrentUser);

  // // Use an effect to subscribe to changes to the user's authentication status
  // useEffect(() => {
  //   if (currentUser) {
  //     // If the user is logged in, navigate to the AppStack
  //     navigationRef.current?.navigate('App', { screen: 'HomeStack' });
  //   } else {
  //     // If the user is not logged in, navigate to the AuthStack
  //     navigationRef.current?.navigate('Auth');
  //   }
  // }, [currentUser]);

  return (
    // ref={navigationRef}
    <NavigationContainer >
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
            <GestureHandlerRootView style={{ flex: 1 }}>

      <AppNavigation />
    </GestureHandlerRootView>
              </SafeAreaProvider>
  
          {/* </PersistGate>
        </Provider> */}
      </>
    </>
  );
};
export default App;
