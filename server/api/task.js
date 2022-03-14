exports.findAll = function(req, res) {
    res.send([{name:'name1'}, {name:'name2'}, {name:'name3'}]);
};

exports.findById = function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
};
