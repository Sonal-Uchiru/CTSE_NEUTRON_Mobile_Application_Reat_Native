import { Text } from 'react-native-paper';
import useTheme from '../../../theme/hooks/UseTheme';
import { COLORS } from '../../../theme/styles/Colors';
import { TYPOGRAPHY } from '../../../theme/styles/Typography';
import { typographyProps } from '../../../types/TypographyTypes';

export default function HeadLine2({
  value,
  color = COLORS.BLACK,
  marginLeft = 0,
  marginTop = 0
}: typographyProps) {
  return (
    <Text
      style={{
        fontSize: TYPOGRAPHY.FONT_SIZE.L3,
        fontWeight: 'bold',
        color: color,
        marginLeft: marginLeft,
        marginTop: marginTop
      }}
    >
      {value}
    </Text>
  );
}
