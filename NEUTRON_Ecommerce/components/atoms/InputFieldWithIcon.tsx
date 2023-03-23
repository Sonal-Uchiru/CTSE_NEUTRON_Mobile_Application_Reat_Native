import { TextInput } from 'react-native-paper';
import { StyleSheet, Text } from 'react-native';
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
  iconFirst: string;
  iconSecond: string;
  hiddenStatus: boolean;
  callFunction: any;
  borderColor?: string;
}
export default function InputFieldWithIcon({
  name,
  id,
  type,
  onPress,
  value,
  placeholder,
  fieldstyle,
  onChangeText,
  onBlur,
  iconFirst,
  iconSecond,
  hiddenStatus,
  callFunction,
  borderColor = COLORS.GREY
}: props) {
  return (
    <TextInput
      label={name}
      mode={'outlined'}
      placeholder={placeholder}
      style={fieldstyle}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      autoCapitalize='none'
      secureTextEntry = {hiddenStatus}
      theme={{ colors: { primary: borderColor} }}
      right={
        <TextInput.Icon
          icon={hiddenStatus ? iconFirst : iconSecond}
          iconColor={COLORS.PRIMARY}
          onPress={callFunction}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: '80%'
  }
});
