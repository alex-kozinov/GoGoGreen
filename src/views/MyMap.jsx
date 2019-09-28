import React from 'react';
import PropTypes from 'prop-types';
import {PanelHeaderBack, Input, Panel, PanelHeader, HeaderButton, Search, Group, Footer, List, Cell, View, FixedLayout} from '@vkontakte/vkui';
import Progress from "./Progress";
import { ListBoxItem, ListBox, YMaps, Map, Placemark } from 'react-yandex-maps';
import '../styles/main.css';

export default class MyMap extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            id: props.id,
            isPlastic: false,
            isPaper: false,
            isSop: false
        }
        this.changeSearch = this.changeSearch.bind(this);
    }

    changeSearch(prop) {
        if (prop === "plastic") {
            let notPlasitc = !this.state.isPlastic;
            this.setState({isPlastic: notPlasitc});
        }
        if (prop === "paper") {
            let notPaper = !this.state.isPaper;
            this.setState({isPaper: notPaper});
        }
        if (prop === "sop") {
            let notSop = !this.state.isSop;
            this.setState({isSop: notSop});
        }

        console.log(this.state);
    }

    changeMap() {
        
    }
    render() {
        return (
            <View id={this.state.id} activePanel="mymap">
                <Panel id="mymap">
                    <PanelHeader>Карта </PanelHeader>
                    <FixedLayout vertical="top bottom">
                        <YMaps>
                                <Map className="all_window"
                                    defaultState = {{ 
                                        center: [55.751574, 37.573856], 
                                    zoom: 9 
                                        }}
                                >
                                    <ListBox data = {{ content: "Что относим на свалку?" }}>
                                        <ListBoxItem onClick={() => this.changeSearch("plastic")} data = {{ content: "Пластик" }} />
                                        <ListBoxItem onClick={() => this.changeSearch("paper")} data = {{ content: "Бумагу" }} />
                                        <ListBoxItem onClick={() => this.changeSearch("sop")} data = {{ content: "Соперников" }} />
                                    </ListBox>
                                </Map>
                        </YMaps>
                    </FixedLayout>
                </Panel>
            </View>
        );
    }
};