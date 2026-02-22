import Sidebar from "../../components/Dashboard/Sidebar"

const Community = () =>{
    return(
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Left Sidebar */}
            <Sidebar></Sidebar>

            {/* Main Content */}
            <div className="flex-1 flex flex-col ml-64 overflow-y-auto">
                {/* Content */}
            </div>
        </div>
    )
}

export default Community