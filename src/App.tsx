import './App.css'
import {
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import Photos from "./components/Photos.tsx";

const queryClient = new QueryClient()

function App() {

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Photos/>
            </QueryClientProvider>
        </>
    )
}

export default App
