import { ActivityIndicator, Button, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();

            await new Promise((resolve) => setTimeout(resolve, 4000));

            setUsers(data);
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
            <View style={{ marginTop: 20 }}>
                <Button title='Reload' onPress={fetchUsers} disabled={loading} />r
            </View>

            {loading ? (
                <ActivityIndicator size='large' color='#00f' style={{ marginTop: 20 }} />
            ) : (
                <FlatList
                    data={users}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.userCard}>
                            <Text style={styles.userName}>{item.name}</Text>
                            <Text>{item.email}</Text>
                        </View>
                    )}
                    style={{ marginTop: 20 }}
                />
            )}
        </View>
    );
};

export default Users;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    userCard: {
        backgroundColor: '#f0f0f0',
        padding: 15,
        marginVertical: 8,
        borderRadius: 8,
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});