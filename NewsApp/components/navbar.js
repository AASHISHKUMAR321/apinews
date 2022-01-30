

 let navbar=()=>{
    return `<div id="nav">
            <div id="logo"><a href="/">ApiNews</a></div>
            <div>
                <input type="text" name="" id="search" placeholder="Search Here">
                <button id="search_btn"><i class="fas fa-search"></i></button>
            </div>
            <div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li id="user"><a id="user"></a></li>
                </ul>
            </div>
        </div>`
};


export default navbar;