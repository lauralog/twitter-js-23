import tweets from "./../models/tweets.json";

import { tweetsHolder } from "../constants/domElements";
import { renderTweetModel } from "./tweet.controller";
import { sortMostRecent } from "../main";
import { colorGreen, colorRed } from "../constants/constants";

export const renderAllTweets = () => {
    sortMostRecent()

    let html = ''
    // renderTweets()
    tweets.forEach((tweet) => {
        html += renderTweetModel(tweet)
    })
    tweetsHolder.innerHTML = html
    tweetInteractions()
}

export const renderFilteredTweets = (filteredTweets) => {
    sortMostRecent()

    let html = ''
    // renderTweets()
    filteredTweets.forEach((tweet) => {
        html += renderTweetModel(tweet)
    })
    tweetsHolder.innerHTML = html
    tweetInteractions()
}


export const renderNoTweets = () => {
    tweetsHolder.innerHTML = `
        <h1>Lo siento, no hemos encontrado coincidencias.</h1>
    `
}

const tweetInteractions = () => {
    likeTweets()
    retweetTweet()
}

/**
 * =========================================================================================
 * 
 *  ESTILOS LIKE Y RETWEET
 * 
 *  ========================================================================================
 */
const likeTweets = () => {
    const likeBtns = document.querySelectorAll(".icon_likes")

    for (const likeBtn of likeBtns) {

        let liked = likeBtn.getAttribute('liked')

        likeBtn.addEventListener('click', (ev) => {
            if (!liked) {
                likeBtn.style.fill = ""
                liked = true
                // likeRetweetAmount()
            } else {
                likeBtn.style.fill = colorRed
                liked = false
                // likeRetweetAmount()
            }
        })
    }
}

const retweetTweet = () => {
    const retweetBtns = document.querySelectorAll(".icon_retweets")

    for (const retweetBtn of retweetBtns) {

        let retweeted = retweetBtn.getAttribute('retweeted')
        // console.loçg(retweeted);

        retweetBtn.addEventListener('click', (ev) => {
            if (!retweeted) {
                retweetBtn.style.fill = ""
                retweeted = true
                // likeRetweetAmount()
            } else {
                retweetBtn.style.fill = colorGreen
                retweeted = false
                // likeRetweetAmount()
            }
        })
    }
}