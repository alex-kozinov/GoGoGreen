import React from 'react';
import For from 'react';
import PropTypes from 'prop-types';
import {PanelHeaderBack, Input, Panel, PanelHeader, HeaderButton, Search, Group, Footer, List, Cell, View, FixedLayout} from '@vkontakte/vkui';
import Progress from "./Progress";
import {Clusterer, ListBoxItem, ListBox, YMaps, Map, Placemark } from 'react-yandex-maps';
import '../styles/main.css';

import pointsPlastic from "./data/pointPlastic.json"
import pointsPapes from "./data/pointsPapes.json"
import pointsGlases from "./data/pointsGlases.json"

import { tsConstructSignatureDeclaration } from '@babel/types';

export default class MyMap extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            id: props.id,
            isPlastic: false,
            isPaper: false,
            isGlases: false
        }
        this.changeSearch = this.changeSearch.bind(this);
        this.getPointDataForGlases = this.getPointDataForGlases.bind(this);
        this.getPointDataForPaper = this.getPointDataForPaper.bind(this);
        this.getPointDataForPlastic = this.getPointDataForPlastic.bind(this);

        this.getPointOptionsForGlases = this.getPointOptionsForGlases.bind(this);
        this.getPointOptionsForPaper = this.getPointOptionsForPaper.bind(this);
        this.getPointOptionsForPlastic = this.getPointOptionsForPlastic.bind(this);
    }


    getPointDataForPlastic() {
        return {
            balloonContentBody: "Дом пластика",
            clusterCaption: "Дом пластика"
        };
    };
    getPointDataForPaper() {
        return {
            balloonContentBody: "Дом бумаги",
            clusterCaption: "Дом бумаги"
        };
    };
    getPointDataForGlases() {
        return {
            iconColor: "red",
            balloonContentBody: "Время и стекло",
            clusterCaption: "Время истекло"
        };
    };

    getPointOptionsForPlastic() {
        return {
            iconColor: "red"
        };
    };
    getPointOptionsForPaper() {
        return {
            iconColor: "green"
        };
    };
    getPointOptionsForGlases() {
        return {
            iconColor: "red"
        };
    };

    changeSearch(prop) {
        if (prop === "plastic") {
            let notPlasitc = !this.state.isPlastic;
            this.setState({isPlastic: notPlasitc});
        }
        if (prop === "paper") {
            let notPaper = !this.state.isPaper;
            this.setState({isPaper: notPaper});
        }
        if (prop === "glases") {
            let notGlases = !this.state.isGlases;
            this.setState({isGlases: notGlases});
        }

        this.changeMap();
    }

    printFromJson(j, properties, options) {
        return (j.map((coordinates, idx) => (
            <Placemark
              key={idx}
              geometry={ [coordinates[0], coordinates[1]] }
              properties={properties}
              options={options}
            />
          )
        )
        )
    }

    printPlacemark() {
        return ( <div>
            { this.state.isPlastic && this.printFromJson(pointsPlastic, this.getPointDataForPlastic, this.getPointOptionsForPlastic)}
            { this.state.isPaper && this.printFromJson(pointsPapes, this.getPointDataForPaper, this.getPointOptionsForPaper)}
            { this.state.isGlases && this.printFromJson(pointsGlases, this.getPointDataForGlases, this.getPointOptionsForGlases)}
            </div>
            );
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
                                        <ListBoxItem onClick={() => this.changeSearch("glases")} data = {{ content: "Соперников" }} />
                                    </ListBox>

                                    <Clusterer
                                        options={{
                                        preset: "islands#invertedVioletClusterIcons",
                                        groupByCoordinates: false,
                                        clusterDisableClickZoom: true,
                                        clusterHideIconOnBalloonOpen: false,
                                        geoObjectHideIconOnBalloonOpen: false
                                        }}
                                    >

                                    </Clusterer>
                                    {this.printPlacemark()}
                                </Map>
                        </YMaps>
                    </FixedLayout>
                </Panel>
            </View>
        );
    }
};