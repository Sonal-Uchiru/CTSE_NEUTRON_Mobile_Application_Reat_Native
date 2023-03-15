import { StyleSheet, SafeAreaView, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import i18n from 'i18n-js';
import useTheme from '../theme/hooks/UseTheme';
import useThemedStyles from '../theme/hooks/UseThemedStyles';
import HeadLine3 from '../components/atoms/typographies/HeadLine3';
import Paragraph from '../components/atoms/typographies/Paragraph';
import CreditCard from '../components/molecules/CreditCard';
import ModalButton from '../components/atoms/buttons/ModalButton';
import FormGroupWithIcon from '../components/molecules/FormGroupWithIcon';
import CartCard from '../components/molecules/CartCard';
import { Iphone } from '../assets/image';
import HeadLine4 from '../components/atoms/typographies/HeadLine4';
import ViewItemCard from '../components/molecules/ViewItemCard';
import { horizontalScale } from '../responsive/Metrics';
import AdminViewItemCard from '../components/molecules/AdminViewItemCard';
import ItemService from '../api/services/ItemService';
import { ItemModel } from '../types/items/ItemModel';
import ErrorSnackbar from '../hooks/snackbar/ErrorSnackbar';

export default function AdminViewItemScreen() {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const array = [1, 2, 3, 4, 5];
  let itemPrice = 420000;
  const [searchText, setSearchText] = useState('');
  const [isDataChanged, setIsDataChanged] = useState<boolean>(false);
  const [items, setItems] = useState<ItemModel[]>([]);
  const [copyItems, setCopyItems] = useState<ItemModel[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const resItems = await ItemService.getItemListAsync();

        if (resItems.length > 0) {
          setItems(resItems);
          setCopyItems(resItems);
        }
        setError(false);

      } catch (error) {
        setError(true);
        console.log(error)
      }
    })();
  }, [isDataChanged]);

  const searchItems = (input: any) => {
    if (input.length == 1) return setItems(copyItems);

    if (input.length > 3) {
      const content: ItemModel[] = copyItems.filter((i) =>
        i.itemName.toLowerCase().includes(input.toLowerCase())
      );
      setItems(content);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.headerStyle}>
        <HeadLine3
          value={i18n.t('viewItemPage.title')}
          color={theme.COLORS.PRIMARY}
        />
        <Paragraph
          value={i18n.t('viewItemPage.subTitle')}
          color={theme.COLORS.PRIMARY}
        />
      </View>
      <View>
        <FormGroupWithIcon
          name={i18n.t('viewItemPage.searchLabel')}
          id={'search'}
          fieldvalue={searchText}
          placeholder={i18n.t('viewItemPage.searchPlaceHolder')}
          fieldstyle={style.textInput}
          onChangeText={(input:string) =>{
            setSearchText(input);
            searchItems(input);
            }}
          error={undefined}
          iconFirst={'magnify'}
          iconSecond={'magnify'}
          callFunction={undefined}
        />
      </View>
      <ScrollView>
        {items.length > 0 &&
          items.map((item, index) => {
            return (
              <AdminViewItemCard
                key={index}
                brand={item.brand}
                itemName={item.itemName}
                skuNumber={item.stockKeepingUnits}
                description={item.description}
                price={item.unitPrice}
                image={item.imageUrl ?? null}
              />
            );
          })}
      </ScrollView>
      <ErrorSnackbar
        text={'Something went wrong!'}
        iconName={'error'}
        isVisible={error}
        dismissFunc={() => {}}
      />
    </SafeAreaView>
  );
}

const styles = (theme: {
  COLORS: {
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

    headerStyle: {
      alignSelf: 'flex-start',
      marginStart: 20,
      marginTop: 10
    },
    textInput: {
      width: horizontalScale(300),
      marginTop: 20,
      backgroundColor: theme.COLORS.WHITE
    },

    column: { flexDirection: 'column' },
    row: {
      flexDirection: 'row',
      alignSelf: 'flex-start',
      marginTop: 20,
      marginBottom: 20
    }
  });
