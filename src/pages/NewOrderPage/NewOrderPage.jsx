import { useState, useEffect, useRef } from 'react'
import * as itemsAPI from '../../utilities/items-api'
import './NewOrderPage.css';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage() {
    const [ menuItems, setMenuItems ] = useState([])
    const categoriesRef = useRef([])

    useEffect(function() {
        (async function() {
            const items = await itemsAPI.getAll()
            categoriesRef.current = [...new Set(items.map(item => item.category.name))]
            setMenuItems(items)
        })()
    }, [])

    // - Fetch the menuItems from the server via AJAX
    // - When the data comes back, call setMenuItems to save in state
    return (
        <main className="NewOrderPage">
            <aside>
                <Logo />
                <CategoryList
                    categories={categoriesRef.current}
                    activeCat={activeCat}
                    setActiveCat={setActiveCat}
                />
                <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
                <UserLogOut user={user} setUser={setUser} />
            </aside>
            <MenuList
                menuItems={menuItems.filter(item => item.category.name === activeCat)}
            />
            <OrderDetail />
        </main>
    )
}