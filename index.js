const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincy1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postsArea = document.getElementById("user-posts-area")

function renderPosts() {
    
for (let i = 0; i < posts.length; i++) {
    postLayout(posts[i])
    }
}

function postLayout({name, username, location, avatar, post, comment, likes}) {
        postsArea.innerHTML +=  `
         <article class="post">
            <div class="user-info">
                <img class="user-avatar" src=${avatar}>
                <div class="name-location">
                    <h2>${name}</h2>
                    <p>${location}</p>
                </div>
            </div>
            <img class="post-image" src=${post} alt="a selfie painting of ${name}">
            <div class="social-btns-div">
                <button><img src="images/icon-heart.png" class="social-icons heart" aria-label="heart"></button>
                <button><img src="images/icon-comment.png" class="social-icons comment" aria-label="comment"></button>
                <button><img src="images/icon-dm.png" class="social-icons dm" aria-label="Direct Message"></button>
            </div>
            <p class="like-element">${likes} likes</p>
            <p class="post-text"><span class="username">${username}</span> ${comment}</p>
        </article>
        `
}

    document.addEventListener("click", e => {
        [...e.target.classList].includes('heart') ? e.target.classList.toggle('liked') : ''
        
    })

renderPosts()