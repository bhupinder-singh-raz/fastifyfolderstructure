const Registeruser = require("./../model/model");

exports.getUser = (req, reply) => {
  Registeruser.find({}, (err, data) => {
    if (err)
      reply.code(400).send({ msg: "server side error" });
    else
      reply.code(200).send({ msg: data });
  })
}


exports.addUser = (req, reply) => {
  Registeruser.create(req.body, (err, data) => {
    if (err)
      reply.code(400).send({ msg: "server side error" });
    else
      reply.code(200).send({ msg: "saved successfully" });
  })
}