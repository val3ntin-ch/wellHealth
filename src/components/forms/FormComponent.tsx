import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {TextInput, Button, View} from 'react-native';
import styled from 'styled-components/native'; // if We go with styled-components, ussualy i will go and recommend to use styled from react native

// Example of a form component using react-hook-form
type FormInputs = {
  email: string;
  password: string;
};

const StyledInput = styled(TextInput)`
  border: 1px solid #ccc;
  padding: 8px;
  margin: 8px 0;
`;

const FormComponent: React.FC = () => {
  const {control, handleSubmit, errors} = useForm<FormInputs>();
  const onSubmit = (data: FormInputs) => console.log(data);

  return (
    <View>
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <StyledInput
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Email"
          />
        )}
        name="email"
        rules={{required: 'This is required'}}
        defaultValue=""
      />
      {errors.email && <StyledInput>{errors.email.message}</StyledInput>}

      {/* Similar setup for password field, and other fields as needed */}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default FormComponent;
