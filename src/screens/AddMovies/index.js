
import React from 'react'
import { Text, View, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux'
import { add,afterAdd } from '../../redux/reducers/addMovieSlice'
import styles from './style'
import AddDate from '../AddMovies/components/AddDate';
import AddPoster from './components/AddPoster';
import createAlert from '../../components/Alert';

const AddMovies = () => {

  const state = useSelector(state => state.addMovie)
  const dispatch = useDispatch()

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: '',
      overview: ''
    }
  });

  const onSubmit = data => {
    dispatch(
      add({
        id: Math.random(),
        title: data.title,
        overview: data.overview,
        imagePath: state.imagePath,
        date: state.date
      })
    );
    dispatch(afterAdd());
    createAlert();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.labelText} > title </Text>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: {
            value: /^(?!\s*$).+/,
            message: "please enter valid overview"
          }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.titleInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={"title"}
          />
        )}
        name="title"
      />
      {errors.title && <Text style={styles.redLabel}>This is required.</Text>}
      <Text style={styles.labelText} > overview </Text>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: {
            value: /^(?!\s*$).+/,
            message: "please enter valid overview"
          }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.overViewInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={"overview"}
            multiline={true}
          />
        )}
        name="overview"
      />
      {errors.overview && <Text style={styles.redLabel}>This is required.</Text>}

      <AddDate />
      <AddPoster />


      <Button buttonStyle={{
        backgroundColor: 'rgba(90, 154, 230, 1)',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 30,
        marginTop: 5
      }}
        title="Add"
        onPress={handleSubmit(onSubmit)}
        disabled={state.isLoading}
      />
    </View>
  );
}


export default AddMovies
