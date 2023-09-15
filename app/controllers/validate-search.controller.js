import tweets from "./../models/tweets.json";
import { renderAllTweets, renderFilteredTweets, renderNoTweets } from "./tweet.renderers";


export const validateSearch = () => {
    const searchbox = document.querySelector(".searchbox")
    const searchForm = document.querySelector(".search_form")

    searchbox.addEventListener("keyup", (ev) => {
        ev.preventDefault()

        const searchboxValue = searchbox.value
        const searchboxLength = searchboxValue.length

        if(searchboxLength == 0) {
            renderAllTweets()

        } else {
            // Filtra array tweets
            const filteredTweets = tweets.filter(tweet => 
                tweet.content.includes(searchboxValue)
            )
            // renderiza tweets filtrados o renderiza todos los tuits
            if (filteredTweets.length > 0) {
                renderFilteredTweets(filteredTweets)

            } else {
                renderNoTweets()
            }
        }
    })

    //prevents reload
    searchForm.addEventListener('submit', (ev) => { ev.preventDefault() })

    // resets search text
    searchForm.reset()
}


// export const renderAllTweets = () => {
//     sortMostRecent()

//     let html = ''
//     // renderTweets()
//     tweets.forEach((tweet) => {
//         html += renderTweetModel(tweet)
//     })
//     tweetsHolder.innerHTML = html
//     tweetInteractions()
// }

// export const renderFilteredTweets = (filteredTweets) => {
//     sortMostRecent()

//     let html = ''
//     // renderTweets()
//     filteredTweets.forEach((tweet) => {
//         html += renderTweetModel(tweet)
//     })
//     tweetsHolder.innerHTML = html
//     tweetInteractions()
// }


// export const renderNoTweets = () => {
//     tweetsHolder.innerHTML = `
//         <h1>Lo siento, no hemos encontrado coincidencias.</h1>
//     `
// }

// const tweetInteractions = () => {
//     likeTweets()
//     retweetTweet()
// }

// /**
//  * =========================================================================================
//  * 
//  *  ESTILOS LIKE Y RETWEET
//  * 
//  *  ========================================================================================
//  */
// const likeTweets = () => {
//     const likeBtns = document.querySelectorAll(".icon_likes")

//     for (const likeBtn of likeBtns) {

//         let liked = likeBtn.getAttribute('liked')

//         likeBtn.addEventListener('click', (ev) => {
//             if (!liked) {
//                 likeBtn.style.fill = ""
//                 liked = true
//                 // likeRetweetAmount()
//             } else {
//                 likeBtn.style.fill = colorRed
//                 liked = false
//                 // likeRetweetAmount()
//             }
//         })
//     }
// }

// const retweetTweet = () => {
//     const retweetBtns = document.querySelectorAll(".icon_retweets")

//     for (const retweetBtn of retweetBtns) {

//         let retweeted = retweetBtn.getAttribute('retweeted')
//         // console.loçg(retweeted);

//         retweetBtn.addEventListener('click', (ev) => {
//             if (!retweeted) {
//                 retweetBtn.style.fill = ""
//                 retweeted = true
//                 // likeRetweetAmount()
//             } else {
//                 retweetBtn.style.fill = colorGreen
//                 retweeted = false
//                 // likeRetweetAmount()
//             }
//         })
//     }
// }


