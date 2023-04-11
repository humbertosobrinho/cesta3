import React from "react";

import { View,StyleSheet, ViewBase, Image } from "react-native";



import Logo from '../../assets/logo.png';

import Texto from '../../src/componentes/Texto.js';

export default function Detalhes(){
    return <>
        <View style={estilos.fazenda}>  
            <Image source={Logo} style={estilos.imagemFazenda} /> 
            <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
        </View>
        <Texto style={estilos.descricao}>Uma cesta com produtos selecionados cuidadozamente da fazenda direto para cozinha</Texto>
        <Texto style={estilos.preco}> R$:40,00</Texto>

    </>
}


const estilos = StyleSheet.create({
    nome:{
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontFamily: "MontSerratBold"

    },

    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        fontFamily: "MontSerratRegular"
    },

    descricao:{
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26
    },
    
    preco:{
        color: "#A26A9F85",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
        fontWeight: "bold"
    },

    imagemFazenda:{
        width: 32,
        height: 32
    },
    fazenda:{
        flexDirection: "row",
        padding: 12
    }

})