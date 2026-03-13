import Sidebar from "../../components/Dashboard/Sidebar"
import ProfileHeader from "../../components/ProfileHeader"

const Profile = () => {

    return (

        <div className="flex min-h-screen bg-gray-50">

            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 ml-64 px-10 py-8">

                {/* Profile Section */}
                <div className="col-span-8 space-y-6">

                    <div className="bg-white rounded-2xl shadow-sm p-6">
                        <ProfileHeader />
                    </div>
                </div>
            </div>

        </div>

    )

}

export default Profile