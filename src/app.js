document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "Brown Sugar Latte",
        img: "brown sugar latte.jpg",
        price: 17000,
        description: "Latte creamy dengan manis brown sugar yang lembut.",
      },
      {
        id: 2,
        name: "Brown Sugar Latte 1lt",
        img: "brown sugar latte 1lt.jpg",
        price: 65000,
        description: "Brown Sugar Latte dalam ukuran 1 liter untuk stok di rumah.",
      },
      {
        id: 3,
        name: "Coconut Milk Latte",
        img: "coconut milk latte.jpg",
        price: 17000,
        description: "Perpaduan kopi susu dan rasa kelapa yang ringan dan nikmat.",
      },
      {
        id: 4,
        name: "Coconut Milk Latte 1lt",
        img: "coconut latte 1lt.jpg",
        price: 65000,
        description: "Coconut Milk Latte ukuran 1 liter untuk dinikmati lebih lama.",
      },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // cek ada barang di cart
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // jika belum ada / cart kosong
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // jika sudah ada, cek barang tsb beda atau sama
        this.items = this.items.map((item) => {
          // jika barang berbeda
          if (item.id !== newItem.id) {
            return item;
          } else {
            // jika baran sudah ada, tambah quantity dan totalnya
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      // ambil item yang ingin diremove berdasrkan id
      const cartItem = this.items.find((item) => item.id === id);

      // jika item lebih dari 1
      if (cartItem.quantity > 1) {
        // telusuri 1 per 1
        this.items = this.items.map((item) => {
          // jika bukan barang yang diklik
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        // jika barang sisa 1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// convert ke rupuah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

const formatMessage = (obj) => {
  return `Data Customer
  Nama: ${obj.name}
  Email: ${obj.email}
  No Tlp: ${obj.phone}
  Address: ${obj.address}
  
  Data Pesanan
  ${JSON.parse(obj.items)
    .map((item) => `${item.name} (${item.quantity} x ${rupiah(item.total)})`)
    .join("\n")}
  
  TOTAL: ${rupiah(obj.total)}
  TERIMAKASIH.`;
};

document.addEventListener("DOMContentLoaded", () => {
  const checkoutButton = document.querySelector(".checkout-button");
  const form = document.querySelector("#checkoutForm");

  if (!checkoutButton || !form) {
    return;
  }

  checkoutButton.disabled = true;

  form.addEventListener("input", () => {
    const isValid = form.checkValidity();
    checkoutButton.disabled = !isValid;
    checkoutButton.classList.toggle("disabled", !isValid);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const objData = Object.fromEntries(new URLSearchParams(formData));
    const message = formatMessage(objData);
    window.open("https://wa.me/6285756953895?text=" + encodeURIComponent(message), "_blank");
  });
});
