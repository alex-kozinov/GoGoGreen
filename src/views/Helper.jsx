import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, HeaderButton, Search, Group, Footer, List, Cell, View} from '@vkontakte/vkui';
import Akinator from "../components/akinator";


const Helper = props => (
    <View id={props.id} activePanel="helper">
        <Panel id="helper">
            <PanelHeader>Помощник</PanelHeader>
            <Akinator/>
        </Panel>
    </View>
);

Helper.propTypes = {
    id: PropTypes.string.isRequired,
};


export default Helper;