import service from '../services/chat.js'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const messagePath = path.join(__dirname, '../../public/message.html');

async function getMessagesByMail(req, res) {
    let {mail} = await req.params
    const mensajes = await service.obtenerMensajes(mail)
    res.json(mensajes)
}

async function getToMessages(req, res) {
    res.sendFile(messagePath)
}

async function postMessage(req, res) {
    let messageInfo = req.body
    let mensajeNuevo = await service.sumarMensaje(messageInfo)
    res.json(mensajeNuevo)
}

export default {
    getToMessages,
    postMessage,
    getMessagesByMail
}
