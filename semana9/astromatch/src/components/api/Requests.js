import React from 'react'
import axios from 'axios'

const auth = 'thais'

const urlGetProfile = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${auth}/person`

const urlGetMatches = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${auth}/matches`

const urlPostChoose = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${auth}/choose-person`

const urlPutClear = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${auth}/clear`


const getProfile = async () => {
  try {
    const res = await axios.get(urlGetProfile);
    return res.data.profile;
  } catch (error) {
    console.error(error);
  }
};

const postChoose = async (body) => {
  try {
    const res = await axios.post(urlPostChoose, body);
    if (body.choice && res.data.isMatch) {
      return true;
    }
  } catch (error) {
    console.error(error);
  }
};

const putClear = async () => {
  if (window.confirm('Deseja limpar seu histório de matches?')) {
    try {
      const res = await axios.put(urlPutClear);
      console.log(`Clear ${res.data.message}`);
    } catch (error) {
      console.error(error);
    }
  }
};

const reset = async () => {
  try {
    const res = await axios.put(urlPutClear);
    console.log(`Clear ${res.data.message}`);
  } catch (error) {
    console.error(error);
  }
};

export { getProfile, postChoose, putClear, reset };