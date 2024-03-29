import { Text, View, StyleSheet, KeyboardTypeOptions } from 'react-native';
import { mainStyle } from '../../responsive/GlobalStyle';
import InputField from '../atoms/InputField';
import InputLabel from '../atoms/InputLabel';
import useTransition from 'react';
import i18n from 'i18n-js';
import Paragraph from '../atoms/typographies/Paragraph';
import { COLORS } from '../../theme/styles/Colors';
interface props {
  name: string;
  id: string;
  fieldvalue: string;
  placeholder: string;
  fieldstyle: any;
  onChangeText: any;
  onBlur: any;
  error: any;
  borderColor?: string;
  multiLine?: boolean;
  noOfLines?: number;
  keyBoardType?: KeyboardTypeOptions;
}
export default function FormGroup({
  name,
  id,
  fieldvalue,
  placeholder,
  fieldstyle,
  onChangeText,
  onBlur,
  error,
  borderColor,
  multiLine = false,
  noOfLines = 1,
  keyBoardType = 'default'
}: props) {
  return (
    <>
      <InputField
        value={fieldvalue}
        name={name}
        id={id}
        placeholder={placeholder}
        fieldstyle={fieldstyle}
        onChangeText={onChangeText}
        onBlur={onBlur}
        borderColor={borderColor}
        multiLine={multiLine}
        noOfLines={noOfLines}
        keyBoardType={keyBoardType}
      />
      {error ? (
        <InputLabel value={i18n.t(error)} labelstyle={mainStyle.errorText} />
      ) : (
        <InputLabel value={''} />
      )}
    </>
  );
}


