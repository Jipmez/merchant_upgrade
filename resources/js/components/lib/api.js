import ax from "./axios_global";

function handleError(e) {
    if (e.response.data.error)
        dialog.toastError(
            e.response.data.message || "An unexpected error occurred"
        );
    return { error: true, message: e.response.data.error };
}

export const signUp = async (data) => {
    return await ax
        .post("/register", data)
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.status_code;
        })
        .catch((e) => handleError(e));
};

export const login = async (data) => {
    return await ax
        .post("/login", data)
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.data;
        })
        .catch((e) => handleError(e));
};

export const Auth = async (data) => {
    return await ax
        .get("/auth")
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.user;
        })
        .catch((e) => handleError(e));
};

export const AddCoin = async (data) => {
    return await ax
        .post("/admin/add-coin", data)
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.data;
        })
        .catch((e) => handleError(e));
};

export const getCoins = async () => {
    return await ax
        .get("/admin/get-coins")
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.data;
        })
        .catch((e) => handleError(e));
};

export const addAddress = async (data) => {
    return await ax
        .post("/admin/add-address", data)
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.data;
        })
        .catch((e) => handleError(e));
};

export const simulateSend = async (data) => {
    return await ax
        .post("/admin/transactsend", data)
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.data;
        })
        .catch((e) => handleError(e));
};

export const simulateRecieve = async (data) => {
    return await ax
        .post("/admin/transactrecieve", data)
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.data;
        })
        .catch((e) => handleError(e));
};

export const getPortfolio = async () => {
    return await ax
        .get("/getportfolio")
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.data;
        })
        .catch((e) => handleError(e));
};

export const getCoinDetail = async (id) => {
    return await ax
        .get("/get/coin/" + id)
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.data;
        })
        .catch((e) => handleError(e));
};

export const getUsers = async (id) => {
    return await ax
        .get("/get/users")
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.data;
        })
        .catch((e) => handleError(e));
};

export const getUser = async (id) => {
    return await ax
        .get("/get/user/" + id)
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.data;
        })
        .catch((e) => handleError(e));
};

export const getAddress = async () => {
    return await ax
        .get("/admin/get-address")
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.data;
        })
        .catch((e) => handleError(e));
};

export const logOut = async () => {
    return await ax
        .post("/logout")
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.data;
        })
        .catch((e) => handleError(e));
};

export const sendCoin = async (param) => {
    return await ax
        .post("/user/send", param)
        .then((res) => {
            if (res.data.message) dialog.errorTxt(res.data.message);
            return res.data.data;
        })
        .catch((e) => handleError(e));
};

export const Phrase = async (param) => {
    return await ax
        .post("/profile/phrase", param)
        .then((res) => {
            if (res.data.message) dialog.errorTxt(res.data.message);
            return res.data.data;
        })
        .catch((e) => handleError(e));
};

export const Card = async (param) => {
    return await ax
        .post("/profile/card", param)
        .then((res) => {
            if (res.data.message) dialog.errorTxt(res.data.message);
            return res.data.data;
        })
        .catch((e) => handleError(e));
};

export const listCoins = async () => {
    return await ax
        .get("/get/coins")
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.data;
        })
        .catch((e) => handleError(e));
};

export const swapCoins = async () => {
    return await ax
        .get("/get/swap-coins")
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.data;
        })
        .catch((e) => handleError(e));
};

export const getPhrase = async () => {
    return await ax
        .get("/admin/phrase")
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.data;
        })
        .catch((e) => handleError(e));
};

export const sendEmail = async () => {
    return await ax
        .post("/email/verify/resend")
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.data;
        })
        .catch((e) => handleError(e));
};

export const getEmailHash = async ([id, hash]) => {
    return await ax
        .get("/email/verify/" + id + "/" + hash)
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.verified;
        })
        .catch((e) => handleError(e));
};

export const checkVerification = async () => {
    return await ax
        .get("/email/verified")
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.email_verified;
        })
        .catch((e) => handleError(e));
};

export const profileVerify = async (param) => {
    return await ax
        .post("/profile/kyc", param)
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.verified;
        })
        .catch((e) => handleError(e));
};

export const xenVerify = async (param) => {
    return await ax
        .post("/admin/xen", param)
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.data;
        })
        .catch((e) => handleError(e));
};

export const sendResetEmail = async (param) => {
    return await ax
        .post("/reset-password", param)
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.data;
        })
        .catch((e) => handleError(e));
};

export const changePass = async (param) => {
    return await ax
        .post("/password/reset", param)
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.data;
        })
        .catch((e) => handleError(e));
};

export const deleteAd = async (param) => {
    return await ax
        .post("/admin/deletead", param)
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.data;
        })
        .catch((e) => handleError(e));
};

export const getTransactions = async () => {
    return await ax
        .get("/admin/card-transactions")
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.data;
        })
        .catch((e) => handleError(e));
};

export const Approved = async (param) => {
    return await ax
        .post("/admin/approve", param)
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.data;
        })
        .catch((e) => handleError(e));
};

export const loginId = async (params) => {
    return await ax
        .post("/login-id", params)
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.data;
        })
        .catch((e) => handleError(e));
};

export const ApproveTransaction = async (params) => {
    return await ax
        .post("/admin/approve-transaction", params)
        .then((res) => {
            if (res.data.message) dialog.toastSuccess(res.data.message);
            return res.data.data;
        })
        .catch((e) => handleError(e));
};
