import AsyncStorage from '@react-native-async-storage/async-storage';

const UserSession = async () => {
    try {
        const userDetail = await AsyncStorage.getItem('@user_');
        if (userDetail) {
          const userObject = JSON.parse(userDetail);
          return userObject;
        } else {
          console.log('User data not found.');
          return null; // or handle this case as needed
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
        return null; // or handle the error as needed
      }
};


export default UserSession;
