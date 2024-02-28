import React, { useEffect, useMemo } from 'react';
import { Modal, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import starshipDetailModalStyle from './StarshipDetailModal.style';
import useStarshipStore from '../../store/starshipStore';
import Loading from '../Loading/Loading.component';
import ErrorComponent from '../Error/Error.component';
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
        // Check if the value is an array and format accordingly
        const content = Array.isArray(value) ? 
            // If value is an array, map over each item and create a Text component for it
            value.map((item, index) => (
                <Text key={index} style={starshipDetailModalStyle.modalText}>{`- ${item}
                `}</Text>
            )) 
            // If value is not an array, create a single Text component for it
            : <Text style={starshipDetailModalStyle.modalText}>{value}</Text>;
        // Return a Text component for the key-value pair, with formatted key and content
        return (
            <Text key={key} style={starshipDetailModalStyle.modalText}>
                {formatKeys(key)}: {content}
            </Text>
        );
    })
}, [starshipDetail]); // Depend on starshipDetail to update the formatted details when it changes


    return (
        <Modal
            animationType="slide"
            transparent={true}
            testID='modal'
            visible={showModal}
            onRequestClose={closeModal}
        >
            <View style={starshipDetailModalStyle.centeredView}>
                <View style={starshipDetailModalStyle.modalView}>
                <Text style={starshipDetailModalStyle.headerStyle}>Starship Details</Text>
                    <ScrollView>
                        {loading ? <Loading loading={loading} /> : error ? <ErrorComponent /> : formattedDetails}
                    </ScrollView>
                    <TouchableOpacity
                        style={[starshipDetailModalStyle.button, starshipDetailModalStyle.buttonClose]}
                        onPress={closeModal}
                        accessibilityRole='button'
                        accessibilityLabel='Close'
                    >
                        <Text style={starshipDetailModalStyle.textStyle}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default StarshipDetailModal;

/**
useMemo ensures that the formatting process is only executed when the starshipDetail object changes, 
preventing unnecessary recalculations on each render. 
 */