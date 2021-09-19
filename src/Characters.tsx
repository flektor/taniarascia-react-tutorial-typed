import { Component } from 'react';
import { Form } from './Form';
import { Table, CharacterData } from './Table';

interface CharactersState {
    characters: CharacterData[];
}

class Characters extends Component<{}, CharactersState> {

    state = {
        characters: [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ]
    };


    handleSubmit = (character: CharacterData) => {
        this.setState({ characters: [...this.state.characters, character] })
    }


    render() {

        const removeCharacter = (index: number) => {

            const { characters } = this.state;
            this.setState({
                characters: characters.filter((character: CharacterData, i: number) => {
                    return i !== index;
                })
            });
        }


        const { characters } = this.state;

        return (
            <div className='container'>
                <Table characterData={characters} removeCharacter={removeCharacter} />
                <br />
                <Form onFormSubmit={this.handleSubmit} />
            </div>
        )
    };
}


export default Characters;