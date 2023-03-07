import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/styles/Colors';

interface props {
  name: string;
  id: string;
  type?: string;
  onPress?: any;
  value: string;
  placeholder: string;
  fieldstyle: any;
  onChangeText: any;
  onBlur: any;
  borderColor?: string;
}
export default function InputField({
  name,
  id,
  type,
  onPress,
  value,
  placeholder,
  fieldstyle,
  onChangeText,
  onBlur,
  borderColor = COLORS.GREY
}: props) {
  return (
    <TextInput
      label={name}
      // id={id}
      mode={'outlined'}
      placeholder={placeholder}
      style={fieldstyle}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      theme={{ colors: { primary: borderColor } }}
      autoCapitalize="none"
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: '80%'
  }
});