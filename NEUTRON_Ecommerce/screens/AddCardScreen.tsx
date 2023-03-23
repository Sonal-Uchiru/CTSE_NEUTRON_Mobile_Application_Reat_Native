import {
    StyleSheet,
    SafeAreaView,
    View,
    ScrollView,
    Text,
    Image
} from 'react-native';
import React from 'react';
import i18n from 'i18n-js';
import useTheme from '../theme/hooks/UseTheme';
import useThemedStyles from '../theme/hooks/UseThemedStyles';
import HeadLine3 from '../components/atoms/typographies/HeadLine3';
import Paragraph from '../components/atoms/typographies/Paragraph';
import {
    CreditCardBack,
    CreditCardFront,
    Iphone,
    NeutronLogo
} from '../assets/image';
import { horizontalScale, verticalScale } from '../responsive/Metrics';
import AddCardForm from '../components/organisms/forms/cards/addCard/AddCardForm';
import FlipCard from 'react-native-flip-card';

export default function AddCardScreen() {
    const theme = useTheme();
    const style = useThemedStyles(styles);


    return (
        <SafeAreaView style={style.container}>
            <View style={style.headerStyle}>
                <HeadLine3
                    value={i18n.t('addCardPage.title')}
                    color={theme.COLORS.PRIMARY}
                />
                <Paragraph
                    value={i18n.t('addCardPage.subTitle')}
                    color={theme.COLORS.PRIMARY}
                />
            </View>

            <View style={style.cardView}>
                <FlipCard
                    style={style.card}
                    friction={6}
                    perspective={1000}
                    flipHorizontal={true}
                    flipVertical={false}
                    flip={false}
                    clickable={true}
                >
                    <View style={style.face}>
                        <Image source={CreditCardFront} style={style.image} />
                    </View>
                    <View style={style.back}>
                        <Image source={CreditCardBack} style={style.image} />
                    </View>
                </FlipCard>
            </View>

            <ScrollView>
                <AddCardForm />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = (theme: {
    COLORS: {
        WHITE: string;
        PRIMARY: string;
        SECONDARY: string;
    };
}) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.COLORS.WHITE,
            alignItems: 'center'

            //   paddingStart: 20
        },
        headerStyle: {
            alignSelf: 'flex-start',
            marginStart: 20,
            marginTop: 20
        },
        textInput: {
            width: horizontalScale(300),
            marginTop: 20,
            backgroundColor: theme.COLORS.WHITE
        },

        column: { flexDirection: 'column' },
        row: {
            flexDirection: 'row',
            alignSelf: 'flex-start',
            marginTop: 20,
            marginBottom: 20
        },
        image: {
            height: verticalScale(200),
            width: horizontalScale(260),
            resizeMode: 'cover',
            alignSelf: 'center'
        },
        card: {
            justifyContent: 'center',
            alignSelf: 'center'
        },
        cardView: {
            alignSelf: 'center',
            width: horizontalScale(360),
            height: verticalScale(200),
            marginTop: 20
        }
    });
