import React from 'react';
import {
    Panel,
    Cell,
    List,
    PanelHeader,
    Group,
    Div,
    Gallery,
    InfoRow,
    Progress,
    FixedLayout,
    FormLayout
} from '@vkontakte/vkui';
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import PropTypes from "prop-types";

class QuestPannel extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            activePanel: "progress",
            progress: 40,
        };

        this.changeProgress = this.changeProgress.bind(this);
    }

    changeProgress(val) {
        let new_progress = this.state.progress + val;
        new_progress = Math.min(100, new_progress);
        new_progress = Math.max(0, new_progress);
        this.setState({progress: new_progress})
    }
    
    render() {
        return <Panel id={this.props.id}>
            <PanelHeader>Прогрес</PanelHeader>
            <Group>
                <Div>
                    <InfoRow title="Прогресс озеленения">
                        <Progress value={this.state.progress} />
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

QuestPannel.propTypes = {
    id: PropTypes.string.isRequired,
};

export default QuestPannel;