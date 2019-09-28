import React from 'react';
import PropTypes from 'prop-types';
import {PanelHeaderBack, Input, Panel, PanelHeader, HeaderButton, Search, Group, Footer, List, Cell, View, FixedLayout} from '@vkontakte/vkui';
import Progress from "./Progress";
import { ListBoxItem, ListBox, YMaps, Map, Placemark } from 'react-yandex-maps';
import '../styles/main.css';

const MyMap = props => (
    <View id={props.id} activePanel="mymap">
        <Panel id="mymap">
            <PanelHeader>Карта </PanelHeader>
            <FixedLayout vertical="top bottom">
                <YMaps>
                        <Map className="all_window"
                            defaultState = {{ 
                                center: [55.751574, 37.573856], 
                            zoom: 9 
                                }}
                        >
                            <ListBox data = {{ content: "Что относим на свалку?" }}>
                                <ListBoxItem data = {{ content: "Пластик" }} />
                                <ListBoxItem data = {{ content: "Бумагу" }} />
                                <ListBoxItem data = {{ content: "Соперников" }} />
                            </ListBox>
                        </Map>
                </YMaps>
            </FixedLayout>
        </Panel>
    </View>
);

MyMap.propTypes = {
    id: PropTypes.string.isRequired,
};


export default MyMap;