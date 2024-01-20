// const phoneNums = [
//   "801-766-9754",
//   "801-545-5454",
//   "435-666-4353",
//   "801-796-5454",
//   "435-555-4353",
//   "801-009-0909",
//   "435-222-8013",
//   "801-777-6655-",
//   "801-777-6655",
//   "801-999-777-",
// ];

export function filterByCodeArea(
  phoneNums: string[],
  codeArea: string
): string[] {
  const validPhone = /^\d{3}-\d{3}-\d{4}$/;
  const pattern = new RegExp(`^${codeArea}`);

  return phoneNums.filter((phoneNum) => {
    const areaCode = phoneNum.slice(0, 3);
    return validPhone.test(phoneNum) && pattern.test(areaCode);
  });
}
