import React from "react";

import { View,StyleSheet, ViewBase, Image } from "react-native";


import Logo from '../../assets/logo.png';


import Texto from '../../src/componentes/Texto.js';

export default function Detalhes({nome, logoFazenda, nomeFazenda, descricao, preco}){
    return <>
        <Texto style={estilos.nome}>{nome}</Texto>
        <View style={estilos.fazenda}>  
            <Image source={logoFazenda} style={estilos.imagemFazenda} /> 
            <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
        </View>
        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Texto style={estilos.preco}> {preco}</Texto>

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