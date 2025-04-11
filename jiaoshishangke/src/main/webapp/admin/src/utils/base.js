const base = {
    get() {
        return {
            url : "http://localhost:8080/jiaoshishangke/",
            name: "jiaoshishangke",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/jiaoshishangke/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "教师上课系统"
        } 
    }
}
export default base
