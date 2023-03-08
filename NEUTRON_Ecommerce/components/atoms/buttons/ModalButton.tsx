import { Text } from 'react-native-paper';
import useTheme from '../../../theme/hooks/UseTheme';
import { COLORS } from '../../../theme/styles/Colors';
import { Button } from 'react-native-paper';
import ParagraphBold from '../typographies/ParagraphBold';

export interface props {
  value: string;
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

export default function ModalButton({
  value,
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
  return (
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
      onPress={() => callFunction()}
      disabled={disabled}
    >
      <ParagraphBold value={value} color={textcolor} />
    </Button>
  );
}
