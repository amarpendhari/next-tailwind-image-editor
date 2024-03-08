import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ImageEditor from "@/components/imageEditor";
import { toast } from 'react-toastify';

const Dashboard = () => {

    const router = useRouter()
    const [user, setUser] = useState({})

    const logout = () => {
        toast.success('User Logged Out')
        localStorage.removeItem("currentUser");
        router.push('/auth/login')
    } 

    useEffect(() => {
        let found = localStorage.getItem('currentUser')
        if(found) setUser(JSON.parse(found))
    },[])

    return (
        <div className="dashboard-layout bg-white h-full h-lvh">
            <div className="dashboard-navbar m-auto p-5 bg-white">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl text-black"> Welcome <span className="font-semibold">{user?.name}</span>, to  Speedy Image Editor</h2>
                    </div>
                    <button className="speedy inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => logout()}>
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