import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiConfig } from "../../api/apiConfig";

export const cocktailSlice = createSlice({
  name: 'drinks',
  initialState: {
    cocktails: [],
    cocktail: [],
    error: null,
    loading: false,
    category: [],
    glass: [],
    alcoholic: [],
    ingredients:[],
  },

  reducers: {

    setCocktailList: (state, { payload }) => {
      state.cocktails = payload;
    },

    setLoading: (state, { payload }) => {
      state.loading = payload;
    },

    setSearchCocktail: (state, { payload }) => {
      state.cocktails = payload
    },

    setCocktailId: (state, { payload }) => {
      state.cocktail = payload;
    },

    setFetchCategory: (state, { payload }) => {
      state.category = payload
    },

    setFetchListCategory: (state, { payload }) => {
      return {
        ...state,
        cocktails: payload
      }
    },

    setFetchGlasses: (state, { payload }) => {
      state.glass = payload
    },

    setFetchListGlasses: (state, { payload }) => {
      return {
        ...state,
        cocktails: payload
      }
    },

    setFetchAlcoholic: (state, { payload }) => {
      state.alcoholic = payload
    },

    setFetchListAlcoholic: (state, { payload }) => {
      return {
        ...state,
        cocktails: payload
      }
    },

    setFetchIngredients: (state, { payload }) => {
      state.ingredients = payload;
    },

    setFetchListIngredients: (state, { payload }) => {
      return {
        ...state,
        cocktails: payload
      }
    }

  },

})

export const { setCocktailList, setLoading, setSearchCocktail, setCocktailId, setFetchCategory, setFetchListCategory, setFetchGlasses, setFetchListGlasses, setFetchAlcoholic, setFetchListAlcoholic,setFetchIngredients, setFetchListIngredients } = cocktailSlice.actions;

export const fetchAllCocktails = () => async (dispatch) => {
  try {

    const { data } = await axios.get(`${apiConfig.baseUrl}/search.php?s=`)
    dispatch(setCocktailList(data.drinks))


  } catch (error) {
    console.log(error.message)
    throw error;
  }
}

export const fetchSearchCocktails = (text) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${apiConfig.baseUrl}/search.php?s=${text}`);
    dispatch(setSearchCocktail(data.drinks));

  } catch (error) {
    console.log(error.message)
    throw error;
  }
}

export const fetchSingleCocktail = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${apiConfig.baseUrl}/lookup.php?i=${id}`);
    dispatch(setCocktailId(data.drinks))

  } catch (error) {
    console.log(error.message)
    throw error;
  }
}

export const fetchCategory = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${apiConfig.baseUrl}/list.php?c=list`)
    dispatch(setFetchCategory(data.drinks))
  } catch (error) {
    console.log(error.message)
    throw error;
  }
}

export const fetchFilterCategory = (search) => async (dispatch) => {
  try {

    const { data } = await axios.get(`${apiConfig.baseUrl}/filter.php?c=${search}`)
    dispatch(setFetchListCategory(data.drinks));

  } catch (error) {
    console.log(error.message)
    throw error;
  }
}


export const fetchGlasses = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${apiConfig.baseUrl}/list.php?g=list`)
    dispatch(setFetchGlasses(data.drinks))
  } catch (error) {
    console.log(error.message)
    throw error;
  }
}

export const fetchFilterGlasses = (search) => async (dispatch) => {

  try {
    const { data } = await axios.get(`${apiConfig.baseUrl}/filter.php?g=${search}`)
    dispatch(setFetchListGlasses(data.drinks));

  } catch (error) {
    console.log(error.message)
    throw error;
  }
}


export const fetchAlcoholic = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${apiConfig.baseUrl}/list.php?a=list`)
    dispatch(setFetchAlcoholic(data.drinks))
  } catch (error) {
    console.log(error.message)
    throw error;
  }
}

export const fetchFilterAlcoholic = (search) => async (dispatch) => {

  try {
    const { data } = await axios.get(`${apiConfig.baseUrl}/filter.php?a=${search}`)
    dispatch(setFetchListAlcoholic(data.drinks));

  } catch (error) {
    console.log(error.message)
    throw error;
  }
}


export const fetchIngredients = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${apiConfig.baseUrl}/list.php?i=list`)
    dispatch(setFetchIngredients(data.drinks))
  } catch (error) {
    console.log(error.message)
    throw error;
  }
}

export const fetchFilterIngredients = (search) => async (dispatch) => {

  try {
    const { data } = await axios.get(`${apiConfig.baseUrl}/filter.php?i=${search}`)
    dispatch(setFetchListIngredients(data.drinks));

  } catch (error) {
    console.log(error.message)
    throw error;
  }
}