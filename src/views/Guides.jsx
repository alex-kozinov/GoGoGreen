import React from 'react';
import PropTypes from 'prop-types';
import {
    Panel,
    PanelHeader,
    HeaderButton,
    View,
    IOS,
    platform
} from '@vkontakte/vkui';

import GalleryItem from "../components/galaryitem/galaryitem";
import GuideReader from "../panels/guidereader";
import {galleries, guides} from "../constants";


export class Guides extends React.Component {
    constructor(props) {
        super(props);
        this.osname = platform();
        this.state = {
            activePanel: "guides",
        };
        this.currGuide = 0;

        this.handleGuideClick = this.handleGuideClick.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
    }

    handleGuideClick(guideNumber) {
        this.currGuide = guideNumber;
        this.setState({activePanel: 'reading'});
    }

    handleBackClick() {
        this.setState({activePanel: "guides"})
    }

    render() {
        return (
            <View id={this.props.id} activePanel={this.state.activePanel}>
                <Panel id={"guides"}>
                    <PanelHeader>Гайды</PanelHeader>
                    {
                        galleries.map(
                            (item, idx) => <GalleryItem key={idx} guides={item.guides} title={item.title}
                                                   onClick={(idx) => this.handleGuideClick(idx)}/>
                        )
                    }
                </Panel>

                <GuideReader id={'reading'} guideID={this.currGuide} backClick={this.handleBackClick}/>
            </View>
        );
    }
}

Guides.propTypes = {
    id: PropTypes.string.isRequired,
};


export default Guides;