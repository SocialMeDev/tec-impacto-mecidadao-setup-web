import { memo, useState, useRef, useEffect } from 'react'
import { Center, ModalFooter, Button, Heading, ModalBody, ModalHeader, useColorModeValue } from '@chakra-ui/react'

import { useUploadImage } from '@lib/components/uploads/UploadImage/context/Provider'

function WebcamPreview() {
  const { setView, setImage } = useUploadImage()

  const [error, setError] = useState('')

  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (mediaStream) {
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream
          videoRef.current.play()
        }
      })
      .catch((error) => {
        if (error.message === 'Requested device not found') {
          setError('Sinto muito, mas você não possui dispositivo de video')
        } else {
          setError('Acesso ao dispositivo negado')
        }
      })
  }, [])

  const cropImage = () => {
    if (!videoRef.current) return
    const video = videoRef.current
    const canvas = document.createElement('canvas')
    canvas.height = video.videoHeight
    canvas.width = video.videoWidth
    const context = canvas.getContext('2d')
    context?.drawImage(video, 0, 0)

    canvas.toBlob(function (blob) {
      if (!blob) return
      const file = new File([blob], 'imagem.png')
      const fileUrl = URL.createObjectURL(file)

      setImage({ file, fileUrl })
    })
  }

  return (
    <>
      <ModalHeader>
        <Heading size="md">Tirar foto</Heading>
      </ModalHeader>

      <ModalBody bg={useColorModeValue('gray.100', 'gray.800')}>
        {error ? (
          <Center minWidth="500px" height="400px">
            <Heading size="md">{error}</Heading>
          </Center>
        ) : (
          <Center>
            <video id="webcam-video" ref={videoRef} />
          </Center>
        )}
      </ModalBody>

      <ModalFooter>
        <Button variant="outline" onClick={() => setView('Gallery')}>
          Fechar
        </Button>
        <Button isDisabled={!!error} onClick={cropImage}>
          Tirar foto
        </Button>
      </ModalFooter>
    </>
  )
}

export default memo(WebcamPreview)
