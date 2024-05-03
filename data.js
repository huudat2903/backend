// console.log("Hello World");

// const array = [1, 2, 3, 4];

// const object = {
//   dat: "091",
//   quan: "092",
// };

// bài tập 1:
// Cho 1 số và 1 dãy số tìm xem số đấy có tồn tại trong dãy số k
// Ví dụ : 1 , [2,3,4] => false
// Ví dụ 2: 1, [2,3,4,1] => true

// bài tập 2: Thêm Sửa Xoá 1 Element của Object và Array
// bài tập 3: Cho 1 dãy số dương không sắp xếp theo thứ tự , trả về dãy số đấy theo thứ tự từ lớn đến nhỏ (không được dùng những function mặc định của js và tự viết)
// ví dụ 1: [2,3,6,5] => [2,3,5,6]

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const checkNumber = (a, array) => {
//   return array.includes(a);
// };

// rl.question("Nhập số cần tìm: ", (soCanTim) => {
//   rl.question("Nhập dãy số: ", (daySo) => {
//     const soCanTimInt = parseInt(soCanTim);
//     const daySoArray = daySo.split(" ").map(Number);

//     if (checkNumber(soCanTimInt, daySoArray)) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }

//     rl.close();
//   });
// });

// let object = {};

// const themObject = () => {
//   rl.question("Nhập tên thuộc tính: ", (tenObject) => {
//     rl.question("Nhập giá trị: ", (giaTri) => {
//       object[tenObject] = giaTri;
//       console.log("Đã thêm thuộc tính mới:", object);
//       menu();
//     });
//   });
// };

// const suaObject = () => {
//   rl.question("Nhập tên thuộc tính: ", (tenObject) => {
//     rl.question("Nhập giá trị mới: ", (giaTriMoi) => {
//       if (object.hasOwnProperty(tenObject)) {
//         object[tenObject] = giaTriMoi;
//         console.log("Đã sửa thuộc tính thành:", object);
//       } else {
//         console.log("Không tồn tại");
//       }
//       menu();
//     });
//   });
// };

// const xoaObject = () => {
//   rl.question("Nhập tên thuộc tính: ", (tenObject) => {
//     if (object.hasOwnProperty(tenObject)) {
//       delete object[tenObject];
//       console.log("Đã xoá thuộc tính:" + " " + tenObject);
//     } else {
//       console.log("Không tồn tại");
//     }
//     menu();
//   });
// };

// const kiemTraDuLieu = () => {
//   if (Object.keys(object).length === 0) {
//     console.log("Object không có dữ liệu.");
//   } else {
//     console.log("Object có dữ liệu:", object);
//   }
//   menu();
// };

// // Hàm menu cho người dùng chọn thao tác
// const menu = () => {
//   console.log("Object:");
//   console.log("1. Thêm thuộc tính");
//   console.log("2. Sửa thuộc tính");
//   console.log("3. Xóa thuộc tính");
//   console.log("4. Kiểm tra dữ liệu");
//   console.log("5. Thoát");
//   rl.question("Chọn thao tác: ", (luaChon) => {
//     switch (luaChon) {
//       case "1":
//         themObject();
//         break;
//       case "2":
//         suaObject();
//         break;
//       case "3":
//         xoaObject();
//         break;
//       case "4":
//         kiemTraDuLieu();
//         break;
//       case "5":
//         rl.close();
//         break;
//       default:
//         console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
//         menu();
//         break;
//     }
//   });
// };
// menu();

// let arr = [];

// const themPhanTu = () => {
//   rl.question("Nhập giá trị mới: ", (giaTri) => {
//     arr.push(giaTri);
//     console.log("Đã thêm phần tử mới:", arr);
//     menuArray();
//   });
// };

// const suaPhanTu = () => {
//   rl.question("Nhập vị trí cần sửa: ", (viTri) => {
//     if (viTri >= 0 && viTri < arr.length) {
//       rl.question("Nhập giá trị mới: ", (giaTriMoi) => {
//         arr[viTri] = giaTriMoi;
//         console.log("Đã sửa phần tử thành:", arr);
//       });
//     } else {
//       console.log("Vị trí không hợp lệ.");
//     }
//     menuArray();
//   });
// };

// const xoaPhanTu = () => {
//   rl.question("Nhập vị trí cần xoá : ", (viTri) => {
//     if (viTri >= 0 && viTri < arr.length) {
//       arr.splice(viTri, 1);
//       console.log("Đã xoá phần tử ở vị trí", viTri, ":", arr);
//     } else {
//       console.log("Vị trí không hợp lệ.");
//     }
//     menuArray();
//   });
// };

// const kiemTraArray = () => {
//   if (arr.length === 0) {
//     console.log("Mảng không có phần tử.");
//   } else {
//     console.log("Mảng có phần tử:", arr);
//   }
//   menuArray();
// };

// const menuArray = () => {
//   console.log("Array:");
//   console.log("1. Thêm phần tử");
//   console.log("2. Sửa phần tử");
//   console.log("3. Xoá phần tử");
//   console.log("4. Kiểm tra Array");
//   console.log("5. Sắp xếp Array");
//   console.log("5. Thoát");
//   rl.question("Chọn thao tác: ", (luaChon) => {
//     switch (luaChon) {
//       case "1":
//         themPhanTu();
//         break;
//       case "2":
//         suaPhanTu();
//         break;
//       case "3":
//         xoaPhanTu();
//         break;
//       case "4":
//         kiemTraArray();
//         break;
//       case "5":
//         sapxepArray();
//         break;
//       case "5":
//         rl.close();
//         break;
//       default:
//         console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
//         menuArray();
//         break;
//     }
//   });
// };

// menuArray();

// vd: arr = [2, 3, 6, 5, 9];
// sonhonhat = arr[0];
// so sánnh từng phần tử của array với biến sohonhat nếu phần tử lớn hơn sonhonhat thì giữ nguyên và nếu phần tử nhỏ hơn sonhonhat thì sonhonhat = phần tử đấy, sau đấy ta đổi array[0] với sonhonhat

let arr = [9, 3, 6, 5, 2];

function sapXepTangDan(arr) {
  let arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    for (let j = i + 1; j < arrLength; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

let arrDaSapXep = sapXepTangDan(arr);
console.log(arrDaSapXep);
