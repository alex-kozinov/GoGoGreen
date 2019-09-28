import React from 'react';
import './styles.css';
import {Panel, Cell, List, PanelHeader, Group, Div} from '@vkontakte/vkui';
import {pages} from '../../constants'
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Button from "@vkontakte/vkui/dist/components/Button/Button";

export class GuideItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Group title={this.props.title}>
                <Cell multiline
                      size='l'
                      before={<Avatar type="image" src={this.props.image} size={80}/>}
                      bottomContent={<Button onClick={() => this.props.onDetailsClick(this.props.guideNumber)}>Подробнее</Button>}
                >
                    {this.props.description}
                </Cell>
            </Group>
        );
    }
}

export default GuideItem;