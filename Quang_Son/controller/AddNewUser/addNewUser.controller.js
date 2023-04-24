
//Phương thức get ra giao diện login
exports.addNewUser = async (req, res ) => {
    var headTitle = "Thêm thành viên"
    var fileCSS = "/css/addNewUser.css"
    var currentPage = "AddNewUser"
    res.render('./AddNewUser/addNewUser.handlebars', { headTitle, fileCSS, currentPage });
}
