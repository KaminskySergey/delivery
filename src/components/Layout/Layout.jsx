
import { Suspense } from "react"
import Header from "../../pages/Header/Header"
import { Outlet } from "react-router-dom"
import Box from "../Box/Box"


const Layout = ({children}) => {
    return (
        <>
        <Header />
        
        <main>
            <Box style={{width: '99%', borderRadius: '32px', display: 'flex'}}>

            
            <Suspense>
                <Outlet fallback={null}></Outlet>
            </Suspense>
            </Box>
        </main>
        </>
    )
}

export default Layout