import React from 'react'
import ValidationComponent from 'react-native-form-validator'
import {StyleSheet, View, Text, TextInput, input, Button} from 'react-native'


export default class ResumeForm extends ValidationComponent {
    state = {
        name: '',
        nickname: '',
        age: '',
        skill: '',
    }

    _OnSubmit = () => {
        this.validate({
            name: { required: true},
            nickname: { required: true},
            age: { required: true, numbers: true},
            skill: { required: true},
        })
    }

    render () {
        return(
        <View style={styles.container}>
            <View>
                <Text style={styles.getErrorMessages}>
                    {this.getErrorMessages()}
                </Text>
            </View>
            <View>
                <Text>Full name</Text>
                    <TextInput 
                    style={styles.textInput}
                    onChangeText = {(text) => this.setState({ name : text })}
                    value={this.state.name}
                />
            </View>

            <View style={{ marginTop: 20}}>
                <Text>Nickname</Text>
                    <TextInput 
                    style={styles.textInput}
                    onChangeText = {(text) => this.setState({ nickname : text })}
                    value={this.state.nickname}
                />
            </View>

            <View style={{ marginTop: 20}}>
                <Text>Age</Text>
                    <TextInput 
                    style={styles.textInput}
                    onChangeText = {(text) => this.setState({ age : text })}
                    value={this.state.age}
                />
            </View>

            <View style={{ marginTop: 20}}>
                <Text>Skill</Text>
                    <TextInput 
                    style={styles.textAreaInput}
                    onChangeText = {(text) => this.setState({ skill : text })}
                    value={this.state.skill}
                    multiline={true}
                />
            </View>

            <View style={{ marginTop: 20}}>
                <Button title='Create Resume' onPress={this._OnSubmit} ></Button>
            </View>

        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        minHeight: '100%',
        padding : 30,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    },
    textAreaInput: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
    },
    getErrorMessages: {
        color: 'red',
        marginBottom: 20,
    },

});