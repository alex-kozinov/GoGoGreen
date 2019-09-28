import React from 'react';
import PropTypes from 'prop-types';
import {FormLayout, Button, Tabs, TabsItem, FixedLayout, Div, InfoRow, Panel, PanelHeader,  Group, View, Progress} from '@vkontakte/vkui';


class ProgressPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activePanel: "progress",
            progress: 40,
        };

        this.changeProgress = this.changeProgress.bind(this);
    }

    changeProgress(val) {
        this.setState({progress: this.state.progress + val})
    }

    render() {
        return <View id={this.props.id} activePanel="progress">
            <Panel id="progress">
                <PanelHeader>Прогрес</PanelHeader>
                <Group>
                    <Div>
                        <InfoRow title="Default">
                            <Progress value={40} />
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
        </View>
    }
}

Progress.propTypes = {
    id: PropTypes.string.isRequired,
};

export default ProgressPage;