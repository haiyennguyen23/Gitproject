class CosmeticManagement {
    constructor(arr) {
        this.Cosmetic= arr;
    }
    showList() {
        let table = ' <tr>\n' +
            '    <th style="font-size: 40px" colspan="7">Danh sách sản phẩm</th>\n' +
            '  </tr>\n' +
            '  <tr>\n' +
            '    <th>Mã sản phẩm</th>\n' +
            '    <th>Tên sản phẩm</th>\n' +
            '    <th>Hạn sử dụng</th>\n' +
            '    <th>Giá thành</th>\n' +
            '    <th>Số lượng tồn kho</th>\n' +
            '    <th>Ảnh</th>\n' +
            '    <th>Tùy chọn</th>\n' +
            '\n' +
            '  </tr>';
        for (let i = 0; i < this.Cosmetic.length; i++) {
            table += '<tr>';
            table += '<td>';
            table += this.Cosmetic[i].id;
            table += '</td>';

            table += '<td>';
            table += this.Cosmetic[i].productname;
            table += '</td>';

            table += '<td>';
            table += this.Cosmetic[i].date;
            table += '</td>';

            table += '<td>';
            table += this.Cosmetic[i].price;
            table += '</td>';

            table += '<td>';
            table += this.Cosmetic[i].warehouse;
            table += '</td>';

            table += '<td>';
            table += '<img width="100px" height="100px" src=" '+this.Cosmetic[i].img+'">';
            table += '</td>';

            table += '<td>' +
                '<button style="background-color: red; color: white "  type="button" onclick="deleteCosmetic('+i+')">Delete</button> ' +
                ' <button  style="background-color: orange ; color: white" type="button" onclick="editCosmetic('+i+')">Edit</button>' +
                '</td>';

            table += '</tr>';
        }
        document.getElementById('listofgoods').innerHTML = table;
    }

    addCosmetic(cosmetic) {
        this.Cosmetic.push(cosmetic);
    }

    delete(id) {
        this.Cosmetic.splice(id, 1);
    }

    findCosmeticById(id){
        return this.Cosmetic[id];
    }

    edit(i, id, productname, date, price, warehouse, img){
        this.Cosmetic[i].edit(number, productname, date, price, warehouse, img);
    }

}
