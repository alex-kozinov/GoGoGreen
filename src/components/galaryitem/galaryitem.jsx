import React from 'react';
import './styles.css';
import {Panel, Cell, List, PanelHeader, Group, Div, Gallery} from '@vkontakte/vkui';
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import {guides} from "../../constants";

export class GalleryItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Div title={this.props.title} style={{height: '40vh'}}>
                <Gallery
                    align='left'
                    slideWidth='custom'
                    style={{height: '100%'}}
                >
                    {
                        this.props.guides.map(
                            (idx) =>
                                <div style={{padding: '5px', height: '100%'}}>
                                    <img src={guides[idx].image} style={{ height: '100%'}}>
                                    </img>
                                </div>
                        )
                    }
                </Gallery>
            </Div>
        );
    }
}

export default GalleryItem;