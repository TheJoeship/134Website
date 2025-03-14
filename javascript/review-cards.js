
/* Custom element: ReviewCard */
import {getCSS} from "./review-cards-css.js";

class ReviewCard extends HTMLElement {
    constructor() {
        super();

        /* okay I dont actually know if I need this lol
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = '';
         */
    }
    /* custom element behavior when it gets mounted to the DOM */
    connectedCallback() {
        const style = document.createElement('style');
        style.textContent = getCSS();

        /* attribute values */
        const coffeeShop = this.getAttribute('coffeeShop') || 'No name';
        const reviewText = this.getAttribute('reviewText') || 'No review';
        const overallScore = this.getAttribute('overallScore') || 'No overall score';
        const tasteScore = this.getAttribute('tasteScore') || 'No taste score';
        const specialtiesScore = this.getAttribute('specialtiesScore') || 'No Specialties score';
        const locationScore = this.getAttribute('locationScore') || 'No Location score';
        const vibesScore = this.getAttribute('vibesScore') || 'No Music/vibes score';
        const valueScore = this.getAttribute('valueScore') || 'No value score';
        const outletsScore = this.getAttribute('outletsScore') || 'No outlets score';
        const foodScore = this.getAttribute('foodScore') || 'No food score';
        const accessibilityScore = this.getAttribute('accessibilityScore') || 'No accessibility score';
        const image = this.getAttribute('image') || 'No image';

        /* what exactly is the custom element */
        this.innerHTML = ``;
        this.appendChild(style);
        this.innerHTML += `
            <div class="review-card">
                <h2 class="title">${coffeeShop}</h2>
                <hgroup class="score">
                    <h3> Total Score: ${overallScore}/40</h3>
                    <table>
                        <caption><strong>Scoring Breakdown:</strong></caption>
                        <colgroup>
                          <col span="2">
                        </colgroup>
                        <thead>
                        <tr>
                          <th>Category</th>
                          <th>Score</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>Coffee Taste</td>
                          <td>${tasteScore}/5</td>
                        </tr>
                        <tr>
                          <td>Specialties</td>
                          <td>${specialtiesScore}/5</td>
                        </tr>
                        <tr>
                          <td>Location/Parking</td>
                          <td>${locationScore}/5</td>
                        </tr>
                        <tr>
                          <td>Music/Vibes</td>
                          <td>${vibesScore}/5</td>
                        </tr>
                        <tr>
                          <td>Value</td>
                          <td>${valueScore}/5</td>
                        </tr>
                        <tr>
                          <td>Outlets/Convenience</td>
                          <td>${outletsScore}/5</td>
                        </tr>
                        <tr>
                          <td>Food</td>
                          <td>${foodScore}/5</td>
                        </tr>
                        <tr>
                          <td>Accessibility</td>
                          <td>${accessibilityScore}/5</td>
                        </tr>
                        </tbody>
                    </table>
                </hgroup>
                <picture class="review-image">
                    <img src="${image}"
                        srcset="./image_assets/coffeepic.jpg 280w"
                        sizes="(min-width:1024px) 300px, 220px"
                        alt="A picture of a coffee I had in Roatan, Honduras" loading="lazy">
                </picture>
                <p class="review-text">${reviewText}</p>
            </div>`;


    }
}


window.customElements.define('review-card', ReviewCard);