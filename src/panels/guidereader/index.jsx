import React from 'react';
import {HeaderButton, IOS, Panel, PanelHeader} from "@vkontakte/vkui";
import {guides} from "../../constants";
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import PropTypes from "prop-types";


class GuideReader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Panel id={"reading"}>
            <PanelHeader
                left=
                    {
                        <HeaderButton onClick={this.props.backClick}>
                            {this.osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                        </HeaderButton>
                    }
                addon=
                    {
                        <HeaderButton onClick={this.props.backClick}>
                            Назад
                        </HeaderButton>
                    }
            >
                {
                    guides[this.props.guideID - 1].title
                }
            </PanelHeader>
            {
                guides[this.props.guideID - 1].article
            }
        </Panel>
    }
}

GuideReader.propTypes = {
    id: PropTypes.string.isRequired,
    guideID: PropTypes.number.isRequired,
    backClick: PropTypes.func.isRequired
};

export default GuideReader;