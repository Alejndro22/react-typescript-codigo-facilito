import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

// React Portals are an advanced concept that allows developers to render their elements outside the
// React hierarchy tree without comprising the parent-child relationship between components.

type ModalProps = {
  children: ReactNode;
  id: string;
};

function PortalModal({ children, id }: ModalProps) {
  // First identify root element where my modal is used
  const modalRoot = document.querySelector(`#${id}`) as HTMLElement;
  // TS find a problem with querySelector, because this could be null,
  // So i can tell TS to trust me, and to treat modalRoot as an HTMLElement
  modalRoot.style.position = 'relative';

  // Now rememeber past classes, in this ref i tell TS which value type i'm expecting
  const elRef = useRef<HTMLDivElement | null>(null);
  if (!elRef.current) elRef.current = document.createElement('div');

  useEffect(() => {
    // This code means that when the modal is created, this div element is added
    const el = elRef.current!;
    // Since I know that el will never be null, i can use !
    // Ending with ! stands for NotNullable
    modalRoot.appendChild(el);

    return () => {
      // and when the component is unmounted the div is destroyed
      // this happens when showModal is false on parent
      modalRoot.removeChild(el);
    };
  }, []);

  // For this createPortal, the first arg is the content, and second is the container
  return createPortal(
    <div
      style={{
        position: 'absolute',
        display: 'grid',
        top: 0,
        left: 0,
        placeItems: 'center',
        height: '50vh',
        width: '50vh',
        transform: 'translate(-50%, -50%)',
        background: 'rgba(0,0,0)',
        zIndex: 99,
      }}
    >
      {children}
    </div>,
    elRef.current
  );
}

export default PortalModal;
