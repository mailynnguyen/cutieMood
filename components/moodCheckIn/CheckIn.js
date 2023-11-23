import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import SuperAwesomeImage from '../../assets/icons-orange/superAwesome.png';
import PrettyGoodImage from '../../assets/icons-orange/prettyGood.png';
import OkayImage from '../../assets/icons-orange/okay.png';
import PrettyBadImage from '../../assets/icons-orange/prettyBad.png';
import ReallyTerribleImage from '../../assets/icons-orange/reallyTerrible.png';


const CheckIn = () => {
	const [firstImageClicked, setFirstImageClicked] = useState(true)
	const [secondImageClicked, setSecondImageClicked] = useState(true)
	const [thirdImageClicked, setThirdImageClicked] = useState(true)
	const [fourthImageClicked, setFourthImageClicked] = useState(true)
	const [fifthImageClicked, setFifthImageClicked] = useState(true)
	const [displayText, setDisplayText] = useState('')

	const handlePress = (textToChange) => {
		setDisplayText(textToChange)
    }
	
	return (
		<View style={styles.container}>
			<View style={styles.icons}>
				
				<TouchableOpacity
					onPress={() => {
						handlePress('super awesome')
						setFirstImageClicked(!firstImageClicked)
					}}>
					
					<Image
						style={styles.icon}
						source={SuperAwesomeImage} />
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => {
						handlePress('pretty good')
				}}>
					<Image style={styles.icon} source={ PrettyGoodImage } />
				</TouchableOpacity>

				<TouchableOpacity onPress={() => {
					handlePress('okay')
				}}>
					<Image style={styles.icon} source={OkayImage} />
				</TouchableOpacity>

				<TouchableOpacity onPress={() => {
					handlePress('pretty bad')
				}}>
					<Image style={styles.icon} source={PrettyBadImage} />
				</TouchableOpacity>

				<TouchableOpacity onPress={() => {
					handlePress('really terrible')
				}}>
					<Image style={styles.icon} source={ReallyTerribleImage} />
				</TouchableOpacity>

			</View>

			<View style={styles.line}></View>

			
			<Text style={styles.text}>{displayText}</Text>

		</View>




	)


}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F7EEE2',
		borderRadius: 20,
		height: 160,
		width: 300,
		alignItems: 'center'
	},

	icons: {
		flexDirection: 'row',


	},

	icon: {
		height: 80,
		width: 50,
		marginTop: 8

	},

	line: {
		borderColor: '#685D79',
		borderWidth: 0.5,
		marginTop: 14,
		width: 260,
		backgroundColor: '#000'
	},

	text: {
		color: '#D8737F',
		marginTop: 16,
		fontSize: 20,
		fontFamily: 'Gaegu-Bold'
	}

})

export default CheckIn;