import React, { Component } from 'react';
import Controls from '../components/form/Controls';
import Display from '../components/form/Display';
import { fetchApi } from '../services/fetchApi';


export default class RestyContainer extends Component {
    state = {
        url: '',
        method: 'GET',
        jsonInput: '',
        results: {},
    }

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        const { url, method, jsonInput } = this.state;

        const apiResults = await fetchApi({ url, method, jsonInput });

        this.setState({
            apiResults
        })
    }

    render() {
        const { url, jsonInput, apiResults } = this.state;
        return (
            <main>
                <h1>Postman Mock</h1>
                <Controls 
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                    url={url}
                    jsonInput={jsonInput}
                />
                <Display results={apiResults}/>
                
            </main>
        )
    }
}
