import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, HeaderButton, Search, Group, Footer, List, Cell, View} from '@vkontakte/vkui';

const Progress = props => (
    <View id={props.id} activePanel="progress">
        <Panel id="progress">
            <PanelHeader>Прогрес</PanelHeader>
        </Panel>
    </View>
);

Progress.propTypes = {
    id: PropTypes.string.isRequired,
};


export default Progress;