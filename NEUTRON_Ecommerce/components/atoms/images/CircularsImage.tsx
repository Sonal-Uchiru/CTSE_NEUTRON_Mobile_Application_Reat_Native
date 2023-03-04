import { StyleSheet, Image } from 'react-native';
interface props {
  width: number;
  height: number;
  uri: any;
  marginTop?: number;
  marginBottom?: number;
}
export default function CircularsImage({
  width,
  height,
  uri,
  marginBottom,
  marginTop
}: props) {
  return (
    <Image
      source={uri}
      style={{
        width: width,
        height: height,
        borderRadius: 400 / 2,
        marginBottom: marginBottom,
        marginTop: marginTop
      }}
    />
  );
}
