
import { toast } from "react-toastify";
import { UserDataService } from "../../services/authServices/signUpAndLoginService/userDataService";

export const handleSubmitforSingup = async (e, formData, setIsSignedUp) => {
    e.preventDefault();

    try {
        const response = await UserDataService(formData);
        if (!response.toastNotification) {
            toast.error(response.message || "Signup failed!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            return false;
        }
        // toast.toastNotification(true, {
        //     position: "top-right",
        //     autoClose: 3000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        // });

        setIsSignedUp(true);
        return true;
    } catch (error) {
        console.error("Submission error:", error);
        toast.error("Signup failed! Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        return false;
    }
};
