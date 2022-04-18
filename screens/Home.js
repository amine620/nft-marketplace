import {View,SafeAreaView,FlatList,Text} from "react-native"
import {COLORS,NFTData} from '../constants'
import {NFTCard,HomeHeader,FocusedStatusBar} from "../components/index"
import { useState } from "react"

function Home() {
    const placement={
        position:'absolute',
        top:0,
        right:0,
        bottom:0,
        left:0,
        zIndex:-1
    }
    const [nftData, setNftData] = useState(NFTData)

    const handleSearch=(value)=>{

      // console.log(value);
           if (!value.length) {
             console.log("null");
              return setNftData(NFTData)
           }
           const filteredData=NFTData.filter((item)=>item.name.toLowerCase().includes(value.toLowerCase()))

           if(filteredData.length){
            setNftData(filteredData)
           } else{
             setNftData(NFTData)
           }
    }
  return (
     <SafeAreaView style={{flex:1}}>
       <FocusedStatusBar background={COLORS.primary} />

       <View style={{flex:1}}>
           <View style={{zIndex:0}}>
           <FlatList
              data={nftData}
              renderItem={({item})=><NFTCard data={item} />}
              keyExtractor={(item)=>item.id}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
            />
           </View>
           <View style={{...placement}}>

           <View style={{height:300,backgroundColor:COLORS.primary}}  />
           <View style={{flex:1,backgroundColor:COLORS.white}}  />

           </View>
       </View>
     </SafeAreaView>
  )
}

export default Home