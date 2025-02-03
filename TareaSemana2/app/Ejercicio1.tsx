import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Ejercicio1 = () => {
  // Estado para almacenar el nombre y la edad del usuario
  const [usuario, setUsuario] = useState({ nombre: '', edad: '' });

  // Función para actualizar el nombre en el estado
  const handleNombreChange = (text: any) => {
    setUsuario({ ...usuario, nombre: text }); // Actualiza solo el nombre
  };

  // Función para actualizar la edad en el estado, validando que solo sean números
  const handleEdadChange = (text: string) => {
    if (/^\d*$/.test(text)) { // Expresión regular para validar números
      setUsuario({ ...usuario, edad: text }); // Actualiza solo la edad
    }
  };

  return (
    <View style={styles.container}>
      {/* Input para el nombre */}
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={usuario.nombre}
        onChangeText={handleNombreChange} // Llama a handleNombreChange cuando el texto cambia
      />
      {/* Input para la edad */}
      <TextInput
        style={styles.input}
        placeholder="Edad"
        value={usuario.edad}
        onChangeText={handleEdadChange} // Llama a handleEdadChange cuando el texto cambia
        keyboardType="numeric" // Teclado numérico
      />
      {/* Mostrar mensaje solo si nombre y edad no están vacíos */}
      {usuario.nombre && usuario.edad ? (
        <Text style={styles.mensaje}>
          Hola, {usuario.nombre}. Tienes {usuario.edad} años.
        </Text>
      ) : null}
    </View>
  );
};

// Estilos del componente
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  mensaje: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default Ejercicio1;
