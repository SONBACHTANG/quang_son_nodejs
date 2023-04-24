
//Phương thức get ra giao diện login
exports.get = async (req, res ) => {
    var headTitle = "Home"
    var fileCSS = "/css/allUserList.css"
    var currentPage = "Home"
    res.render('./AllUsersList/allUsersList.handlebars', { headTitle, fileCSS, currentPage });
}
