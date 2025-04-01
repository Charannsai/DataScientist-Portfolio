import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function Modal({ isOpen, onClose, title, children, externalLink }) {
  if (!isOpen) return null; // Prevent rendering when modal is closed

  return (
    <Transition appear show={isOpen} as={Fragment} unmount={false}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-card-bg backdrop-blur-lg p-8 text-left align-middle shadow-xl transition-all border border-border-color">
                <div className="flex justify-between items-start mb-6">
                  <Dialog.Title as="h3" className="modal-title">
                    {title || 'Modal Title'} {/* Fallback title for accessibility */}
                  </Dialog.Title>
                  <motion.button
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaTimes className="text-xl" />
                  </motion.button>
                </div>

                <div className="modal-content">{children}</div>

                {externalLink && (
                  <motion.div 
                    className="mt-8 pt-6 border-t border-border-color"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <a
                      href={externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent-color hover:text-accent-color/80 transition-colors"
                    >
                      View External Link <FaExternalLinkAlt />
                    </a>
                  </motion.div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

// Prop validation
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
  externalLink: PropTypes.string,
};

export default Modal;