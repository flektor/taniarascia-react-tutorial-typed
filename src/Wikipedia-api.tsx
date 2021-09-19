import { Component } from 'react';

interface WikipediaApiState {
    data: any;
}

class WikipediaApi extends Component<{}, WikipediaApiState> {

    state = {
        data: [],
    }

    async componentDidMount() {
        const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*';


        //  const result = ((await fetch(url)).json);

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result,
                })
            });
    }

    render() {
        const { data } = this.state; 
        const result = data.map((entry, index) => {
            return <li key={index}> {entry} </li>
        });

        return <ul>{result}</ul>
    }
}

export default WikipediaApi;