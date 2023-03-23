import { StyleSheet, SafeAreaView, View } from 'react-native';
import React from 'react';
import i18n from 'i18n-js';
import useTheme from '../theme/hooks/UseTheme';
import useThemedStyles from '../theme/hooks/UseThemedStyles';
import HeadLine3 from '../components/atoms/typographies/HeadLine3';
import Paragraph from '../components/atoms/typographies/Paragraph';
import AddItemsForm from '../components/organisms/forms/items/addItems/AddItems';

interface Props {
  docId: string | null;
  onCancel(): void;
}

export default function ManageItems({ docId, onCancel }: Props) {
  const theme = useTheme();
  const style = useThemedStyles(styles);

  return (
    <SafeAreaView style={style.container}>
      <View style={style.headerStyle}>
        <HeadLine3
          value={docId ? 'Edit Item' : 'Add Item'}
          color={theme.COLORS.PRIMARY}
        />
        <Paragraph
          value={i18n.t('addItemsForm.subTitle')}
          color={theme.COLORS.BLACK}
        />
      </View>

      <AddItemsForm docId={docId} onCancel={onCancel} />
    </SafeAreaView>
  );
}

const styles = (theme: {
  TYPOGRAPHY: any;
  COLORS: {
    WARNING: string;
    WHITE: string;
    PRIMARY: string;
  };
}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.COLORS.WHITE,
      alignItems: 'center'
      //   paddingStart: 20
    },
    cardStyle: {
      flexDirection: 'row',
      width: 380,
      borderWidth: 2,
      borderRadius: 5,
      padding: 10,
      borderColor: theme.COLORS.PRIMARY,
      backgroundColor: theme.COLORS.WHITE,
      marginTop: 40
    },
    headerStyle: {
      alignSelf: 'flex-start',
      marginStart: 20,
      marginBottom: 20
    },
    textInput: {
      width: '80%',
      marginTop: 25,
      backgroundColor: theme.COLORS.WHITE
    }
  });
