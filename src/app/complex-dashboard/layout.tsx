

type props={
    children: React.ReactNode,
    users : React.ReactNode,
    revenue: React.ReactNode,
    notifications: React.ReactNode
}
export default function DashboardLayout({children, users,revenue,notifications}:props){
    return(
        <div>
             <div>
            {children}
            
        </div>
        <div>
            {users}
        </div>
        <div>
            {revenue}
        </div>
        <div>
            {notifications}
        </div>
        </div>
       
    )
}