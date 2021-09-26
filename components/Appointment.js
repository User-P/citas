import React from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'

const Appointment = ({ item, deletePatient }) => {

    const notifyDelete = id => {
        console.log('eliminando...', id);
        deletePatient(id);
    };

    return (
        <View style={styles.appointment}>
            <View>
                <Text style={styles.label}>Paciente:</Text>
                <Text style={styles.text}>{item.patient}</Text>
            </View>
            <View>
                <Text style={styles.label}>Propietario:</Text>
                <Text style={styles.text}>{item.owner}</Text>
            </View>
            <View>
                <Text style={styles.label}>Sintomas:</Text>
                <Text style={styles.text}>{item.symptom}</Text>
            </View>

            <View>
                <TouchableHighlight style={styles.btnDelete} onPress={() => notifyDelete(item.id)}>
                    <Text style={styles.textDelete}> Eliminar</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    appointment: {
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
    },
    text: {
        fontSize: 18
    },
    btnDelete: {
        padding: 10,
        backgroundColor: 'red',
        marginVertical: 10,
    },
    textDelete: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }

})
export default Appointment;