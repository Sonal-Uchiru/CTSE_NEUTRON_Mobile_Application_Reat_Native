import { Text, View, StyleSheet } from 'react-native';
import { mainStyle } from '../../responsive/GlobalStyle';
import InputField from '../atoms/InputField';
import InputLabel from '../atoms/InputLabel';
import useTransition from 'react';
import i18n from 'i18n-js';
import Paragraph from '../atoms/typographies/Paragraph';
import InputFieldWithIcon from '../atoms/InputFieldWithIcon';

interface props {
  name: string;
  id: string;
  fieldvalue: string;
  placeholder: string;
  fieldstyle: any;
  onChangeText: any;
  onBlur?: any;
  error: any;
  iconFirst: string;
  iconSecond: string;
  hiddenStatus?: boolean;
  callFunction?: any;
  borderColor?: string;
}
export default function FormGroupWithIcon({
  name,
  id,
  fieldvalue,
  placeholder,
  fieldstyle,
  onChangeText,
  onBlur,
  error,
  iconFirst,
  iconSecond,
  hiddenStatus = false,
  callFunction,
  borderColor
}: props) {
  return (
    <>
      <InputFieldWithIcon
        value={fieldvalue}
        name={name}
        id={id}
        placeholder={placeholder}
        fieldstyle={fieldstyle}
        onChangeText={onChangeText}
        onBlur={onBlur}
        iconFirst={iconFirst}
        iconSecond={iconSecond}
        hiddenStatus={hiddenStatus}
        callFunction={callFunction}
        borderColor={borderColor}
      />
      {error && (
        <InputLabel value={i18n.t(error)} labelstyle={mainStyle.errorText} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  labelView: {
    alignItems: 'flex-start'
  }

});
