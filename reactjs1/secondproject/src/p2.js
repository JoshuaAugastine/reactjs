function Example1(){
        //const isLoggedin = this.state.isLoggedIn;
        const isLoggedIn = false;
        return(
            <div>
                <h1>
                Welcome{isLoggedIn ? 'back' : 'please login first'}
                </h1>
            </div>
        )
}
export default Example1;