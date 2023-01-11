import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className='max-w-2xl m-auto'>
            <Outlet />
        </div>
    )
}
