let isActiveLink = (navLink) => {
  let reg = new RegExp('^/' + navLink);
  const isActive = reg.test(Iron.Location.get().path);
  // console.log(navLink);
  if(isActive) {
    return true;
  } else {
    return false;
  }
}

Modules.client.isActiveLink = isActiveLink;
