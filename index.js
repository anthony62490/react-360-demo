import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Image,
  asset,
  Environment
} from 'react-360';
import InfoBox from './components/InfoBox';

export default class demo extends React.Component 
{
  changeBavaria()
  {
    Environment.setBackgroundImage(
      asset('Bavaria.jpg'),
      {format: '2D'},
    );
  }

  changeAirplane()
  {
    Environment.setBackgroundImage(
      asset('airplane.jpg'),
      {format: '2D'}, 
    );
  }

  changeHarbor()
  {
    Environment.setBackgroundImage(
      asset('boats.jpg'),
      {format: '2D'}, /* one of the formats mentioned above */
    );
  }

  changePrague()
  {
    Environment.setBackgroundImage(
      asset('prague.jpg'),
      {format: '2D'}, /* one of the formats mentioned above */
    );
  }

  changeAirport()
  {
    Environment.setBackgroundImage(
      asset('airport.jpg'),
      {format: '2D'}, /* one of the formats mentioned above */
    );
  }

  render() 
  {
    return (
      <View style={styles.panel}>
        <View style={styles.panel}>
          <VrButton onClick={() => this.changeBavaria()} style={styles.greetingBox}>
            <Text>GO TO BAVARIA</Text>
          </VrButton>
          <VrButton onClick={() => this.changeAirplane()} style={styles.greetingBox}>
            <Text>GO TO AIRPLANE</Text>
          </VrButton>
          <VrButton onClick={() => this.changeHarbor()} style={styles.greetingBox}>
            <Text>GO TO HARBOR</Text>
          </VrButton>
          <VrButton onClick={() => this.changePrague()} style={styles.greetingBox}>
            <Text>GO TO PRAGUE</Text>
          </VrButton>
          <VrButton onClick={() => this.changeAirport()} style={styles.greetingBox}>
            <Text>GO TO AIRPORT</Text>
          </VrButton>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
        // backgroundColor: 'rgba(50, 50, 50, 0.5)',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  greetingBox: {
    paddingLeft: 50,
    paddingRight: 50,
    // backgroundColor: '#000000',
    // borderColor: '#639dda',
    // borderWidth: 2,
    // fontSize: 50,
    // color: '#ffffff'
  },
  greeting: {
    fontSize: 50,
  },
});

AppRegistry.registerComponent('demo', () => demo);
