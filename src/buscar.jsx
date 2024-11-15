import React, { useState, useMemo } from "react";
import styled from "styled-components";
import Checkbox from "./checkbox";

const Buscar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [votes, setVotes] = useState({});
  const data = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "Express",
    "MongoDB",
  ]; // Filtra los datos basándose en el término de búsqueda
  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, data]);

  // Actualiza el término de búsqueda
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCheckboxChange = (item) => {
    setSelectedItems((prevSelected) => {
      if (prevSelected.includes(item)) {
        return prevSelected;
      } else {
        const updatedSelection = [...prevSelected, item];

        setVotes((prevVotes) => {
          const newVotes = { ...prevVotes };
          newVotes[item] = (newVotes[item] || 0) + 1;
          return newVotes;
        });

        return updatedSelection;
      }
    });
  };

  return (
    <StyledWrapper>
      <div>
        <div className="galaxy" />
        <div id="search-container">
          <div className="nebula" />
          <div className="starfield" />
          <div className="cosmic-dust" />
          <div className="cosmic-dust" />
          <div className="cosmic-dust" />
          <div className="stardust" />
          <div className="cosmic-ring" />
          <div id="main">
            <input
              className="input"
              name="text"
              type="text"
              placeholder="Explore the music..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <div id="input-mask" />
            <div id="cosmic-glow" />
            <div className="wormhole-border" />
            <div id="wormhole-icon">
              <svg
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth={2}
                stroke="#a9c7ff"
                fill="none"
                height={24}
                width={24}
                viewBox="0 0 24 24"
              >
                <circle r={10} cy={12} cx={12} />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <div id="search-icon">
              <svg
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth={2}
                stroke="url(#cosmic-search)"
                fill="none"
                height={24}
                width={24}
                viewBox="0 0 24 24"
              >
                <circle r={8} cy={11} cx={11} />
                <line y2="16.65" x2="16.65" y1={21} x1={21} />
                <defs>
                  <linearGradient
                    gradientTransform="rotate(45)"
                    id="cosmic-search"
                  >
                    <stop stopColor="#a9c7ff" offset="0%" />
                    <stop stopColor="#6e8cff" offset="100%" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div id="results-container">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div key={index} className="result-item">
                <Checkbox onClick={() => handleCheckboxChange(item)} />
                {item} - Votos: {votes[item] || 0}
              </div>
            ))
          ) : (
            <div className="no-results">No results found</div>
          )}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .galaxy {
    height: 800px;
    width: 800px;
    background-image: radial-gradient(#ffffff 1px, transparent 1px),
      radial-gradient(#ffffff 1px, transparent 1px);
    background-size: 50px 50px;
    background-position: 0 0, 25px 25px;
    position: absolute;
    z-index: -1;
    animation: twinkle 5s infinite;
  }

  @keyframes twinkle {
    0%,
    100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
  }

  .stardust,
  .cosmic-ring,
  .starfield,
  .nebula {
    max-height: 70px;
    max-width: 314px;
    height: 100%;
    width: 100%;
    position: absolute;
    overflow: hidden;
    z-index: -1;
    border-radius: 12px;
    filter: blur(3px);
  }

  .input {
    background-color: #05071b;
    border: none;
    width: 301px;
    height: 56px;
    border-radius: 10px;
    color: #a9c7ff;
    padding-inline: 59px;
    font-size: 18px;
  }

  #search-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .input::placeholder {
    color: #6e8cff;
  }

  .input:focus {
    outline: none;
  }

  #main:focus-within > #input-mask {
    display: none;
  }

  #input-mask {
    pointer-events: none;
    width: 100px;
    height: 20px;
    position: absolute;
    background: linear-gradient(90deg, transparent, #05071b);
    top: 18px;
    left: 70px;
  }

  #cosmic-glow {
    pointer-events: none;
    width: 30px;
    height: 20px;
    position: absolute;
    background: #4d6dff;
    top: 10px;
    left: 5px;
    filter: blur(20px);
    opacity: 0.8;
    transition: all 2s;
  }

  #main:hover > #cosmic-glow {
    opacity: 0;
  }

  .stardust {
    max-height: 63px;
    max-width: 307px;
    border-radius: 10px;
    filter: blur(2px);
  }

  .stardust::before {
    content: "";
    z-index: -2;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(83deg);
    position: absolute;
    width: 600px;
    height: 600px;
    background-repeat: no-repeat;
    background-position: 0 0;
    filter: brightness(1.4);
    background-image: conic-gradient(
      rgba(0, 0, 0, 0) 0%,
      #4d6dff,
      rgba(0, 0, 0, 0) 8%,
      rgba(0, 0, 0, 0) 50%,
      #6e8cff,
      rgba(0, 0, 0, 0) 58%
    );
    transition: all 2s;
  }

  .cosmic-ring {
    max-height: 59px;
    max-width: 303px;
    border-radius: 11px;
    filter: blur(0.5px);
  }

  .cosmic-ring::before {
    content: "";
    z-index: -2;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(70deg);
    position: absolute;
    width: 600px;
    height: 600px;
    filter: brightness(1.3);
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: conic-gradient(
      #05071b,
      #4d6dff 5%,
      #05071b 14%,
      #05071b 50%,
      #6e8cff 60%,
      #05071b 64%
    );
    transition: all 2s;
  }

  .starfield {
    max-height: 65px;
    max-width: 312px;
  }

  .starfield::before {
    content: "";
    z-index: -2;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(82deg);
    position: absolute;
    width: 600px;
    height: 600px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: conic-gradient(
      rgba(0, 0, 0, 0),
      #1c2452,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 0) 50%,
      #2a3875,
      rgba(0, 0, 0, 0) 60%
    );
    transition: all 2s;
  }

  #search-container:hover > .starfield::before {
    transform: translate(-50%, -50%) rotate(-98deg);
  }

  #search-container:hover > .nebula::before {
    transform: translate(-50%, -50%) rotate(-120deg);
  }

  #search-container:hover > .stardust::before {
    transform: translate(-50%, -50%) rotate(-97deg);
  }

  #search-container:hover > .cosmic-ring::before {
    transform: translate(-50%, -50%) rotate(-110deg);
  }

  #search-container:focus-within > .starfield::before {
    transform: translate(-50%, -50%) rotate(442deg);
    transition: all 4s;
  }

  #search-container:focus-within > .nebula::before {
    transform: translate(-50%, -50%) rotate(420deg);
    transition: all 4s;
  }

  #search-container:focus-within > .stardust::before {
    transform: translate(-50%, -50%) rotate(443deg);
    transition: all 4s;
  }

  #search-container:focus-within > .cosmic-ring::before {
    transform: translate(-50%, -50%) rotate(430deg);
    transition: all 4s;
  }

  .nebula {
    overflow: hidden;
    filter: blur(30px);
    opacity: 0.4;
    max-height: 130px;
    max-width: 354px;
  }

  .nebula:before {
    content: "";
    z-index: -2;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(60deg);
    position: absolute;
    width: 999px;
    height: 999px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: conic-gradient(
      #000,
      #4d6dff 5%,
      #000 38%,
      #000 50%,
      #6e8cff 60%,
      #000 87%
    );
    transition: all 2s;
  }

  #wormhole-icon {
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    max-height: 40px;
    max-width: 38px;
    height: 100%;
    width: 100%;
    isolation: isolate;
    overflow: hidden;
    border-radius: 10px;
    background: linear-gradient(180deg, #1c2452, #05071b, #2a3875);
    border: 1px solid transparent;
  }

  .wormhole-border {
    height: 42px;
    width: 40px;
    position: absolute;
    overflow: hidden;
    top: 7px;
    right: 7px;
    border-radius: 10px;
  }

  .wormhole-border::before {
    content: "";
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    position: absolute;
    width: 600px;
    height: 600px;
    background-repeat: no-repeat;
    background-position: 0 0;
    filter: brightness(1.35);
    background-image: conic-gradient(
      rgba(0, 0, 0, 0),
      #4d6dff,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0) 50%,
      #6e8cff,
      rgba(0, 0, 0, 0) 100%
    );
    animation: rotate 4s linear infinite;
  }

  #main {
    position: relative;
  }

  #search-icon {
    position: absolute;
    left: 20px;
    top: 15px;
  }  
  #results-container {
    display: flex;
    justify-content:center; 
    padding: 16px;
  }
.checkbox {
    margin-left: auto; /* Esto empuja el checkbox (corazón) al lado derecho */
    cursor: pointer;
    }
  
    .result-item {
    display: flex;
    align-items: center;
    justify-content: center; 
flex-direction:center;
    margin: 8px 0;  
    color: #7bee13;
    font-size: 16px;
    padding: 10px; 
    background-color: rgba( 0,0,0, 0.8);
    border-radius: 10vw;
    border: 1px solid #fc00cc;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.7); /* Sombra para dar profundidad */
    transition: all 0.3s ease;
    width:20vw;

  }
    result-item span{
    margin-right:10px}

  .result-item:hover {
    background-color: rgba(0, 0, 0, 1);
    box-shadow: 0 15px 19px rgba(107, 160, 221, 1); /* Efecto más fuerte al pasar el mouse */
    transform: scale(1.09); /* Agrandar ligeramente al pasar el mouse */
  }
    #results-container > div {
  color: #a9c7ff; /* Color azul frío para los resultados */
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px; 
  animation: neonBluePulse 0.5s ease-in-out infinite; /* Animación pulsante */
  text-shadow: 0 0 5px #80b3ff, 0 0 10px #80b3ff, 0 0 15px #66aaff, 0 0 20px #66aaff, 0 0 25px #4d99ff, 0 0 30px #4d99ff, 0 0 35px #3399ff; /* Efecto neón en tonos azules fríos */
}

/* Animación para el efecto de neón pulsante en tonos azules fríos */
@keyframes neonBluePulse {
  0% {
    text-shadow: 0 0 5px #80b3ff, 0 0 10px #80b3ff, 0 0 15px #66aaff, 0 0 20px #66aaff, 0 0 25px #4d99ff, 0 0 30px #4d99ff, 0 0 35px #3399ff;
    opacity: 1;
  }
  50% {
    text-shadow: 0 0 10px #80b3ff, 0 0 20px #80b3ff, 0 0 30px #66aaff, 0 0 40px #66aaff, 0 0 50px #4d99ff, 0 0 60px #4d99ff, 0 0 70px #3399ff;
    opacity: 0.7;
  }
  100% {
    text-shadow: 0 0 5px #80b3ff, 0 0 10px #80b3ff, 0 0 15px #66aaff, 0 0 20px #66aaff, 0 0 25px #4d99ff, 0 0 30px #4d99ff, 0 0 35px #3399ff;
    opacity: 1;
  }
}


  @keyframes rotate {
    100% {
      transform: translate(-50%, -50%) rotate(450deg);
    }
  }
    .no-results {
  color: #ff6666; /* Color rojo para mostrar error */
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  animation: neonPulse 1.5s ease-in-out infinite; /* Animación pulsante */
  text-shadow: 0 0 5px #ff4d4d, 0 0 10px #ff4d4d, 0 0 15px #ff1a1a, 0 0 20px #ff1a1a, 0 0 25px #e60000, 0 0 30px #e60000, 0 0 35px #cc0000; /* Efecto neón */
}

/* Animación para el efecto de neón pulsante */
@keyframes neonPulse {
  0% {
    text-shadow: 0 0 5px #ff4d4d, 0 0 10px #ff4d4d, 0 0 15px #ff1a1a, 0 0 20px #ff1a1a, 0 0 25px #e60000, 0 0 30px #e60000, 0 0 35px #cc0000;
    opacity: 1;
  }
  50% {
    text-shadow: 0 0 10px #ff4d4d, 0 0 20px #ff4d4d, 0 0 30px #ff1a1a, 0 0 40px #ff1a1a, 0 0 50px #e60000, 0 0 60px #e60000, 0 0 70px #cc0000;
    opacity: 0.7;
  }
  100% {
    text-shadow: 0 0 5px #ff4d4d, 0 0 10px #ff4d4d, 0 0 15px #ff1a1a, 0 0 20px #ff1a1a, 0 0 25px #e60000, 0 0 30px #e60000, 0 0 35px #cc0000;
    opacity: 1;
  }
}
  .button-container {
  position: fixed; /* Fija el botón en la parte inferior */
  bottom: 20px; /* Espacio desde la parte inferior de la pantalla */
  left: 50%; /* Centra el botón horizontalmente */
  transform: translateX(-50%); /* Ajuste para asegurar que el botón esté perfectamente centrado */
  z-index: 1000; /* Asegura que el botón quede por encima de otros elementos */
} 
.button {
    height: 50px;
    width: 150px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }

  .button:hover {
    box-shadow: .5px .5px 150px #252525;
  }

  .type1::after {
    content: "THANKS";
    height: 50px;
    width: 150px;
    background-color: #008080;
    color: #fff;
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translateY(50px);
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in-out;
  }

  .type1::before {
    content: "VOTE";
    height: 50px;
    width: 150px;
    background-color: #fff;
    color: #008080;
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translateY(0px) scale(1.2);
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in-out;
  }

  .type1:hover::after {
    transform: translateY(0) scale(1.2);
  }

  .type1:hover::before {
    transform: translateY(-50px) scale(0) rotate(120deg);
  }`;

export default Buscar;
