const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const Users = require('./models/Users');
const morgan = require('morgan');
const app = express();
app.use(express.json());
const port = 3000;

//Require file routes được export ra
/************************************** 
*                                     *
* Sử dụng các hàm và tinh chỉnh       *
*                                     *
***************************************/

//tạo được dẫn public truy cập bằng :http://localhost:3000/Anhchinh/ten_anh.png
app.use(express.static(path.join(__dirname, 'public')));

//tạo được dẫn public truy cập bằng :http://localhost:3000/script/tên_script.js
app.use(express.static(path.join(__dirname, 'view')));

//Setup một số thư viện hỗ trợ
app.use(morgan('combined'));

app.engine('handlebars', handlebars());

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'view'));

//user router here
const router = express.Router();

//Api đăng nhập
router.use("/users", require('./routes/users/users.route.js'));

//Api sản phẩm
// router.use("/product", require('./routes/products/product.route.js'))


// Trỏ tới file dashboard
router.use("/", require('./controller/AddNewUser/addNewUser.route.js'));

router.use("/", require('./controller/AllUsersList/allUsersList.route.js'));

router.use("/", require('./controller/Home/home.route.js'));

app.use(router);


/** KẾT THÚC TEST */
/******************************** 
*                               *
* Hàm nghe Users ấn vào trang   *
*                               *
*********************************/ 
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

