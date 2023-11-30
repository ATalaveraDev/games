import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function createWrapperAndAppendToBody() {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', 'modal');
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

export default function Modal({children, open}) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  let element = document.getElementById('modal');

  if (!element) {
    element = createWrapperAndAppendToBody();
  }

  return createPortal(
    <dialog ref={dialog}>{children}</dialog>,
    element
  );
}