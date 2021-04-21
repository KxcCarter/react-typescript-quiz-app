import styled, { createGlobalStyle } from 'styled-components';
// import a background image

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
            background-color: lightblue;
            background-position: top;
        }

        .gradient {
            background: red;
            z-index: -1;
            width: 100vw;
            height: 450px;
            position: absolute;
            left: 0px;
        }

    @media (max-width: 800px) {
    body {
        /* background-color: #E0D2C9; */
        background-image: url('https://operisstorage.s3.us-east-2.amazonaws.com/0DBD3D96-1B82-4050-846E-DC6DD7A60E98_1_201_a.jpeg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center 435px;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    .gradient {
        background: linear-gradient(135deg, #DED3C7, #DACEBE);
        /* background-size: contain; */
        
        
    }
}




    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }

    

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: 'Fascinate Inline', cursive;
    background-image: linear-gradient(180deg, #fff, #bf5e5e);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #872221);
    font-size: 5rem;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #e8cdb2);
    border: 2px solid #d29973;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
