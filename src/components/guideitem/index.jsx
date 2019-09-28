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
                      description={this.props.description}
                      before={<Avatar type="image" src="https://pp.userapi.com/c845220/v845220642/7cacc/XzhH5b7FSKY.jpg"
                                      size={80}/>}
                      bottomContent={<Button>Подробнее</Button>}
                >

                </Cell>
            </Group>
        );
    }
}

export default GuideItem;