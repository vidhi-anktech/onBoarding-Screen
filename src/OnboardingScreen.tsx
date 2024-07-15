import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Onboarding from 'react-native-onboarding-swiper';

const Done = ({ ...props }) => (
    <TouchableOpacity
        {...props}
    >
        <Text style={{ fontSize: 16, marginHorizontal: 20, color: '#fff' }}>Done</Text>
    </TouchableOpacity>
)

const Dots = () => {
    return (
        <View />
    )
}


const OnboardingScreen = ({ navigation }: any) => {
    const [currentPage, setCurrentPage] = useState(0);
    const pages = [
        {
            backgroundColor: '#000',
            image: <Image />,
            title: 'Welcome',
            subtitle: 'Welcome to the first slide of the Onboarding Swiper.',
        },
        {
            backgroundColor: '#000',
            image: <Image />,
            title: 'Explore',
            subtitle: 'This is the second slide of the Onboarding Swiper.',
        },
        {
            backgroundColor: '#000',
            image: <Image />,
            title: 'All Done',
            subtitle: 'This is the Third slide of the Onboarding Swiper.',
        },
    ];
    return (
        <>
            <Onboarding
                onSkip={() => navigation.replace("Home")}
                DoneButtonComponent={Done}
                pageIndexCallback={setCurrentPage}
                pages={pages}
                DotComponent={Dots}

            />
            <View style={styles.paginationContainer}>
                <Text style={styles.paginationText}>{`${currentPage + 1} of ${pages.length}`}</Text>
            </View>
        </>
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    paginationContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    paginationText: {
        fontSize: 16,
        color: '#fff',
    },
})