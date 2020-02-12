class Voiture {
  vitesseMax = 0;
  couleur = '';
  marque = '';

  constructor(marque = '', vitesseMax = 0, couleur = ''){
    this.vitesseMax = vitesseMax;
    this.couleur = couleur;
    this.marque = marque;
    console.log(`Nouvelle voiture ${this.marque} de couleur ${this.couleur} créée. Elle va jusqu'à ${this.vitesseMax}km/h.`)
  }

  accelerer() {
    console.log('La voiture accélère !!');
    console.warn(`Attention : vitesse limitée à ${this.vitesseMax}km/h`);
  }
  freiner() {
    console.log('La voiture freine...');
  }
}


let voiture = new Voiture('bmw', 280, 'argent');
voiture.accelerer();
