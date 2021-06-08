//useSWR Notes
//1. install it

//2. import it, useSWR from 'swr'

//3. Making the API request:
//const {} = useSWR() <--- this is the hook, and you are destructering the stuff you are getting back
//used for asynchronous API calls: doing something after the data is received or doing something while the data is loading
//const {data. error} = useSWR()
//data is represents the response you are going to be getting, and it comes from the library, same with error. There are also others
//then inside useSWR("link", fetcher) you can put the end point in the parans with a comma and then a fetcher (or axios?)
//if you are going to use fetcher, then you have to create a fetcher:
//fetcher is just a function that takes some args and makes an API call thru axios or fetch and we pass it.
//const fetcher = (...args) => fetch(...args).then((response) => response.json())
//args would then be replaced by the URL inside of the useSWR parens

//after the initial set up, you can just directly access data and you dont need to store it in a state.
