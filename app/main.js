// style
import "./../assets/styles/style.sass";

// aside
import { renderMenu } from "./controllers/menu.controller";
import loggeduser from "./models/loggeduser.json";


// tweets
import { validateTweetLength } from "./controllers/validate-length.controller";
import { validateSearch } from "./controllers/validate-search.controller";
import { addBtn, formAvatar, formAvatarModal, tweetBtn } from "./constants/domElements";
import { createTweet } from "./controllers/create-tweet.controller";
import tweets from "./models/tweets.json";
import { renderAllTweets } from "./controllers/tweet.renderers";


// modal
import { modalController } from "./controllers/modal-tweet-form.controller";
import { modalValidateTweetLength } from "./controllers/modal-validate-length.controller";

window.addEventListener('load', (ev) => {
    renderMenu()
    modalController()
    modalValidateTweetLength()
    renderAllTweets(tweets)

    preventBtn()
    renderFormAvatar()

    validateTweetLength()
    createTweet(tweetBtn)
    validateSearch()
})

/**
 * =======================================================================================
 * 
 *  UTILITY FNS
 * 
 * =======================================================================================
*/

/**
 * Reordena el array tweets según orden más reciente
 * Se utiliza en renderTweets() para mostrar tuits más recientes primero
 */
export const sortMostRecent = () => {
    tweets.sort((a, b) => new Date(b.time) - new Date(a.time));
} 

/**
 * Función que desactiva los botones de archivos adjuntos del tweet 
 * (".tweet_form_footer_left .tweet_form_add")
 */
const preventBtn = () => {
for (const btn of addBtn) {
        btn.addEventListener('click', (ev) => {
            ev.preventDefault()
            console.log("prevent reload");
        })
    }
}

const renderFormAvatar = () => {    
    const html = `
        <img src="${loggeduser.avatar}" alt="user avatar">
    `
    formAvatar.innerHTML = html
    formAvatarModal.innerHTML = html
}


