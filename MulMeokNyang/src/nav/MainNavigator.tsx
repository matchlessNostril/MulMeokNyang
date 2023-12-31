// Stack Navigator
import { createStackNavigator } from "@react-navigation/stack";
// Route
import Start from "../screens/Start";
import Login from "../screens/Login";
import {
  BasicForm,
  RequestMessageAuth,
  CheckMessageAuthCode as CheckMessageAuthCodeInLS,
} from "../screens/localSignUp";
import {
  FindEmail,
  FindEmailResult,
  FindPw,
  CheckMessageAuthCode as CheckMessageAuthCodeInFP,
} from "../screens/find";
import {
  UserProfileRegistration,
  UserProfileModification,
} from "../screens/userProfileSet";
import {
  HowToGoSpace,
  DeviceRegistration,
  PendingCoManagerAddition,
} from "../screens/prepareSpace";
import {
  CatProfileRegistration,
  CatProfileModification,
} from "../screens/catInfoSet/catProfileSet";
import {
  CatPhotosForAIRegistration,
  AIResult,
} from "../screens/catInfoSet/catPhotosForAISet";
import {
  CatFeedStuffRegistration,
  CatFeedStuffModification,
} from "../screens/catInfoSet/catFeedStuffSet";
import {
  CatHydrationRegistration,
  CatHydrationModification,
} from "../screens/catInfoSet/catHydrationSet";
import { Main, HydrationStatistics, CoManager } from "../screens/main";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Start">
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BasicForm" component={BasicForm} />
      <Stack.Screen name="RequestMessageAuth" component={RequestMessageAuth} />
      <Stack.Screen
        name="CheckMessageAuthCodeInLS"
        component={CheckMessageAuthCodeInLS}
      />
      <Stack.Screen name="FindEmail" component={FindEmail} />
      <Stack.Screen name="FindEmailResult" component={FindEmailResult} />
      <Stack.Screen name="FindPw" component={FindPw} />
      <Stack.Screen
        name="CheckMessageAuthCodeInFP"
        component={CheckMessageAuthCodeInFP}
      />
      <Stack.Screen
        name="UserProfileRegistration"
        component={UserProfileRegistration}
      />
      <Stack.Screen
        name="UserProfileModification"
        component={UserProfileModification}
      />
      <Stack.Screen name="HowToGoSpace" component={HowToGoSpace} />
      <Stack.Screen name="DeviceRegistration" component={DeviceRegistration} />
      <Stack.Screen
        name="PendingCoManagerAddition"
        component={PendingCoManagerAddition}
      />
      <Stack.Screen
        name="CatProfileRegistration"
        component={CatProfileRegistration}
      />
      <Stack.Screen
        name="CatProfileModification"
        component={CatProfileModification}
      />
      <Stack.Screen
        name="CatPhotosForAIRegistration"
        component={CatPhotosForAIRegistration}
      />
      <Stack.Screen name="AIResult" component={AIResult} />
      <Stack.Screen
        name="CatFeedStuffRegistration"
        component={CatFeedStuffRegistration}
      />
      <Stack.Screen
        name="CatFeedStuffModification"
        component={CatFeedStuffModification}
      />
      <Stack.Screen
        name="CatHydrationRegistration"
        component={CatHydrationRegistration}
      />
      <Stack.Screen
        name="CatHydrationModification"
        component={CatHydrationModification}
      />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen
        name="HydrationStatistics"
        component={HydrationStatistics}
      />
      <Stack.Screen name="CoManager" component={CoManager} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
