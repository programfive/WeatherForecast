/* eslint-disable n/no-callback-literal */

export function geolocation(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const {
        latitude,
        longitude
      } = position.coords || {};
      callback({
        lat: latitude,
        lon: longitude
      });
    }, function (error) {
      console.log("Error getting location: " + error.message);
      callback({
        lat: 51.5073219,
        lon: -0.1276474
      });
    });
  } else {
    callback({
      lat: 51.5073219,
      lon: -0.1276474
    });
  }
}