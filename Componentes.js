import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function Exemplo1(texto) {
    texto = "Parametro da Função Exemplo1"
    return (
        <View style={Estilos.container}>
            <Text>Olá mundo - Exemplo 1</Text>
            <Button title={"Clique aqui"} onPress={() => alert(`Clicou: ${texto}`)}/>
        </View>
    )
}

const Exemplo2 = () => {
    return (
        <View style={Estilos.container}>
            <Text>Olá mundo - Exemplo 2</Text>
            <Button title={"Clique aqui"} onPress={() => alert("Clicou")}/>
        </View>
    )
}

const MyCode = () => {
    return (
        <View style={Estilos.container}>
            <Text>Olá mundo - Esse é o meu primeiro código nomeado MyCode</Text>
            <Button title={"Clique No meu Botão"} onPress={() => alert("Parabéns. Você Clicou!")}/>
        </View>
    )
}

const MyName = ({nome = "Fernanda", idade = 20}) => {
    return (
        <View style={Estilos.container}>
            <Text>Olá mundo para vc {nome} que tem a idade {idade}</Text>
            <Button title={"Clique aqui"} onPress={() => alert("Clicou!")}/>
        </View>
    )
}

// const Exemplo3 = () => <View style={Estilos.container}><Text>Olá mundo - Exemplo 3</Text><Button title={"Clique aqui"} onPress={() => alert("Clicou")}/></View>

// const Exemplo4 = ({nome = "João", idade = 35}) => {
//     return (
//         <View style={Estilos.container}>
//             <Text>Olá mundo para vc {nome} que tem a idade {idade}</Text>
//             <Button title={"Clique aqui"} onPress={() => alert("Clicou")}/>
//         </View>
//     )
// }

export { Exemplo1, Exemplo2, MyCode, MyName } //Método de esportação para outras telas

export default () => {
    return (
        <View style={Estilos.container}>
            <Text>Olá mundo - Exemplo Default</Text>
            <Button title={"Clique aqui"} onPress={() => alert("Clicou")}/>
        </View>
    )
}

const Estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "black",
    },
});
