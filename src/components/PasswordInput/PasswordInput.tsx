import React, {useState} from 'react';
import {TextInput, TextInputProps} from '../TextInput/TextInput';
import {Icon} from '../Icon/Icon';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;
export function PasswordInput(props: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  function toggleSecurityTextEntry() {
    setIsSecureTextEntry(prev => !prev);
  }
  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...props}
      RightComponent={
        <Icon
          onPress={toggleSecurityTextEntry}
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
          color="gray2"
        />
      }
    />
  );
}
