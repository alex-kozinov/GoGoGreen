import React from 'react';
import {View, Panel, Root, Epic, Tabbar, TabbarItem, PanelHeader} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css';

import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';
import Icon28Search from '@vkontakte/icons/dist/28/search';
import Icon28Place from '@vkontakte/icons/dist/28/place';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';

import ProgressPage from './views/ProgressPage';
import Helper from './views/Helper';
import Guides from './views/Guides';
import MyMap from './views/MyMap';

import "./styles/main.css"

class App extends React.Component {
    constructor(props) {
        super(props);

        this.mem = {
            activeStory: 'progress',
            callBackYmaps: {},
            activePanel: "progress",
            mode: "plastic",
            allProgress: {
                "plastic": 3,
                "intro": 0
            },
            startProgress: {
                "plastic": 3,
                "intro": 0
            },
            maxProgress: {
                "plastic": 10,
                "intro": 3
            }
        };

        this.state = {
            activeStory: 'progress',
            callBackYmaps: {}
        };

        this.onStoryChange = this.onStoryChange.bind(this);
        this.getMem = this.getMem.bind(this);
        this.setMem = this.setMem.bind(this);
    }

    getMem() {
        return this.mem;
    }

    setMem(newMem) {
        let updateState = {};
        let updated = false;
        for (let x in newMem) {
            if (x in this.state) {
                updateState[x] = newMem[x];
                updated = true;
            }
        }

        this.mem = {...this.mem, ...newMem};

        if (updated) {
            this.setState(updateState);
        }
        console.log(this.mem)
    }

    onStoryChange(entity) {
        this.setState({activeStory: entity.currentTarget.dataset.story})
    }

    render() {
        return (
            <Epic activeStory={this.state.activeStory} tabbar={
                <Tabbar>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'progress'}
                        data-story="progress"
                        text="Прогрес"
                    ><Icon28ArticleOutline/></TabbarItem>
                    {/*<TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'helper'}
                        data-story="helper"
                        text="Помощник"
                    ><Icon28Search/></TabbarItem>*/}
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'guides'}
                        data-story="guides"
                        text="Гайды"
                    ><Icon28Newsfeed/></TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'mymap'}
                        data-story="mymap"
                        text="Карта"
                    ><Icon28Place/></TabbarItem>
                </Tabbar>
            }>
                <ProgressPage id="progress" setMem={this.setMem} getMem={this.getMem}/>
                <Helper id="helper"/>
                <Guides id="guides"/>
                <MyMap id="mymap"/>
            </Epic>
        )
    }
}

export default App;

