import React, { useState } from 'react'
import styled from "styled-components";
import tw from "twin.macro";
import { Marginer } from '../ui/atoms/Margin';

import Title from "../ui/atoms/Title"

interface Props {
    imgUrl: string[] | undefined;
}

export const PictureList: React.FC<Props> = ({ imgUrl }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openModal = (image: string) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const renderedImgs = imgUrl?.map((url,i) => {
        return <div key={i} className='relative' onClick={() => openModal(url)}><Image src={url} /></div>

    })

    return (
        <PictureSession>
            <Title title={"Photos"} size={'medium'} />
            <Marginer direction='vertical' margin={'0.5em'} />
            <ImageGrid>{renderedImgs}</ImageGrid>

            {selectedImage && (
                <Modal>
                    <ModalOverlay onClick={closeModal} />
                    <ModalContent>
                        <CloseButton onClick={closeModal}>X</CloseButton>
                        <ModalImage src={selectedImage} />
                    </ModalContent>
                </Modal>
            )}

        </PictureSession>
    )
}

const PictureSession = styled.div`
    ${tw`
        my-8
        flex
        flex-col
    `}
`
const ImageGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    width: 100%;
`
const Image = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  cursor: pointer;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

const ModalContent = styled.div`
  position: relative;
  z-index: 101;
  max-width: 90%;
  max-height: 90%;
  overflow: hidden;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem;
  font-size: 2rem;
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
