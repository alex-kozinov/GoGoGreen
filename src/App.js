import React from 'react';
import { View, Panel, Root, Epic, Tabbar, TabbarItem, PanelHeader} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css';

import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';
import Icon28Search from '@vkontakte/icons/dist/28/search';
import Icon28Place from '@vkontakte/icons/dist/28/place';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';



class App extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			activeStory: 'history'
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
				<View id="progress" activePanel="progress">
					<Panel id="progress">
						<PanelHeader>Прогрес</PanelHeader>
					</Panel>
				</View>
				<View id="helper" activePanel="helper">
					<Panel id="helper">
						<PanelHeader>Помощник</PanelHeader>
					</Panel>
				</View>
				<View id="guides" activePanel="guides">
					<Panel id="guides">
						<PanelHeader>Гайды</PanelHeader>
					</Panel>
				</View>
				<View id="map" activePanel="map">
					<Panel id="map">
						<PanelHeader>Карта</PanelHeader>
					</Panel>
				</View>
			</Epic>
		)
	}
}

export default App;

