import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';
import popularData from '../assets/data/popularData';

const renderIngredientsItem = ({item}) => {
  return (
    <View key={item.id} style={styles.ingredient}>
      <Image source={item.image} style={styles.ingredientImage} />
    </View>
  );
};

const Details = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
              <Feather name="chevron-left" size={12} color={colors.textDark} />
            </View>
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <MaterialCommunityIcons
              name="star"
              size={12}
              color={colors.white}
            />
          </View>
        </View>
      </SafeAreaView>

      {/* Titles */}
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{item.title}</Text>
      </View>

      {/* Price  */}
      <View style={styles.priceWrapper}>
        <Text style={styles.priceTitle}>${item.price}</Text>
      </View>

      {/* Details */}
      <View style={styles.detailsWrapper}>
        <View style={styles.detailsLeft}>
          <View style={styles.detailsDesc}>
            <Text style={styles.detailsHeadline}>Size</Text>
            <Text style={styles.detailsSubline}>Medium 14”</Text>
          </View>
          <View style={styles.detailsDesc}>
            <Text style={styles.detailsHeadline}>Crust</Text>
            <Text style={styles.detailsSubline}>Thin Crust</Text>
          </View>
          <View style={styles.detailsDesc}>
            <Text style={styles.detailsHeadline}>Delivery In</Text>
            <Text style={styles.detailsSubline}>30 min</Text>
          </View>
        </View>

        <View style={styles.detailsRight}>
          <Image source={item.image} />
        </View>
      </View>

      {/* Ingredients */}
      <View>
        <View style={styles.ingredientsWrapper}>
          <Text style={styles.ingredientsTitle}>Ingredients</Text>
        </View>
        <View style={styles.ingredientListWrapper}>
          <FlatList
            data={item.ingredients}
            renderItem={renderIngredientsItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      {/* Place an order btn */}
      <View style={styles.orderWrapper}>
        <Text style={styles.orderText}>Place an order</Text>
        <Feather name="chevron-right" size={18} color={colors.black} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
  },

  //   header
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    borderRadius: 10,
    padding: 12,
  },
  headerRight: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 2,
    marginRight: 20,
  },
  //   Titles
  titleWrapper: {
    marginTop: 30,
  },
  title: {
    color: colors.black,
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    width: '50%',
  },
  priceWrapper: {
    paddingTop: 20,
  },
  priceTitle: {
    fontFamily: 'Montserrat-Bold',
    color: colors.secondary,
    fontSize: 32,
    marginBottom: 18,
  },
  //   details
  detailsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 40,
  },

  detailsLeft: {
    marginRight: 35,
  },
  detailsDesc: {
    paddingTop: 15,
  },

  detailsHeadline: {
    fontSize: 14,
    color: colors.textLight,
    fontFamily: 'Montserrat-Medium',
  },
  detailsSubline: {
    fontFamily: 'Montserrat-Bold',
    color: colors.black,
    fontSize: 16,
  },

  detailsRight: {
    overflow: 'hidden',
  },
  //   ingredients
  ingredientsWrapper: {
    marginVertical: 10,
  },
  ingredientsTitle: {
    fontFamily: 'Montserrat-Bold',
    color: colors.black,
    fontSize: 18,
  },
  ingredientListWrapper: {
    paddingVertical: 20,
  },
  ingredient: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginRight: 15,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  ingredientImage: {
    resizeMode: 'contain',
  },
  orderWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    flexDirection: 'row',
    padding: 23,
    borderRadius: 50,
    marginRight: 20,
  },
  orderText: {
    color: colors.black,
    fontFamily: 'Montserrat-SemiBold',
  },
});

export default Details;
