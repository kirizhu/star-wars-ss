import React from 'react';
import { Modal, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import starshipDetailModalStyle from './StarshipDetailModal.style';
import useStarshipStore from '../../store/starshipStore';

const StarshipDetailModal = () => {
    const { showModal, setShowModal, starshipDetail } = useStarshipStore();

    const onClose = () => {
        setShowModal(false);
    };
    
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={onClose}
        >
            <View style={starshipDetailModalStyle.centeredView}>
                <View style={starshipDetailModalStyle.modalView}>
                    <ScrollView>
                        <Text style={starshipDetailModalStyle.modalText}>Name: {starshipDetail?.name}</Text>
                        <Text style={starshipDetailModalStyle.modalText}>Model: {starshipDetail?.model}</Text>
                        <Text style={starshipDetailModalStyle.modalText}>Manufacturer: {starshipDetail?.manufacturer}</Text>
                        <Text style={starshipDetailModalStyle.modalText}>Cost in Credits: {starshipDetail?.cost_in_credits}</Text>
                        <Text style={starshipDetailModalStyle.modalText}>Length: {starshipDetail?.length}</Text>
                        <Text style={starshipDetailModalStyle.modalText}>Max Atmosphering Speed: {starshipDetail?.max_atmosphering_speed}</Text>
                        <Text style={starshipDetailModalStyle.modalText}>Crew: {starshipDetail?.crew}</Text>
                        <Text style={starshipDetailModalStyle.modalText}>Passengers: {starshipDetail?.passengers}</Text>
                        <Text style={starshipDetailModalStyle.modalText}>Cargo Capacity: {starshipDetail?.cargo_capacity}</Text>
                        <Text style={starshipDetailModalStyle.modalText}>Consumables: {starshipDetail?.consumables}</Text>
                        <Text style={starshipDetailModalStyle.modalText}>Hyperdrive Rating: {starshipDetail?.hyperdrive_rating}</Text>
                        <Text style={starshipDetailModalStyle.modalText}>MGLT: {starshipDetail?.MGLT}</Text>
                        <Text style={starshipDetailModalStyle.modalText}>Starship Class: {starshipDetail?.starship_class}</Text>
                        {/* Assuming 'films' is an array of URLs */}
                        <Text style={starshipDetailModalStyle.modalText}>Films:</Text>
                        {starshipDetail?.films?.map((film, index) => (
                            <Text key={index} style={starshipDetailModalStyle.modalText}>- {film}</Text>
                        ))}
                    </ScrollView>
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
