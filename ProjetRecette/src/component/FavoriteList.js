import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { recipeSelector } from './RecipeSlice';
import SingleMeal from './SingleMeal';

export default function FavoriteList() {
  const favorites = useSelector(recipeSelector);

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.idMeal}
      renderItem={({ item }) => (
        <SingleMeal Recipe={item} category="fav" />
      )}
    />
  );
}
