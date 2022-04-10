import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders ={
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_COINRANKING_API_KEY
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url)=>({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`)
        })
    })
})

export const {
    useGetCryptosQuery //it is a hook that is made from redux to allow you to get the data of the crypto api
} = cryptoApi;