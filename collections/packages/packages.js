// Limit size are in MB.
let basicPackageMonthlyPrice = 49;
let basicPackageMonthlyImages = 1e6;
let basicImagePrice = basicPackageMonthlyPrice / basicPackageMonthlyImages;
let basicPackageMonthlyStorageInGb = 15;
let kbInGb = 1e6;
let basicImageAverageSizeInKb = basicPackageMonthlyImages / (basicPackageMonthlyStorageInGb * kbInGb);
let basicImagePriceByKb = basicImagePrice * basicImageAverageSizeInKb;
let basicImagePriceByMb = basicImagePriceByKb * 1e3;
let earningMargin = 5;

class Package {
  constructor ( name, id ) {
    this.name = name;
    this.id = id;
    this.scopes = [];
    this.limits = {};
  }

  setFee () {
    let fee = ( basicImagePriceByMb * this.limits.images ) * earningMargin;

    return this.fee = fee;
  }

  setStorage () {
    let storage = {};
    storage.mb = ( this.limits.images * this.limits.size ) * 2;
    storage.gb = storage.mb / 1000;
    storage.useMb = storage.mb > 1000 ? false : true;

    return this.storage = storage;
  }
}

let free = new Package( 'Free', 'free' );
free.limits = { images: 10, size: 1 };
free.scopes.push( 'public' );
free.description = `One free image per day. No hidden fees.`;

let personal = new Package( 'Personal', 'personal' );
personal.limits = { images: 100, size: 5 };
personal.scopes.push( 'public' );
personal.scopes.push( 'private' );
personal.description = `Up to ${personal.limits.images} images per day. Public and private.`;

let pro = new Package( 'Professional', 'pro' );
pro.limits = { images: 1000, size: 10 };
pro.scopes.push( 'public' );
pro.scopes.push( 'private' );
pro.description = `Up to ${pro.limits.images} images per day. Public and private.`;

let enterprise = new Package( 'Enterprise', 'enterprise' );
enterprise.limits = { images: 10000, size: 25 };
enterprise.scopes.push( 'public' );
enterprise.scopes.push( 'private' );
enterprise.description = `Up to ${enterprise.limits.images} images per day. Public and private.`;

Packages = [ free, personal, pro, enterprise ];

for (let p of Packages) {
  p.setFee();
  p.setStorage();
}

module.exports = {
  Packages
}
