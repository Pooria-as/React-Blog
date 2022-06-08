import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color:#171717;
    h2{
        font-weight: initial;
    }
}
`

export default GlobalStyle
