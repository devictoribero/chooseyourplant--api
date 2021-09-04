export class Coordinates {
  constructor({ lat, lng }) {
    this.latitude = lat;
    this.longitude = lng;
  }

  getLatLng() {
    return {
      latitude: this.latitude,
      longitude: this.longitude,
    };
  }
}
