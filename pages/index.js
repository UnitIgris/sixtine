import { useEffect, useState } from 'react'

const Page = () => {
  const [screenHeight, setScreenHeight] = useState(0)

  function getScreenHeight() {
    const newScreenHeight = window.innerHeight
    console.log("La hauteur de l'écran est de : " + newScreenHeight + ' pixels')
    setScreenHeight(newScreenHeight)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenHeight(window.innerHeight)
      window.addEventListener('resize', getScreenHeight)
      document.body.style.cssText =
        'background-color: #323639; overflow: hidden;'

      return () => {
        window.removeEventListener('resize', getScreenHeight)
      }
    }
  }, [])

  return (
    <div>
      <embed
        src="../Portfolio_2023_Sixtine_Poignant.pdf"
        type="application/pdf"
        width="100%"
        height={screenHeight}
      />
    </div>
  )
}

export default Page
