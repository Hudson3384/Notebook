import { useState } from 'react'
import useWindowResize from './hooks/useWindowResize'
import { Button, Modal as AModal, ModalProps } from 'antd'
import './App.css'

const useModal = ({modalWidth}: {modalWidth: string | number | undefined}) => {
  const {width} = useWindowResize()
  const breakpoint =  720
  const customWidth = width > breakpoint ? modalWidth : '100%'
  return {customWidth}

 
}
const Modal = ({width, ...props}: ModalProps) => {
  const {customWidth} = useModal({modalWidth: width})
  return (
    <AModal 
      width={customWidth}
      {...props}
      />
  )
}
function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className='card'>
      <Button
        onClick={() => setOpen(true)}
      >
        Open Modal
      </Button>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        width={'30%'}
      >
        <div>
          <p>Lorem Ipsum, if else, foo bar.</p>
        </div>
      </Modal>
    </div>
  )
}

export default App
