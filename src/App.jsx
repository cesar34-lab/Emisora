import React, { useState } from 'react';
import Button from './Button';
import Login from './Login';
import Modal from 'react-modal';
import styled from 'styled-components';

Modal.setAppElement('#root'); // Cambia '#root' al id de tu contenedor principal si es diferente

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Button onClick={openModal}>Ingresar</Button>
      <Modal 
        isOpen={isModalOpen} 
        onRequestClose={closeModal} 
        contentLabel="Login Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.85)', // Color de fondo del overlay
          },
          content: {
            top: '50%', // Posición vertical
            left: '50%', // Posición horizontal
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%', // Margen para centrar
            transform: 'translate(-50%, -50%)', // Centrar el modal
            padding: '0', // Sin espaciado interno para usar el patrón completo
            border: 'none', // Sin borde
            backgroundColor: 'transparent', // Fondo transparente para mostrar el patrón
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '90vw', // Ancho del modal
            height: '100vh', // Altura del modal
            overflow:'hidden'
          },
        }}
      >
        <Login />
        <CloseButton onClick={closeModal}>Cerrar</CloseButton>
      </Modal>
    </div>
  );
};

// Componente del botón de cerrar estilizado
const CloseButton = styled.button`
  position: absolute;
  bottom: 20px; // Ajuste para la parte inferior
  left: 20px; // Ajuste para la parte izquierda
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 15px 20px;
  background-color: #252525; // Color de fondo
  border: none;
  font: inherit;
  color: #e8e8e8;
  font-size: 20px;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease cubic-bezier(0.23, 1, 0.320, 1);

  span {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
  }

  svg {
    width: 20px; // Tamaño del icono
    height: 20px;
    fill: #e8e8e8; // Color del icono
    transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
  }

  &:hover {
    background-color: #e93729; // Cambia el color de fondo al pasar el mouse
    svg {
      fill: #e93729; // Cambia el color del icono al pasar el mouse
    }
  }
`;

export default App;
