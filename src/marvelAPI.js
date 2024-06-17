import axios from 'axios';
import CryptoJS from 'crypto-js';

const publicKey = '2e377760d9a4902a6d6552b5ad088db2';
const privateKey = '09109523d821a3784144fd1a67e482e1e6ce0d31';
const timestamp = new Date().getTime();
const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();

//Functions used to pull the data we want from the Marvel API.

const getCharacters = async (limit = 100) => {
  const apiUrl = `https://gateway.marvel.com:443/v1/public/characters?limit=${limit}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data.data.results;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getComics = async (limit = 50) => {
  const apiUrl = `https://gateway.marvel.com:443/v1/public/comics?limit=${limit}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data.data.results;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getSeries = async (limit = 50) => {
  const apiUrl = `https://gateway.marvel.com:443/v1/public/series?limit=${limit}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data.data.results;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getEvents = async (limit = 50) => {
  const apiUrl = `https://gateway.marvel.com:443/v1/public/events?limit=${limit}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data.data.results;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getComicsForCharacter = async (characterId, limit = 50) => {
  const apiUrl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?limit=${limit}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data.data.results;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getSeriesForCharacter = async (characterId, limit = 50) => {
  const apiUrl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/series?limit=${limit}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data.data.results;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getCharactersForComic = async (comicId, limit = 50) => {
  const apiUrl = `https://gateway.marvel.com:443/v1/public/comics/${comicId}/characters?limit=${limit}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data.data.results;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getCreatorsForComic = async (comicId, limit = 50) => {
  const apiUrl = `https://gateway.marvel.com:443/v1/public/comics/${comicId}/creators?limit=${limit}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data.data.results;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export {
  getCharacters,
  getComics,
  getSeries,
  getEvents,
  getComicsForCharacter,
  getSeriesForCharacter,
  getCharactersForComic,
  getCreatorsForComic,
};
