import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RoutesParams } from '../../navigation/RoutesParams';
import styles from './styles';

type AddClientScreenProp = StackNavigationProp<RoutesParams, 'AddClient'>;
type AddClientRouteProp = RouteProp<RoutesParams, 'AddClient'>;

interface AddClientProps {
  navigation: AddClientScreenProp;
  route: AddClientRouteProp;
}

export default function AddClient({ navigation, route }: AddClientProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [loading, setLoading] = useState(false);
  const client = route.params?.client;
  const onSave = route.params?.onSave;

  useEffect(() => {
    if (client) {
      setName(client.name || '');
      setEmail(client.email || '');
      setBirthDate(client.bornDate || '');
    }
  }, [client]);

  const handleSave = async () => {
    if (!name || !email || !birthDate) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(birthDate)) {
      Alert.alert('Erro', 'A data de nascimento deve estar no formato YYYY-MM-DD.');
      return;
    }

    try {
      setLoading(true);

      const url = client
        ? `http://192.168.1.3:4000/clients/${client.id}`
        : `http://192.168.1.3:4000/clients/register`; // Rota correta para adicionar cliente

      const method = client ? 'PUT' : 'POST';
      const body = JSON.stringify({ name, email, bornDate: birthDate });

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro desconhecido');
      }

      const responseData = await response.json();
      Alert.alert(
        'Sucesso',
        client ? 'Cliente atualizado com sucesso!' : 'Cliente adicionado com sucesso!'
      );

      if (typeof onSave === 'function') {
        onSave(responseData);
      }

      navigation.goBack();
    } catch (error) {
      console.error('Erro ao salvar cliente:', error.message);
      Alert.alert('Erro', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{client ? 'Editar Cliente' : 'Adicionar Cliente'}</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Data de nascimento (YYYY-MM-DD)"
        value={birthDate}
        onChangeText={setBirthDate}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.saveButton, loading && { opacity: 0.5 }]}
          onPress={handleSave}
          disabled={loading}
        >
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.cancelButton, loading && { opacity: 0.5 }]}
          onPress={() => navigation.goBack()}
          disabled={loading}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
