import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Ejercicio4 = () => {
  // Definir el estado "cargando" inicializado en true
  const [cargando, setCargando] = useState(true);

  // useEffect para cambiar el estado después de 3 segundos
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCargando(false); // Cambiar "cargando" a false
    }, 3000); // Tiempo de espera: 3 segundos

    // Limpiar el timeout si el componente se desmonta antes de que termine
    return () => clearTimeout(timeout);
  }, []); // Sin dependencias: se ejecuta solo una vez al montar el componente

  return (
    <View style={styles.container}>
      {/* Mostrar mensaje de carga o bienvenida según el estado */}
      {cargando ? (
        <Text style={styles.texto}>Cargando...</Text>
      ) : (
        <Text style={styles.texto}>Bienvenido a la aplicación</Text>
      )}
    </View>
  );
};

// Estilos del componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 18,
  },
});

export default Ejercicio4;