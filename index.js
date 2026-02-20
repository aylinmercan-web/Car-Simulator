function carSimulator(marka, model, kilometre, fiyat) {
  // 1.bir araba nesnesi oluştur
  const araba = {
    marka: marka,
    model: model,
    kilometre: kilometre,
    fiyat: fiyat,
    depo: 50,
    getPrice: function () {
      return `Arabanın güncel piyasa değeri ${this.fiyat} TL'dir.`;
    },
    refuel: function (miktar) {
      this.depo += miktar;
      if (this.depo > 100) {
        this.depo = 100;
      }
      return `Depo %${this.depo} doludur.`;
    },
    drive: function (km) {
      this.kilometre += km;

      let yuzluk = Math.floor(km / 100);
      this.depo -= yuzluk * 5;
      this.fiyat -= yuzluk * 50;
      return `Araba ${this.kilometre} km'dedir.`;
    },
  };
  // marka, model, fiyat, kilometre parametleri ekle
  //depo başlangıçta 50 olsun

  //2.getPrice metodu ekle ve arababın fiyatını mesaj olarak döndür

  //3. refuel metodu ekle
  // parametre olarak eklenecek yakıtı ekle
  //depo 100ü geçmesin
  //depo yüzdesini mesaj olarak döndür

  //4.drive metodu ekle
  // parametre olarak gidilecek km
  //kilometreyi artır
  // her 100 kmde 5 litre yakıt azalt, fiyatı 50 tl düşür
  // güncel km bilgisini msj olarak döndür
  //en son arabayı return et
  return araba;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = carSimulator;
