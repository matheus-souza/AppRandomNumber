var React = require('react');
var Text = require('react-native').Text;
var View = require('react-native').View;
var Button = require('react-native').Button;
var AppRegistry = require('react-native').AppRegistry;

const geraNumeroAleatorio = () => {
  var numeroAleatorio = Math.random();

  numeroAleatorio = Math.floor(numeroAleatorio * 10);

  alert(numeroAleatorio);
}

const App = () => {

  return (
    <View>
      <Text>Gerador de números randômicos</Text>
      <Button 
        title="Gerar um número randômico"
        onPress={geraNumeroAleatorio}
      />
    </View>
  );
};

AppRegistry.registerComponent('AppRandomNumber', () => App);