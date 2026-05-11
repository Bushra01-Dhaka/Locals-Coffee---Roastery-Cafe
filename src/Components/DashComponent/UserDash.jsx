import useAuth from "../../Hook/useAuth"


const UserDash = () => {
    const {user} = useAuth();
  return (
    <div>
        <div >
           <h2 className="text-3xl lg:text-4xl font-style">
            Welcome Back, {user?.displayName}
           </h2>
        </div>
    </div>
  )
}

export default UserDash