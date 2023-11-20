import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
/*import SuperAwesomeImage from '../../assets/icons-orange/superAwesome.png';*/
import RishiImage from '../../assets/rishi.png';
import PrettyGoodImage from '../../assets/icons-orange/pretty-good.png';
import OkayImage from '../../assets/icons-orange/okay.png';
import PrettyBadImage from '../../assets/icons-orange/prettyBad.png';
import ReallyTerribleImage from '../../assets/icons-orange/reallyTerrible.png';


const CheckIn = () => {
	const [firstImageClicked, setFirstImageClicked] = useState(true);
	const [secondImageClicked, setSecondImageClicked] = useState(true);
	const [thirdImageClicked, setThirdImageClicked] = useState(true);
	const [fourthImageClicked, setFourthImageClicked] = useState(true);
	const [fifthImageClicked, setFifthImageClicked] = useState(true);
	const [displayText, setDisplayText] = useState('')

	const handlePress = (textToChange) => {
		setIsPressed(!isPressed),
		isPressed ? setDisplayText(textToChange) : setDisplayText('')
    }
	
	return (
		<View style={styles.container}>
			<View style={styles.icons}>
				
				<TouchableOpacity onClick={() => {
					setFirstImageClicked(!firstImageClicked),
					firstImageClicked ? setDisplayText('super awesome') : setDisplayText('')
				}}>
					
					<Image
						style={styles.icon}
						source={RishiImage} />
				</TouchableOpacity>

				<TouchableOpacity
					onClick={() => {
						setSecondImageClicked(!secondImageClicked),
						secondImageClicked ? setDisplayText('pretty good') : setDisplayText('')
				}}>
					<Image style={styles.icon} source={{ PrettyGoodImage }} />
				</TouchableOpacity>

				<TouchableOpacity onClick={() => {
					setThirdImageClicked(!thirdImageClicked),
						thirdImageClicked ? setDisplayText('okay') : setDisplayText('')
				}}>
					<Image style={styles.icon} source={{ OkayImage }} />
				</TouchableOpacity>

				<TouchableOpacity onClick={() => {
					setFourthImageClicked(!FourthImageClicked),
					fourthImageClicked ? setDisplayText('pretty bad') : setDisplayText('')
				}}>
					<Image style={styles.icon} source={{ PrettyBadImage }} />
				</TouchableOpacity>

				<TouchableOpacity onClick={() => {
					setFifthImageClicked(!FifthImageClicked),
					fifthImageClicked ? setDisplayText('really terrible') : setDisplayText('')
				}}>
					<Image style={styles.icon} source={{ ReallyTerribleImage }} />
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
		borderColor: '#000',
		borderWidth: 2,


	},

	line: {
		borderColor: '#685D79',
		borderWidth: 0.5,
		marginTop: 20,
		width: 260,
		backgroundColor: '#000'
	},

	text: {
		color: '#D8737F',
		marginTop: 20,
		fontSize: 20,
		fontFamily: 'Gaegu-Bold'
	}

})

export default CheckIn;