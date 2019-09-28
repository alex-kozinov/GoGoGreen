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
import {galleries, guides} from "../constants";
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';

export class Guides extends React.Component {
    constructor(props) {
        super(props);
        this.osname = platform();
        this.state = {
            currentGuide: 0,
            activePanel: "guides",
        };
        this.handleGuideClick = this.handleGuideClick.bind(this);
    }

    handleGuideClick(guideNumber) {
        this.setState({currentGuide: guideNumber, activePanel: 'reading'});
    }

    render() {
        return (
            <View id={this.props.id} activePanel={this.state.activePanel}>
                <Panel id={"guides"}>
                    <PanelHeader>Гайды</PanelHeader>
                    {
                        galleries.map(
                            (item) => <GalleryItem guides={item.guides} title={item.title}
                                                   onClick={(idx) => this.handleGuideClick(idx)}/>
                        )
                    }
                </Panel>

                <Panel id={"reading"}>
                    <PanelHeader
                        left=
                            {
                                <HeaderButton onClick={() => this.setState({currentGuide: 0, activePanel: "guides"})}>
                                    {this.osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                                </HeaderButton>
                            }
                        addon=
                            {
                                <HeaderButton onClick={() => this.setState({currentGuide: 0, activePanel: "guides"})}>
                                    Назад
                                </HeaderButton>
                            }
                    >
                        {
                            guides[this.state.currentGuide].title
                        }
                    </PanelHeader>
                    {
                        guides[this.state.currentGuide].article
                    }
                </Panel>
            </View>
        );
    }
};

Guides.propTypes = {
    id: PropTypes.string.isRequired,
};


export default Guides;