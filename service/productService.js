const url = require("url");
const connection = require("../model/connection");


class ProductService {
    findAll() {
        let connect = connection.getConnection();
        return new Promise((resolve, reject) => {
            connect.query('select * from Product', (err, products) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(products);
                }
            })
        })
    }

    save(product) {
        let connect = connection.getConnection();
        return new Promise((resolve, reject) => {
            connect.query(`insert into product(price, name, img, description)
                           values (${product.price}, '${product.name}', '111.jpg', '${product.description}
                                   ')`, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve('Tao thanh cong!')
                }
            })
        })


    }

    edit(product, id) {
        let connect = connection.getConnection();
        let ss = `UPDATE product SET name = '${product.name}', price = ${product.price}, description = '${product.description}' WHERE id = ${id}`;
        return new Promise((resolve, reject) => {
            connect.query(ss, (err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve('Success');
                }
            })
        })
    }

    // static findByNameContaining(name) {
    //     let connect = connection.getConnection();
    //     return new Promise((resolve, reject) => {
    //         connect.query(`SELECT * FROM my_database1.product WHERE name LIKE '%${name}%'`, (err, products) => {
    //             if (err) {
    //                 reject(err);
    //             }
    //             else {
    //                 resolve(products);
    //             }
    //         })
    //     })
    // }

    remove(id) {
        let connect = connection.getConnection();
        let sql = `delete
                   from manager.product
                   where id = ${id}`;
        return new Promise((resolve, reject) => {
            connect.query(sql, (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve('Thành công')
                }
            })
        })
    }
}

const productService = new ProductService();
module.exports = productService;