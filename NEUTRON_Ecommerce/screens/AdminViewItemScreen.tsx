import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import React, { useEffect, useState } from 'react';
import i18n from 'i18n-js';
import useTheme from '../theme/hooks/UseTheme';
import useThemedStyles from '../theme/hooks/UseThemedStyles';
import HeadLine3 from '../components/atoms/typographies/HeadLine3';
import Paragraph from '../components/atoms/typographies/Paragraph';
import ModalButton from '../components/atoms/buttons/ModalButton';
import FormGroupWithIcon from '../components/molecules/FormGroupWithIcon';
import { horizontalScale } from '../responsive/Metrics';
import AdminViewItemCard from '../components/molecules/AdminViewItemCard';
import ItemService from '../api/services/ItemService';
import { ItemModel } from '../types/items/ItemModel';
import ErrorSnackbar from '../hooks/snackbar/ErrorSnackbar';
import ManageItems from './ManageItems';
import { useIsFocused, useNavigation } from '@react-navigation/native';

export default function AdminViewItemScreen() {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const [searchText, setSearchText] = useState('');
  const [isDataChanged, setIsDataChanged] = useState<boolean>(false);
  const [items, setItems] = useState<ItemModel[]>([]);
  const [copyItems, setCopyItems] = useState<ItemModel[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [itemDocId, setItemDocId] = useState<string | null>(null);
  const navigation = useNavigation();

  const isFocused = useIsFocused();

  useEffect(() => {
    loadItemsAsnc();
  }, [isFocused, isDataChanged]);

  const loadItemsAsnc = async () => {
    setItemDocId(null);

    try {
      setLoading(true);
      const resItems = await ItemService.getItemListAsync();

      if (resItems.length > 0) {
        setItems(resItems);
        setCopyItems(resItems);
      } else {
        setItems([]);
        setCopyItems([]);
      }
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

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
    <>
      {isEditing ? (
        <ManageItems
          docId={itemDocId}
          onCancel={() => {
            setIsDataChanged(!isDataChanged);
            setIsEditing(false);
          }}
        />
      ) : (
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
              onChangeText={(input: string) => {
                setSearchText(input);
                searchItems(input);
              }}
              error={undefined}
              iconFirst={'magnify'}
              iconSecond={'magnify'}
              callFunction={undefined}
            />
          </View>
          <View>
            <ModalButton
              value={i18n.t('viewItemPage.addBtn')}
              color={theme.COLORS.PRIMARY}
              marginTop={10}
              marginLeft={5}
              width={160}
              callFunction={() => {
                setItemDocId(null);
                setIsEditing(true);
              }}
            />
          </View>
          {loading ? (
            <View style={style.loading}>
              <ActivityIndicator size="large" />
            </View>
          ) : (
            <ScrollView>
              {items.length > 0 &&
                items.map((item, index) => {
                  return (
                    <AdminViewItemCard
                      docId={item.docId}
                      key={index}
                      brand={item.brand}
                      itemName={item.itemName}
                      skuNumber={item.stockKeepingUnits}
                      description={item.description}
                      price={item.unitPrice}
                      image={item.imageUrl}
                      onRemove={() => setIsDataChanged(!isDataChanged)}
                      onEdit={(id) => {
                        setItemDocId(id);
                        setIsEditing(true);
                      }}
                    />
                  );
                })}
            </ScrollView>
          )}
          <ErrorSnackbar
            text={'Something went wrong!'}
            iconName={'error'}
            isVisible={error}
            dismissFunc={() => {}}
          />
        </SafeAreaView>
      )}
    </>
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
      alignItems: 'center',
      marginBottom: 10
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
    loading: {
      marginTop: 20
    },

    column: { flexDirection: 'column' },
    row: {
      flexDirection: 'row',
      alignSelf: 'flex-start',
      marginTop: 20,
      marginBottom: 20
    }
  });
