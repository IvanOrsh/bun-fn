/*
supported phone number formats:
  (nnn)-nnn-nnnn
  nnn.nnn.nnnn
  nnn-nnn-nnnn
  nnnnnnnnnn
  (nnn)nnn-nnnn
*/

export function validatePhoneNumber(phoneNum: string): boolean {
  const validPhone = /^\(?\d{3}\)?[\.-]?\d{3}[\.-]?\d{4}$/;
  return validPhone.test(phoneNum);
}
