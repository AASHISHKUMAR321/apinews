
function appendData(data,location){

    if(data.length==0){
        alert('Sorry Nothing find');
    }
    data.map((elem,index)=>{
        
        // Data Destructer
        let {image,title,description,content,author,url,publishedAt}=elem;
        //Created Elements
        let div=document.createElement('div');
        let img=document.createElement('img');
        let news_title=document.createElement('h3');

        //Adding Data into Elements
        img.src=image;
        news_title.textContent=title;

        let newsArr=[];
        div.onclick=()=>{
            newsArr.push(elem);
            localStorage.setItem('newsItem',JSON.stringify(newsArr));
            newsArr=[];
            window.location.href="moreInfo.html";   
        }
        //Appending Data

        div.append(img,news_title);
        location.append(div);


    })

}
export default appendData;