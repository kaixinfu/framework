import axios from 'axios';
function App() {
    const fnGet = () => {
        console.log("axios...")
        axios.get("http://localhost:3001/user", { body: { abc: 123 }, bb: 3218, params: { c: 7987 } }).then(res => {
            console.log("Res...", res)
        })
    }
    const fnPost = () => {
        console.log("axios...")
        axios.post("http://localhost:3001/login", { c: 7987 }).then(res => {
            console.log("Res...", res)
        })
    }
    return (
        <div className="App">
            <div onClick={fnGet}>1</div>
            <div onClick={fnPost}>2</div>
        </div>
    );
}

export default App;
