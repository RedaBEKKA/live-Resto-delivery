import { fr } from "yup-locales";
import { setLocale } from "yup";
import { useDispatch } from "react-redux";
import { getDeliveryInfoId } from "../../../../Redux/Features/Screens/Home/Slice";

setLocale(fr);

export function UseDeliveryId() {

    const dispatch = useDispatch();

    const onSuccess = () => {};

    const onError = (error) => {
      console.log("error", error);
      // toastRef.current.showToast(error);
    };
    const onErrorAction = () => {};
  
    const onGetRoutes = async (values) => {
      let object = {
        onSuccess,
        onError,
        onErrorAction,
        values,
      };
      dispatch(getDeliveryInfoId(object));
    };

  return {
    goToTraking,
    onSuccess,
    onError,
    onErrorAction,
  };
}
