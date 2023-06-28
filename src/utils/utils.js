import { toast } from 'react-toastify';

const ToastHandler = (type, message,timeToClose) => {
  if (type === 'error') {
    toast.error(message, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  } else if (type === 'warn') {
    toast.warn(message, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  } else if (type === 'success') {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  } else if (type === 'info') {
    toast.info(message, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    }
    else if (type=== 'default'){
      toast(message, {
        position: "bottom-right",
        autoClose: timeToClose,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
 
};

const calculateElapsedTime = (dateString) => {
  const currentDate = new Date();
  const date = new Date(dateString);
  const elapsedMilliseconds = currentDate - date;
  const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);

  if (elapsedSeconds < 60) {
    return `${elapsedSeconds} second${elapsedSeconds !== 1 ? 's' : ''} ago`;
  }

  const elapsedMinutes = Math.floor(elapsedSeconds / 60);
  if (elapsedMinutes < 60) {
    return `${elapsedMinutes} minute${elapsedMinutes !== 1 ? 's' : ''} ago`;
  }

  const elapsedHours = Math.floor(elapsedMinutes / 60);
  if (elapsedHours < 24) {
    return `${elapsedHours} hour${elapsedHours !== 1 ? 's' : ''} ago`;
  }

  const elapsedDays = Math.floor(elapsedHours / 24);
  if (elapsedDays < 30) {
    return `${elapsedDays} day${elapsedDays !== 1 ? 's' : ''} ago`;
  }

  const elapsedMonths = Math.floor(elapsedDays / 30);
  if (elapsedMonths < 12) {
    return `${elapsedMonths} month${elapsedMonths !== 1 ? 's' : ''} ago`;
  }

  const elapsedYears = Math.floor(elapsedMonths / 12);
  return `${elapsedYears} year${elapsedYears !== 1 ? 's' : ''} ago`;
}
export {ToastHandler,calculateElapsedTime}