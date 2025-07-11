import Swal from "sweetalert2";
import { icons } from "./icons";

export class dialog {
    constructor() {
        const icon = new icons();
    }
    static loading(title = "") {
        var ic = new icons();
        Swal.fire({
            html: ic.loader(44, 44),
            title: title,
            showConfirmButton: false,
            showCancelButton: false,
            allowOutsideClick: false,
        });
    }

    static error(response) {
        var icon = new icons();
        if (Array.isArray(response.data.message)) {
            var emsg = "";
            var errors = response.data.message;
            console.log(errors.length);
            for (let index = 0; index < errors.length; index++) {
                const element = errors[index];
                emsg += `<div class="alert dark alert-danger p-1" role="alert">
                    ${element}
                </div>`;
            }
            Swal.fire({
                html: emsg,
                showCancelButton: true,
                showConfirmButton: false,
                icon: "error",
                cancelButtonText: "OK",
                cancelButtonColor: "var(--color-error)",
            });
        } else {
            Swal.fire({
                text: response.data.message,
                showCancelButton: true,
                showConfirmButton: false,
                icon: "error",
                cancelButtonText: "OK",
                cancelButtonColor: "var(--color-primary)",
            });
        }
    }

    static errorTxt(text) {
        Swal.fire({
            text: text,
            showCancelButton: true,
            showConfirmButton: false,
            iconHtml: '<img src="/assets/images/icon-error.png">',
            cancelButtonText: "OK",
            cancelButtonColor: "var(--color-primary)",
        });
    }

    static success(message) {
        Swal.fire({
            title: "Your info is being Reviewed",
            text: message,
            showCancelButton: false,
            showConfirmButton: false,
            iconHtml: '<img src="/assets/images/icon-success.png">',
            cancelButtonText: "OK",
            cancelButtonColor: "var(--color-primary)",
        });
    }

    static welcome(message) {
        Swal.fire({
            title: "Welcome Back",
            text: message,
            showCancelButton: false,
            showConfirmButton: false,
            iconHtml: '<img src="/assets/images/icon-success.png">',
            cancelButtonText: "OK",
            cancelButtonColor: "var(--color-primary)",
        });
    }

    static confirm(message = "Are you sure you want to proceed?") {
        return Swal.fire({
            title: "Take Action",
            text: message,
            showDenyButton: false,
            confirmButtonText: "Confirm",
            denyButtonText: "No",
            iconHtml: '<img src="/assets/images/icon-confirm.png">',
            confirmButtonColor: "var(--color-primary)",
            customClass: {
                actions: "my-actions",
                cancelButton: "order-1 right-gap",
                confirmButton: "order-2",
                denyButton: "order-3",
            },
        });
    }

    static toastSuccess(message) {
        Swal.fire({
            iconHtml: '<img src="/assets/images/icon-success.png">',
            toast: true,
            title: "Success",
            text: message,
            animation: true,
            position: "top-end",
            showConfirmButton: false,
            showCloseButton: true,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
        });
    }

    static toastError(message) {
        Swal.fire({
            // iconHtml: '<img src="/assets/images/icon-error.png">',
            toast: true,
            title: "Error",
            text: message,
            // animation: true,
            position: "top-end",
            showConfirmButton: false,
            showCloseButton: true,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
        });
    }

    static close() {
        Swal.close();
    }
}

// export const waitLoader = () => {
//     var icon = new icons()
//     var loader = Swal.fire({
//         html:icon.loader(44,44),
//         showConfirmButton:false,
//         showCancelButton:false,
//     })

//     // Swal.close()
// }
