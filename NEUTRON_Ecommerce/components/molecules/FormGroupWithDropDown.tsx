import { Text, View, StyleSheet } from 'react-native';
import { mainStyle } from '../../responsive/GlobalStyle';
import InputField from '../atoms/InputField';
import InputLabel from '../atoms/InputLabel';
import useTransition from 'react';
import i18n from 'i18n-js';
import Paragraph from '../atoms/typographies/Paragraph';
import { COLORS } from '../../theme/styles/Colors';
import DropDownField from '../atoms/DropDownField';

interface props {
  fieldvalue: string;
  placeholder: string;
  fieldstyle: any;
  onChangeText: any;
  error: any;
  data: {
    value: string;
  }[];
}
export default function FormGroupWithDropDown({
  fieldvalue,
  placeholder,
  fieldstyle,
  onChangeText,
  error,
  data
}: props) {
  return (
    <>
      <DropDownField
        value={fieldvalue}
        placeholder={placeholder}
        fieldstyle={fieldstyle}
        onChangeText={onChangeText}
        data={data}
      />
      {error ? (
        <InputLabel value={i18n.t(error)} labelstyle={mainStyle.errorText} />
      ) : (
        <InputLabel value={''} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  labelView: {
    alignItems: 'flex-start'
  }
});
