import React, { useEffect, useMemo } from 'react';
import { Modal, View, Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import starshipDetailModalStyle from './StarshipDetailModal.style';
import useStarshipStore from '../../store/starshipStore';
import Loading from '../Loading/Loading.component';
import ErrorComponent from '../Error/Error.component';
import Colors from '../../utils/Colors';


interface StarshipDetailModalProps {
    showModal: boolean;
    closeModal: () => void;
    fetchStarship:(starshipUrl:string)=>void;
    error:Error | null
    loading: boolean
}

const StarshipDetailModal = ({showModal,closeModal, fetchStarship, error, loading }: StarshipDetailModalProps) => {
    const { starshipDetail, starshipUrl } = useStarshipStore();
    
    useEffect(() => {
        if (starshipUrl) {
            fetchStarship(starshipUrl);
        }
    }, [starshipUrl]);

// Function to format keys by replacing underscores with spaces and capitalizing the first letter
const formatKeys = (key:string) => {
    return key.replace(/_/g, ' ').replace(/^\w/, (firstChar) => firstChar.toUpperCase());
};

// Memoized function to format starship details for display
const formattedDetails = useMemo(() => {
    return Object.entries(starshipDetail ?? {}).map(([key, value]) => {
        const content = Array.isArray(value) ? 
            value.map((item, index) => (
                <Text key={index} style={starshipDetailModalStyle.modalText}>{`- ${item}
                `}</Text>
            )) 
            : <Text style={starshipDetailModalStyle.modalText}>{value}</Text>;
        return (
            <Text key={key} style={starshipDetailModalStyle.modalText}>
                {formatKeys(key)}: {content}
            </Text>
        );
    })
}, [starshipDetail]); 


    return (
        <Modal
            animationType="slide"
            transparent={true}
            testID='modal'
            visible={showModal}
            onRequestClose={closeModal}
        >
            <View style={starshipDetailModalStyle.centeredView}>
                <ImageBackground
                    source={require("../../../assets/star-wars-background-1ezrxjbgyzjmrw9n.jpg")}
                    style={starshipDetailModalStyle.modalView}
                >
                    <TouchableOpacity
                        style={starshipDetailModalStyle.button}
                        onPress={closeModal}
                        accessibilityRole='button'
                        accessibilityLabel='Close'
                        testID='close-modal-button'
                        >
                        <AntDesign name="closecircleo" size={24} color={Colors.cpoGold} />
                    </TouchableOpacity>
                 <View style={starshipDetailModalStyle.overlay}>
                    <Text style={starshipDetailModalStyle.headerStyle}>Starship Details</Text>
                        <ScrollView>
                            {loading ? <Loading loading={loading} /> : error ? <ErrorComponent /> : formattedDetails}
                        </ScrollView>
                        </View>
                  
                </ImageBackground>
            </View>
        </Modal>
    );
};

export default StarshipDetailModal;

/**
useMemo ensures that the formatting process is only executed when the starshipDetail object changes, 
preventing unnecessary recalculations on each render. 
 */