import React from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

const renderCategoryItem = ({item}) => {
  return (
    <View
      style={[
        styles.categoryItemWrapper,
        {
          backgroundColor: item.selected ? colors.primary : colors.white,
        },
      ]}>
      <Image source={item.image} style={styles.categoryItemImage} />
      <Text style={styles.categoryItemTitle}>{item.title}</Text>
      <View
        style={[
          styles.categorySelectWrapper,
          {
            backgroundColor: item.selected ? colors.white : colors.secondary,
          },
        ]}>
        <Feather
          name="chevron-right"
          size={10}
          style={[{color: item.selected ? colors.black : colors.white}]}
        />
      </View>
    </View>
  );
};

const RenderPopularData = ({item, navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details', {item})}>
      <View
        style={[
          styles.popularCardWrapper,
          // eslint-disable-next-line react-native/no-inline-styles
          {marginTop: item.id === 1 ? 10 : 20},
        ]}>
        <View>
          <View style={styles.popularTopWrapper}>
            <MaterialCommunityIcons
              name="crown"
              size={15}
              color={colors.primary}
              style={styles.popularCrown}
            />
            <Text style={styles.popularTopText}>top of the week</Text>
          </View>

          <View style={styles.popularMiddleWrapper}>
            <Text style={styles.popularTopText}>{item.title}</Text>
            <Text style={styles.popularSubText}>Weight {item.weight}</Text>
          </View>

          <View style={styles.popularBottomWrapper}>
            <View style={styles.plusWrapper}>
              <Feather name="plus" size={10} color={colors.textDark} />
            </View>

            <View style={styles.ratingWrapper}>
              <MaterialCommunityIcons
                name="star"
                size={10}
                color={colors.textDark}
              />
              <Text style={styles.rating}>{item.rating}</Text>
            </View>
          </View>
        </View>

        <View style={styles.popularRightWrapper}>
          <Image style={styles.popularImage} source={item.image} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <Image
              style={styles.profileImage}
              source={require('../assets/images/profile.png')}
            />
            <Feather name="menu" size={24} color={colors.textDark} />
          </View>
        </SafeAreaView>

        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.titlesSubtitle}>Food</Text>
          <Text style={styles.titlesTitle}>Delivery</Text>
        </View>

        {/* Search */}
        <View style={styles.searchWrapper}>
          <Feather name="search" size={16} color={colors.textDark} />
          <View style={styles.search}>
            <Text style={styles.searchText}>Search</Text>
          </View>
        </View>

        {/* Categories Section */}
        <View style={styles.categoriesWrapper}>
          <Text style={styles.title}>Categories</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoryItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Popular Section */}
        <View>
          <Text style={styles.title}>Popular</Text>
          {popularData.map(data => (
            <RenderPopularData
              key={data.id}
              item={data}
              navigation={navigation}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //wraps the entire screen
    flex: 1,
    paddingHorizontal: 20,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  titlesWrapper: {
    marginTop: 30,
  },
  titlesSubtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.textDark,
  },
  titlesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },
  searchWrapper: {
    flexDirection: 'row',
    marginTop: 30,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: '#CDCDCD',
    borderBottomWidth: 2,
  },
  searchText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    marginBottom: 5,
    color: colors.textLight,
  },
  categoriesWrapper: {
    marginTop: 30,
    color: colors.black,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    marginBottom: 10,
  },
  categoriesListWrapper: {paddingBottom: 20},
  // single item
  categoryItemWrapper: {
    marginRight: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginTop: 25,
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    marginVertical: 10,
  },
  categorySelectWrapper: {
    marginBottom: 20,
    marginTop: 10,
    alignSelf: 'center',
    width: 26,
    height: 26,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // popular data
  popularCardWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  //   left top wrapper
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  popularCrown: {
    marginRight: 10,
  },
  popularTopText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#000000',
  },
  popularSubText: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.textLight,
  },
  //   left middle wrapper
  popularMiddleWrapper: {
    marginTop: 20,
    paddingLeft: 20,
  },

  popularBottomWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  plusWrapper: {
    fontFamily: 'Montserrat-SemiBold',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    color: colors.textDark,
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: 5,
  },

  //   right wrapper
  popularRightWrapper: {
    marginLeft: 40,
  },
  popularImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});

export default Home;
