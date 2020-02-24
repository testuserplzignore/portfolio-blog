import React, { useState, useEffect } from 'react';

const useAtTopOfPage = () => {
  const [visible, setVisible] = useState(true)

  const listenToScroll = () => {
    if (window.pageYOffset !== 0) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    }
  })

  return visible
}

export default useAtTopOfPage