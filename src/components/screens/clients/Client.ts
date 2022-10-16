import api from "../../../hooks/api";

export default async () => {
    const clients = await api.get('/api/client')
    console.log(clients)
}