import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gentium Plus', serif;
/* font-family: 'Macondo', cursive;
font-family: 'Square Peg', cursive;
font-family: 'Water Brush', cursive; */
}
body{
    background-color:#171717;
    h2{
        font-weight: bold;
    }
    a{
        text-decoration: none;
        color: white;
        cursor: pointer;
    }
}
`

export default GlobalStyle
