import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ImageEditor from "@/components/imageEditor";

const Dashboard = () => {

    const router = useRouter()
    const [user, setUser] = useState({})

    const logout = () => {
        localStorage.removeItem("user");
        router.push('/auth/login')
    } 

    useEffect(() => {
        console.log(localStorage.getItem('user'))
        let found = localStorage.getItem('user')
        if(found) setUser(JSON.parse(found))
    },[])

    return (
        <div className="dashboard-layout bg-white h-full h-lvh">
            <div className="dashboard-navbar  m-auto p-5 bg-black">
                <div className="flex justify-between items-center">
                    <div>
                        WELOCME {user?.name} to Image Editor
                    </div>
                    <button className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => logout()}>
                        Logout
                    </button>
                </div>
            </div>
            <div className="dashboard-content">
                <ImageEditor />
            </div>
        </div>
    )
}
export default Dashboard