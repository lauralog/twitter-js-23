
const modalContainer = document.querySelector('.modal_container')
const modalBg = document.querySelector('.modal_bg')
const modalWindow = document.querySelector('.modal_window')
const tweetBtn = document.querySelector('.aside_tweet_btn .tweet_btn')
const formTweetBtn = document.querySelector('.modal_window .tweet_btn')


export const modalController = () => {
    tweetBtn.addEventListener('click', (ev) => {
        if (modalContainer.classList.contains('hidden')) {
            modalContainer.classList.add('modal_container_flex')
        }

        modalBg.addEventListener('click', (ev) => {
            if (modalContainer.classList.contains('modal_container_flex')) {
                modalContainer.classList.remove('modal_container_flex')
                modalContainer.classList.add('hidden') 
            }
        })

        formTweetBtn.addEventListener('click', (ev) => {
            ev.preventDefault()
            if (modalContainer.classList.contains('modal_container_flex')) {
                modalContainer.classList.remove('modal_container_flex')
                modalContainer.classList.add('hidden') 
            }
        })
    })

}