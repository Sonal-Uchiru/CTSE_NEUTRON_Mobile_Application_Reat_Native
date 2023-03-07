import { Text } from 'react-native-paper';
import useTheme from '../../../theme/hooks/UseTheme';
import { COLORS } from '../../../theme/styles/Colors';
import { TYPOGRAPHY } from '../../../theme/styles/Typography';
import { typographyProps } from '../../../types/TypographyTypes';

export default function Paragraph({
  value,
  color = COLORS.BLACK,
  marginTop = 0
}: typographyProps) {
  return (
    <Text
      style={{
        fontSize: TYPOGRAPHY.FONT_SIZE.S1,
        color: color,
        marginTop: marginTop
      }}
    >
      {value}
    </Text>
  );
}
