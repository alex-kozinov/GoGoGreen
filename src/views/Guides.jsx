import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, HeaderButton, Search, Group, Footer, List, Cell, View} from '@vkontakte/vkui';
import Progress from "./Progress";
import GuideItem from "../components/guideitem";
import {pages} from "../constants";


const Guides = props => (
    <View id={props.id} activePanel="guides">
        <Panel id="guides">
            <PanelHeader>Guides</PanelHeader>
            {
                pages.map(
                    (item) => <GuideItem title={item.title} description={item.description}/>
                )
            }
        </Panel>
    </View>
);

Guides.propTypes = {
    id: PropTypes.string.isRequired,
};


export default Guides;