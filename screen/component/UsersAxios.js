import { StyleSheet, Text, View, Button, ActivityIndicator, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersAxios = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');

            await new Promise(resolve => setTimeout(resolve, 3000));
            setUsers(response.data);
        } catch (error) {
            console.error('Data retrieval error:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <View style={styles.container}>
            <Button
                title={loading ? "Loading..." : "Reload"}
                onPress={fetchUsers}
                disabled={loading}
            />

            {loading ? (
                <ActivityIndicator size="large" color="blue" style={{ marginTop: 20 }} />
            ) : (
                <FlatList
                    data={users}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text>{item.email}</Text>
                        </View>
                    )}
                    style={{ marginTop: 20 }}
                />
            )}
        </View>
    );
};

export default UsersAxios;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#f2f2f2',
        padding: 15,
        marginVertical: 8,
        borderRadius: 10,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});