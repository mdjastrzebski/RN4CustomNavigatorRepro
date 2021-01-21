/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {useNavigation} from 'react-navigation-hooks';

const NestedStack = createStackNavigator(
  {
    NestedHome: () => <Text>Nested</Text>,
  },
  {navigationOptions: {headerShown: false}},
);

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Nested')}>
        <Text>Go to nested</Text>
      </TouchableOpacity>
    </View>
  );
};

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Nested: NestedStack,
});

class RootComponent extends React.Component {
  static router = RootStack.router;

  render() {
    return (
      <RootStack
        screenProps={{test: 'whatever'}}
        navigation={this.props.navigation}
      />
    );
  }
}

const AppContainer = createAppContainer(RootComponent);

const App = () => {
  return <AppContainer />;
};

export default App;
