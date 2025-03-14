export function getCSS(){
    return `
        /* grid container */
        .review-card {
            border-radius: 15px;
            border: 3px solid black;
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
            max-width: 900px;
            overflow: hidden;
            display: grid;
            background-color: var(--cardcolor);
            /* 3x2 grid */
            grid-template-columns: 1fr 1fr;
            grid-template-rows: repeat(3,auto);
            column-gap: 1rem;
        
        }
        
        /*  first row */
        .title {
            /* title spans entire first row */
            grid-row: 1 / 2;
            grid-column: 1/-1;
            font-size: 4rem;
            margin: 10px;
            padding: 25px;
            justify-self: center;
            color: darkseagreen;
        }
        
        /* second row */
        .review-image {
            grid-row: 2 / 3;
            grid-column: 1 / 2;
            border-radius: 10px;
            align-self: center;
            justify-self: center;
            padding: 3rem;
        
        }
        
        img {
            border: pink solid 3px;
            border-radius: 10px;
            max-height: 480px;
            max-width:380px
        }
        
        .score {
            grid-row: 2 / 3;
            grid-column: 2 / 3;
            align-self: center;
            justify-self: center;
            padding: 30px;
        
        }
        
        .score h3 {
            font-size: 2rem;
            align-self: center;
            justify-self: center;
        
        }
        
        /* third row */
       .review-text {
        grid-row: 3 /3;
        grid-column: 1 / -1;
        padding: 10px;
       
       }

    `;
}