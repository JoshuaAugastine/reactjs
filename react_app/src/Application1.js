import { useContext, createContext } from "react";

const UserContext = createContext("Unknown");

function Application1(){
    const userName = "Joshua Augastine";
    return(
        <UserContext.Provider value={userName}>
            <Layout> Main Content</Layout>
        </UserContext.Provider>
    )
}

function Layout ({ children }){
    return(
        <div>
            <Header />
            <main>{children}</main>
        </div>
    )
}

function Header(){
    return(
        <header>
            <UserInfo />
        </header>
    )
}

function UserInfo(){
    const userName = useContext(UserContext);
    return<span>{userName}</span>

}

export default Application1;