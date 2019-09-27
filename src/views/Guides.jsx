import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, HeaderButton, Search, Group, Footer, List, Cell, View} from '@vkontakte/vkui';
import Progress from "./Progress";

const Guides = props => (
    <View id={props.id} activePanel="guides">
        <Panel id="guides">
            <PanelHeader>Гайды</PanelHeader>
        </Panel>
    </View>
);

Guides.propTypes = {
    id: PropTypes.string.isRequired,
};


export default Guides;