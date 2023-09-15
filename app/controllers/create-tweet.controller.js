import { amount, counter, textarea, tweetBtn, tweetForm } from "../constants/domElements";
import tweets from "../models/tweets.json";
import loggeduser from "../models/loggeduser.json";
import { renderAllTweets } from "./tweet.renderers";

/**
 * Evento crear tweet
 * Crea un tuit (newTweet) nuevo al pulsar el botón tweet del .tweet_form 
 * incluye al principio del array de tweets
 * renderiza el array actualizado de tweets
 */
export const createTweet = () => {
    tweetBtn.addEventListener('click', (ev) => { 
        const tweetContent = textarea.value
        ev.preventDefault()

        const newTweet = {
            "id": generateId(),
            "user": {
              "name": loggeduser.name,
              "nick": loggeduser.nick,
              "avatar": loggeduser.avatar
            },
            "time": new Date(),
            "content": tweetContent,
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "retweeted": false,
            "liked": false
        }

        tweets.push(newTweet)
        tweetForm.reset()
        amount.innerHTML = 0
        tweetBtn.disabled = "disabled";
        counter.classList.add("hidden");
        renderAllTweets(newTweet)
    })
}


/**
 * Genera un nuevo id para el tweet sumando 1 al id del último tuit para que no se repitan
 * @returns {number} new Id
 */
const generateId = () => {
    const lastTweet = tweets.slice(-1)
    const lastTweetId = lastTweet[0].id
    const newId = lastTweetId + 1
    return newId
}
