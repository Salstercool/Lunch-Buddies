import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles'

const Image = (props) => {
    return (
        <View style={styles.mainImage}>
            <ImageBackground 
              source={require('../../assets/Images/people.jpg')}
             style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>Lunch Buddies</Text>
            </View>
            <View style={styles.buttons}>
                <Text>{outputText}</Text>
                <Button title='Login' onPress={() => setOutputText('Login here')}/>
                <Button title='Sign Up' onPress={() => setOutputText('Signup here')}/>
                <Button title='Dashboard' onPress={() => setOutputText('This is dashboard')}/>
                <Button title='Group Finder' onPress={() => setOutputText('This is group finder')}/>
                <Button title='My Group Chats' onPress={() => setOutputText('This is your group chats')}/>
                <Button title='Add Friends' onPress={() => setOutputText('This is where you can add friends')}/>
      

            </View>

        

        </View>
    );


};

export default Image;