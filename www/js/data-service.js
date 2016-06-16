employeeService = (function () {

    var baseURL = "";

    // The public API
    return {
        findById: function(id) {
            return $.ajax(baseURL + "/businessPage/" + id);
        },
        findByName: function(searchKey, category) {
            return $.ajax({url: baseURL + "/employees", data: {name: searchKey, category: category}});
        },
        getCategories: function() {
            return $.ajax(baseURL + "/categories");
        },
        findAll: function(category) {
            return $.ajax({url: baseURL + '/employees', data: { category: category}});
        }
    };

}());