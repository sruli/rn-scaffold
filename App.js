import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  wrapper: {
    container: {
      flex: 1,
    },
  },
});

const Wrapper = ({children}) => {
  return (
    <>
      <View style={styles.wrapper.container}>{children}</View>
    </>
  );
};

const Home = () => {
  return (
    <Wrapper>
      <Text>Hello, world</Text>
    </Wrapper>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
