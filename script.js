var likeCounter;

function InitialLikeCounter(){
    likeCounter=parseInt(Math.random()*1000,10);
    document.getElementById("likeCounter").innerHTML=likeCounter+" people like this! Sign up to see what your friends like.";
}

function oneMoreLike(){
    likeCounter++;
    document.getElementById("likeCounter").innerHTML=likeCounter+" people like this! Sign up to see what your friends like.";
}

function Share(){
    
}