import { useState, useRef, useEffect } from 'react'

export default function ChatbotWidget() {
  const [chatOpen, setChatOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  const bottomRef = useRef(null)

  const toggleChat = () => {
    setChatOpen(!chatOpen)
  }

  const sendMessage = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: input }),
    })

    const data = await res.json()
    setMessages([...messages, { pregunta: input, respuesta: data.answer }])
    setInput('')
  }

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, chatOpen])

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-green-700 hover:bg-green-800 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl z-50"
      >
        <i className="fas fa-comment-dots"></i>
      </button>

 
      {chatOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white border border-green-300 rounded-xl shadow-xl p-4 z-40 flex flex-col">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-green-800 font-bold text-lg">Coffee & Cats Chatbot</h4>
            <button
              onClick={toggleChat}
              className="text-green-500 hover:text-red-500"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto bg-green-50 rounded p-3 text-sm">
            <div className="flex justify-start items-start gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold">
                <i className="fas fa-robot text-black" />
              </div>
              <div className="bg-white text-gray-800 p-2 rounded-xl max-w-[75%] border border-green-300 shadow">
                ¡Hola! Soy tu guía en Coffee & Cats 🐾. ¿En qué puedo ayudarte hoy? Puedes preguntarme sobre horarios, precios o actividades.
              </div>
            </div>

            {messages.map((msg, i) => (
              <div key={i} className="mb-6">
                <div className="flex justify-end items-start gap-2 mb-2">
                  <div className="bg-green-200 text-green-900 p-2 rounded-xl max-w-[75%] shadow">
                    <strong>Tú:</strong> {msg.pregunta}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center font-bold">
                    <i className="fas fa-user" />
                  </div>
                </div>

                <div className="flex justify-start items-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold">
                    <i className="fas fa-robot text-black" />
                  </div>
                  <div className="bg-white text-gray-800 p-2 rounded-xl max-w-[75%] border border-green-300 shadow">
                     {msg.respuesta}
                  </div>
                </div>
              </div>
            ))}
            <div ref={bottomRef}></div>
          </div>
          <form onSubmit={sendMessage} className="flex gap-2 mt-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Haz una pregunta..."
              className="flex-1 border border-green-300 rounded-lg px-4 py-2 text-base text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg"
            >
              Enviar
            </button>
          </form>
        </div>
      )}
    </>
  )
}