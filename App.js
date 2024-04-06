import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Ao from './pages/Ao';
import Blackboard from "./pages/Blackboard";
import Exam from './pages/Exam';
import First from './pages/First';
import ForgotPasswordScreen from './pages/ForgotPasswordScreen';
import Home from './pages/Home';
import Login from './pages/Login';
import Picture from './pages/Picture';
import TestScore from './pages/TestScore';
// import Testpage from './pages/Testpage';
import Word from './pages/Word';
import audio from './pages/audio';
import color from './pages/color';
import imagematch from './pages/imagematch';
import letterA from './pages/letterA';
import signup from './pages/signup';
import video from './pages/video';
import dash from './pages/dash';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="">
        <Stack.Screen
          options={{headerShown: false}}
          name="First1"
          component={First}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Forgot"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
           <Stack.Screen
          options={{headerShown: false}}
          name="signup"
          component={signup}
        />
       <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
           <Stack.Screen
          options={{headerShown: false}}
          name="Picture"
          component={Picture}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="Word"
          component={Word}
        />
           <Stack.Screen
          options={{headerShown: false}}
          name="Blackboard"
          component={Blackboard}
        />
            <Stack.Screen
          options={{headerShown: false}}
          name="color"
          component={color}
        />
     <Stack.Screen
          options={{headerShown: false}}
          name="video"
          component={video}
        />
            <Stack.Screen
          options={{headerShown: false}}
          name="letterA"
          component={letterA}
        />
              <Stack.Screen
          options={{headerShown: false}}
          name="Ao"
          component={Ao}
        />
               <Stack.Screen
          options={{headerShown: false}}
          name="Exam"
          component={Exam}
        />
              <Stack.Screen
          options={{headerShown: false}}
          name="audio"
          component={audio}
        />
             <Stack.Screen
          options={{headerShown: false}}
          name="imagematch"
          component={imagematch}
        />
              <Stack.Screen
          options={{headerShown: false}}
          name="dash"
          component={dash}
        />
              <Stack.Screen
          options={{headerShown: false}}
          name="TestScore"
          component={TestScore}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
