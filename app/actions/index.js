/* eslint no-undef: "off" */

import config from '../../config';

export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const UPDATE_WEATHER_DATA = 'UPDATE_WEATHER_DATA';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_IS_FAHRENHEIT = 'SET_IS_FAHRENHEIT';
export const UPDATE_NEXT_5DAYS = 'UPDATE_NEXT_5DAYS';



// cập nhật update
export function updateSearchTerm(searchTerm) {
    return {
        type: UPDATE_SEARCH_TERM,
        searchTerm,
    };
}

// cập nhập dữ liệu thời tiết 5 ngày
export function update_5_days(weatherDatas) {
    return {
        type: UPDATE_NEXT_5DAYS,
        weatherDatas,
    };
}

// cập nhật dữ liệu thời tiết thời điểm hiện tại
export function updateWeatherData(weatherData) {
    return {
        type: UPDATE_WEATHER_DATA,
        weatherData,
    };
}

// set lỗi
export function setErrorMessage(errorMessage) {
    return {
        type: SET_ERROR_MESSAGE,
        errorMessage,
    };
}

// set loading
export function setIsLoading(isLoading) {
    return {
        type: SET_IS_LOADING,
        isLoading,
    };
}

// tìm kiếm thông tin nhiệt độ theo id thành phố
export function searchByCity(searchTerm) {
    return (dispatch) => {
        const { appid, url } = config;
        dispatch(setIsLoading(true));
        return fetch(`${url}weather?id=${searchTerm}&appid=${appid}`)
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

// tìm kiếm thông tin nhiệt độ hiện tại theo tọa độ
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

// tìm kiếm thông tin nhiệt đọ 5 ngày tới theo tọa độ
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
