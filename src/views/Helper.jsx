import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, HeaderButton, Search, Group, Footer, List, Cell, View} from '@vkontakte/vkui';
import Progress from "./Progress";

const Helper = props => (
    <View id={props.id} activePanel="helper">
        <Panel id="helper">
            <PanelHeader>Помощник</PanelHeader>
        </Panel>
    </View>
);

Helper.propTypes = {
    id: PropTypes.string.isRequired,
};


export default Helper;