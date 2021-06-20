const rewire = require("rewire");
const index = rewire("./index");
const HocVien = index.__get__("HocVien");
