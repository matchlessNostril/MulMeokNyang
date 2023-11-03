import axios from "axios";

export const localSignUp = async (
  email: string,
  pw: string,
  name: string,
  phoneNum: string
) => {
  try {
    const res = await axios.post("localSignUp", {
      userEmail: email,
      userPw: pw,
      userName: name,
      userPhoneNum: phoneNum,
    });
    const signUpSuccess = res.data.signUpSuccess;
    return signUpSuccess;
  } catch (error) {
    throw error;
  }
};