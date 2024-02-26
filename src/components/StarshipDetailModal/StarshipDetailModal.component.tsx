import React, { useEffect, useMemo } from 'react';
import { Modal, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import starshipDetailModalStyle from './StarshipDetailModal.style';
import useStarshipStore from '../../store/starshipStore';
import { useFetchStarshipByUrl } from '../../api/starships-api';
import Loading from '../Loading/Loading.component';
import ErrorComponent from '../Error/Error.component';
interface StarshipDetailModalProps {
    showModal: boolean;
    closeModal: () => void;
    loading: boolean;
    error: Error | null;
}

const StarshipDetailModal = ({showModal,closeModal,loading,error}: StarshipDetailModalProps) => {
    const { starshipDetail, starshipUrl } = useStarshipStore();
    const {fetchStarship} = useFetchStarshipByUrl();

    useEffect(() => {
        if (starshipUrl) {
            fetchStarship(starshipUrl);
        }
    }, [starshipUrl, fetchStarship]);

    const formatKeys = (key:string) => {
        return key.replace(/_/g, ' ').replace(/^\w/, (firstChar) => firstChar.toUpperCase());
      };

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
    })}, [starshipDetail])

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
                    {loading ? <Loading/>: error ? <ErrorComponent /> : 
                    <ScrollView>
                        {formattedDetails}
                    </ScrollView>}
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
