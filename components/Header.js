import { Text, View, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 15,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginLeft: 5,
    },
    icon: {
      width: 30,
      height: 30,
    },
    iconContainer: {
      backgroundColor: 'white',
      borderRadius: 80,
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    divider: {
      width: 100,
      height: 2
    }
  });
  
const icon = require('../assets/icon/icone-sacola.png');

const Header = () => {
    return (
        <View style={styles.container}> 
            <Text style={styles.title}>Ligtheria</Text>
            <View style={styles.iconContainer}>
                <Image style={styles.icon} source={icon}></Image>
            </View>
        </View>
    );
}

export default Header;