import { Text } from 'react-native-paper';
import useTheme from '../../../theme/hooks/UseTheme';
import { COLORS } from '../../../theme/styles/Colors';
import { TYPOGRAPHY } from '../../../theme/styles/Typography';
import { typographyProps } from '../../../types/TypographyTypes';

export default function ParagraphBold({
  value,
  color = COLORS.BLACK,
  textCenter = false,
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0
}: typographyProps) {
  return (
    <Text
      style={{
        fontSize: TYPOGRAPHY.FONT_SIZE.S1,
        color: color,
        fontWeight: 'bold',
        textAlign: textCenter ? 'center' : 'auto',
        marginTop: marginTop,
        marginLeft: marginLeft,
        marginBottom: marginBottom
      }}
    >
      {value}
    </Text>
  );
}
