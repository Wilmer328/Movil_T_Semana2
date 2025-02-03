import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Ejercicio3 = () => {
  // Definir el estado "hora" para almacenar la hora actual
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  // useEffect para actualizar la hora cada segundo
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString()); // Actualizar la hora
    }, 1000); // Intervalo de 1 segundo

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalo);
  }, []); // Sin dependencias: se ejecuta solo una vez al montar el componente

  return (
    <View style={styles.container}>
      {/* Mostrar la hora actual */}
      <Text style={styles.texto}>Hora actual: {hora}</Text>
    </View>
  );
};

// Estilos del componente
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  texto: {
    fontSize: 18,
  },
});

export default Ejercicio3;
