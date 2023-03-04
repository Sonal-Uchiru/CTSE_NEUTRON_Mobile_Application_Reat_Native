import { Text } from 'react-native';

interface props {
  value: string;
  labelstyle?: any;
}
export default function InputLabel({ value, labelstyle }: props) {
  return <Text style={labelstyle}>{value}</Text>;
}
