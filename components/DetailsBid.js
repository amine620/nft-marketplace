import { View, Text , Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'
import { EthPrice } from './Subinfo'

const DetailsBid = ({bid}) => {
  return (
    <View style={{
      width:"100%",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center"
    }}>
     <Image
     source={bid.image}
     resizeMode="contain"
     style={{
       width:48,
       height:48,
     }}
      />
      <View>
        <Text style={{
          fontFamily:FONTS.semiBold,
          fontSize:SIZES.small,
          color:COLORS.primary
        }}>
          Bid Placed by {bid.name}
        </Text>

        <Text style={{
          fontFamily:FONTS.regular,
          fontSize:SIZES.small-2,
          color:COLORS.secondary,
          marginTop:3
        }}>
          Bid Placed by {bid.date}
        </Text>
      </View>
      <EthPrice price={bid.price} />
    </View>
  )
}

export default DetailsBid