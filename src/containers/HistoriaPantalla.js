import React from 'react';
import { Text, View, Image, FlatList,Dimensions,ScrollView } from 'react-native';

const DATA = [{ image: require('../assets/Papa.jpg'), descripcion: 'Este es mi padre.' },
{ image: require('../assets/artesanal.jpg'), descripcion: 'Esto es un pan artesanal' },
{ image: require('../assets/artesanal2.jpg'), descripcion: 'Mismo pan pero cortado.' },
{ image: require('../assets/variedad.jpg'), descripcion: 'Panes de tinta calamar y de curry' },
]


//PANTALLA INFORMACION
export default function HistoriaPantalla() {
    return (
        <View style={{flex:1}}>
            <Text>Bienvenido a la historia de la panadería de mi padre, ObradorPanPaco</Text>
            <FlatList
                data={DATA}
                renderItem={({ item }) => {
                    return ( //imagen y descripcion de cada foto
                        <>
                            <Image
                                style={{width: 300, height: 300,marginLeft:35}}
                                resizeMode='contain'
                                source={item.image}
                            />
                            <Text>{item.descripcion}</Text>

                        </>
                    )
                }}
                contentContainerStyle={{
                    flexGrow: 1,
                    }}
                
            />
        </View>
    );
}