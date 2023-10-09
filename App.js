import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

export default function App() {
    return (

            <InputViews/>

    );
};

function InputViews() {
    const [name, setName] = useState('');
    const [displayName, setDisplayName] = useState(' ');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        if (username === 'rav' &&
            password === '12345678') {

            setIsLoggedIn(true);
            setError('');

            setUsername('');
            setPassword('')
        } else {
            setError('Try again');
        }
    };

    const handleLogout = () => {
        if (isLoggedIn == true)
        {
            setIsLoggedIn(false)
        };
    };



    const handleSetUsername = (text) => {
        setUsername(text);
    };

    const handleSetName = (text) => {
        setName(text);
    };

    const handleSetPassword = (text) => {
        setPassword(text);
    };

    const handleDisplayName = () => {
        setDisplayName(name);
    };

    return (
        <View style={styles.container}>



            <View style={[styles.head,  ]}>
                <Text style={{color: 'black', fontSize: 20}}>Your Name: {displayName}</Text>
            </View>
            <View style={[styles.content,  ]}>



                <TextInput
                    style={[styles.input, {marginTop: 10}]}
                    placeholder="Enter your name"
                    onChangeText={handleSetName}
                    value={name}
                />

                <TouchableOpacity style={[styles.button, {marginTop: 10}]}
                                  onPress={handleDisplayName}>
                    <Text style={styles.appButtonText}> Change name </Text>
                </TouchableOpacity>

            </View>

            <View style={[styles.content, {marginTop: 10}]}>

                {error ? <Text style={{color: 'red'}}>{error}</Text> :
                    <Text>{isLoggedIn ? 'user ' : 'enter your data'}</Text>}

                {!isLoggedIn ?

                    <View style={styles.content}>

                        <TextInput
                            style={[styles.input, {marginTop: 15}]}
                            placeholder="Enter username"
                            onChangeText={handleSetUsername}
                            value={username}
                        />
                        <TextInput
                            style={[styles.input, {marginTop: 15}]}
                            placeholder="Enter password"
                            onChangeText={handleSetPassword}
                            value={password}
                            secureTextEntry={true}
                        />

                        <TouchableOpacity style={[styles.button, {marginTop: 10}]}
                                          onPress={handleLogin}>
                            <Text style={styles.appButtonText}>Login</Text>
                        </TouchableOpacity>

                    </View>

                    :

                    <View style={styles.content}>


                        <TouchableOpacity style={[styles.button, {marginTop: 10}]}
                                          onPress={handleLogout}>
                            <Text style={styles.appButtonText}>Log out</Text>
                        </TouchableOpacity>

                    </View>}


            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        width: 250,
        height: 50,
        backgroundColor:
            '#ffffff'
    }
    ,
    button: {
        width: 150,
        height: 50,
        justifyContent:
            "center",
        alignItems:
            "center",
        backgroundColor:
            '#4362fd',
    },
    head: {
        width: "100%",
        height: 30,
        justifyContent:
            "center",
        alignItems:
            "left   ",
        paddingLeft: 30,
        backgroundColor:
            '#ffffff',
    }
    ,
    container: {
        backgroundColor: '#a1d2ff',
        height: '100%'

    }
    ,
    appButtonText: {
        color: 'white',
        fontSize: 17,
    }
    ,
    content: {
        alignItems: 'center',
    }
    ,
})