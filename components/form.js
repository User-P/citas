import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, TouchableHighlight, Alert, ScrollView } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from 'shortid';
const Form = ({ appointments, setAppointments, setShowForm }) => {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [patient, setPatient] = useState('')
    const [phone, setPhone] = useState('')
    const [owner, setOwner] = useState('')
    const [symptom, setSymptom] = useState('')

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const ConfirmDate = (date) => {
        const opt = { year: 'numeric', month: 'long', day: '2-digit' };
        setDate(date.toLocaleDateString('es-ES', opt));
        hideDatePicker();
    };

    const ConfirmTime = (time) => {
        const opt = { hour: 'numeric', minute: '2-digit' };
        setTime(time.toLocaleString('en-US', opt));
        hideTimePicker();
    };

    const addAppointment = () => {
        if (patient.trim() === '' || owner.trim() === '' || phone.trim() === '' || symptom.trim() === '' || date.trim() === '', time.trim() === '') {
            showAlert()
            return;
        }
        
        const appointment = { patient, owner, phone, symptom, date, time }
        appointment.id = shortid.generate()
        console.log(appointment)
        const appointmentsCurrent = [...appointments, appointment]
        setAppointments(appointmentsCurrent)
        setShowForm(false)

    }

    const showAlert = () => {
        Alert.alert(
            'Error',
            'Todos los campos son obligatorios',
            [{
                text: 'OK'
            }]
        )
    }

    return (
        <>
            <ScrollView style={styles.form}>
                <View>
                    <Text style={styles.label}>Paciente:</Text>
                    <TextInput style={styles.input}
                        onChangeText={text => setPatient(text)}
                    />
                </View>

                <View>
                    <Text style={styles.label}>Dueño:</Text>
                    <TextInput style={styles.input}
                        onChangeText={text => setOwner(text)}
                    />
                </View>

                <View>
                    <Text style={styles.label}>Contacto:</Text>
                    <TextInput style={styles.input}
                        onChangeText={text => setPhone(text)}
                        keyboardType='phone-pad'
                    />
                </View>

                <View>
                    <Text style={styles.label}>Fecha:</Text>
                    <Button title="Seleccionar Fecha" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={ConfirmDate}
                        onCancel={hideDatePicker}
                    />
                    <Text>{date}</Text>
                </View>

                <View>
                    <Text style={styles.label}>Hora:</Text>
                    <Button title="Seleccionar hora" onPress={showTimePicker} />
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={ConfirmTime}
                        onCancel={hideTimePicker}
                    />
                    <Text>{time}</Text>
                </View>

                <View>
                    <Text style={styles.label}>Sintomas:</Text>
                    <TextInput style={styles.input}
                        multiline
                        onChangeText={text => setSymptom(text)}
                    />
                </View>

                <View>
                    <TouchableHighlight style={styles.btnSubmit} onPress={() => addAppointment()}>
                        <Text style={styles.textSubmit}> Agregar</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    form: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: '2.5%'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid',
        color: '#000000'
    },
    btnSubmit: {
        padding: 10,
        backgroundColor: 'green',
        marginVertical: 10,
    },
    textSubmit: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }

})


export default Form;