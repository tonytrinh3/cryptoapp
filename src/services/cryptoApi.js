import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders ={
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '48961dddddmsh6a00af64edb9004p1a3176jsnbc7ce3b583ed'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'


// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       tiers: '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
//       'X-RapidAPI-Key': '48961dddddmsh6a00af64edb9004p1a3176jsnbc7ce3b583ed'
//     }
//   };

const createRequest = (url)=>({url,headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query:()=>createRequest('/coins')
        })
    })
})

export const {
    useGetCryptosQuery //it is a hook that is made from redux to allow you to get the data of the crypto api
} = cryptoApi;