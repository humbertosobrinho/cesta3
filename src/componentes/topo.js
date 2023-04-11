import React from "react";

import Topoimg from '../../assets/topo.png' 

import {  View,StyleSheet, Image, Text, Dimensions } from 'react-native';
import Texto from '../../src/componentes/Texto.js'

import topo from '../../assets/topo.png'

export default function Topo({ titulo }){
    return <>   
    <Image source={Topoimg} style={estilos.Topo} /> 
    <Texto style={estilos.titulo}>{ titulo }</Texto>
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
    }
})