import React from "react"
import { FlatList, Image, Text,View } from "react-native"

const Product = () =>{
    return (
        <View>
            <Text style={{textAlign:'center',fontSize:30}}>FlatListBasics</Text>
            <View>
                <FlatList 
                    data={[
                        {'key':'Hello'},
                        {'key':'Heẻytew'},
                        {'key':'fzdhbfdghg'},
                        {'key':'Hdshfg'},
                        {'key':'Htygrehth'},
                        {'key':'rdjfdhnfg'},
                        {'key':'sugvfird'},
                        {'key':'jusdfvg'},
                        {'key':'joisđfuvgbedt'},
                        {'key':'msdfafsoighhed'},
                        {'key':'judfvg'},
                        {'key':'dfjugbtfud'},
                        {'key':'HHFBcduwerr'},
                        {'key':'JUFCHBdrus'},
                    ]}
                    renderItem={({item}) => 
                    <View style={{alignItems:'center'}}>
                        <Image style={{height:100}} source={require('./assets/imgs/img01.jpg')} />
                        <Text style={{color:'red'}}>{item.key}</Text>
                    </View>}
                />
            </View>
        </View>
    )
}

export default Product;