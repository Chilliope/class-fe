import Swal from 'sweetalert2'

export default function useSwal() {
    async function accepted(text) {
        await Swal.fire({
            width: '250px',
            icon: 'success',
            title: 'Success',
            text: text == null ? 'Data Saved Successfully' : text,
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                title: 'text-lg',
                popup: 'text-sm text-center'
            }
        })
    }

    async function rejected(text) {
        await Swal.fire({
            width: '250px',
            icon: 'error',
            title: 'Fail',
            text: text == null ? 'Data Saved Failed' : text,
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                title: 'text-lg',
                popup: 'text-sm text-center'
            }
        })
    }

    async function confirm(text) {
        const response = await Swal.fire({
            width: '250px',
            icon: 'question',
            title: 'Confirm',
            text: text == null ? 'Are You Sure?' : text,
            showCancelButton: true,
            confirmButtonColor: "#3b82f6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sure",
            cancelButtonText: "Nah",
            customClass: {
                title: 'text-lg',
                popup: 'text-sm text-center'
            }
        })

        return response
    }

    return {
        accepted,
        rejected,
        confirm
    }
}