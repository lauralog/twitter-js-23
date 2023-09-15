import { asideMenu } from "./../models/menu";

/**
 * Pinta el menu en forma de lista
 */
export const renderMenu = () => {
    let html = ``

    for (const asideItem of asideMenu) {
        html += `
        <li class="menu_item">
            <a class="menu_item_link ${menuActive(asideItem.active)}" href="${asideItem.href}">
                <span class="menu_icon">${asideItem.icon}</span>
                <h3 class="menu_title">${asideItem.title}</h3>
            </a>
        </li>`
    }

    const asideItem = document.querySelector('.sidebar_menu')
    asideItem.innerHTML = html
}

/**
 * Cambia el color y relleno del "menu_item"
 * @param {boolean} isActive 
 * @returns string (style class)
 */
const menuActive = (isActive) => {
    if (isActive) {
        return "menu_active"
    } else {
        return ""
    }
}