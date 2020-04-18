/* eslint no-undef: "off" */

import config from '../../config';

export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const UPDATE_WEATHER_DATA = 'UPDATE_WEATHER_DATA';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_IS_FAHRENHEIT = 'SET_IS_FAHRENHEIT';
export const UPDATE_NEXT_5DAYS = 'UPDATE_NEXT_5DAYS';

/**
 * updateSearchTerm - set new search term
 * @param  {string} searchTerm - what the user entered
 * @return {object} Action
 */
export function updateSearchTerm(searchTerm) {
    return {
        type: UPDATE_SEARCH_TERM,
        searchTerm,
    };
}

/**
 *UPDATE_NEXT_5DAYS - set weather data
 * @param  {string} daysData - what the user entered
 * @return {object} Action
 */
export function update_5_days(weatherDatas) {
    return {
        type: UPDATE_NEXT_5DAYS,
        weatherDatas,
    };
}

/**
 * updateWeatherData - set data from API response
 * @param  {object} weatherData - response from API
 * @return {object} Action
 */
export function updateWeatherData(weatherData) {
    return {
        type: UPDATE_WEATHER_DATA,
        weatherData,
    };
}

/**
 * setErrorMessage - change or show error message
 * @param {object} errorMessage - message to display
 * @return {object} Action
 */
export function setErrorMessage(errorMessage) {
    return {
        type: SET_ERROR_MESSAGE,
        errorMessage,
    };
}

/**
 * setIsLoading - show or hide loading spinner
 * @param {boolean} isLoading
 * @return {object} Action
 */
export function setIsLoading(isLoading) {
    return {
        type: SET_IS_LOADING,
        isLoading,
    };
}

/**
 * setIsFahrenheit - toggle between F and C temperatures
 * @param {Boolean} isFahrenheit
 * @return {object} Action
 */
export function setIsFahrenheit(isFahrenheit) {
    return {
        type: SET_IS_FAHRENHEIT,
        isFahrenheit,
    };
}

export function searchByCity(searchTerm) {
    return (dispatch) => {
        const { appid, url } = config;
        dispatch(setIsLoading(true));
        return fetch(`${url}weather?q=${searchTerm}&appid=${appid}`)
            .then(response => response.json())
            .then((data) => {
                dispatch(setErrorMessage(''));
                dispatch(setIsLoading(false));
                dispatch(updateWeatherData(data));
            })
            .catch(() => {
                dispatch(updateWeatherData({}));
                dispatch(setErrorMessage(`Could not fetch weather for ${searchTerm}`));
            });
    };
}

export function searchByCoordinates(latitude, longitude) {
    return (dispatch) => {
        const { appid, url } = config;
        dispatch(setIsLoading(true));
        return fetch(`${url}weather?lat=${latitude}&lon=${longitude}&lang=vi&units=metric&appid=${appid}`)
            .then(response => response.json())
            .then((data) => {
                dispatch(setErrorMessage(''));
                dispatch(setIsLoading(false));
                dispatch(updateWeatherData(data));
            })
            .catch(() => {
                dispatch(updateWeatherData({}));
                dispatch(setErrorMessage('Could not fetch weather for your location'));
            });
    };
}
export function search5daysByCoordinates(latitude, longitude) {
    return (dispatch) => {
        const { appid, url } = config;
        dispatch(setIsLoading(true));
        return fetch(`${url}onecall?lat=${latitude}&lon=${longitude}&lang=vi&units=metric&appid=${appid}`)
            .then(response => response.json())
            .then((data) => {
                dispatch(setErrorMessage(''));
               dispatch(setIsLoading(false));
               dispatch(update_5_days(data));

            })
            .catch(() => {
                dispatch(update_5_days({}));
                dispatch(setErrorMessage('Could not fetch weather for your location'));
            });
    };
}
