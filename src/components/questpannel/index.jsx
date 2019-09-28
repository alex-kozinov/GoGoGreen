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

class QuestPanel extends React.Component {
    constructor(props) {
        super(props);

        this.osname = platform();

        this.state = {
            activePanel: "progress",
            progress: 40,
            contextOpened: true,
            mode: "plastic"
        };

        this.changeProgress = this.changeProgress.bind(this);
        this.toggleContext = this.toggleContext.bind(this);
        this.select = this.select.bind(this);
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
        let newProgress = this.state.progress + val;
        newProgress = Math.min(100, newProgress);
        newProgress = Math.max(0, newProgress);

        this.setState({progress: newProgress});
    }

    render() {
        return <Panel id={this.props.id}>
            <PanelHeader>
                <PanelHeaderContent aside={<Icon16Dropdown/>} onClick={this.toggleContext}>
                    {this.state.mode === 'plastic' ?  'Пластик' : 'Стекло'}
                </PanelHeaderContent>
            </PanelHeader>
            <HeaderContext opened={this.state.contextOpened} onClose={this.toggleContext}>
                <List>
                    <Cell
                        before={<Icon24Users />}
                        asideContent={this.state.mode === "plastic" ? <Icon24Done fill="var(--accent)"/> : null}
                        onClick={this.select}
                        data-mode="plastic"
                    >
                        Пластик
                    </Cell>
                    <Cell
                        before={<Icon24Settings />}
                        asideContent={this.state.mode === "glass" ? <Icon24Done fill="var(--accent)"/> : null}
                        onClick={this.select}
                        data-mode="glass"
                    >
                        Стекло
                    </Cell>
                </List>
            </HeaderContext>
            <Group>
                <Div>
                    <InfoRow title="Прогресс озеленения">
                        <Progress value={this.state.progress}/>
                    </InfoRow>
                </Div>
            </Group>

            <FixedLayout vertical="bottom">
                <Group>
                    <FormLayout>
                        <Button size="xl" level="secondary" onClick={() => this.changeProgress(-10)}>
                            Назад
                        </Button>

                        <Button size="xl" level="secondary" onClick={() => this.changeProgress(10)}>
                            Вперёд
                        </Button>
                    </FormLayout>
                </Group>
            </FixedLayout>
        </Panel>
    }
}

QuestPanel.propTypes = {
    id: PropTypes.string.isRequired,
};

export default QuestPanel;