 
import { Component } from 'react'; 
import { CharacterData } from './Table'; 
import { Tabs } from './Tabs';

interface AppState {
    characters: CharacterData[];
}

class App extends Component<{}, AppState> {

    render() {
        return (
            <div className='container'>
                <Tabs />
            </div>
        )
    }
}


export default App;