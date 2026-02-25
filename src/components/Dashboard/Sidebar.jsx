import { Link, useLocation, useNavigate } from 'react-router-dom';
import learn from "../../assets/img/logo/book.png"
import lang from "../../assets/img/logo/lang.png"
import subscribe from "../../assets/img/logo/subs.png"
import community from "../../assets/img/logo/community.png"
import badge from "../../assets/img/logo/badge.png"
import profile from "../../assets/img/logo/profile.png"
import logout from "../../assets/img/logo/logout.png"

const Sidebar = () =>{
    const navigate = useNavigate();
    const location = useLocation()
    const isActive = location.pathname;

    const sidebarMenus = [
        { icon: learn, to: '/learn', label: 'LEARN'},
        { icon: lang, to: '/language', label: 'LANGUAGE'},
        { icon: subscribe, to: '/subscriptions', label: 'SUBSCRIBE' },
        { icon: community, to: '/community', label: 'COMMUNITY' },
        { icon: badge, to: '/badge', label: 'BADGE' },
        { icon: profile, to: '/profile', label: 'PROFILE' },
    ];
    
    return(
        <div className="w-64 bg-white border-r border-gray-200 p-5 flex flex-col justify-between fixed left-0 top-0 h-screen">
            <div className="text-4xl font-bold text-zinc-800">Tutur.</div>
            
            <nav className="space-y-2  mt-12 flex-1">
            {sidebarMenus.map((menu, idx) => (
                <Link
                    to={menu.to}
                    key={idx}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer transition-all ${
                        menu.to == isActive 
                        ? 'bg-cyan-100 border-2 border-cyan-400'
                        : 'hover:bg-gray-100'
                    }`}
                >
                    <img src={menu.icon} className="w-8"/>
                    <span className={`font-semibold text-sm ${menu.active ? 'text-cyan-600' : 'text-gray-600'}`}>
                        {menu.label}
                    </span>
                </Link>
            ))}
            </nav>
            <button
                onClick={() => navigate('/login')}
                className="w-full max-w-xs flex justify-center gap-3 items-center bg-[#E70101] text-white cursor-pointer hover:shadow-none shadow-[0_4px_0_#C00303] font-medium py-4 px-6 rounded-xl transition transform hover:translate-y-1 duration-300"
            >
                <img className='w-5' src={logout} alt="" />
                <span>LOGOUT</span>
            </button>
        </div>
    )
}

export default Sidebar