import React from 'react';
import PropTypes from 'prop-types';
import {
    Panel,
    PanelHeader,
    HeaderButton,
    Search,
    Group,
    Footer,
    List,
    Cell,
    View,
    IOS,
    platform
} from '@vkontakte/vkui';
import Progress from "./Progress";
import GuideItem from "../components/guideitem";
import {pages} from "../constants";
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';

/*TODO: make it be as class*/
export class Guides extends React.Component {
    constructor(props) {
        super(props);
        this.osname = platform();
        this.state = {
            activePanel: "guides",
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
            <View activePanel={this.state.activePanel}>
                <Panel id={"guides"}>
                    <PanelHeader>Guides</PanelHeader>
                    {
                        pages.map(
                            (item) => <GuideItem guideNumber={item.id} title={item.title} description={item.description}
                                                 onDetailsClick={this.handleDetailsClick} image={item.image}/>
                        )
                    }
                </Panel>
                <Panel id={"reading"}>
                    <PanelHeader
                        left=
                            {
                                <HeaderButton onClick={() => this.setState({activePanel: "guides"})}>
                                    {this.osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                                </HeaderButton>
                            }
                        addon=
                            {
                                <HeaderButton onClick={() => this.setState({activePanel: "guides"})}>
                                    Назад
                                </HeaderButton>
                            }
                    >
                        Reading the guide with guideNumber!!!
                    </PanelHeader>

                </Panel>
            </View>
        );
    }
};

Guides.propTypes = {
    id: PropTypes.string.isRequired,
};


export default Guides;