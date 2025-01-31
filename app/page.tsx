"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import type React from "react"

const mensajesMotivacionales = [
  "Día largo, ¿no? Mandame ubicación y te mando una birra virtual. 🍻",
"Me juego lo que sea a que todavía no comiste bien. Andá a hacerte algo. 🍽️",
"Si hoy nadie te dijo que estás haciendo demasiado, acá estoy 💛",
"Pausa mental: respirás, estirás los hombros y seguís. 🌿",
"Te toca un recreo aunque sea de dos minutos. Dale, lo merecés. ⏳",
"Hoy corriste todo el día… ahora toca no hacer nada. Literal. 😌",
"Ponete ‘Hotel California’ de Bandy2 y cantá bajito mientras seguís. 🎶",
"El mundo puede esperar dos minutos. Parate, estirá y respirá. 🌬️",
"Si el café ya no hace efecto, capaz es hora de cambiar por una 🍺.",
"Hoy no se salva nadie, todos a parar un segundo y respirar profundo. 😮‍💨",
"Lo que estás haciendo ahora mismo, lo hacés increíble. Aunque no lo notes. ✨",
"Si el día está pesado, que al menos la música esté buena. 🎵",
"Cuando todo abrume, recordá que ya superaste días peores. 💪",
"Si el reloj se siente lento, ponete un tema de Palito Ortega y que fluya. 🎶",
"Faltan muchas horas para la cerveza, pero pensala y motiváte. 🍻",
"No se puede salvar el mundo en un solo día. ",
"Voy a asumir que todavía no paraste ni un segundo.  ",
"El ´vida mia´ de Lucas Sugo es el ´Ay amor´ de Mattioli?",
"Gianluca Grignani - Mi historia entre tus dedos",
"No te hagas la fuerte, sos un pollito mojado",
"80 mensajes y si encontrás UNA falta de ortografía, te pago",
"Contigo - Sabina",
"Sigo vivo?",
"Tirá la pelotita jeje rebota rebota",
"Imaginate esta escena: vos, un sauce llorón y una cervecita. 🍺",
"Te apuesto que nadie trabajó más que vos hoy. Medalla de oro. 🥇",
"Gracias por todo lo que hacés. 🤗",
"Un recreo de cinco minutos no es delito. Te lo digo por experiencia. 😏",
"Cada esfuerzo vale la pena, pero no te olvides de aflojar un poco. 🌿",
"Mirá el reloj... falta menos para el descanso. Y para la cerveza. 🍻",
"Te apuesto lo que quieras a que te merecés una recompensa hoy.",
"Si el cansancio se pudiera cambiar por plata, serías millonaria hoy. 🤑",
"QUE SE PUDRAAAAAAAAAAAA",
"Ponete ‘Corazon contento’ y que el trabajo sea más llevadero. 🎤",
"Que el día sea un quilombo no significa que vos tengas que serlo. ✨",
"El mundo sigue girando si bajás la marcha un poco. Probalo. 🌍",
"Imaginate en la playa con un trago en la mano.",
"Cuando todo pese, pensá en lo bien que te va a caer ese descanso después. ",
"Si nadie te dijo hoy que sos una genia, te lo digo yo. Lo sos. 💖",
"Cebame un mate que no me enojo",
"El último empujón y a dormir la siesta a oscuras 🌸",
"Mirá todo lo que hiciste ya. Ahora, con calma, terminá lo que queda. ⏳",
"Si estás esperando una señal para frenar un minuto, acá la tenés. 🛑",
"Imaginate el día en que puedas tomarte un día sin hacer nada. Se viene. ⏳",
"Si el estrés fuera un deporte, hoy ya te ganaste la copa. 🏆",
"Ponete un tema de Grupo Uno y bajá un cambio aunque sea tres minutos. 🎵",
"Un poco más, falta menos. Después de esto, una buena recompensa. 🍺",
"El torbellino Lourdes no para",
"Como era la regla de 3?",
"Seguro no paraste ni un segundo hoy. No te olvides de respirar un poco.",
"Anduviste al palo hoy también? Qué raro...",
"No todo tiene que salir rápido. Con que salga bien, ya es suficiente.",
"Si el cuerpo te está pidiendo un descanso, escuchalo.",
"Qué fruta noble la cerveza",
"Merecés que alguien te diga: ‘Buen trabajo, ahora aflojá un poco’.",
"El mundo sigue girando si frenás un momento. Probalo.",
"Si no bajás la marcha vos, nadie lo va a hacer por vos. Cuidate un poco más.",
"No te olvides de vos misma en medio de todo lo que hacés por los demás.",
"Hay días en los que la única meta es llegar al final. Hoy es uno de esos.",
"Cuando sientas que no das más, acordate de lo mucho que ya hiciste.",
"Si hoy no hubo tiempo para vos, encontralo. Aunque sea cinco minutos.",
"Hacé lo tuyo, pero no te dejes absorber por la locura del día.",
"No importa cuánto falte, lo que ya hiciste hoy vale un montón.",
"No estás sola en esto, aunque a veces parezca que sí.",
"Hoy no te para nadie",
"A veces la mejor decisión es soltar lo que no podés controlar.",
"Si alguien más estuviera en tu lugar, le dirías que pare un poco.",
"Las cosas pueden esperar, pero tu bienestar no.",
"Cada esfuerzo cuenta, incluso los que nadie ve.",
"Te estoy viendo 👀",
"SI NO TE HUBIERAS IDO SERIAA TAN FEEEELIZZZ.",
"Acordate que tu energía no es infinita. Guardate un poco para vos.",
"No te preocupes tanto por lo que falta, mirá todo lo que lograste hoy.",
"Si el día se siente eterno, pensá en algo lindo que te espera después.",
"No te olvides de esas pequeñas cosas que te hacen bien en medio del caos.",
"Cuando todo sea un lío, volvé a lo básico: respirar",
"Gente Detergente - Once Tiros, Rock para recargar energía",
"Es increíble todo lo que hacés, pero también está bien aflojar.",
"Si nadie te está mimando hoy, hacelo vos misma. Te lo merecés.",
"Hay días que pesan más que otros. Pero ninguno dura para siempre.",
"Mañana va a ser otro día, pero por ahora no te cargues más de lo necesario.",
"No podés con todo al mismo tiempo, y eso está bien.",
"Hacés más de lo que creés. Date un poco de crédito.",
"Yo confío.",
"No esperes a estar exhausta para darte un respiro.",
"Si hoy nadie te agradeció lo que hacés, dejame hacerlo yo: gracias.",
"No le des más vueltas a lo que ya está hecho. Soltalo y seguí.",
"A veces lo mejor que podés hacer es darte un minuto para vos.",
"Si pudieras verte desde afuera, te admirarías un montón.",
"El trabajo es importante, pero vos lo sos más.",
"Cada día es un desafío, pero cada día también lo superás.",
"la mardita fakin locomotora del chambeo"
]

const coloresPastel = ["bg-pastel-pink", "bg-pastel-blue", "bg-pastel-green", "bg-pastel-yellow", "bg-pastel-purple"]

interface Mensaje {
  id: number
  texto: string
  posicion: { top: number; left: number }
  color: string
}

interface Bolita {
  x: number
  y: number
  vx: number
  vy: number
}

export default function Home() {
  const [mensajes, setMensajes] = useState<Mensaje[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const [bolita, setBolita] = useState<Bolita>({ x: 100, y: 100, vx: 0, vy: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [startPos, setStartPos] = useState({ x: 0, y: 0 })

  const encontrarPosicionLibre = (width: number, height: number): { top: number; left: number } | null => {
    if (!containerRef.current) return null

    const containerWidth = containerRef.current.clientWidth - width
    const containerHeight = containerRef.current.clientHeight - height

    let intentos = 0
    while (intentos < 100) {
      const top = Math.random() * containerHeight
      const left = Math.random() * containerWidth

      const superposicion = mensajes.some(
        (m) => Math.abs(m.posicion.top - top) < height && Math.abs(m.posicion.left - left) < width,
      )

      if (!superposicion) {
        return { top, left }
      }

      intentos++
    }

    return null
  }

  const agregarMensaje = () => {
    const posicion = encontrarPosicionLibre(200, 100)
    if (posicion) {
      const nuevoMensaje: Mensaje = {
        id: Date.now(),
        texto: mensajesMotivacionales[Math.floor(Math.random() * mensajesMotivacionales.length)],
        posicion,
        color: coloresPastel[Math.floor(Math.random() * coloresPastel.length)],
      }
      setMensajes((prevMensajes) => [...prevMensajes, nuevoMensaje])
    }
  }

  const limpiarMensajes = () => {
    setMensajes([])
  }

  useEffect(() => {
    let animationFrameId: number

    const updateBolitaPosition = () => {
      setBolita((prev) => {
        if (isDragging) return prev

        let newX = prev.x + prev.vx
        let newY = prev.y + prev.vy
        let newVx = prev.vx
        let newVy = prev.vy + 0.5 // Gravedad

        const floor = window.innerHeight - 10
        const ceiling = 10
        const leftWall = 10
        const rightWall = window.innerWidth - 10

        // Rebote en paredes laterales
        if (newX < leftWall || newX > rightWall) {
          newVx = -newVx * 0.8
          newX = newX < leftWall ? leftWall : rightWall
        }

        // Rebote en techo
        if (newY < ceiling) {
          newVy = -newVy * 0.8
          newY = ceiling
        }

        // Rebote en suelo
        if (newY > floor) {
          newY = floor
          if (Math.abs(newVy) < 1) {
            newVy = 0
            newVx *= 0.95 // Más fricción en el suelo
          } else {
            newVy = -newVy * 0.7 // Pérdida de energía en el rebote
          }
        }

        // Fricción del aire
        newVx *= 0.995
        newVy *= 0.995

        // Detener la bolita si la velocidad es muy baja y está en el suelo
        if (Math.abs(newVx) < 0.1 && Math.abs(newVy) < 0.1 && newY === floor) {
          newVx = 0
          newVy = 0
        }

        return { x: newX, y: newY, vx: newVx, vy: newVy }
      })

      animationFrameId = requestAnimationFrame(updateBolitaPosition)
    }

    animationFrameId = requestAnimationFrame(updateBolitaPosition)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [isDragging])

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault() // Prevenir la selección de texto
    setIsDragging(true)
    setStartPos({ x: e.clientX - bolita.x, y: e.clientY - bolita.y })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setBolita((prev) => ({
        ...prev,
        x: e.clientX - startPos.x,
        y: e.clientY - startPos.y,
        vx: 0,
        vy: 0,
      }))
    }
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    if (isDragging) {
      setIsDragging(false)
      const endX = e.clientX - startPos.x
      const endY = e.clientY - startPos.y
      const deltaX = endX - bolita.x
      const deltaY = endY - bolita.y
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
      const maxSpeed = 30 // Velocidad máxima
      const speed = Math.min(distance * 0.2, maxSpeed)
      const angle = Math.atan2(deltaY, deltaX)
      setBolita((prev) => ({
        ...prev,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
      }))
    }
  }

  return (
    <main
      ref={containerRef}
      className="flex min-h-screen flex-col items-center justify-center p-24 relative overflow-hidden bg-motivational select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <Button
        onClick={agregarMensaje}
        className="z-10 bg-white text-gray-800 hover:bg-gray-200 transition-colors duration-300 shadow-lg"
      >
       Ando estresada
      </Button>
      {mensajes.map((mensaje) => (
       <div
       key={mensaje.id}
       className={`absolute p-4 rounded-md shadow-lg transition-all duration-300 ${mensaje.color} hover:scale-105 hover:shadow-xl select-none max-w-full h-full flex items-center justify-center`}
       style={{
         top: `${mensaje.posicion.top}px`,
         left: `${mensaje.posicion.left}px`,
         width: "200px",
         height: "100px",
       }}
     >
       <p className="text-gray-800 font-medium break-words overflow-hidden text-ellipsis text-center">
         {mensaje.texto}
       </p>
     </div>
      ))}
      <Button
        onClick={limpiarMensajes}
        className="absolute bottom-4 right-4 z-10 bg-red-400 hover:bg-red-500 transition-colors duration-300 shadow-lg"
      >
        <X className="mr-2 h-4 w-4" /> Limpiar
      </Button>
      <div
        className="absolute w-5 h-5 rounded-full bg-red-500 shadow-lg cursor-grab active:cursor-grabbing"
        style={{
          left: `${bolita.x}px`,
          top: `${bolita.y}px`,
          transform: "translate(-50%, -50%)",
        }}
        onMouseDown={handleMouseDown}
      />
    </main>
  )
}

