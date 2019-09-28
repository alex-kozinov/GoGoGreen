import React from 'react';
import './styles.css';
import {Panel, Cell, List, PanelHeader, Group, Div, Gallery} from '@vkontakte/vkui';
import {guides} from "../../constants";

export class GalleryItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Group title={this.props.title}>
                <Gallery
                    align='left'
                    slideWidth='custom'
                    style={{height: 'auto'}}
                >
                    {
                        this.props.guides.map(
                            (idx) =>
                                <div style={{padding: '2px', width: '20vh'}}>
                                    <img src={guides[idx].image} style={{width: '100%'}}
                                         alt='guide image' onClick={() => this.props.onClick(guides[idx].id)}/>
                                </div>
                        )
                    }
                </Gallery>
            </Group>)
    }
}

export default GalleryItem;