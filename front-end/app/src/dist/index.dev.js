"use strict";

var _student = require("./api/student.js");

var store = {
  productDetail: null
};

var renderProductList = function renderProductList() {
  var list, contentHtml;
  return regeneratorRuntime.async(function renderProductList$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _student.getProductList)());

        case 2:
          list = _context.sent;
          contentHtml = list.reverse().map(function (item, index) {
            return "<tr>\n    <th scope=\"row\">".concat(index += 1, "</th>\n    <td>").concat(item.fullName, "</td>\n    <td>").concat(item.amount, "</td>\n    <td>").concat(item.price, "</td>\n    <td>").concat(item.sale, "</td>\n    <td>\n      <button type=\"button\" class=\"btn btn-danger\" onclick=\"handleDelete('").concat(item.id, "')\">Delete</button>\n      <button type=\"button\" class=\"btn btn-warning\" data-toggle=\"modal\" data-target=\"#productModal\" onclick=\"handleEdit('").concat(item.id, "')\">\n        Edit\n      </button>\n    </td>\n  </tr>");
          }).reduce(function (sumString, item) {
            return sumString += item;
          }, "");
          document.getElementById("tbody").innerHTML = contentHtml;

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

renderProductList();

var handleEdit = function handleEdit(id) {
  var product;
  return regeneratorRuntime.async(function handleEdit$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          document.getElementById("title-model").innerHTML = "Update Information Product";
          document.getElementById("addProduct").style["display"] = "none";
          document.getElementById("updateProduct").style["display"] = "block";
          _context2.next = 5;
          return regeneratorRuntime.awrap((0, _student.getProductDetail)(id));

        case 5:
          product = _context2.sent;
          document.getElementById("name").value = product.fullName;
          document.getElementById("sale").value = product.sale;
          document.getElementById("amount").value = product.amount;
          document.getElementById("price").value = product.price;
          store.productDetail = product;

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  });
};

window.handleEdit = handleEdit;
document.getElementById("btnPopupModalAdd").addEventListener("click", function () {
  document.getElementById("title-model").innerHTML = "Create Product";
  document.getElementById("addProduct").style["display"] = "block";
  document.getElementById("updateProduct").style["display"] = "none";
  document.getElementById("name").value = "";
  document.getElementById("sale").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("price").value = "";
});
document.getElementById("addProduct").addEventListener("click", function _callee() {
  var fullName, sale, amount, price, product;
  return regeneratorRuntime.async(function _callee$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          fullName = document.getElementById("name").value;
          sale = +document.getElementById("sale").value;
          amount = +document.getElementById("amount").value;
          price = +document.getElementById("price").value;
          product = {
            fullName: fullName,
            amount: amount,
            price: price,
            sale: sale
          };
          _context3.next = 7;
          return regeneratorRuntime.awrap((0, _student.createProduct)(product));

        case 7:
          _context3.next = 9;
          return regeneratorRuntime.awrap(renderProductList());

        case 9:
          $("#modalMessage").modal("show");
          $("#productModal").modal("hide");

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  });
});
document.getElementById("updateProduct").addEventListener("click", function _callee2() {
  var fullName, sale, amount, price, id, product;
  return regeneratorRuntime.async(function _callee2$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          fullName = document.getElementById("name").value;
          sale = +document.getElementById("sale").value;
          amount = +document.getElementById("amount").value;
          price = +document.getElementById("price").value;
          id = store.productDetail.id;
          product = {
            fullName: fullName,
            amount: amount,
            price: price,
            sale: sale
          };
          _context4.next = 8;
          return regeneratorRuntime.awrap((0, _student.updateProduct)(id, product));

        case 8:
          _context4.next = 10;
          return regeneratorRuntime.awrap(renderProductList());

        case 10:
          $("#modalMessage").modal("show");
          $("#productModal").modal("hide");

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  });
});

var handleDelete = function handleDelete(id) {
  return regeneratorRuntime.async(function handleDelete$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap((0, _student.deleteProduct)(id));

        case 2:
          _context5.next = 4;
          return regeneratorRuntime.awrap(renderProductList());

        case 4:
          $("#modalMessage").modal("show");

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
};

window.handleDelete = handleDelete;