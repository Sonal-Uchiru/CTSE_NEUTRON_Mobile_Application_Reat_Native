import { Text } from 'react-native-paper';
import useTheme from '../../../theme/hooks/UseTheme';
import { COLORS } from '../../../theme/styles/Colors';
import { Button } from 'react-native-paper';
import ParagraphBold from '../typographies/ParagraphBold';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
  withDelay
} from 'react-native-reanimated';
import Ionicons from '@expo/vector-icons/Ionicons';
import useThemedStyles from '../../../theme/hooks/UseThemedStyles';

export interface props {
  value: string;
  doneText: string;
  color?: string;
  textcolor?: string;
  callFunction?: any;
  disabled?: boolean;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  width?: number;
}

export default function AddToCartButton({
  value,
  doneText,
  color = COLORS.BLACK,
  textcolor = COLORS.WHITE,
  callFunction,
  disabled = false,
  marginLeft = 0,
  marginRight = 0,
  marginTop = 0,
  marginBottom = 0,
  width = 110
}: props) {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const offset = useSharedValue(-60);
  const offset2 = useSharedValue(-250);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: offset.value
        }
      ]
    };
  });
  const animatedStyles2 = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: offset2.value
        }
      ]
    };
  });
  function activeAnimation() {
    offset.value = withRepeat(
      withSequence(withTiming(130), withDelay(1500, withTiming(-60))),
      1,
      true
    );

    offset2.value = withRepeat(
      withSequence(withTiming(20), withDelay(1500, withTiming(-250))),
      1,
      true
    );
  }

  return (
    <>
      <Button
        style={{
          width: width,
          backgroundColor: color,
          borderRadius: 6,
          marginLeft: marginLeft,
          marginRight: marginRight,
          marginTop: marginTop,
          marginBottom: marginBottom
        }}
        mode="contained"
        //   onPress={() => callFunction()}
        onPress={() => activeAnimation()}
        disabled={disabled}
      >
        <View style={{ flexDirection: 'row' }}>
          <Animated.Text style={[style.buttonText, animatedStyles2]}>
            {doneText}
          </Animated.Text>
          <Animated.Text style={[style.buttonText, animatedStyles]}>
            {value}
          </Animated.Text>
        </View>
      </Button>
    </>
  );
}

const styles = (theme: {
  COLORS: { ERROR: string; WHITE: string; ACTION: string };
  TYPOGRAPHY: {
    FONT_WEIGHT: any;
    FONT_SIZE: { M1: number; S2: number; L1: number; M2: number; L3: number };
  };
}) =>
  StyleSheet.create({
    icon: {
      fontSize: theme.TYPOGRAPHY.FONT_SIZE.M1,
      color: theme.COLORS.ERROR
    },
    buttonText: {
      color: theme.COLORS.WHITE,
      fontWeight: theme.TYPOGRAPHY.FONT_WEIGHT.bold,
      marginTop: 6
    },
    buttonTextDone: {
      color: theme.COLORS.ACTION,
      fontWeight: theme.TYPOGRAPHY.FONT_WEIGHT.bold,
      marginTop: 6
    }
  });
