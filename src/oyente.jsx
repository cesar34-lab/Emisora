import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Oyente = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <StyledWrapper>
      <button className="button buscar" onClick={()=>navigate('/buscar')}>
        <div className="blob1" />
        <div className="blob2" />
        <div className="inner">BUSCAR</div>
      </button>
      <button className="button progra">
        <div className="blob1" />
        <div className="blob2" />
        <div className="inner">PROGRAMACION</div>
      </button>
      {isChecked && (
        <div className="input">
          <button className="value">
            <svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="m1.5 13v1a.5.5 0 0 0 .3379.4731 18.9718 18.9718 0 0 0 6.1621 1.0269 18.9629 18.9629 0 0 0 6.1621-1.0269.5.5 0 0 0 .3379-.4731v-1a6.5083 6.5083 0 0 0 -4.461-6.1676 3.5 3.5 0 1 0 -4.078 0 6.5083 6.5083 0 0 0 -4.461 6.1676zm4-9a2.5 2.5 0 1 1 2.5 2.5 2.5026 2.5026 0 0 1 -2.5-2.5zm2.5 3.5a5.5066 5.5066 0 0 1 5.5 5.5v.6392a18.08 18.08 0 0 1 -11 0v-.6392a5.5066 5.5066 0 0 1 5.5-5.5z" fill="#7D8590" />
            </svg>
            Public profile
          </button>
          <button className="value">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="Line">
              <path d="m17.074 30h-2.148c-1.038 0-1.914-.811-1.994-1.846l-.125-1.635c-.687-.208-1.351-.484-1.985-.824l-1.246 1.067c-.788.677-1.98.631-2.715-.104l-1.52-1.52c-.734-.734-.78-1.927-.104-2.715l1.067-1.246c-.34-.635-.616-1.299-.824-1.985l-1.634-.125c-1.035-.079-1.846-.955-1.846-1.993v-2.148c0-1.038.811-1.914 1.846-1.994l1.635-.125c.208-.687.484-1.351.824-1.985l-1.068-1.247c-.676-.788-.631-1.98.104-2.715l1.52-1.52c.734-.734 1.927-.779 2.715-.104l1.246 1.067c.635-.34 1.299-.616 1.985-.824l.125-1.634c.08-1.034.956-1.845 1.994-1.845h2.148c1.038 0 1.914.811 1.994 1.846l.125 1.635c.687.208 1.351.484 1.985.824l1.246-1.067c.787-.676 1.98-.631 2.715.104l1.52 1.52c.734.734.78 1.927.104 2.715l-1.067 1.246c.34.635.616 1.299.824 1.985l1.634.125c1.035.079 1.846.955 1.846 1.993v2.148c0 1.038-.811 1.914-1.846 1.994l-1.635.125c-.208.687-.484 1.351-.824 1.985l1.067 1.246c.677.788.631 1.98-.104 2.715l-1.52 1.52c-.734.734-1.928.78-2.715.104l-1.246-1.067c-.635.34-1.299.616-1.985.824l-.125 1.634c-.079 1.035-.955 1.846-1.993 1.846zm-5.835-6.373c.848.53 1.768.912 2.734 1.135.426.099.739.462.772.898l.18 2.341 2.149-.001.18-2.34c.033-.437.347-.8.772-.898.967-.223 1.887-.604 2.734-1.135.371-.232.849-.197 1.181.089l1.784 1.529 1.52-1.52-1.529-1.784c-.285-.332-.321-.811-.089-1.181.53-.848.912-1.768 1.135-2.734.099-.426.462-.739.898-.772l2.341-.18h-.001v-2.148l-2.34-.18c-.437-.033-.8-.347-.898-.772-.223-.967-.604-1.887-1.135-2.734-.232-.37-.196-.849.089-1.181l1.529-1.784-1.52-1.52-1.784 1.529c-.332.286-.81.321-1.181.089-.848-.53-1.768-.912-2.734-1.135-.426-.099-.739-.462-.772-.898l-.18-2.341-2.148.001-.18 2.34c-.033.437-.347.8-.772.898-.967.223-1.887.604-2.734 1.135-.37.232-.849.197-1.181-.089l-1.785-1.529-1.52 1.52 1.529 1.784c.285.332.321.811.089 1.181-.53.848-.912 1.768-1.135 2.734-.099.426-.462.739-.898.772l-2.341.18.002 2.148 2.34.18c.437.033.8.347.898.772.223.967.604 1.887 1.135 2.734.232.37.196.849-.089 1.181l-1.529 1.784 1.52 1.52 1.784-1.529c.332-.287.813-.32 1.18-.089z" id="XMLID_1646_" fill="#7D8590" />
              <path d="m16 23c-3.859 0-7-3.141-7-7s3.141-7 7-7 7 3.141 7 7-3.141 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" fill="#7D8590" id="XMLID_1645_" />
            </svg>
            Account
          </button>
          <button className="value">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none">
              <path fillRule="evenodd" fill="#7D8590" d="m11.9572 4.31201c-3.35401 0-6.00906 2.59741-6.00906 5.67742v3.29037c0 .1986-.05916.3927-.16992.5576l-1.62529 2.4193-.01077.0157c-.18701.2673-.16653.5113-.07001.6868.10031.1825.31959.3528.67282.3528h14.52603c.2546 0 .5013-.1515.6391-.3968.1315-.2343.1117-.4475-.0118-.6093-.0065-.0085-.0129-.0171-.0191-.0258l-1.7269-2.4194c-.121-.1695-.186-.3726-.186-.5809v-3.29037c0-1.54561-.6851-3.023-1.7072-4.00431-1.1617-1.15127-2.7213-1.67311-4.289-1.67311zm-7.00906 5.67742c0-4.14588 3.51278-7.67742 8.00906-7.67742 1.8966 0 3.8286.78235 5.2719 2.20409 1.2079 1.19799 2.2371 2.98743 2.2371 5.47333v3.29037l1.6699 2.3404c.8479 1.2124-.0953 2.6915-1.3881 2.6915h-14.52604c-1.31768 0-2.24263-1.4511-1.37636-2.6915l1.6699-2.3404v-3.29037zm6.20534 10.9258c.2828.177.6548.0882.8319-.1946l.1666-.2668c.1771-.2828.0882-.6548-.1946-.8319-.2828-.177-.6548-.0882-.8319.1946l-.1666.2668c-.177.2828-.0882.6548.1946.8319zm4.3138-.1946c-.2828.177-.6548.0882-.8319-.1946l-.1667-.2668c-.177-.2828-.0882-.6548.1946-.8319.2828-.177.6548-.0882.8319.1946l.1667.2668c.177.2828.0882.6548-.1946.8319z" clipRule="evenodd" />
            </svg>
            Notifications
          </button>
          <button className="value">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
              <path fillRule="evenodd" fill="#7D8590" d="m11.9572 4.31201c-3.35401 0-6.00906 2.59741-6.00906 5.67742v3.29037c0 .1986-.05916.3927-.16992.5576l-1.62529 2.4193-.01077.0157c-.18701.2673-.16653.5113-.07001.6868.10031.1825.31959.3528.67282.3528h14.52603c.2546 0 .5013-.1515.6391-.3968.1315-.2343.1117-.4475-.0118-.6093-.0065-.0085-.0129-.0171-.0191-.0258l-1.7261-2.3978c-.1184-.1739-.1848-.3583-.1848-.5488v-3.3038c0-3.08001-2.655-5.67742-6.00901-5.67742zm-.0206 1.09232c2.5542 0 4.59341 1.9892 4.59341 4.13261v2.7875h-9.1868v-2.7875c0-2.14341 2.03921-4.13261 4.59339-4.13261zm-.00946 12.79862c2.72701 0 4.9303-2.1278 4.9303-4.7705v-2.1063h-9.8607v2.1063c0 2.6427 2.2033 4.7705 4.9303 4.7705z" />
            </svg>
            Log out
          </button>
        </div>)}

      <div className="burger-icon">
        <label className="burger" htmlFor="burger">
          <input className="line" type="checkbox" id="burger" onChange={handleCheckboxChange} />
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  background-image: url('/fondoOye.webp');
  background-size: cover; 
  background-position: center;
  display: flex;
  justify-content: center; /* Centra los botones horizontalmente */
  align-items: center; /* Centra los botones verticalmente */
  height: 100vh; /* Utiliza todo el alto de la ventana */
  gap: 15vw; /* Espacio entre los botones */
  padding: 0 20px; /* Opcional, agrega margen a los lados si es necesario */
  width:100vw;
  .button {
    cursor: pointer;
    font-size: 1.4rem;
    border-radius: 16px;
    border: none;
    padding: 2px;
    background: radial-gradient(circle 80px at 80% -10%, #ffffff, #181b1b);
    position: relative;
    transition: background 0.3s, transform 0.3s;
  }

  .button:hover {
    /*background: radial-gradient(circle 80px at 80% -10%, #181b1b, #000);*/
    transform: scale(0.98);
  }

  .button::after {
    content: "";
    position: absolute;
    width: 65%;
    height: 60%;
    border-radius: 120px;
    top: 0;
    right: 0;
    box-shadow: 0 0 20px #ffffff38;
    z-index: -1;
    transition: box-shadow 0.3s;
  }

  .button:hover::after {
    box-shadow: 0 0 10px #ffffff18;
  }

  .blob1 {
    position: absolute;
    width: 70px;
    height: 100%;
    border-radius: 16px;
    bottom: 0;
    left: 0;
    background: radial-gradient(
      circle 60px at 0% 100%,
      #3fe9ff,
      #0000ff80,
      transparent
    );
    box-shadow: -10px 10px 30px #0051ff2d;
    transition: background 0.3s, box-shadow 0.3s;
  }

  .button:hover .blob1 {
    /*  background: radial-gradient(circle 60px at 0% 100%, #181b1b, #000);*/
    box-shadow: -5px 5px 20px #000;
  }

  .inner {
    padding: 14px 25px;
    border-radius: 14px;
    color: #fff;
    z-index: 3;
    position: relative;
    background: radial-gradient(circle 80px at 80% -50%, #777777, #0f1111);
    transition: background 0.3s;
  }

  .button:hover .inner {
    background: radial-gradient(circle 80px at 80% -50%, #333333, #0f0f0f);
  }

  .inner::before {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 14px;
    background: radial-gradient(
      circle 60px at 0% 100%,
      #00e1ff1a,
      #0000ff11,
      transparent
    );
    position: absolute;
    transition: opacity 0.3s;
  }
  <button className="value">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none">
      <path fillRule="evenodd" fill="#7D8590" d="m11.9572 4.31201c-3.35401 0-6.00906 2.59741-6.00906 5.67742v3.29037c0 .1986-.05916.3927-.16992.5576l-1.62529 2.4193-.01077.0157c-.18701.2673-.16653.5113-.07001.6868.10031.1825.31959.3528.67282.3528h14.52603c.2546 0 .5013-.1515.6391-.3968.1315-.2343.1117-.4475-.0118-.6093-.0065-.0085-.0129-.0171-.0191-.0258l-1.7269-2.4194c-.121-.1695-.186-.3726-.186-.5809v-3.29037c0-1.54561-.6851-3.023-1.7072-4.00431-1.1617-1.15127-2.7213-1.67311-4.289-1.67311zm-7.00906 5.67742c0-4.14588 3.51278-7.67742 8.00906-7.67742 1.8966 0 3.8286.78235 5.2719 2.20409 1.2079 1.19799 2.2371 2.98743 2.2371 5.47333v3.29037l1.6699 2.3404c.8479 1.2124-.0953 2.6915-1.3881 2.6915h-14.52604c-1.31768 0-2.24263-1.4511-1.37636-2.6915l1.6699-2.3404v-3.29037zm6.20534 10.9258c.2828.177.6548.0882.8319-.1946l.1666-.2668c.1771-.2828.0882-.6548-.1946-.8319-.2828-.177-.6548-.0882-.8319.1946l-.1666.2668c-.177.2828-.0882.6548.1946.8319zm4.3138-.1946c-.2828.177-.6548.0882-.8319-.1946l-.1667-.2668c-.177-.2828-.0882-.6548.1946-.8319.2828-.177.6548-.0882.8319.1946l.1667.2668c.177.2828.0882.6548-.1946.8319z" clipRule="evenodd" />
    </svg>
    Notifications
  </button>
  .button:hover .inner::before {
    opacity: 0;
  }
    /*account*/
     .input {
    display: flex;
    flex-direction: column;
    width: 200px;
    background-color: #0d1117;
    justify-content: center;
    border-radius: 10px;
    transition: 1s;
    padding: 10px;
    overflow: hidden;
    position: absolute; /* Usa fixed si quieres que permanezca en la misma posición al hacer scroll */
  top: 20px; /* Ajusta la distancia desde la parte superior */
  left: 20px;
  }

  .value {
    font-size: 15px;
    background-color: transparent;
    border: none;
    padding: 10px;
    color: white;
    display: flex;
    position: relative;
    gap: 5px;
    cursor: pointer;
    border-radius: 10px;
    transition: 1s;
    box-sizing: border-box;
  }

  .value:not(:active):hover,
  .value:focus {
    display: flex;
    box-sizing: border-box;
    border: 2px solid #1a1f24;
    color: #637185;
  }

  .value:focus,
  .value:active {
    background-color: #1a1f24;
    outline: none;
    margin-left: 17px;
  }

  .value::before {
    content: "";
    position: absolute;
    top: 5px;
    left: -15px;
    width: 5px;
    height: 80%;
    background-color: #2f81f7;
    border-radius: 5px;
    opacity: 0;
    transition: 1s;
  }

  .value:focus::before,
  .value:active::before {
    opacity: 1;
  }

  .value svg {
    width: 20px;
  }

  .input:hover > :not(.value:hover) {
    transition: 300ms;
    filter: blur(1.5px);
    transform: scale(0.95, 0.95);
  }
    
  .burger {
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: pointer;
    transition: 300ms;
    border-radius: 10px;
     position: absolute;
  position: absolute;
  top: 10px; 
  left: 10px; 
  }
  .line{
  background-color:#fff
  }
  .burger:hover .line {
  background-color: #fff; /* Cambiar las líneas a blanco en hover */
}
  .burger input[type="checkbox"] {
    appearance: none;
    transition: 300ms;
  }

  .burger::before,
  .burger::after {
    content: "";
    transition: 300ms;
    transform-origin: center center;
  }

  .burger::before {
    transform: translateY(8px);
  }
  .burger::after {
    transform: translateY(-8px);
  }
  .burger .line,
  .burger::before,
  .burger::after {
    width: 25px;
    height: 2.1px;
    display: block;
    background-color: white;
    border-radius: 5px;
    position: absolute;
  }

  .burger .line:checked {
    width: 0;
    transition-delay: 100ms;
  }
  .burger:has(.line:checked)::before {
    animation: animation1 400ms ease-out 0s 1 both;
  }
  .burger:has(.line:checked)::after {
    animation: animation2 400ms ease-out 0s 1 both;
  }

  .burger:hover {
    background: black;
    border-radius: 50%;
  }

  .burger:hover .line,
  .burger:hover::before,
  .burger:hover::after {
    background: #a73838;
  }

  .burger:active {
    scale: 0.95;
  }
  @keyframes animation1 {
    0% {
      transform: translateY(8px) rotate(0deg);
    }
    50% {
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      transform: translateY(0px) rotate(45deg);
    }
  }
  @keyframes animation2 {
    0% {
      transform: translateY(-8px) rotate(0deg);
    }
    50% {
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      transform: translateY(0px) rotate(-45deg);
    }
  }
   
  
`;

export default Oyente;
