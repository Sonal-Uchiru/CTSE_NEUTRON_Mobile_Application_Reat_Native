import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  TouchableHighlight,
  Animated,
  TouchableOpacity,
  Text
} from 'react-native';
import React, { useState } from 'react';
import i18n from 'i18n-js';
import { Iphone, VisaImg } from '../../assets/image';
import useThemedStyles from '../../theme/hooks/UseThemedStyles';
import HeadLine3 from '../atoms/typographies/HeadLine3';
import HeadLine4 from '../atoms/typographies/HeadLine4';
import ParagraphBold from '../atoms/typographies/ParagraphBold';
import * as Localization from 'expo-localization';
import useTheme from '../../theme/hooks/UseTheme';
import Paragraph from '../atoms/typographies/Paragraph';
import ModalButton from '../atoms/buttons/ModalButton';
import { Ionicons } from '@expo/vector-icons';
import { horizontalScale } from '../../responsive/Metrics';
import { ItemModel } from '../../types/items/ItemModel';
import CartItemService from '../../api/services/CartService';
import { CurrentCartItem } from '../../types/cart_Items/CurrentCartItem';
import { CreateCartItemData } from '../../types/cart_Items/CreateCartItemData';
import { UpdateCartItemData } from '../../types/cart_Items/UpdateCartItemData';
import { Button } from 'react-native-paper';

export default function AddToCartAnimation() {
  const [buttonScale] = useState(new Animated.Value(1));

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(buttonScale, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(buttonScale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false
      })
    ]).start();
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
        <Button style={{ backgroundColor: 'blue' }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#black' }}>
            Add to Cart
          </Text>
        </Button>
      </Animated.View>
    </TouchableOpacity>
  );
}
