import React, {useState} from 'react'
import millify from 'millify'
import {Link} from 'react-router-dom'
import {Card, Row, Col, Input} from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'


const Cryptocurrencies = () => {
    const {data: cryptosList, isFetching} = useGetCryptosQuery();
    
    return (
        <div>
            Cryptocurrencies
        </div>
    )
}

export default Cryptocurrencies
