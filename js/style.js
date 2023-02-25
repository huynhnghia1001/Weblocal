

var nf = new Intl.NumberFormat();

sanPham.forEach(element => {
    var html =
        '<div class="cartegory-right-content-item">' +
        '<img src="' + element.thumb + '" alt="">' +
        ' <h1> '+ element.name +'</h1>' +
        // '<strong> ' + nf.format(element.cash ) + ' ₫</strong>' +
        '<div><button data-id="' + element.id + '" onclick="addcart(this);"> '+ nf.format(element.cash ) +' </button></div>' +
        '</div>' +
        '</div>';

    document.getElementById('sanpham-list').innerHTML += html;
});
function addcart(obj) {
    let id = obj.getAttribute('data-id');
    let cart = JSON.stringify(sanPham[id - 1]);
    var cart_data_old = localStorage.getItem('cart');

    if (cart_data_old == null) cart_data_old = "";

    let check_product = cart_data_old.search(id + ',');
    if (check_product != -1) {
        alert("Sản phẩm đã tồn tại trong giỏ hàng");
        return;
    }
    if (cart_data_old == "") {
        data = id + "," + 1;
        cart_data_old = "";
    } else

        data = "|" + id + "," + 1;

    alert("Thêm vào giỏ hàng thành công!!!");
    localStorage.setItem('cart', cart_data_old + data);
    update_count();
}
function update_count(){
    var data_cart = localStorage.getItem('cart');
    if(data_cart != "" && data_cart != null){
        var product = data_cart.split("|");
        count = product.length;
    } else {
        count = 0;
    }
    document.getElementById('count_cart').innerText = count;
}
update_count();