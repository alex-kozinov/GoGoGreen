import React from 'react';
import './styles.css';
import { Panel, Cell, List, PanelHeader, Group, Div } from '@vkontakte/vkui';
import {pages} from '../../constants'

export class GuideItem extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <Group title={this.props.title} description={this.props.description}>

            </Group>
        );
    }
}

export default GuideItem;