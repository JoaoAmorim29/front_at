import { toast, ToastPosition, ToastContentProps } from 'react-toastify';

class Notify {
    static createNotify(
        type: String,
        msg: String,
        position: ToastPosition | undefined | null) {

        const configurações = {
            theme: 'dark',
            position: position
        }

        switch (type) {
            case 'success':
                toast.success(msg, {
                    theme: 'colored',
                    position: position
                })
                break
            case 'erro':
                toast.error(msg, configurações)
                break
            case 'info':
                toast.info(msg, configurações)
                break
            case 'warning':
                toast.warning(msg, configurações)
                break
            default:
                alert('Algo deu errado, tente novamentel')
        }
    }
}

export default Notify