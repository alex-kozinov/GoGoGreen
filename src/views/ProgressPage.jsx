import React from 'react';
import PropTypes from 'prop-types';
import {FormLayout, Button, Tabs, TabsItem, FixedLayout, Div, InfoRow, Panel, PanelHeader,  Group, View, Progress} from '@vkontakte/vkui';
import QuestPanel from "../components/questpannel";
import GuideReader from "../panels/guidereader";


class ProgressPage extends React.Component {
    constructor(props) {
        super(props);

        let mem = this.props.getMem();

        this.state = {
            activePanel: mem.activePanel
        };

        this.setMem = this.setMem.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
        this.getGuideID = this.getGuideID.bind(this)
    }

    setMem(newMem) {
        let updateState = {};
        let updated = false;
        for (let x in newMem) {
            if (x in this.state) {
                updateState[x] = newMem[x];
                updated = true;
            }
        }

        this.props.setMem(newMem);

        if (updated) {
            this.setState(updateState);
        }
    }

    getGuideID() {
        let mem = this.props.getMem();
        let progress = mem['allProgress'];
        let mode = mem['mode'];
        return progress[mode];
    }

    handleBackClick() {
        this.setMem({activePanel: 'progress'})
    }

    render() {
        return <View id={this.props.id} activePanel={this.state.activePanel}>
        <QuestPanel id={'progress'} getMem={this.props.getMem} setMem={this.setMem}/>
        <GuideReader id={'reading'} guideID={this.getGuideID() - 1} backClick={this.handleBackClick}/>
        </View>
    }
}

ProgressPage.propTypes = {
    id: PropTypes.string.isRequired,
    getMem: PropTypes.func.isRequired,
    setMem: PropTypes.func.isRequired,
};

export default ProgressPage;