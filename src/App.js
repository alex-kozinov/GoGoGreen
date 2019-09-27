import React from 'react';
import { View, Panel, Root, Epic, Tabbar, TabbarItem, PanelHeader} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css';

import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';
import Icon28Search from '@vkontakte/icons/dist/28/search';
import Icon28Place from '@vkontakte/icons/dist/28/place';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';

import Progress from './views/Progress';
import Helper from './views/Helper';
import Guides from './views/Guides';
import Map from './views/Map';


class App extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			activeStory: 'progress'
		};
		this.onStoryChange = this.onStoryChange.bind(this);
	}

	onStoryChange (e) {
		this.setState({ activeStory: e.currentTarget.dataset.story })
	}

	render () {

		return (
			<Epic activeStory={this.state.activeStory} tabbar={
				<Tabbar>
					<TabbarItem
						onClick={this.onStoryChange}
						selected={this.state.activeStory === 'progress'}
						data-story="progress"
						text="Прогрес"
					><Icon28ArticleOutline /></TabbarItem>
					<TabbarItem
						onClick={this.onStoryChange}
						selected={this.state.activeStory === 'helper'}
						data-story="helper"
						text="Помощник"
					><Icon28Search /></TabbarItem>
					<TabbarItem
						onClick={this.onStoryChange}
						selected={this.state.activeStory === 'guides'}
						data-story="guides"
						text="Гайды"
					><Icon28Newsfeed /></TabbarItem>
					<TabbarItem
						onClick={this.onStoryChange}
						selected={this.state.activeStory === 'map'}
						data-story="map"
						text="Карта"
					><Icon28Place /></TabbarItem>
				</Tabbar>
			}>
				<Progress id="progress"/>
				<Helper id="helper"/>
				<Guides id="guides"/>
				<Map id="map"/>

			</Epic>
		)
	}
}

export default App;

