import { StyleSheet, SafeAreaView, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import i18n from 'i18n-js';
import useTheme from '../theme/hooks/UseTheme';
import useThemedStyles from '../theme/hooks/UseThemedStyles';
import HeadLine3 from '../components/atoms/typographies/HeadLine3';
import Paragraph from '../components/atoms/typographies/Paragraph';
import FormGroupWithIcon from '../components/molecules/FormGroupWithIcon';
import ViewItemCard from '../components/molecules/ViewItemCard';
import { horizontalScale } from '../responsive/Metrics';
import ItemService from '../api/services/ItemService';
import { ItemModel } from '../types/items/ItemModel';
import * as Location from 'expo-location';
import { GetDistance } from '../utils/expo/GetDistance';
import { Coordinations } from '../types/items/Coordinations';
import { expoGetCurrentPositionAsync } from '../utils/expo/GeoLocation';
import AppHeader from '../Navigation/appbar/Appbar';
import { useIsFocused } from '@react-navigation/native';

export default function ViewItemScreen() {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const [searchText, setSearchText] = useState('');
  const [items, setItems] = useState<ItemModel[]>([]);
  const [copyItems, setCopyItems] = useState<ItemModel[]>([]);
  const [error, setError] = useState<boolean>(false);
  const isFoucused = useIsFocused();

  useEffect(() => {
    (async () => {
      try {
        setError(false);
        const resItems = await ItemService.getItemListAsync();

        if (true) {
          const userCurrentLocation: Location.LocationObject =
            await expoGetCurrentPositionAsync();
          const nearbyItems: ItemModel[] = filterItemsByDistance(
            userCurrentLocation,
            resItems
          );
          setItems(nearbyItems);
          setCopyItems(nearbyItems);
        }
      } catch (error: any) {
        setError(true);
      }
    })();
  }, [isFoucused]);

  const searchItems = (input: any) => {
    if (input.length == 1) return setItems(copyItems);

    if (input.length > 3) {
      const content: ItemModel[] = copyItems.filter((i) =>
        i.itemName.toLowerCase().includes(input.toLowerCase())
      );
      setItems(content);
    }
  };

  const filterItemsByDistance = (
    userCurrentLocation: Location.LocationObject,
    items: ItemModel[]
  ): ItemModel[] => {
    const filteredItems: ItemModel[] = items.filter((i) => {
      const distance: number = GetDistance(
        new Coordinations(
          userCurrentLocation.coords.latitude,
          userCurrentLocation.coords.longitude
        ),
        new Coordinations(i.latitude, i.longitude)
      );

      if (distance <= 10000000) {
        return true;
      }
      return false;
    });
    return filteredItems;
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
          onChangeText={(input: React.SetStateAction<string>) => {
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
            return <ViewItemCard item={item} key={index} />;
          })}
      </ScrollView>
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
