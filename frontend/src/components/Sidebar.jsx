import {
    FaHome,
    FaCloud,
    FaRobot,
    FaUser
} from "react-icons/fa";

function Sidebar() {

    const menus = [
        {
            name: "Dashboard",
            icon: <FaHome />
        },
        {
            name: "API Marketplace",
            icon: <FaCloud />
        },
        {
            name: "AI Assistant",
            icon: <FaRobot />
        },
        {
            name: "Profile",
            icon: <FaUser />
        }
    ];

    return (
        <div className="w-64 h-screen bg-slate-900 text-white">

            <div className="text-2xl font-bold p-6">
                API Hub
            </div>

            {
                menus.map((item, index) => (

                    <div
                        key={index}
                        className="flex items-center gap-4 px-6 py-4 hover:bg-slate-700 cursor-pointer"
                    >
                        {item.icon}
                        {item.name}
                    </div>

                ))
            }

        </div>
    );
}

export default Sidebar;