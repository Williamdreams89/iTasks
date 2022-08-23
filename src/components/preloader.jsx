import React from 'react'
import styled from 'styled-components'


const Preloading = styled.main`

    background-color: #000;
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
    

.preloading{
    height: 80px;
    width: 80px;
    background-color: #333;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 50%;
    box-shadow: 0 0 0 -7px #ffffff,
                0 0 0 -7px #ffffff,
                0 0 0 -15px #ffffff,
                0 0 0 -15px #ffffff;
    animation: split 2.4s forwards infinite;
}
@keyframes split{
    25%{
        box-shadow: 90px 0 0 -7px #ffffff,
        -90px 0 0 -7px #ffffff,
        90px 0 0 -15px #ffffff,
        -90px 0 0 -15px #ffffff;
    }
    50%{
        box-shadow: 90px 0 0 -7px #ffffff,
        -90px 0 0 -7px #ffffff,
        180px 0 0 -15px #ffffff,
        -180px 0 0 -15px #ffffff;
    }
    75%{
        box-shadow: 90px 0 0 -7px #ffffff,
        -90px 0 0 -7px #ffffff,
        90px 0 0 -15px #ffffff,
        -90px 0 0 -15px #ffffff;
    }
    100%{
        box-shadow: 0 0 0 -7px #ffffff,
        0 0 0 -7px #ffffff,
        0 0 0 -15px #ffffff,
        0 0 0 -15px #ffffff;
    }
}
`;
const preloader = () => {
  return (
    <Preloading>
        <div className="preloading"></div>
    </Preloading>
  )
}

export default preloader