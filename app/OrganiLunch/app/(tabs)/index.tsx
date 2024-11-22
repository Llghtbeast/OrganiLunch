import { View, StyleSheet, Text } from 'react-native'

export default function HomeScreen() {
  return (
    <View style = { styles.container }>
      <View style={ styles.titleContainer }>
        <Text>Home Screen</Text>
      </View>
      <View style={ styles.textContainer }>
        <Text style = {{ color: 'white' }}>Welcome to the home screen, here you will find an overview of the app!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    //flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    //gap: 8,
    backgroundColor: 'red'
  },
  container: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'darkorange',
    padding: 50
  },
  textContainer: {
    flex: 5,
    alignItems: 'center',
    fontWeight: 'bold',
    backgroundColor: 'black',
    padding: 10
  }
});
