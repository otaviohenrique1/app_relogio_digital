import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet,  View } from 'react-native';
import { Appbar, Text, } from 'react-native-paper';

export function HomePage() {
  const [tempo, setTempo] = useState<string>("");
  
  useEffect(() => {
    const atualizarTempo = () => {
      const agora = new Date();
      const horas = agora.getHours().toString().padStart(2, "0");
      const minutos = agora.getMinutes().toString().padStart(2, "0");
      const segundos = agora.getSeconds().toString().padStart(2, "0");
      setTempo(`${horas}:${minutos}:${segundos}`);
    };
    atualizarTempo();
    const intervalId = setInterval(atualizarTempo, 1000);
    return () => clearInterval(intervalId);
  }, [])
  

  return (
    <>
      <Appbar.Header style={{ backgroundColor: "cadetblue" }}>
        <Appbar.Content title="Relógio Digital" />
      </Appbar.Header>
      <View style={styles.container}>
        <Text
          style={{ textAlign: "center", }}
          variant="displayLarge"
        >{tempo}</Text>
        <StatusBar style="light" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
  },
});
