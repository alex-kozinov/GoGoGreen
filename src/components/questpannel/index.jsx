import React from 'react';
import {
    Panel,
    Cell,
    List,
    PanelHeader,
    Group,
    Div,
    InfoRow,
    Progress,
    Button,
    FixedLayout,
    FormLayout,
    HeaderContext,
    PanelHeaderContent,
    HeaderButton,
    IOS,
    platform
} from '@vkontakte/vkui';
import PropTypes from "prop-types";
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
import Icon24Users from '@vkontakte/icons/dist/24/users';
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';
import cherepahen from '../../imgs/turtle.png'
import {galleries} from '../../constants'

class QuestPanel extends React.Component {
    constructor(props) {
        super(props);

        this.osname = platform();
        this.state = {
            activePanel: "progress",
            progress: {},
            maxProgress: {},
            contextOpened: false,
            mode: "plastic"
        };

        let galleriesNames = galleries.map((dict) => [dict.title, dict.guides.length]);
        galleriesNames.map((item) => {
            this.state.progress[item[0]] = 0
        });
        galleriesNames.map((item) => {
            this.state.maxProgress[item[0]] = item[1]
        });

        this.changeProgress = this.changeProgress.bind(this);
        this.toggleContext = this.toggleContext.bind(this);
        this.select = this.select.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    toggleContext() {
        this.setState({contextOpened: !this.state.contextOpened});
    }

    select(e) {
        const mode = e.currentTarget.dataset.mode;

        this.setState({mode: mode});

        requestAnimationFrame(this.toggleContext);
    }

    changeProgress(val) {
        let newProgress = this.state.progress;
        let newValue = newProgress[this.state.mode] + val;
        newValue = Math.min(this.state.maxProgress[this.state.mode], newValue);
        newValue = Math.max(0, newValue);
        newProgress[this.state.mode] = newValue;

        this.setState({progress: newProgress});
    }

    handleClick() {
        this.changeProgress(1);
        this.props.goClick(this.state.progress[this.state.mode]);
    }

    render() {
        return <Panel id={this.props.id}>
            <PanelHeader>
                <PanelHeaderContent aside={<Icon16Dropdown/>} onClick={this.toggleContext}>
                    {this.state.mode === 'plastic' ? 'Пластик' : 'Стекло'}
                </PanelHeaderContent>
            </PanelHeader>
            <HeaderContext opened={this.state.contextOpened} onClose={this.toggleContext}>
                <List>
                    <Cell
                        before={<Icon24Users/>}
                        asideContent={this.state.mode === "plastic" ? <Icon24Done fill="var(--accent)"/> : null}
                        onClick={this.select}
                        data-mode="plastic"
                    >
                        Пластик
                    </Cell>
                    <Cell
                        before={<Icon24Settings/>}
                        asideContent={this.state.mode === "glass" ? <Icon24Done fill="var(--accent)"/> : null}
                        onClick={this.select}
                        data-mode="glass"
                    >
                        Стекло
                    </Cell>
                </List>
            </HeaderContext>
            <Div
                style={{height: '40vh', width: '80vw', justifyContent: 'center', marginTop: '5vh', marginBottom: '5vh'}}
                align='center'>
                <img src={cherepahen} style={{height: '100%', width: 'auto'}}/>
            </Div>
            <Div style={{marginLeft: '10vw', marginRight: '10vw'}}>
                <InfoRow title="Прогресс озеленения">
                    <Progress
                        value={100 / this.state.maxProgress[this.state.mode] * this.state.progress[this.state.mode]}/>
                </InfoRow>
            </Div>
            <Div align='center'>
                <Button level="outline" size='xl' style={{marginTop: '10vh'}} onClick={this.handleClick}>
                    Go
                </Button>
            </Div>
        </Panel>
    }
}

QuestPanel.propTypes = {
    id: PropTypes.string.isRequired,
    goClick: PropTypes.func.isRequired
};

export default QuestPanel;