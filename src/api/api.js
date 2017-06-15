import fetch from 'isomorphic-fetch';


const sendRequest = (url)=>{
    return fetch(url)
        .then((response) => {
            return response.json()
        });
};

export function getPicturesList(pageNumber) {
    return sendRequest(`https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF&page=${pageNumber}`)
}

