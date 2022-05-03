import React from 'react';
import { Text, View, Image, FlatList,Dimensions } from 'react-native';

const DATA = [{ image: require('../assets/Papa.jpg'), descripcion: 'Esto es un ericsson. Cuando recordamos el nombre de Ericsson es imposible no asociarlo -en materia de telefonía- al nombre de Sony. Y es que sí, la alianza entre las dos compañías marcó una larga época en esto de los teléfonos móviles, concretamente desde 2001 hasta 2012. Pero los teléfonos de Ericsson no nacieron con este matrimonio sueco-nipón, para nada, nos acompañaron mucho antes, e incluso algunos de nosotros, especialmente los que ahora estamos en la treintena, recordamos algún modelo de Ericsson como nuestro primer teléfono móvil.' },
{ image: require('../assets/artesanal.jpg'), descripcion: 'Esto es un blackberry. El primer dispositivo de la familia fue la BlackBerry 850, el dispositivo móvil tenía un teclado completo, lo que era inusual en ese momento. Podía enviar mensajes, acceder al correo electrónico, enviar y recibir páginas de internet completas e implementaba una agenda para organizar tareas, con tan solo una pequeña pantalla que podía mostrar ocho líneas de texto' },
{ image: require('../assets/artesanal2.jpg'), descripcion: 'Esto es un motorola. La compañía detrás del primer teléfono móvil portátil comercial del mundo ciertamente ha recorrido un largo camino a lo largo de las décadas. Desde teléfonos de ladrillo lo suficientemente grandes como para rasgar su bolsillo hasta teléfonos inteligentes con teclados giratorios, Motorola ha incursionado en todo.' },
{ image: require('../assets/variedad.jpg'), descripcion: 'Esto es un nokia. Nokia ha sido la empresa más influyente en el desarrollo de la industria móvil de toda la historia junto con Apple, que inventó el concepto de smartphone tal y como lo conocemos hoy en día. Fue precisamente ese concepto el que hizo a Nokia perder relevancia en el sector móvil, ya que no supo adaptarse rápido y bien a las nuevas reglas del mercado' },
]


//PANTALLA INFORMACION
export default function PanesPantalla() {
    return (
        <View>
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
                }
                }
            />
        </View>
    );
}