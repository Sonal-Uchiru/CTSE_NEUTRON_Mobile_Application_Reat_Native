import { Text } from 'react-native-paper';
import useTheme from '../../../theme/hooks/UseTheme';
import { COLORS } from '../../../theme/styles/Colors';
import { TYPOGRAPHY } from '../../../theme/styles/Typography';
import { typographyProps } from '../../../types/TypographyTypes';

export default function Information({
  value,
  color = COLORS.BLACK,
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0
}: typographyProps) {
  return (
    <Text
      style={{
        fontSize: TYPOGRAPHY.FONT_SIZE.S2,
        color: color,
        marginTop: marginTop,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight
      }}
    >
      {value}
    </Text>
  );
}
