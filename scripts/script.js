class Voiture {
  vitesseMax = 0;
  couleur = '';
  marque = '';
  quantiteCarburant = 0;
  volumeReservoir = 0;

  constructor(marque = '', vitesseMax = 0, qteCarburant = 0, volReservoir = 0, couleur = ''){
    this.vitesseMax = vitesseMax;
    this.couleur = couleur;
    this.marque = marque
    this.quantiteCarburant = qteCarburant;
    this.volumeReservoir = volReservoir;

    this.info();

  }

  /*faireLePlein2(){
    while (this.quantiteCarburant < this.volumeReservoir){
      this.rajouteCarburant();
    }
  }*/// fonction plus rapide utilisant la function rajoutecarburant() deja créer

  faireLePlein(){

    if (this.quantiteCarburant < this.volumeReservoir) {

      let qtePlein = this.volumeReservoir - this.quantiteCarburant
      console.log(`OK, on peux rajouter ${qtePlein}L dans ce véhicule`);
      this.quantiteCarburant = qtePlein + this.quantiteCarburant

    } else {
      console.warn('le réservoir du véhicule est deja plein !');
    }

  }

  rajouteCarburant(qte = 1){
  if(qte + this.quantiteCarburant > this.volumeReservoir){
    console.error(`Impossible de mettre ${qte}L dans le réservoir.`);
  } else {
    console.warn(`OK, on peux rajouter ${qte}L dans ce véhicule`);
    this.quantiteCarburant = this.quantiteCarburant + qte;
  }
  console.log(`Quantité de carburant actuelle : ${this.quantiteCarburant}/${this.volumeReservoir}L`);
  console.log(`Volume disponible : ${this.volumeReservoir - this.quantiteCarburant}L`);
  }

  info() {

    console.log(`Couleur : ${this.couleur}`);
    console.log(`Vitesse max : ${this.vitesseMax}km/h`);
    console.log(`Volume du réservoir : ${this.volumeReservoir}L`);
    console.log(`Quantité de carburant : ${this.quantiteCarburant}/${this.volumeReservoir}L`);
    console.log("\n");
  }
  accelerer() {
    console.log('La voiture accélère !!');
  }
  freiner() {
    console.log('La voiture freine...');
  }
}

let voiture1 = new Voiture('bmw', 320, 20, 120, 'rouge');
let voiture2 = new Voiture('bmw', 280, 80, 80, 'bleu');
let voiture3 = new Voiture('bmw', 220, 10, 30, 'argent');

console.log('qte de carburant : ' + voiture1.quantiteCarburant + ' L');
voiture1.faireLePlein();
voiture1.info();
console.log('qte de carburant : ' + voiture2.quantiteCarburant + ' L');
voiture2.faireLePlein();
voiture2.info();
console.log('qte de carburant : ' + voiture3.quantiteCarburant + ' L');
voiture3.faireLePlein();
voiture3.info();


/*console.log("\n");
console.log('qte de carburant : ' + voiture2.quantiteCarburant + ' L');
voiture2.rajouteCarburant(15);
console.log("\n");
console.log('qte de carburant : ' + voiture3.quantiteCarburant + ' L');
voiture3.rajouteCarburant(50);
console.log("\n");*/
