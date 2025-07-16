# 🐾 Coffee & Cats – Chatbot Multilingüe para Sitio Web de Café y Refugio Felino

Coffee & Cats es una aplicación web diseñada para mejorar la experiencia del visitante en un café con gatos. El sistema incluye un **chatbot inteligente y multilingüe** que responde preguntas frecuentes sobre horarios, adopciones y actividades del refugio.

## 🧠 Funcionalidades principales

- 🤖 **Chatbot** integrado en el sitio, con interfaz intuitiva y fija en pantalla.
- 🌍 **Traducción automática** de preguntas y respuestas usando Google Cloud Translation.
- 🔎 **Búsqueda semántica** con Elasticsearch para interpretar preguntas con lenguaje natural.
- 🐱 Sección dedicada a gatos en adopción, actividades del café y eventos especiales.

## 🏗️ Tecnologías utilizadas

| Tecnología             | Propósito                                      |
|------------------------|-----------------------------------------------|
| [Next.js] | Framework para el frontend y API endpoints |
| [Elasticsearch] | Motor de búsqueda semántico para preguntas |
| [Google Cloud Translation API] | Traducción automática de mensajes |
| Tailwind CSS          | Estilos rápidos y responsivos                 |
| React                 | Interfaz de usuario dinámica                  |

## 📁 Estructura del proyecto

```
coffee-cats-chatbot/
├── public/
├── components/
│   ├── Chatbot.tsx
│   └── Message.tsx
├── pages/
│   ├── index.tsx
│   └── api/
│       └── chat.ts
├── styles/
│   └── globals.css
├── utils/
│   ├── elasticsearch.ts
│   └── translate.ts
├── .env.local
├── package.json
└── README.md
```

## 🚀 Cómo iniciar el proyecto

1. **Clonar el repositorio**

```bash
git clone https://github.com/IsabelGaleano/tech-test-chatbot
cd tech-test-chatbot
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**

Crea un archivo `.env.local`:

```env
ELASTICSEARCH_URL=https://your-es-endpoint
ELASTICSEARCH_API_KEY=your-key
GOOGLE_CLOUD_PROJECT_ID=your-project-id
GOOGLE_CLOUD_CREDENTIALS_JSON='{"type":"service_account", ... }'
```

4. **Ejecutar en modo desarrollo**

```bash
npm run dev
```

Abre en el navegador: [http://localhost:3000]

## 🌐 Idiomas soportados

El chatbot detecta y traduce automáticamente entre:

- Español
- Inglés
- Portugués
- Coreano
- Otros idiomas compatibles con la API de Google Translate