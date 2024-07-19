import { Header } from "./components/header/Header";

import 'bootstrap/dist/css/bootstrap.min.css';
import { EstateList } from "./components/estate-list/EstateList";

function App() {
    return (
        <>
            <Header></Header>
            <EstateList></EstateList>
        </>
    )
}

export default App
