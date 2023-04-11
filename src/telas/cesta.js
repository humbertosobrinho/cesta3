import React from 'react';
import {  View,StyleSheet, Image, Text, Dimensions } from 'react-native';

import Topo from '../../assets/topo.png'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default  function Cesta(){


   return  <>
     <Image source={Topo} style={estilos.Topo} /> 
    <Text style={estilos.titulo}>Detalhe da cesta</Text>
    <View style={estilos.cesta} >
        <Text style={estilos.nome}>Cesta de Verduras</Text>
        <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
        <Text style={estilos.descricao}>Uma cesta com produtos selecionados cuidadozamente da fazenda direto para cozinha</Text>
        <Text style={estilos.preco}> R$:40,00</Text>
    </View>
    </>
}

const width = Dimensions.get('screen').width

const estilos = StyleSheet.create({
    Topo:{
        width: "100%",
        height: 578 / 768 * width
    },

    titulo:{
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    },
    
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16 
    },

    nome:{
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"

    },

    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26
    },

    descricao:{
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26
    },
    
    preco:{
        color: "#A2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
})