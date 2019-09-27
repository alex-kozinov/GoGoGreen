import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, HeaderButton, Search, Group, Footer, List, Cell, View} from '@vkontakte/vkui';
import Progress from "./Progress";

const Map = props => (
    <View id={props.id} activePanel="map">
        <Panel id="map">
            <PanelHeader>Карта</PanelHeader>
        </Panel>
    </View>
);

Map.propTypes = {
    id: PropTypes.string.isRequired,
};


export default Map;