const urls = {
    topStories: 'https://hacker-news.firebaseio.com/v0/topstories.json',
    getItemUrl: (itemId) => `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`
}

class HackerNewsClient {
    getTopStories(){
        return getData(urls.topStories);
    }

    getItem(id){
        const itemUrl = urls.getItemUrl(id);
        return getData(itemUrl);
    }
}

async function getData(url){
    let response = await fetch(url);
    if (!response.ok) throw new Error('Error 404: Url not found');
    let jsonResponse = await response.json();
    return jsonResponse;
}

export default HackerNewsClient;
