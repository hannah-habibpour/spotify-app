import axios from "axios";
import searchResult from './data/searchResult.json'
import { SearchResult } from "./App";

interface Prop {
    q: string;
    callback: (data: any) => void;
}

export const searchApi = (query: String) => {
    // return searchResult
    let data: SearchResult = {} as SearchResult

    if (query === 'hello') {
        data = searchResult.hello
    } else if (query === 'love') {
        data = searchResult.love
    } else {
        data = searchResult.love
    }

    // axios.get('https://spotify23.p.rapidapi.com/search/', {
    //   params: {
    //     q: query,
    //     type: 'tracks',
    //     offset: '0',
    //     limit: '12',
    //     numberOfTopResults: '5'
    //   },
    //   headers: {
    //     'X-RapidAPI-Key': 'b5f8895351mshc9f118e556e8e2ep1edce3jsnea4198fcd70f',
    //     'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    //   }
    // })
    //   .then(response => {
    //     // Call the callback function with the response data
    //     data = response.data
    //   }).catch(error => {
    //     // Handle the error
    //     console.error(error.message);
    //   });
    return data
  }
