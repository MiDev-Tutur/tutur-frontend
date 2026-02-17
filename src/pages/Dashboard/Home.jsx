import FollowingPanel from "../../components/FollowingPanel"
import ProfileHeader from "../../components/ProfileHeader"
import Sidebar from "../../components/Sidebar"
import Statistics from "../../components/Statistics"

const Home = () =>{
    return(
        <div className="min-h-screen bg-linear-to-br from-orange-50 to-white">
            <div className="flex gap-6 p-6">
                {/* Left Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <div className="flex-1 max-w-3xl">
                    <ProfileHeader />
                    <Statistics />
                </div>

                {/* Right Panel */}
                <FollowingPanel />
            </div>
        </div>
    )
}

export default Home