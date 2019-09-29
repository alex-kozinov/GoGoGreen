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


class QuestPanel extends React.Component {
    constructor(props) {
        super(props);

        this.osname = platform();

        let mem = this.props.getMem();

        this.state = {
            allProgress: mem.allProgress,
            contextOpened: false,
            mode: mem.mode
        };

        this.setMem = this.setMem.bind(this);
        this.toggleContext = this.toggleContext.bind(this);
        this.select = this.select.bind(this);
        this.getProgress = this.getProgress.bind(this);
        this.handleClick = this.handleClick.bind(this);
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

    toggleContext() {
        this.setState({contextOpened: !this.state.contextOpened});
    }

    select(e) {
        const mode = e.currentTarget.dataset.mode;

        this.setMem({mode: mode});

        requestAnimationFrame(this.toggleContext);
    }

    getProgress() {
        let mem = this.props.getMem();
        let mode = mem['mode'];
        let progress = mem['allProgress'][mode];
        let maxProgress = mem['maxProgress'][mode];
        let startPorgress = mem['startProgress'][mode];

        return 100 * (progress - startPorgress) / (maxProgress - startPorgress)
    }

    handleClick() {
        let mem = this.props.getMem();
        let currMode = mem.mode;
        let allProgress = mem.allProgress;
        let maxProgress = mem.maxProgress[currMode];
        allProgress[currMode] = Math.min(allProgress[currMode] + 1, maxProgress);
        console.log(allProgress)
        let updatedProps = {
            activePanel: "reading",
            allProgress: allProgress,
            mode: currMode
        };

        this.setMem(updatedProps);
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
                    <Progress value={this.getProgress()}/>
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
    getMem: PropTypes.func.isRequired,
    setMem: PropTypes.func.isRequired,
};

export default QuestPanel;