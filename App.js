
import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import Appointment from './components/Appointment'
import Form from './components/form';
const App = () => {
  const [showForm, setShowForm] = useState(false)

  const [appointments
    , setAppointments
  ] = useState([]);

  const deletePatient = id => {
    setAppointments((currentAppointments) => {
      return currentAppointments.filter(appointment => appointment.id !== id)
    })
  }

  const show = () => {
    setShowForm(!showForm);
  }
  const hideKeyboard = () => {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard()}>
      <View style={styles.content}>
        <Text style={styles.title}> Administrador de citas</Text>
        <View>
          <TouchableHighlight style={styles.btnShowForm} onPress={() => show()}>
            <Text style={styles.textShowForm}> {showForm ? 'Cancelar' : ' Crear nueva Cita'}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.div}>
          {showForm ? (
            <>
              <Text style={styles.title}>Crear Nueva Cita</Text>
              <Form appointments={appointments}
                setAppointments={setAppointments}
                setShowForm={setShowForm}
              />
            </>
          ) : (
            <>
              <Text style={styles.title}>{appointments.length > 0 ? 'Administra tus citas' : " No hay citas, agrega una"}</Text>
              <FlatList
                style={styles.list}
                data={appointments}
                renderItem={({ item }) => <Appointment item={item}
                  deletePatient={deletePatient}
                />}
                keyExtractor={appointment => appointment.id}
              />
            </>
          )}

        </View>
      </View>
    </TouchableWithoutFeedback>

  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#AA076B',
    flex: 1
  },
  title: {
    textAlign: 'center',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  div: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  list: {
    flex: 1
  },
  btnShowForm: {
    padding: 10,
    backgroundColor: '#7d024e',
    marginVertical: 10,
  },
  textShowForm: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default App;
