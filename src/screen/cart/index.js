import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import styles from './styles';
const {width} = Dimensions.get('window');
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Component = ({url, price, stock, onPressDecrement, onPressCount, onDelete}) => {
    return (
        <View style={styles.content}>
            <Image style={styles.img} source={{uri: url}} />
            <View style={styles.boxprice}>
                <Text style={styles.textprice}>$ {price}</Text>
            </View> 
            <View style={{flexDirection: 'row', marginHorizontal: width * 0.05}}>
                <TouchableOpacity style={styles.boxdecr} onPress={onPressDecrement}>
                    <Text style={{color: 'white'}}>-</Text>
                </TouchableOpacity>
                <Text style={{marginHorizontal: 10}}>{stock}</Text>
                <TouchableOpacity style={styles.boxcount} onPress={onPressCount}>
                    <Text style={{color: 'white'}}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxtrash} onPress={onDelete}>
                    <Feather name='trash-2' size={15} color="white"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Cart = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get('https://62e8dc1a249bb1284eb53770.mockapi.io/product')
        .then(res => {
            setData(res.data)
        })
        .catch(err => {
            console.log(err)
        }) 
    }

    const handleDecrement = (id) => {
        console.log(id)
        const newData = data.map(val => {
            console.log(val.id, 'asd')
            if (id == val.id) {
                return {
                    ...val,
                    stock: val.stock - 1
                }
            }
            return val;
        })
        setData(newData)
    }
    const handleCount = (id) => {
        console.log(id)
        const newData = data.map(val => {
            console.log(val.id, 'asd')
            if (id == val.id) {
                return {
                    ...val,
                    stock: val.stock + 1
                }
            }
            return val;
        })
        setData(newData)
    }
    const handleDelete = async (id) => {
        await axios.delete(`https://62e8dc1a249bb1284eb53770.mockapi.io/product/${id}`)
        getData()
    }
    return(
        <SafeAreaView style={{paddingBottom: 120}}>
            <ScrollView>
            {data.map((val, index) => {
                return (
                    <Component 
                        key={index} 
                        stock={val.stock} 
                        url={val.image} 
                        price={val.price} 
                        onPressDecrement={() => handleDecrement(val.id)}
                        onPressCount={() => handleCount(val.id)}
                        onDelete={() => handleDelete(val.id)}
                     />
                )
            })}
            </ScrollView>
            <View style={{flexDirection: 'row', paddingHorizontal: 10, paddingTop: 10}}>
                <Text style={{flex: 1}}>Dummy Product</Text>
                <TouchableOpacity style={styles.countdummy}>
                    <Text style={{color: 'white'}}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal: 20, backgroundColor: 'white'}}>
                <View style={{flexDirection: 'row', marginVertical: width * 0.02}}>
                    <Fontisto name='shopping-basket-add' size={15} />
                    <Text style={{marginHorizontal: width * 0.05, flex: 1}}>6</Text>
                    <Text >Total - Rp . 105.000</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.btnleft}>
                        <Text style={{color: 'white'}}>Close</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnright}>
                        <Text style={{color: 'white'}}>Go to Checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Cart;