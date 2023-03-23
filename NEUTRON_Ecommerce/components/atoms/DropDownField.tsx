import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import i18n from 'i18n-js';

interface props {
  value: string;
  placeholder: string;
  fieldstyle: any;
  onChangeText: any;
  data: {
    value: string;
  }[];
}
export default function DropDownField({
  value,
  placeholder,
  fieldstyle,
  onChangeText,
  data
}: //   data
props) {
  return (
    <View style={{ width: '80%' }}>
      <Dropdown
        style={fieldstyle}
        placeholderStyle={styles.placeholderStyle}
        inputSearchStyle={styles.inputSearchStyle}
        search
        maxHeight={300}
        placeholder={placeholder}
        searchPlaceholder={i18n.t('addItemsForm.searchItems')}
        data={data}
        labelField="value"
        valueField="value"
        value={value}
        onChange={(item) => {
          onChangeText(item.value);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16
  },
  textInput: {
    width: '80%'
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 3,
    paddingHorizontal: 8
  },
  icon: {
    marginRight: 5
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14
  },
  placeholderStyle: {
    fontSize: 16
  },
  iconStyle: {
    width: 20,
    height: 20
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16
  }
});
