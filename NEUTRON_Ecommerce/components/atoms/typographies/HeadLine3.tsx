import { Text } from 'react-native-paper';
import useTheme from '../../../theme/hooks/UseTheme';
import { COLORS } from '../../../theme/styles/Colors';
import { TYPOGRAPHY } from '../../../theme/styles/Typography';
import { typographyProps } from '../../../types/TypographyTypes';

export default function HeadLine3({
  value,
  marginLeft,
  color = COLORS.BLACK,
  marginTop=0,
  marginBottom= 0
}: typographyProps) {
  return (
    <Text
      style={{
        fontSize: TYPOGRAPHY.FONT_SIZE.M1,
        fontWeight: 'bold',
        color: color,
        marginLeft: marginLeft,
        marginTop: marginTop,
        marginBottom: marginBottom,
      }}
    >
      {value}
    </Text>
  );
}
