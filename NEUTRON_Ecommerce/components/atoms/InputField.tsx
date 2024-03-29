import { TextInput } from 'react-native-paper';
import { KeyboardTypeOptions, StyleSheet } from 'react-native';
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
  multiLine?: boolean;
  noOfLines?: number;
  keyBoardType?: KeyboardTypeOptions;
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
  borderColor = COLORS.GREY,
  multiLine = false,
  noOfLines = 1,
  keyBoardType = 'default'
}: props) {
  return (
    <TextInput
      label={name}
      // id={id}
      mode={'outlined'}
      keyboardType={keyBoardType!}
      placeholder={placeholder}
      style={fieldstyle}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      theme={{ colors: { primary: borderColor } }}
      autoCapitalize="none"
      multiline={multiLine}
      numberOfLines={noOfLines}
    />
  );
}

