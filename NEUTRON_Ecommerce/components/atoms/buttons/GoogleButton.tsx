import { Text } from 'react-native-paper';
import useTheme from '../../../theme/hooks/UseTheme';
import { COLORS } from '../../../theme/styles/Colors';
import { Button } from 'react-native-paper';
import ParagraphBold from '../typographies/ParagraphBold';
import { StyleSheet, View, Image } from 'react-native';
import CircularsImage from '../images/CircularsImage';
import { GoogleLogo, Padlock } from '../../../assets/image';

export interface props {
  value: string;
  color?: string;
  textcolor?: string;
  callFunction?: any;
  disabled?: boolean;
}

export default function GoogleButton({
  value,
  color = COLORS.BLACK,
  textcolor = COLORS.WHITE,
  callFunction,
  disabled = false
}: props) {
  return (
    <Button
      style={styles.buttonStyles}
      mode="elevated"
      onPress={() => callFunction()}
      disabled={disabled}
    >
      <View style={styles.textView}>
        <Image
          source={GoogleLogo}
          style={{
            width: 25,
            height: 25,
            marginRight: 20,
            alignContent: 'flex-start'
          }}
        />

        <ParagraphBold value={'Continue With Google'} color={COLORS.BLACK} />
      </View>
    </Button>
  );
}

const styles = StyleSheet.create({
  buttonStyles: {
    width: 270,
    backgroundColor: COLORS.WHITE,
    borderRadius: 6
  },
  textView: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
