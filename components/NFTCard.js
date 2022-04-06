import { View, Image , Text} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {COLORS,SIZES,SHADOWS,assets} from '../constants'
import { CricleButton ,RectButton} from './Button'
import {NFTTitle,EthPrice, SubInfo} from './Subinfo'


const NFTCard = ({data}) => {
    const navigation=useNavigation()

    const handlePress=()=>{

    }
  return (
    <View style={{
        backgroundColor:COLORS.white,
        borderRadius:SIZES.font,
        marginBottom:SIZES.extraLarge,
        margin:SIZES.base,
        ...SHADOWS.dark
    }}>
        <View style={{width:"100%",height:250}} >
          <Image source={data.image} 
          style={{
              width:"100%",
              height:"100%",
              borderTopLeftRadius:SIZES.font,
              borderTopRightRadius:SIZES.font
          }}
          />
          <CricleButton imgUrl={assets.heart} right={10} top={10} handlePress={handlePress} />
        </View>

        <SubInfo  />
        <View 
        style={{
            width:"100%",
            padding:SIZES.font
        }}
        >
            <NFTTitle 

            title={data.name}
            subTitle={data.creator}
            titleSize={SIZES.large}
            subTitleSize={SIZES.small}
             />
             <View style={{
                 marginTop:SIZES.font,
                 flexDirection:"row",
                 justifyContent:"space-between",
                 alignItems:"center",
             }}>
              <EthPrice price={data.price} />
              <RectButton 
              minWidth={120}
              fontSize={SIZES.font}
              handlePress={()=>{navigation.navigate('Details',{data})}}
              />
             </View>
        </View>
    </View>
  )
}

export default NFTCard