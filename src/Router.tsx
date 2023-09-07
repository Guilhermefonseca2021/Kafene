import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";

export function Router() {
    return (
        <Routes>
            {/* prinicipal deixa so a / pq usuario interagiu com nd */}
            <Route path='/' element={<Home/>}>
                <Route path="/home" element={<Home />} />
            </Route>
           
        </Routes>
    )
}