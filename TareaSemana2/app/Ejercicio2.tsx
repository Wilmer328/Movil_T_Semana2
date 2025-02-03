import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Ejercicio2 = () => {
  // Definir el estado "contador" inicializado en 0
  const [contador, setContador] = useState(0);

  // useEffect para ejecutar código cada vez que el contador cambie
  useEffect(() => {
    console.log(`El contador cambió a: ${contador}`); // Mensaje en consola
    if (contador % 5 === 0 && contador !== 0) { // Verificar si es múltiplo de 5
      alert(`Ha alcanzado un múltiplo de 5: ${contador}`);
    }
  }, [contador]); // Dependencia: se ejecuta cuando "contador" cambia

  return (
    <View style={styles.container}>
      {/* Mostrar el valor actual del contador */}
      <Text style={styles.texto}>Contador: {contador}</Text>
      {/* Botón para incrementar el contador */}
      <Button title="Incrementar" onPress={() => setContador(contador + 1)} />
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
    marginBottom: 20,
  },
});

export default Ejercicio2;