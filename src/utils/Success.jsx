import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Success = (data) => {
  toast.success(data, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default Success;
