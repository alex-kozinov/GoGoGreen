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
            <Group title={this.props.title} style={{height: '40vh'}}>
                <Gallery
                    align='left'
                    slideWidth='custom'
                    style={{height: '100%'}}
                >
                    {
                        this.props.guides.map(
                            (idx) =>
                                <div style={{padding: '5px', width: '40vh'}}>
                                    <img src={guides[idx].image} style={{maxWidth: '100%', height: 'auto'}}
                                         alt='guide image' onClick={() => this.props.onClick(guides[idx].id)}/>
                                </div>
                        )
                    }
                </Gallery>
            </Group>)
    }
}

export default GalleryItem;