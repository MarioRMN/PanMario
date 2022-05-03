import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HistoriaStack = createNativeStackNavigator();
const PanesStack = createNativeStackNavigator();

import HistoriaPantalla from '../containers/HistoriaPantalla';
import PanesPantalla from '../containers/PanesPantalla';


//stack para pulsar para la navegacion
//inicio pantalla STACK
export default function pantallas() { //LAS DOS VENTANAS POR LAS QUE NAVEGAREMOS
    return (
      <HistoriaStack.Navigator>
        <HistoriaStack.Screen name="Historia" component={HistoriaPantalla} //PANTALLA DE Historia
          options={{ //detalles del encabezado 
            title: 'Busqueda',
            headerStyle: {
              backgroundColor: '#CAFBF9',
            },
            headerTintColor: 'black',
            headerTitleAlign: 'center'
          }} />
        <NavegacionStack.Screen name="Panes" component={PanesPantalla} //PANTALLA DE DETALLE
          options={{
            title: 'Usuarios',
            headerStyle: {
              backgroundColor: '#CAFBF9',
            },
            headerTintColor: 'black',
            headerTitleAlign: 'center',
          }} />
      </NavegacionStack.Navigator>
    );
  }