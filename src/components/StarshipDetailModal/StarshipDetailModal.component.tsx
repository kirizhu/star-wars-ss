import React, { useEffect, useMemo } from 'react';
import { Modal, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import starshipDetailModalStyle from './StarshipDetailModal.style';
import useStarshipStore from '../../store/starshipStore';
import { useFetchStarshipByUrl } from '../../api/starships-api';
import Loading from '../Loading/Loading.component';
import ErrorComponent from '../Error/Error.component';


const StarshipDetailModal = () => {
    const { showModal, setShowModal, starshipDetail, starshipUrl } = useStarshipStore();
    const {error, loading, fetchStarship} = useFetchStarshipByUrl();

    useEffect(() => {
        if (starshipUrl) {
            fetchStarship(starshipUrl);
        }
    }, [starshipUrl, fetchStarship]);

    const onClose = () => {
        setShowModal(false);
    };

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
            visible={showModal}
            onRequestClose={onClose}
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
                        onPress={onClose}
                    >
                        <Text style={starshipDetailModalStyle.textStyle}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default StarshipDetailModal;
