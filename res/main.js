function initMap() {
  const setPoint = { lat: 37.564426, lng: 127.079455 }
  // const company = { lat: , lng: }
  const house = { lat: 37.564426, lng: 127.079455 }
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: setPoint,
    mapId: "8e4c331777bbdf43",
  });

  // new google.maps.Marker({
  //   position: company,
  //   map,
  //   title: "",
  //   icon: { 
  //     url: "img/icon_company.png",
  //     scaledSize: new google.maps.Size(36, 36),
  //   }
  // });

  new google.maps.Marker({
    position: house,
    map,
    title: "우리집(자취방)",
    icon: {
      url: "img/icon_house.png",
      scaledSize: new google.maps.Size(36, 36),
    }
  });
  
}

window.initMap = initMap;