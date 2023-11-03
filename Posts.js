import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, Image } from 'react-native'

import PostImages from './PostImages'

function Posts({ item, navigation }){



function postsItem({ item }){
return (
<View style={styles.posts_item}>
<View style={{flexDirection: 'column'}}  >
<Image
    style={styles.user_image}
    source={{uri: item.user_image}}
    />
<Text style={styles.user_name} numberOfLines={1}>{item.user_name}</Text>
</View>
<PostImages item={'post_images' in item ? item.post_images: item} navigation={navigation}/>
<Image
    style={styles.user_image}
    source={{uri: item.user_image}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.user_name} numberOfLines={1}>{item.user_name}</Text>
<Text style={styles.post_description}>{item.post_description}</Text>
</View>
</View>
)}

return (
<FlatList
    style={styles.posts}
    data={item}
    renderItem={postsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default Posts;

const styles = StyleSheet.create({
    "user_name": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "user_image": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5
    },
    "post_description": {
        "fontSize": 12,
        "marginTop": 5,
        "fontWeight": "250",
        "marginHorizontal": 10,
        "paddingHorizontal": "2.1px"
    }
});