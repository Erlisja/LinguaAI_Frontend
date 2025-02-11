import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSelector from '../components/language/LanguageSelector';

const slideVariants = {
  hidden: { x: '100vw', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
  }, // Smooth bezier curve
  exit: {
    x: '-100vw',
    opacity: 0,
    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

const LanguageSelection = ({ onSelect }) => {
  const [step, setStep] = useState(0);
  const [nativeLanguage, setNativeLanguage] = useState(null);
  const [targetLanguage, setTargetLanguage] = useState(null);

  const handleSelect = (language) => {
    if (step === 0) {
      setNativeLanguage(language);
      setStep(1);
    } else if (step === 1) {
      setTargetLanguage(language);
      setStep(2);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {step === 0 && (
        <motion.div
          key="native"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={slideVariants}
          className=" h-screen  w-full  "
        >
          <LanguageSelector type="native" onSelect={handleSelect} />
        </motion.div>
      )}
      {step === 1 && (
        <motion.div
          key="target"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={slideVariants}
          className=" h-screen w-full "
        >
          <LanguageSelector type="target" onSelect={handleSelect} />
        </motion.div>
      )}
      {step === 2 && (
        <motion.div
          key="summary"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={slideVariants}
          className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-t from-blue-100 to-blue-500 text-white" 
        >
          <h1 className="text-3xl font-bold mb-6">You Selected:</h1>
          <p className="text-xl">
            Native: {nativeLanguage?.name} {nativeLanguage?.flag}
          </p>
          <p className="text-xl mt-2">
            Learning: {targetLanguage?.name} {targetLanguage?.flag}
          </p>
          <button
            className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold shadow-md hover:bg-blue-600"
            onClick={() => onSelect(nativeLanguage, targetLanguage)}
          >
            Start Learning
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LanguageSelection;
