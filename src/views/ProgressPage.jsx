import React from 'react';
import PropTypes from 'prop-types';
import {FormLayout, Button, Tabs, TabsItem, FixedLayout, Div, InfoRow, Panel, PanelHeader,  Group, View, Progress} from '@vkontakte/vkui';
import QuestPanel from "../components/questpannel";

class ProgressPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <View id={this.props.id} activePanel="progress">
        <QuestPanel id={'progress'}/>
        </View>
    }
}

ProgressPage.propTypes = {
    id: PropTypes.string.isRequired,
};

export default ProgressPage;