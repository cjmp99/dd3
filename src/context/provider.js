import React, { useEffect, useReducer, useState } from 'react';
import { Dd3Reducer, initialState } from './reducer';
import Dd3Context from './context';
import axios from 'axios'

const URL = process.env.REACT_APP_URL_BACKEND

const Dd3Provider = props => {
    const [data, setData] = useState({
        text: '',
        type: ''
    })
    const [state, dispatch] = useReducer(Dd3Reducer, initialState);

    const getListroperties = async () => {
        try {
            const response = await axios.get(`${URL}/buy`)
            const responseRent = await axios.get(`${URL}/rent`)
            dispatch({ type: 'GET_LIST', payload: [...response.data, ...responseRent.data] })
        } catch (error) {
            console.log(error);
        }
    }

    const selectedProperty = (property) => {
        dispatch({ type: 'SELECTED_PROPERTY', payload: property })
    }

    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (data.text !== '' && data.type !== '') {
            const results = state.listProperties.filter((item => item[data.type] === parseInt(data.text)))
            dispatch({ type: 'GET_LIST', payload: results })

            if (results.length === 0) {
                getListroperties()
                setData({
                    text: '',
                    type: ''
                })
            }
        }
        //eslint-disabled-next-line
    }, [data])

    return (
        <Dd3Context.Provider
            value={{
                ...state,
                filterData: data,
                getListroperties,
                selectedProperty,
                onChange
            }}
        >
            {props.children}
        </Dd3Context.Provider>
    )
}

export default Dd3Provider;