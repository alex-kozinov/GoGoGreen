import React from 'react';
import PropTypes from 'prop-types';
import {
    FormLayout,
    Button,
    Tabs,
    TabsItem,
    FixedLayout,
    Div,
    InfoRow,
    Panel,
    PanelHeader,
    Group,
    View,
    Progress
} from '@vkontakte/vkui';
import QuestPanel from "../components/questpannel";
import GuideReader from "../panels/guidereader";

class ProgressPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePanel: "progress",
            guideId: 0
        };

        this.handleGoClick = this.handleGoClick.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
    }

    handleGoClick(guideId) {
        this.setState({activePanel: 'reading', guideId: guideId});
    }

    handleBackClick() {
        this.setState({activePanel: "progress"});
    }

    render() {
        return <View id={this.props.id} activePanel={this.state.activePanel}>
            <QuestPanel id='progress' goClick={this.handleGoClick}/>
            <GuideReader id='reading' backClick={this.handleBackClick} guideID={this.state.guideId}/>
        </View>
    }
}

ProgressPage.propTypes = {
    id: PropTypes.string.isRequired,
};

export default ProgressPage;