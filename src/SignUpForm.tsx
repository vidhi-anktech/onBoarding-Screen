import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const UserForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        secondaryEmail: '',
        phoneNumber: '',
        instagramId: '',
        tiktokId: '',
    });

    const handleChange = (name: string, value: any) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        // Handle form submission
        console.log(formData);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="First Name"
                value={formData.firstName}
                onChangeText={(value) => handleChange('firstName', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={formData.lastName}
                onChangeText={(value) => handleChange('lastName', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={formData.email}
                onChangeText={(value) => handleChange('email', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={formData.password}
                secureTextEntry={true}
                onChangeText={(value) => handleChange('password', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Secondary Email (Add Staff or PA mail)"
                value={formData.secondaryEmail}
                onChangeText={(value) => handleChange('secondaryEmail', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChangeText={(value) => handleChange('phoneNumber', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Instagram ID"
                value={formData.instagramId}
                onChangeText={(value) => handleChange('instagramId', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="TikTok ID"
                value={formData.tiktokId}
                onChangeText={(value) => handleChange('tiktokId', value)}
            />
            <Button title="Continue" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
    },
});

export default UserForm;
