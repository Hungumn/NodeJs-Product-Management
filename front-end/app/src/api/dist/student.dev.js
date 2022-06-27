"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductDetail = exports.getProductList = void 0;

// call api
var getProductList = function getProductList() {
  var res;
  return regeneratorRuntime.async(function getProductList$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios({
            method: "GET",
            url: "http://localhost:4000/products"
          }));

        case 2:
          res = _context.sent;
          return _context.abrupt("return", res.data);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getProductList = getProductList;

var getProductDetail = function getProductDetail(id) {
  var res;
  return regeneratorRuntime.async(function getProductDetail$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(axios({
            method: "GET",
            url: "http://localhost:4000/products/".concat(id)
          }));

        case 2:
          res = _context2.sent;
          return _context2.abrupt("return", res.data);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.getProductDetail = getProductDetail;

var createProduct = function createProduct(student) {
  var res;
  return regeneratorRuntime.async(function createProduct$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(axios({
            method: "POST",
            url: "http://localhost:4000/products",
            data: student
          }));

        case 2:
          res = _context3.sent;
          return _context3.abrupt("return", res.data);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.createProduct = createProduct;

var updateProduct = function updateProduct(id, student) {
  var res;
  return regeneratorRuntime.async(function updateProduct$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(axios({
            method: "PUT",
            url: "http://localhost:4000/products/".concat(id),
            data: student
          }));

        case 2:
          res = _context4.sent;
          return _context4.abrupt("return", res.data);

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.updateProduct = updateProduct;

var deleteProduct = function deleteProduct(id) {
  var res;
  return regeneratorRuntime.async(function deleteProduct$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(axios({
            method: "DELETE",
            url: "http://localhost:4000/products/".concat(id)
          }));

        case 2:
          res = _context5.sent;
          return _context5.abrupt("return", res.data);

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
};

exports.deleteProduct = deleteProduct;