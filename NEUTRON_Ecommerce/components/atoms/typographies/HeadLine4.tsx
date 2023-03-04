import { Text } from 'react-native-paper';
import useTheme from '../../../theme/hooks/UseTheme';
import { COLORS } from '../../../theme/styles/Colors';
import { TYPOGRAPHY } from '../../../theme/styles/Typography';
import { typographyProps } from '../../../types/TypographyTypes';
export default function HeadLine4({
  value,
  color = COLORS.BLACK
}: typographyProps) {
  return (
    <Text
      style={{
        fontSize: TYPOGRAPHY.FONT_SIZE.M2,
        fontWeight: 'bold',
        color: color
      }}
    >
      {value}
    </Text>
  );
}
