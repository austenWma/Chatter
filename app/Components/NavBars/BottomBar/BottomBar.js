import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

class TopBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
		}
		this.goToDiscoverFeedPage = this.goToDiscoverFeedPage.bind(this)
	}
	
	goToDiscoverFeedPage() {
		if (this.props.currPage !== 'DiscoverFeed') {
			Actions.DiscoverFeed();
		}
	}

  render() {
		return	(
      <View style={styles.bottomBarContainer}>
				<View style={styles.discoverContainer}>
					<TouchableOpacity onPress={this.goToDiscoverFeedPage} style={styles.tab}>
            <Text>Discover</Text>
          </TouchableOpacity>
				</View>
				<View style={styles.uploadContainer}>
					<TouchableOpacity onPress={() => {console.log('Clicked')}} style={styles.tab}>
            <Text>Upload</Text>
          </TouchableOpacity>
				</View>
				<View style={styles.chatterContainer}>
					<TouchableOpacity onPress={() => {console.log('Clicked')}} style={styles.tab}>
            <Text>Chatter</Text>
          </TouchableOpacity>
				</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	bottomBarContainer: {
		position: 'absolute',
    height: '10%',
		top: '90%', 
		width: '100%',
		borderWidth: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	discoverContainer: {
		height: '100%',
		width: '33.33%',
		borderWidth: 1
	},
	uploadContainer: {
		height: '100%',
		width: '33.33%',
		borderWidth: 1
	},
	chatterContainer: {
		height: '100%',
		width: '33.33%',
		borderWidth: 1
	},
	tab: {
		height: '100%',
		width: '100%'
	}
});


export default TopBar;