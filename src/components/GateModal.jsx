import { useEffect, useRef } from 'react';
import EmailCapture from './EmailCapture.jsx';
import { useGate } from '../context/GateContext.jsx';

export default function GateModal() {
  const { showModal, setShowModal, unlock } = useGate();
  const cardRef = useRef(null);

  useEffect(() => {
    if (!showModal) return;
    function handleKey(e) {
      if (e.key === 'Escape') setShowModal(false);
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [showModal, setShowModal]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
      cardRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [showModal]);

  if (!showModal) return null;

  function handleSuccess(email) {
    unlock(email);
    setShowModal(false);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(17,22,61,0.6)', backdropFilter: 'blur(2px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}
    >
      <div
        ref={cardRef}
        tabIndex={-1}
        className="bg-white rounded-2xl p-8 w-full outline-none"
        style={{
          maxWidth: '28rem',
          border: '1px solid #11163d1a',
          boxShadow: '0 20px 60px rgba(17,22,61,0.2)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl mb-1.5" style={{ color: '#11163d', fontWeight: 500 }}>
          Unlock all 95 prompts
        </h2>
        <p className="text-sm mb-6" style={{ color: '#11163da3' }}>
          Free — enter your email and every prompt unlocks instantly.
        </p>
        <EmailCapture compact onSuccess={handleSuccess} />
      </div>
    </div>
  );
}
