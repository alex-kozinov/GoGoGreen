import React from 'react';
import './styles.css';
import { Panel, Cell, List, PanelHeader, Group, Div } from '@vkontakte/vkui';


export class GuideItem extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            checked: false,

        };

        this.changeChecked = this.changeChecked.bind(this);
    }

    changeChecked() {
        this.setState({checked: !this.state.checked});
    }

    render() {
        return (
            <Group title="Group title" description="Group description. Lorem ipsum dolor sit amet, consectetur adipisicing elit.">
                <List>
                    <Cell>
                        One
                    </Cell>
                    <Cell>
                        Two
                    </Cell>
                    <Cell>
                        Three
                    </Cell>
                </List>
            </Group>
        );
    }
}

export default GuideItem;