import { maxChars, colorPrimary, colorRed } from "../constants/constants.js";
import { textarea, counter, amount, tweetBtn, circle_form, progress_form } from "./../constants/domElements.js";


/**
 * Evento keyup en textarea del tweet form
 * Activa y desactiva el botón
 * Actualiza el counter
 * Cambia estilos del counter
 */
export const validateTweetLength = () => {

    textarea.addEventListener('keyup', (ev) => {
        const chars = textarea.value.length
        const charsLeft = maxChars - chars
        amount.innerHTML = charsLeft

        if (chars == 0) {
            tweetTooShort();
            
        } else if (chars > 0 && chars <= maxChars) {
            tweetLenghtOk();
            dashOffset();
            
        } else {
            tweetTooLong();
        }
    })
}

/**
 * El usuario aún no ha escrito en el form
 */
const tweetTooShort = () => {
    counter.classList.add("hidden");
    tweetBtn.disabled = "disabled";
}

/**
 * Si se puede tuitear
 */
const tweetLenghtOk = () => {
    counter.classList.remove("hidden");
    tweetBtn.disabled = "";
    circle_form.style.stroke = colorPrimary;
    counter.style.color = '';
    counter.style.fontWeight = '';
}

/**
 * Si el tuit es más largo
 */
const tweetTooLong = () => {
    amount.innerHTML = maxChars - textarea.value.length;
    tweetBtn.disabled = "disabled";
    circle_form.style.stroke = colorRed;
    counter.style.color = colorRed;
    counter.style.fontWeight = '600';
}

/**
 * Hace que el dashoffset del .progress sea proporcional al número de caracteres que caben
 * de forma que parezca que el círculo se va rellenando según se escribe
 * (maxChars + 1) hace que se complete cuando el counter == 0 en lugar de 1
 * El "-" en offset hace que vaya en el sentido correcto (reloj)
 */
const dashOffset = () => {
    const chars = textarea.value.length

    const offsetPercentage = (chars / (maxChars + 1)) * 100
    console.log(offsetPercentage);
    progress_form.style.strokeDashoffset = - offsetPercentage
}

