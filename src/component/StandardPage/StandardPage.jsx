import Banner from '../Banner/Banner'
import { Outlet } from 'react-router-dom'

export default function StandardPage() {
    return (
        <main>
            <Banner />

            <Outlet />
        </main>
    )
}