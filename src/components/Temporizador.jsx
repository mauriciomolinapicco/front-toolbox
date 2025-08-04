import { useEffect, useState } from 'react'

function Temporizador() {
  const [minutos, setMinutos] = useState(0)
  const [segundos, setSegundos] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      const secs = segundos+1;
      if (secs >= 60) {
        setSegundos(0);
        const min = minutos + 1;
        setMinutos(min);
      } else {
        setSegundos(secs);
      }
    }, 100)
  }, [segundos])


  return (
      <div> Llevas {minutos}:{segundos} en la app </div>
  )
}

export default Temporizador
