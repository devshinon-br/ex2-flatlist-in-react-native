import { Text, View, StyleSheet } from 'react-native';
import ImageList from './components/ImageList';
import Header from './components/Header';
import DividerWithTitle from './components/DividerWithTitle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  topTitle: {
    fontSize: 16,
    marginTop: 50,
    marginBottom: 10,
    marginLeft: 10,
    backgroundColor: '#fff',
  },
});

const imageFileNames = [
  {description: 'Abajur', fileName: '01-tablelamps.png'},
  {description: 'Luminária de Chão', fileName: '02-ceilinglamps.png'},
  {description: 'Arandela', fileName: '03-sconces.png'},
  {description: 'Lâmpada de Teto', fileName: '04-floorlamps.png'},
  {description: 'Abajur', fileName: '05-lightdecor.png'},
  {description: 'Poste de Luz', fileName: '06-garlands.png'},
  {description: 'Abajur Moderno', fileName: '07-detalhes-table-lamp.png'},
];

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.topTitle}>ListaProdutos</Text>
      <Header/>
      <DividerWithTitle title='Categoria'/>
      <ImageList data={imageFileNames}/>
    </View>
  );
}

export default App;