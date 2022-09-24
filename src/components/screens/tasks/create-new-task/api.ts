import api from "../../../../hooks/api";

export async function allClient () {
        const clients = await api.get('/api/client/')
        if(clients.status >= 400) return false
        return clients.data.res
}

export async function typeTask () {
        const tipos = await api.get('/api/task/type')
        if(tipos.status >= 400) return false
        return tipos.data.res
}