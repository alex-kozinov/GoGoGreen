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
            activePanel: "gallary",
        };
        this.currentGuide = 0;
        this.handleDetailsClick = this.handleDetailsClick.bind(this);
    }

    handleDetailsClick(guideNumber) {
        this.setState({activePanel: 'reading'});
        this.currentGuide = guideNumber;
    }

    render() {
        return (
            <View id={this.props.id} activePanel={this.state.activePanel}>
                <Panel id={"gallary"} style={{height: "300%"}}>
                    <PanelHeader>Гайды</PanelHeader>
                    {
                        galleries.map(
                            (item) => <GalleryItem guides={item.guides} title={item.title}/>
                        )
                    }
                </Panel>
                <Panel id={"reading"}>
                    <PanelHeader
                        left=
                            {
                                <HeaderButton onClick={() => this.setState({activePanel: "galary"})}>
                                    {this.osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                                </HeaderButton>
                            }
                        addon=
                            {
                                <HeaderButton onClick={() => this.setState({activePanel: "galary"})}>
                                    Назад
                                </HeaderButton>
                            }
                    >
                        {guides[this.currentGuide].title}
                    </PanelHeader>
                    {guides[this.currentGuide].article}
                </Panel>
            </View>
        );
    }
};

Guides.propTypes = {
    id: PropTypes.string.isRequired,
};


export default Guides;