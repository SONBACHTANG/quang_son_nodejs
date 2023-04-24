
//Phương thức get ra giao diện login
exports.get = async (req, res ) => {
    var headTitle = "Danh sách thành viên"
    var fileCSS = "/css/allUserList.css"
    var currentPage = "AllUsersList"
    res.render('./AllUsersList/allUsersList.handlebars', { headTitle, fileCSS, currentPage });
}
